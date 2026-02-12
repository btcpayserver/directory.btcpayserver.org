#!/usr/bin/env node

import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createInterface } from "node:readline/promises";

// ── Types ──────────────────────────────────────────────────────────

interface Merchant {
  name: string;
  url: string;
  description: string;
  type: string;
  subType?: string;
  twitter?: string;
  github?: string;
  onionUrl?: string;
}

type LinkStatus = "alive" | "warning" | "dead";

interface CheckResult {
  merchant: Merchant;
  status: LinkStatus;
  statusCode?: number;
  reason: string;
  finalUrl?: string;
  responseTime: number;
}

// ── ANSI Colors ────────────────────────────────────────────────────

const c = {
  green: (s: string) => `\x1b[32m${s}\x1b[0m`,
  yellow: (s: string) => `\x1b[33m${s}\x1b[0m`,
  red: (s: string) => `\x1b[31m${s}\x1b[0m`,
  bold: (s: string) => `\x1b[1m${s}\x1b[0m`,
  dim: (s: string) => `\x1b[2m${s}\x1b[0m`,
  cyan: (s: string) => `\x1b[36m${s}\x1b[0m`,
};

// ── CLI Args ───────────────────────────────────────────────────────

const args = process.argv.slice(2);
const verbose = args.includes("--verbose") || args.includes("-v");
const noInteractive = args.includes("--no-interactive");
const timeoutArg = args.find((a) => a.startsWith("--timeout="));
const TIMEOUT = timeoutArg ? parseInt(timeoutArg.split("=")[1], 10) : 15_000;
const concurrencyArg = args.find((a) => a.startsWith("--concurrency="));
const CONCURRENCY = concurrencyArg
  ? parseInt(concurrencyArg.split("=")[1], 10)
  : 5;
const MAX_RETRIES = 2;
const RETRY_DELAY = 3000;

// ── Paths ──────────────────────────────────────────────────────────

const __dirname = dirname(fileURLToPath(import.meta.url));
const MERCHANTS_PATH = resolve(__dirname, "../src/data/merchants.json");

// ── Concurrency Pool ───────────────────────────────────────────────

function createPool(concurrency: number) {
  let active = 0;
  const queue: (() => void)[] = [];

  async function run<T>(fn: () => Promise<T>): Promise<T> {
    if (active >= concurrency) {
      await new Promise<void>((resolve) => queue.push(resolve));
    }
    active++;
    try {
      return await fn();
    } finally {
      active--;
      if (queue.length > 0) queue.shift()!();
    }
  }

  return { run };
}

// ── Helpers ────────────────────────────────────────────────────────

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

// Mimic a real browser to avoid bot-detection false positives
const USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

// ── Fetch with timeout ─────────────────────────────────────────────

interface FetchResult {
  statusCode?: number;
  error?: string;
  finalUrl?: string;
  responseTime: number;
}

async function fetchUrl(
  url: string,
  method: "HEAD" | "GET" = "GET"
): Promise<FetchResult> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT);
  const start = Date.now();

  try {
    const response = await fetch(url, {
      method,
      signal: controller.signal,
      headers: {
        "User-Agent": USER_AGENT,
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
      },
      redirect: "follow",
    });
    clearTimeout(timer);
    return {
      statusCode: response.status,
      finalUrl: response.url !== url ? response.url : undefined,
      responseTime: Date.now() - start,
    };
  } catch (err: unknown) {
    clearTimeout(timer);
    const responseTime = Date.now() - start;
    const error = err instanceof Error ? err : new Error(String(err));

    // Node's native fetch wraps errors in TypeError with cause — check both
    const msg = error.message;
    const causeMsg =
      error.cause instanceof Error ? error.cause.message : String(error.cause ?? "");
    const causeCode =
      error.cause instanceof Error ? (error.cause as NodeJS.ErrnoException).code ?? "" : "";
    const fullMsg = `${msg} ${causeMsg} ${causeCode}`;

    if (error.name === "AbortError") {
      return { error: `Timeout (${TIMEOUT / 1000}s)`, responseTime };
    }
    if (fullMsg.includes("ENOTFOUND") || fullMsg.includes("getaddrinfo")) {
      return { error: "DNS lookup failed", responseTime };
    }
    if (fullMsg.includes("ECONNREFUSED")) {
      return { error: "Connection refused", responseTime };
    }
    if (fullMsg.includes("ECONNRESET")) {
      return { error: "Connection reset", responseTime };
    }
    if (
      fullMsg.includes("CERT_") ||
      fullMsg.includes("SSL") ||
      fullMsg.includes("certificate")
    ) {
      return { error: "SSL certificate error", responseTime };
    }
    if (
      fullMsg.includes("UND_ERR_CONNECT_TIMEOUT") ||
      fullMsg.includes("Connect Timeout")
    ) {
      return { error: "Connect timeout", responseTime };
    }
    return { error: error.message, responseTime };
  }
}

// ── Classify result ────────────────────────────────────────────────

function classify(merchant: Merchant, result: FetchResult): CheckResult {
  const base = {
    merchant,
    finalUrl: result.finalUrl,
    responseTime: result.responseTime,
    statusCode: result.statusCode,
  };

  if (result.error) {
    // SSL errors → server exists but cert is broken → warning (no retry)
    if (result.error === "SSL certificate error") {
      return { ...base, status: "warning", reason: result.error };
    }
    // Connect timeout → server's IP resolves but TCP/TLS connect is blocked
    // (common anti-bot measure, e.g. Cloudflare) → warning (no retry)
    if (result.error === "Connect timeout") {
      return { ...base, status: "warning", reason: result.error };
    }
    // Everything else (DNS failure, abort timeout, connection refused, reset)
    // → dead. The retry loop in checkMerchant will retry these; if they
    // persist after all attempts, the site is genuinely unreachable.
    return { ...base, status: "dead", reason: result.error };
  }

  const code = result.statusCode!;

  // 2xx = alive
  if (code >= 200 && code < 300) {
    return { ...base, status: "alive", reason: "OK" };
  }

  // 3xx that somehow didn't redirect (shouldn't happen with redirect: follow)
  if (code >= 300 && code < 400) {
    return { ...base, status: "alive", reason: `Redirect (${code})` };
  }

  // Clearly dead: 404 Not Found, 410 Gone
  if (code === 404 || code === 410) {
    return { ...base, status: "dead", reason: `HTTP ${code}` };
  }

  // Everything else is a warning — could be bot protection, rate limiting,
  // temporary issues, Cloudflare challenges (403, 429, 5xx, 520-530, etc.)
  return { ...base, status: "warning", reason: `HTTP ${code}` };
}

// ── Check a single merchant (with retries) ─────────────────────────

async function checkMerchant(merchant: Merchant): Promise<CheckResult> {
  let lastResult: CheckResult | null = null;

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    if (attempt > 0) await sleep(RETRY_DELAY);

    const result = await fetchUrl(merchant.url, "GET");
    lastResult = classify(merchant, result);

    // If alive or just a warning, stop retrying
    if (lastResult.status !== "dead") {
      return lastResult;
    }
  }

  return lastResult!;
}

// ── Progress display ───────────────────────────────────────────────

function printProgress(current: number, total: number, name: string) {
  const padded = `[${current}/${total}]`.padEnd(10);
  const truncated = name.length > 40 ? name.slice(0, 37) + "..." : name;
  process.stdout.write(
    `\r${c.dim("Checking...")} ${c.cyan(padded)} ${truncated}${"".padEnd(20)}`
  );
}

// ── Report printing ────────────────────────────────────────────────

function printReport(
  results: CheckResult[],
  skipped: number,
  durationMs: number
) {
  const dead = results.filter((r) => r.status === "dead");
  const warnings = results.filter((r) => r.status === "warning");
  const alive = results.filter((r) => r.status === "alive");

  // Clear progress line
  process.stdout.write("\r" + "".padEnd(80) + "\r");

  console.log("");
  console.log(c.bold("=== BTCPay Server Directory Link Check ==="));
  console.log(
    `Checked ${results.length} URLs${skipped ? ` (skipped ${skipped} .onion)` : ""}`
  );
  console.log(`Duration: ${(durationMs / 1000).toFixed(1)}s`);
  console.log("");

  if (dead.length > 0) {
    console.log(c.red(c.bold(`--- DEAD (${dead.length}) ---`)));
    console.log(c.dim("  Unreachable after 3 attempts — DNS gone, refused, timeout, or HTTP 404/410"));
    console.log("");
    for (const r of dead) {
      console.log(`  ${c.red("❌")} ${c.bold(r.merchant.name)}`);
      console.log(`     ${c.dim(r.merchant.url)}`);
      console.log(
        `     ${r.reason}${r.statusCode ? ` [${r.statusCode}]` : ""} ${c.dim(`(${r.responseTime}ms)`)}`
      );
      console.log("");
    }
  }

  if (warnings.length > 0) {
    console.log(c.yellow(c.bold(`--- WARNINGS (${warnings.length}) ---`)));
    console.log(c.dim("  May be alive but blocking bots — verify manually"));
    console.log("");
    for (const r of warnings) {
      console.log(`  ${c.yellow("⚠️ ")} ${c.bold(r.merchant.name)}`);
      console.log(`     ${c.dim(r.merchant.url)}`);
      let detail = r.reason;
      if (r.statusCode) detail += ` [${r.statusCode}]`;
      if (r.finalUrl) detail += ` → ${r.finalUrl}`;
      console.log(`     ${detail} ${c.dim(`(${r.responseTime}ms)`)}`);
      console.log("");
    }
  }

  if (verbose && alive.length > 0) {
    console.log(c.green(c.bold(`--- ALIVE (${alive.length}) ---`)));
    for (const r of alive) {
      let detail = `  ${c.green("✅")} ${r.merchant.name}`;
      if (r.finalUrl) detail += ` ${c.dim(`→ ${r.finalUrl}`)}`;
      detail += ` ${c.dim(`(${r.responseTime}ms)`)}`;
      console.log(detail);
    }
    console.log("");
  } else if (alive.length > 0) {
    console.log(
      c.green(`--- ALIVE (${alive.length}) --- `) +
        c.dim("(use --verbose to list)")
    );
    console.log("");
  }

  // Summary line
  console.log(
    c.bold("Summary: ") +
      c.green(`${alive.length} alive`) +
      ", " +
      c.yellow(`${warnings.length} warnings`) +
      ", " +
      c.red(`${dead.length} dead`)
  );
}

// ── Interactive removal (bulk) ─────────────────────────────────────

async function promptRemoval(deadResults: CheckResult[]): Promise<boolean> {
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  console.log("");
  console.log(
    c.bold(`${deadResults.length} confirmed dead (unreachable after 3 attempts):`)
  );
  for (const r of deadResults) {
    console.log(`  - ${r.merchant.name} ${c.dim(`(${r.reason})`)}`);
  }
  console.log("");
  const answer = await rl.question(
    c.yellow(
      `Remove these ${deadResults.length} entries from merchants.json? (y/N) `
    )
  );
  rl.close();
  return answer.trim().toLowerCase() === "y";
}

// ── JSON rewrite ───────────────────────────────────────────────────

function rewriteMerchants(merchants: Merchant[]) {
  const json = JSON.stringify(merchants, null, 2) + "\n";
  writeFileSync(MERCHANTS_PATH, json, "utf8");
}

// ── Main ───────────────────────────────────────────────────────────

async function main() {
  const raw = readFileSync(MERCHANTS_PATH, "utf8");
  const merchants: Merchant[] = JSON.parse(raw);

  // Skip .onion URLs
  const checkable = merchants.filter((m) => !m.url.includes(".onion"));
  const skipped = merchants.length - checkable.length;

  console.log("");
  console.log(
    c.bold(`BTCPay Directory Link Checker`) +
      c.dim(
        ` — ${checkable.length} URLs, concurrency ${CONCURRENCY}, timeout ${TIMEOUT / 1000}s, ${MAX_RETRIES} retries`
      )
  );
  console.log("");

  const pool = createPool(CONCURRENCY);
  let completed = 0;
  const startTime = Date.now();

  const results = await Promise.all(
    checkable.map((merchant) =>
      pool.run(async () => {
        const result = await checkMerchant(merchant);
        completed++;
        printProgress(completed, checkable.length, merchant.name);
        return result;
      })
    )
  );

  const duration = Date.now() - startTime;

  // Sort: dead first, then warnings, then alive
  const order: Record<LinkStatus, number> = { dead: 0, warning: 1, alive: 2 };
  results.sort((a, b) => order[a.status] - order[b.status]);

  printReport(results, skipped, duration);

  const dead = results.filter((r) => r.status === "dead");

  if (dead.length > 0 && !noInteractive) {
    const confirmed = await promptRemoval(dead);
    if (confirmed) {
      const deadUrls = new Set(dead.map((r) => r.merchant.url));
      const survivors = merchants.filter((m) => !deadUrls.has(m.url));
      rewriteMerchants(survivors);
      console.log(
        c.green(
          `\n✅ Removed ${dead.length} entries. ${survivors.length} remaining.`
        )
      );
    } else {
      console.log(c.dim("\nNo changes made."));
    }
  } else if (dead.length > 0 && noInteractive) {
    console.log(
      c.dim(
        `\n${dead.length} dead link(s) found. Run without --no-interactive to remove.`
      )
    );
  }

  process.exit(dead.length > 0 ? 1 : 0);
}

main().catch((err) => {
  console.error(c.red("Script error:"), err);
  process.exit(2);
});

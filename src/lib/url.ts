/**
 * Validates that a URL uses a safe protocol (http: or https:).
 * Returns the URL unchanged if safe, or "#" as a safe fallback.
 * Prevents javascript:, data:, vbscript:, and other dangerous protocol URLs.
 */
export function safeUrl(url: string): string {
  try {
    const parsed = new URL(url, window.location.origin);
    return parsed.protocol === "https:" || parsed.protocol === "http:"
      ? url
      : "#";
  } catch {
    return "#";
  }
}

import { Github, Twitter } from "lucide-react";
import SupporterSprite from "@/components/SupporterSprite";
import { supporters } from "@/data/supporters";
import { safeUrl } from "@/lib/url";

export default function Footer() {
  return (
    <footer className="border-t mt-auto">
      {/* Supporters */}
      <div>
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10">
          <SupporterSprite />
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-4 sm:gap-6 items-center justify-items-center">
            {supporters.map((s) => (
              <a
                key={s.svgId}
                href={safeUrl(s.url)}
                target="_blank"
                rel="noreferrer"
                title={s.name}
                className="flex items-center justify-center w-full h-8 sm:h-10 opacity-60 hover:opacity-100 transition-opacity duration-200"
              >
                <svg
                  role="img"
                  width={s.width}
                  height={s.height}
                  className="max-h-6 sm:max-h-8 w-auto max-w-full shrink-0"
                  style={s.fillCurrentColor ? { fill: "currentColor" } : undefined}
                >
                  <use href={`#${s.svgId}`} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/40">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <a href="/" className="shrink-0">
              <img src="/btcpay-directory-logo.svg" alt="BTCPay Directory" className="h-4 sm:h-5 dark:hidden" />
              <img src="/btcpay-directory-logo-white.svg" alt="BTCPay Directory" className="h-4 sm:h-5 hidden dark:block" />
            </a>
            <span className="text-[10px] sm:text-[11px] text-muted-foreground leading-tight">
              Community-maintained listing. Inclusion does not imply endorsement.
            </span>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a href="https://github.com/btcpayserver" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-4 w-4" />
            </a>
            <a href="https://x.com/BtcpayServer" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30 mt-auto">
      <div className="container mx-auto px-4 py-10 flex flex-col items-center gap-5 text-center">
        <a href="/">
          <img
            src="/btcpay-directory-logo.svg"
            alt="BTCPay Directory"
            className="h-7 opacity-80 dark:hidden"
          />
          <img
            src="/btcpay-directory-logo-white.svg"
            alt="BTCPay Directory"
            className="h-7 opacity-80 hidden dark:block"
          />
        </a>

        <p className="text-sm text-muted-foreground max-w-sm">
          A community-curated directory of merchants, projects, and organizations accepting Bitcoin via BTCPay Server.
        </p>

        <p className="text-xs text-muted-foreground/60 max-w-md">
          Community-maintained listing. Inclusion does not imply endorsement. Not all BTCPay Server users are listed.
        </p>

        <div className="flex gap-4">
          <a href="https://github.com/btcpayserver" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://x.com/BtcpayServer" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

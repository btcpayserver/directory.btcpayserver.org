import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSubmitClick: () => void;
}

export default function Navbar({ searchQuery, setSearchQuery, onSubmitClick }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/40 supports-[backdrop-filter]:bg-background/80 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-3">
        <a href="/" className="flex items-center group shrink-0">
          <img
            src="/btcpay-directory-logo.svg"
            alt="BTCPay Directory"
            className="h-8 sm:h-10 dark:hidden transition-transform duration-500 group-hover:scale-105"
          />
          <img
            src="/btcpay-directory-logo-white.svg"
            alt="BTCPay Directory"
            className="h-8 sm:h-10 hidden dark:block transition-transform duration-500 group-hover:scale-105"
          />
        </a>

        <div className="flex-1 max-w-md mx-4 sm:mx-8 hidden md:block">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors duration-300" />
            <input
              type="text"
              placeholder="Search merchants, categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pl-10 pr-4 rounded-full bg-muted/50 border border-transparent focus:bg-background focus:border-primary/20 focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-300 text-sm placeholder:text-muted-foreground"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <ThemeToggle />
          <Button
            size="sm"
            className="rounded-full px-3 sm:px-5 text-xs sm:text-sm font-semibold text-primary-foreground hover:opacity-90 transition-all shadow-lg shadow-primary/20 bg-primary hover:bg-primary/90"
            onClick={onSubmitClick}
          >
            <span className="hidden sm:inline">Submit Store</span>
            <span className="sm:hidden">Submit</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}

import type { Merchant } from "@/data/categories";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { subTypeLabels, countryFlag, hostedBtcpayCountries } from "@/data/categories";
import { safeUrl } from "@/lib/url";

interface MerchantCardProps {
  merchant: Merchant;
}

export default function MerchantCard({ merchant }: MerchantCardProps) {
  const displayCategory = merchant.subType
    ? subTypeLabels[merchant.subType] || merchant.subType
    : merchant.type.charAt(0).toUpperCase() + merchant.type.slice(1);

  return (
    <div className="group relative flex flex-col h-full bg-card/60 hover:bg-card/80 backdrop-blur-md border border-border/40 hover:border-primary/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
      {/* Category Pill */}
      <div className="mb-3 sm:mb-4 flex justify-between items-start">
        <Badge variant="secondary" className="rounded-full px-2.5 sm:px-3 py-0.5 sm:py-1 text-xs font-medium bg-muted/60 border border-border/40 backdrop-blur-sm group-hover:bg-primary/10 group-hover:text-primary transition-colors">
          {displayCategory}
        </Badge>

        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-muted/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="font-display font-bold text-lg sm:text-xl mb-1.5 sm:mb-2 group-hover:text-primary transition-colors duration-300">
          {merchant.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4 sm:mb-6">
          {merchant.description}
        </p>
      </div>

      {/* Tags - show type + country flag + optional social indicators */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
        <span className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground bg-muted/50 px-2 py-0.5 sm:py-1 rounded-md border border-border/40">
          {merchant.type}
        </span>
        {merchant.country && (
          <span className="text-[10px] tracking-wider font-semibold text-muted-foreground bg-muted/50 px-2 py-0.5 sm:py-1 rounded-md border border-border/40">
            {countryFlag(merchant.country)} {hostedBtcpayCountries[merchant.country] || merchant.country}
          </span>
        )}
        {merchant.twitter && (
          <span className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground bg-muted/50 px-2 py-0.5 sm:py-1 rounded-md border border-border/40">
            Twitter
          </span>
        )}
        {merchant.onionUrl && (
          <span className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground bg-muted/50 px-2 py-0.5 sm:py-1 rounded-md border border-border/40">
            Tor
          </span>
        )}
      </div>

      {/* Action */}
      <a
        href={safeUrl(merchant.url)}
        target="_blank"
        rel="noreferrer"
        className="absolute inset-0 z-10 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-2xl sm:rounded-3xl"
        aria-label={`Visit ${merchant.name}`}
      />
    </div>
  );
}

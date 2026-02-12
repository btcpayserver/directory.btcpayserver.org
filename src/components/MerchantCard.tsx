import type { Merchant } from "@/data/categories";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { subTypeLabels } from "@/data/categories";

interface MerchantCardProps {
  merchant: Merchant;
}

export default function MerchantCard({ merchant }: MerchantCardProps) {
  const displayCategory = merchant.subType
    ? subTypeLabels[merchant.subType] || merchant.subType
    : merchant.type.charAt(0).toUpperCase() + merchant.type.slice(1);

  return (
    <div className="group relative flex flex-col h-full bg-card/40 hover:bg-card/80 backdrop-blur-md border border-white/5 hover:border-primary/20 rounded-3xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
      {/* Category Pill */}
      <div className="mb-4 flex justify-between items-start">
        <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs font-medium bg-muted/50 border border-white/5 backdrop-blur-sm group-hover:bg-primary/10 group-hover:text-primary transition-colors">
          {displayCategory}
        </Badge>

        <div className="w-8 h-8 rounded-full bg-muted/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <ExternalLink className="w-4 h-4 text-primary" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="font-display font-bold text-xl mb-2 group-hover:text-primary transition-colors duration-300">
          {merchant.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-6">
          {merchant.description}
        </p>
      </div>

      {/* Tags - show type + optional social indicators */}
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground/70 bg-muted/30 px-2 py-1 rounded-md border border-white/5">
          {merchant.type}
        </span>
        {merchant.twitter && (
          <span className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground/70 bg-muted/30 px-2 py-1 rounded-md border border-white/5">
            Twitter
          </span>
        )}
        {merchant.onionUrl && (
          <span className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground/70 bg-muted/30 px-2 py-1 rounded-md border border-white/5">
            Tor
          </span>
        )}
      </div>

      {/* Action */}
      <a
        href={merchant.url}
        target="_blank"
        rel="noreferrer"
        className="absolute inset-0 z-10 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-3xl"
        aria-label={`Visit ${merchant.name}`}
      />
    </div>
  );
}

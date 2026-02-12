import { mainTypes, merchantSubTypes, subTypeLabels, hostedBtcpayCountries, countryFlag } from "@/data/categories";
import { cn } from "@/lib/utils";

interface DirectoryFiltersProps {
  selectedType: string;
  setSelectedType: (type: string) => void;
  selectedSubType: string | null;
  setSelectedSubType: (subType: string | null) => void;
  className?: string;
}

export default function DirectoryFilters({
  selectedType,
  setSelectedType,
  selectedSubType,
  setSelectedSubType,
  className,
}: DirectoryFiltersProps) {
  const handleTypeClick = (type: string) => {
    setSelectedType(type);
    setSelectedSubType(null);
  };

  const handleSubTypeClick = (subType: string) => {
    setSelectedSubType(selectedSubType === subType ? null : subType);
  };

  return (
    <div className={cn("space-y-6", className)}>
      <div className="bg-card/40 backdrop-blur-xl border border-white/5 rounded-3xl p-6 shadow-sm">
        <h3 className="font-display font-bold text-lg mb-6 px-2">Categories</h3>
        <div className="space-y-1">
          {mainTypes.map((type) => (
            <button
              key={type}
              onClick={() => handleTypeClick(type)}
              className={cn(
                "w-full text-left px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-200 flex items-center justify-between group",
                selectedType === type
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-[1.02]"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
            >
              {type}
              {selectedType === type && (
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Merchant subtypes - shown when Merchants is selected */}
        {selectedType === "Merchants" && (
          <div className="mt-4 pt-4 border-t border-white/5">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-2 mb-3">
              Subcategories
            </p>
            <div className="space-y-0.5 max-h-64 overflow-y-auto">
              {merchantSubTypes.map((subType) => (
                <button
                  key={subType}
                  onClick={() => handleSubTypeClick(subType)}
                  className={cn(
                    "w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-all duration-200",
                    selectedSubType === subType
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted/30 hover:text-foreground"
                  )}
                >
                  {subTypeLabels[subType] || subType}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Country filter - shown when Hosted BTCPay is selected */}
        {selectedType === "Hosted BTCPay" && (
          <div className="mt-4 pt-4 border-t border-white/5">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-2 mb-3">
              Country
            </p>
            <div className="space-y-0.5 max-h-64 overflow-y-auto">
              {Object.entries(hostedBtcpayCountries).map(([code, name]) => (
                <button
                  key={code}
                  onClick={() => handleSubTypeClick(code)}
                  className={cn(
                    "w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-all duration-200",
                    selectedSubType === code
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted/30 hover:text-foreground"
                  )}
                >
                  {countryFlag(code)} {name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

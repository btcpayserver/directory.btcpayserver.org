import { useState, useMemo, useEffect, useCallback } from "react";
import merchantsData from "@/data/merchants.json";
import type { Merchant } from "@/data/categories";
import { typeMap, mainTypes, merchantSubTypes, hostedBtcpayCountries } from "@/data/categories";
import MerchantCard from "@/components/MerchantCard";
import DirectoryFilters from "@/components/DirectoryFilters";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubmitForm from "@/components/SubmitForm";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Search, SlidersHorizontal } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const INITIAL_BATCH = 24;
const BATCH_SIZE = 24;

// Fisher-Yates shuffle
function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// URL hash helpers for shareable filter state
const validTypes = new Set<string>(mainTypes);
const validSubs = new Set<string>([
  ...merchantSubTypes,
  ...Object.keys(hostedBtcpayCountries),
]);

function parseHash(): { type: string; sub: string | null; q: string } {
  const params = new URLSearchParams(window.location.hash.slice(1));

  const rawType = params.get("type") || "All";
  const type = validTypes.has(rawType) ? rawType : "All";

  const rawSub = params.get("sub") || null;
  const sub = rawSub && validSubs.has(rawSub) ? rawSub : null;

  const q = params.get("q") || "";

  return { type, sub, q };
}

function updateHash(type: string, sub: string | null, q: string) {
  const params = new URLSearchParams();
  if (type !== "All") params.set("type", type);
  if (sub) params.set("sub", sub);
  if (q) params.set("q", q);
  const hash = params.toString();
  history.replaceState(null, "", hash ? `#${hash}` : window.location.pathname);
}

const merchants: Merchant[] = merchantsData as Merchant[];

export default function DirectoryPage() {
  const initial = useMemo(() => parseHash(), []);

  const [selectedType, setSelectedType] = useState(initial.type);
  const [selectedSubType, setSelectedSubType] = useState<string | null>(initial.sub);
  const [searchQuery, setSearchQuery] = useState(initial.q);
  const [visibleCount, setVisibleCount] = useState(INITIAL_BATCH);

  // Shuffle once on mount so no merchant is permanently buried
  const shuffledMerchants = useMemo(() => shuffle(merchants), []);

  const filteredMerchants = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return shuffledMerchants.filter((merchant) => {
      // Type filter
      const typeValue = typeMap[selectedType];
      const matchesType = selectedType === "All" || merchant.type === typeValue;

      // Subtype / country filter (country is used for Hosted BTCPay)
      const isHostedBtcpay = selectedType === "Hosted BTCPay";
      const matchesSubType =
        !selectedSubType ||
        (isHostedBtcpay
          ? merchant.country === selectedSubType
          : merchant.subType === selectedSubType);

      // Search filter
      const matchesSearch =
        !query ||
        merchant.name.toLowerCase().includes(query) ||
        merchant.description.toLowerCase().includes(query);

      return matchesType && matchesSubType && matchesSearch;
    });
  }, [shuffledMerchants, selectedType, selectedSubType, searchQuery]);

  // Reset visible count when filters change
  useEffect(() => {
    setVisibleCount(INITIAL_BATCH);
  }, [selectedType, selectedSubType, searchQuery]);

  // Sync filter state → URL hash
  useEffect(() => {
    updateHash(selectedType, selectedSubType, searchQuery);
  }, [selectedType, selectedSubType, searchQuery]);

  const visibleMerchants = filteredMerchants.slice(0, visibleCount);
  const hasMore = visibleCount < filteredMerchants.length;

  const loadMore = useCallback(() => {
    setVisibleCount((prev) => prev + BATCH_SIZE);
  }, []);

  const scrollToDirectory = () => {
    document.getElementById("directory")?.scrollIntoView({ behavior: "smooth" });
  };

  const clearFilters = useCallback(() => {
    setSelectedType("All");
    setSelectedSubType(null);
    setSearchQuery("");
  }, []);

  const [submitOpen, setSubmitOpen] = useState(false);
  const openSubmit = useCallback(() => setSubmitOpen(true), []);

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-primary/30">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSubmitClick={openSubmit} />

      {/* Hero Section */}
      <div className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden bg-background">
        {/* Subtle Mesh Gradient Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[1000px] h-[400px] sm:h-[600px] bg-primary/10 blur-[120px] rounded-full opacity-40 pointer-events-none" />
        <div className="absolute top-[-100px] right-[-100px] w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-emerald-500/10 blur-[100px] rounded-full opacity-40 pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-4 sm:mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            ₿itcoin is<br className="hidden md:block" />
            <span className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">Money.</span>
          </h1>

          <p className="text-base sm:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 px-2">
            Discover merchants, creators, and organizations accepting Bitcoin with BTCPay Server, and support circular economies.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300 px-4 sm:px-0">
            <Button
              size="lg"
              className="rounded-full px-8 h-11 sm:h-12 text-sm sm:text-base shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:scale-105"
              onClick={scrollToDirectory}
            >
              Browse Directory
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-11 sm:h-12 text-sm sm:text-base backdrop-blur-sm bg-background/50 border-input/50 hover:bg-background/80 transition-all duration-300"
              onClick={openSubmit}
            >
              Submit a Store
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main id="directory" className="flex-1 container mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">

          {/* Mobile Filter + Search Bar */}
          <div className="lg:hidden sticky top-16 sm:top-20 z-40 -mx-1 bg-background/80 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-border/50 shadow-sm space-y-2 sm:space-y-3 mb-4 sm:mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search merchants..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-11 pl-9 pr-4 rounded-full bg-muted/50 border border-transparent focus:bg-background focus:border-primary/20 focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-300 text-sm placeholder:text-muted-foreground"
              />
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2 font-medium w-full justify-start">
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px] sm:w-[400px] overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                </SheetHeader>
                <DirectoryFilters
                  selectedType={selectedType}
                  setSelectedType={setSelectedType}
                  selectedSubType={selectedSubType}
                  setSelectedSubType={setSelectedSubType}
                  onFilterChange={scrollToDirectory}
                />
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 space-y-8 animate-in fade-in slide-in-from-left-6 duration-700 delay-500">
              <DirectoryFilters
                selectedType={selectedType}
                setSelectedType={setSelectedType}
                selectedSubType={selectedSubType}
                setSelectedSubType={setSelectedSubType}
                onFilterChange={scrollToDirectory}
              />

              <div className="p-6 rounded-3xl bg-gradient-to-br from-primary/10 to-emerald-500/5 border border-primary/10 backdrop-blur-xl">
                <h3 className="font-bold text-lg mb-2 text-primary">Add your store</h3>
                <p className="text-sm text-muted-foreground mb-4">Are you using BTCPay Server? Get listed in the directory.</p>
                <Button className="w-full rounded-xl bg-primary/90 hover:bg-primary shadow-lg shadow-primary/10" size="sm" onClick={openSubmit}>
                    Submit Now
                </Button>
              </div>

            </div>
          </aside>

          {/* Content Area */}
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-end mb-6 sm:mb-8 px-1 sm:px-2">
              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight">
                  {selectedType === "All" ? "Discover" : selectedType}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
              {visibleMerchants.map((merchant, i) => (
                <div
                  key={merchant.url}
                  style={i < INITIAL_BATCH ? { animationDelay: `${i * 50}ms` } : undefined}
                  className={i < INITIAL_BATCH ? "animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-backwards" : ""}
                >
                  <MerchantCard merchant={merchant} />
                </div>
              ))}
            </div>

            {hasMore && (
              <div className="flex justify-center mt-8 sm:mt-12">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 sm:px-10 h-11 sm:h-12 gap-3 font-semibold border-border/50 hover:bg-muted/50 hover:border-primary/30 transition-all duration-300"
                  onClick={loadMore}
                >
                  Load More
                </Button>
              </div>
            )}

            {filteredMerchants.length === 0 && (
              <div className="text-center py-16 sm:py-32 bg-card/60 rounded-2xl sm:rounded-3xl border border-dashed border-muted-foreground/30 backdrop-blur-sm">
                <div className="bg-muted/50 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SlidersHorizontal className="w-6 h-6 sm:w-8 sm:h-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">No merchants found</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-sm mx-auto px-4">We couldn't find any merchants matching your current filters.</p>
                <Button variant="outline" className="rounded-full" onClick={clearFilters}>
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />

      <Dialog open={submitOpen} onOpenChange={setSubmitOpen}>
        <DialogContent className="mx-4 sm:mx-auto sm:max-w-md max-h-[85vh] overflow-y-auto rounded-xl">
          <SubmitForm onSuccess={() => setSubmitOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

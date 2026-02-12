import { useState, useMemo, useEffect, useCallback } from "react";
import merchantsData from "@/data/merchants.json";
import type { Merchant } from "@/data/categories";
import { typeMap } from "@/data/categories";
import MerchantCard from "@/components/MerchantCard";
import DirectoryFilters from "@/components/DirectoryFilters";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";
import {
  Sheet,
  SheetContent,
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
function parseHash(): { type: string; sub: string | null; q: string } {
  const params = new URLSearchParams(window.location.hash.slice(1));
  return {
    type: params.get("type") || "All",
    sub: params.get("sub") || null,
    q: params.get("q") || "",
  };
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

      // Subtype filter
      const matchesSubType =
        !selectedSubType || merchant.subType === selectedSubType;

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

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-primary/30">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden bg-background">
        {/* Subtle Mesh Gradient Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 blur-[120px] rounded-full opacity-40 pointer-events-none" />
        <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-emerald-500/10 blur-[100px] rounded-full opacity-40 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Spend Bitcoin <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">Anywhere.</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            The definitive list of merchants, creators, and organizations empowering the circular economy with BTCPay Server.
          </p>

          <div className="flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <Button
              size="lg"
              className="rounded-full px-8 h-12 text-base shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:scale-105"
              onClick={scrollToDirectory}
            >
              Browse Directory
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base backdrop-blur-sm bg-background/50 border-input/50 hover:bg-background/80 transition-all duration-300" asChild>
              <a href="https://github.com/btcpayserver/directory.btcpayserver.org/issues/new?template=submission.md" target="_blank" rel="noreferrer">
                Submit a Store
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main id="directory" className="flex-1 container mx-auto px-4 pb-24">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Mobile Filter + Search Bar */}
          <div className="lg:hidden sticky top-20 z-30 bg-background/80 backdrop-blur-md p-4 rounded-2xl border border-border/50 shadow-sm space-y-3 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search merchants..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-9 pl-9 pr-4 rounded-full bg-muted/40 border border-transparent focus:bg-background focus:border-primary/20 focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-300 text-sm placeholder:text-muted-foreground/70"
              />
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="gap-2 font-medium w-full justify-start">
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <DirectoryFilters
                  selectedType={selectedType}
                  setSelectedType={setSelectedType}
                  selectedSubType={selectedSubType}
                  setSelectedSubType={setSelectedSubType}
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
              />

              <div className="p-6 rounded-3xl bg-gradient-to-br from-primary/10 to-emerald-500/5 border border-primary/10 backdrop-blur-xl">
                <h3 className="font-bold text-lg mb-2 text-primary">Add your store</h3>
                <p className="text-sm text-muted-foreground mb-4">Are you using BTCPay Server? Get listed in the directory.</p>
                <Button className="w-full rounded-xl bg-primary/90 hover:bg-primary shadow-lg shadow-primary/10" size="sm" asChild>
                  <a href="https://github.com/btcpayserver/directory.btcpayserver.org/issues/new?template=submission.md" target="_blank" rel="noreferrer">
                    Submit Now
                  </a>
                </Button>
              </div>
            </div>
          </aside>

          {/* Content Area */}
          <div className="flex-1">
            <div className="flex justify-between items-end mb-8 px-2">
              <div>
                <h2 className="text-3xl font-display font-bold tracking-tight">
                  {selectedType === "All" ? "Discover" : selectedType}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
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
              <div className="flex justify-center mt-12">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-10 h-12 gap-3 font-semibold border-border/50 hover:bg-muted/50 hover:border-primary/30 transition-all duration-300"
                  onClick={loadMore}
                >
                  Load More
                  <span className="text-muted-foreground text-sm font-normal">
                    ({Math.min(visibleCount, filteredMerchants.length)} of {filteredMerchants.length})
                  </span>
                </Button>
              </div>
            )}

            {filteredMerchants.length === 0 && (
              <div className="text-center py-32 bg-card/40 rounded-3xl border border-dashed border-muted-foreground/20 backdrop-blur-sm">
                <div className="bg-muted/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SlidersHorizontal className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">No merchants found</h3>
                <p className="text-muted-foreground mb-6 max-w-sm mx-auto">We couldn't find any merchants matching your current filters.</p>
                <Button variant="outline" className="rounded-full" onClick={clearFilters}>
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

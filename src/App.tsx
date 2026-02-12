import { ThemeProvider } from "@/components/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import DirectoryPage from "@/pages/Directory";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="btcpay-directory-theme">
      <TooltipProvider>
        <DirectoryPage />
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;

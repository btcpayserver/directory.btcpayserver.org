import { ThemeProvider } from "@/components/ThemeProvider";
import DirectoryPage from "@/pages/Directory";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="btcpay-directory-theme">
      <DirectoryPage />
    </ThemeProvider>
  );
}

export default App;

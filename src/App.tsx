import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Atas from "./pages/Atas";
import Cases from "./pages/Cases";
import Privacidade from "./pages/Privacidade";
import Apresentacao from "./pages/Apresentacao";
import Compliance from "./pages/Compliance";
import NotFound from "./pages/NotFound";
import CursorFollower from "./components/CursorFollower";
import CookieConsent from "./components/CookieConsent";
import ScrollProgress from "./components/ScrollProgress";
import SupportChatbot from "./components/SupportChatbot";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ScrollProgress />
        <CursorFollower />
        <CookieConsent />
        <SupportChatbot />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/atas" element={<Atas />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/privacidade" element={<Privacidade />} />
            <Route path="/apresentacao" element={<Apresentacao />} />
            <Route path="/compliance" element={<Compliance />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;

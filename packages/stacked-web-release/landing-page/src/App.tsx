import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import OtcTermsPage from "./pages/OtcTermsPage";
import FeesAndLimitsPage from "./pages/FeesAndLimitsPage";
import WalletPage from "./pages/WalletPage";
import BusinessesPage from "./pages/BusinessesPage";
import AboutPage from "./pages/AboutPage";
import PartnersPage from "./pages/PartnersPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/company" element={<AboutPage />} />
          <Route path="/company/about" element={<AboutPage />} />
          <Route path="/company/news" element={<AboutPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/partners/the-bitcoin-adviser" element={<PartnersPage />} />
          <Route path="/businesses" element={<BusinessesPage />} />
          <Route path="/solutions/bitcoin-for-businesses" element={<BusinessesPage />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route path="/otc-terms" element={<OtcTermsPage />} />
          <Route path="/otc-service-terms-and-conditions" element={<OtcTermsPage />} />
          <Route path="/fees-and-limits" element={<FeesAndLimitsPage />} />
          <Route path="/help/support/using-lightning-pay-web/fees" element={<FeesAndLimitsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

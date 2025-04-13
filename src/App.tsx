
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Loans from "./pages/Loans";
import NotFound from "./pages/NotFound";
import PersonalBankingSavings from "./pages/PersonalBankingSavings";
import PersonalBankingCurrent from "./pages/PersonalBankingCurrent";
import PersonalBankingFixedDeposits from "./pages/PersonalBankingFixedDeposits";
import CorporateBanking from "./pages/CorporateBanking";
import Cards from "./pages/Cards";
import About from "./pages/About";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/personal-banking/savings" element={<PersonalBankingSavings />} />
          <Route path="/personal-banking/current" element={<PersonalBankingCurrent />} />
          <Route path="/personal-banking/fixed-deposits" element={<PersonalBankingFixedDeposits />} />
          <Route path="/corporate-banking" element={<CorporateBanking />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

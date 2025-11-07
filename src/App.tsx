import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Wallets from "./pages/Wallets";
import Conversions from "./pages/Conversions";
import Transactions from "./pages/Transactions";
import AIInsights from "./pages/AIInsights";
import AutomationRules from "./pages/AutomationRules";
import Settings from "./pages/Settings";
import Integrations from "./pages/Integrations";
import Support from "./pages/Support";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/dashboard/wallets" element={<Wallets />} />
  <Route path="/dashboard/conversions" element={<Conversions />} />
  <Route path="/dashboard/transactions" element={<Transactions />} />
  <Route path="/dashboard/ai-insights" element={<AIInsights />} />
  <Route path="/dashboard/automation-rules" element={<AutomationRules />} />
  <Route path="/dashboard/settings" element={<Settings />} />
  <Route path="/dashboard/integrations" element={<Integrations />} />
  <Route path="/dashboard/support" element={<Support />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

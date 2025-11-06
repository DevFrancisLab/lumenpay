import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  WalletCards,
  ArrowRightLeft,
  Receipt,
  Settings,
  HelpCircle,
  BarChart,
  Zap,
  Plug,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "Wallets",
    icon: WalletCards,
    path: "/dashboard/wallets",
  },
  {
    title: "Conversions",
    icon: ArrowRightLeft,
    path: "/dashboard/conversions",
  },
  {
    title: "Transactions",
    icon: Receipt,
    path: "/dashboard/transactions",
  },
  {
    title: "AI Insights",
    icon: BarChart,
    path: "/dashboard/ai-insights",
  },
  {
    title: "Automation Rules",
    icon: Zap,
    path: "/dashboard/automation-rules",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/dashboard/settings",
  },
  {
    title: "Integrations",
    icon: Plug,
    path: "/dashboard/integrations",
  },
  {
    title: "Integrations",
    icon: Plug,
    path: "/dashboard/integrations",
  },
  {
    title: "Support",
    icon: HelpCircle,
    path: "/dashboard/support",
  },
];

const Sidebar = () => {
  const location = useLocation();

  const handleLogout = () => {
    // Add actual logout logic here
    window.location.href = "/";
  };

  return (
    <aside className="w-64 border-r border-border bg-card h-screen sticky top-0 flex flex-col">
      {/* Logo */}
      <div className="h-16 border-b border-border flex items-center px-6">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold">
            <span className="text-primary">Lumen</span>Pay
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <nav
        className="flex-1 overflow-y-auto py-6 px-2 custom-scrollbar"
      >
        <ul
          className="space-y-1 custom-scrollbar"
          style={{
            /* For Webkit browsers */
            /* These will be picked up by global CSS below */
          }}
        >
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-4 py-2 rounded-lg text-base font-medium transition-colors",
                    "text-muted-foreground hover:text-foreground hover:bg-accent",
                    isActive && "text-primary bg-primary/10 hover:bg-primary/10"
                  )}
                >
                  <item.icon className="h-5 w-5 shrink-0" />
                  <span className="truncate">{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom section */}
      <div className="p-4 space-y-4">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-base font-medium text-muted-foreground hover:text-red-600 hover:bg-red-100 transition-colors"
        >
          <LogOut className="h-5 w-5 shrink-0" />
          <span className="truncate">Logout</span>
        </button>
        <div className="bg-primary/10 rounded-lg p-4">
          <h4 className="font-semibold mb-2 text-sm">Need Help?</h4>
          <p className="text-sm text-muted-foreground mb-3">
            Our support team is always here to help you.
          </p>
          <Link
            to="/dashboard/support"
            className="text-sm text-primary hover:underline"
          >
            Contact Support →
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
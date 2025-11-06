import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  BarChart,
  Wallet,
  ArrowRightLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Sidebar from "@/components/Sidebar";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add actual logout logic here
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1">
        {/* Main Content */}
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-8">Overview</h1>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-muted-foreground">Total Balance</h3>
                <Wallet className="text-primary h-5 w-5" />
              </div>
              <p className="text-3xl font-bold">$12,450.00</p>
              <p className="text-sm text-muted-foreground">≈ 0.245 BTC</p>
            </Card>

            <Card className="p-6 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-muted-foreground">USDC Converted</h3>
                <ArrowRightLeft className="text-primary h-5 w-5" />
              </div>
              <p className="text-3xl font-bold">$8,200.00</p>
              <p className="text-sm text-green-500">+12% this week</p>
            </Card>

            <Card className="p-6 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-muted-foreground">Monthly Activity</h3>
                <BarChart className="text-primary h-5 w-5" />
              </div>
              <p className="text-3xl font-bold">23</p>
              <p className="text-sm text-muted-foreground">Transactions</p>
            </Card>
          </div>

          {/* Recent Transactions */}
          <Card className="mb-8">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
              <div className="space-y-4">
                {[
                  {
                    type: "Payout",
                    method: "M-Pesa",
                    amount: "$250.00",
                    status: "Completed",
                    date: "Today",
                  },
                  {
                    type: "Conversion",
                    method: "BTC → USDC",
                    amount: "$1,200.00",
                    status: "Processing",
                    date: "Yesterday",
                  },
                  {
                    type: "Payout",
                    method: "PayPal",
                    amount: "$450.00",
                    status: "Completed",
                    date: "Nov 5",
                  },
                ].map((tx, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-3 border-b border-border last:border-0"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <div>
                        <p className="font-semibold">{tx.type}</p>
                        <p className="text-sm text-muted-foreground">{tx.method}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{tx.amount}</p>
                      <p
                        className={`text-sm ${
                          tx.status === "Completed"
                            ? "text-green-500"
                            : "text-primary"
                        }`}
                      >
                        {tx.status} • {tx.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <ArrowRightLeft className="mr-2 h-4 w-4" />
                  New Conversion
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Wallet className="mr-2 h-4 w-4" />
                  Withdraw Funds
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Account Status</h2>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Verification Status:{" "}
                  <span className="text-green-500">Verified</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  Account Type: <span className="text-primary">Premium</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  Last Login: Today, 2:30 PM
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

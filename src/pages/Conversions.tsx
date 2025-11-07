import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ChartContainer } from "@/components/ui/chart";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Sidebar } from "@/components/Sidebar";
import SidebarDefault from "@/components/Sidebar";
import { ArrowRightLeft, Clock, Shield, Zap, MessageSquare } from "lucide-react";

// Mock data
const history = [
  { id: "c1", from: "USD", to: "USDC", amount: 1200, rate: 1.0, status: "Completed", date: "Today" },
  { id: "c2", from: "BTC", to: "USDC", amount: 0.0012, rate: 62000, status: "Processing", date: "Nov 4" },
  { id: "c3", from: "ETH", to: "USD", amount: 0.05, rate: 1800, status: "Completed", date: "Oct 28" },
];

const scheduled = [
  { id: "s1", from: "USD", to: "USDC", amount: 500, freq: "Monthly", next: "Dec 1" },
];

const Conversions = () => {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background flex">
      <SidebarDefault />

      <div className="flex-1">
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold">Conversions</h1>
              <p className="text-sm text-muted-foreground">Quickly convert between currencies and review conversion history.</p>
            </div>

            <div className="flex items-center gap-3">
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button variant="gold">New Conversion</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Quick Conversion</DialogTitle>
                    <DialogDescription>Convert funds between wallets or currencies.</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-3">
                    <label className="text-sm text-muted-foreground">From</label>
                    <select className="w-full rounded border p-2">
                      <option>USD</option>
                      <option>USDC</option>
                      <option>BTC</option>
                      <option>ETH</option>
                    </select>
                    <label className="text-sm text-muted-foreground">To</label>
                    <select className="w-full rounded border p-2">
                      <option>USDC</option>
                      <option>USD</option>
                      <option>BTC</option>
                      <option>ETH</option>
                    </select>
                    <label className="text-sm text-muted-foreground">Amount</label>
                    <input className="w-full rounded border p-2" placeholder="100.00" />
                  </div>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button onClick={() => setOpen(false)}>Convert</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2 grid grid-cols-1 gap-6">
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">Quick Conversion</h3>
                    <p className="text-sm text-muted-foreground">Instantly convert between supported currencies.</p>
                  </div>
                  <div>
                    <Button variant="outline">Advanced</Button>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input className="rounded border p-2" placeholder="From (e.g., USD)" />
                  <input className="rounded border p-2" placeholder="To (e.g., USDC)" />
                  <input className="rounded border p-2" placeholder="Amount" />
                </div>
                <div className="mt-4 flex justify-end">
                  <Button>Estimate</Button>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">AI Insights</h3>
                    <p className="text-sm text-muted-foreground">AI suggests converting USDC during low volatility windows.</p>
                  </div>
                  <div>
                    <Button variant="gold">Run AI</Button>
                  </div>
                </div>
              </Card>
            </div>

            <div>
              <Card className="p-4">
                <h4 className="font-semibold">Security & Transparency</h4>
                <p className="text-sm text-muted-foreground">All conversions are logged and auditable. No hidden fees.</p>
                <div className="mt-3">
                  <Button variant="outline">View Audit Log</Button>
                </div>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Conversion History</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <tr>
                        <TableHead>From → To</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Rate</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                      </tr>
                    </TableHeader>
                    <TableBody>
                      {history.map((c) => (
                        <TableRow key={c.id}>
                          <TableCell>
                            <div className="font-semibold">{c.from} → {c.to}</div>
                          </TableCell>
                          <TableCell>{typeof c.amount === 'number' ? (c.from === 'BTC' ? `${c.amount} BTC` : `$${c.amount}`) : c.amount}</TableCell>
                          <TableCell>{c.rate}</TableCell>
                          <TableCell>{c.status}</TableCell>
                          <TableCell>{c.date}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer id="conv-analytics" config={{ conversions: { label: "Conversions", color: "#06b6d4" } }} className="h-56">
                    {/* Placeholder for Recharts */}
                    <svg className="w-full h-full" viewBox="0 0 100 40" />
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-4">
                <h4 className="font-semibold">Scheduled Conversions</h4>
                <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {scheduled.map((s) => (
                    <div key={s.id} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{s.from} → {s.to} • {s.freq}</div>
                        <div className="text-xs">Next: {s.next}</div>
                      </div>
                      <div>
                        <Button variant="outline" size="sm">Edit</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-primary/10">
                    <ShieldIcon />
                  </div>
                  <div>
                    <h4 className="font-semibold">Smart Assistant</h4>
                    <p className="text-sm text-muted-foreground">Optional helper to auto-schedule conversions based on cashflow.</p>
                    <div className="mt-3">
                      <Button variant="outline">Configure</Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Small placeholder icon component to avoid extra imports for Shield
const ShieldIcon = () => (
  <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l7 3v5c0 5-3 9-7 11-4-2-7-6-7-11V5l7-3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default Conversions;

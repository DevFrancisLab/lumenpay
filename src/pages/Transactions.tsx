import { useMemo, useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
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
import { Search, FileText, BarChart2, Zap, Bell, Shield } from "lucide-react";

// Mock transactions data
const TRANSACTIONS = [
  { id: "t1", type: "Payout", method: "M-Pesa", amount: 250, currency: "USD", status: "Completed", date: "Today", details: "Payout to user +2547..." },
  { id: "t2", type: "Conversion", method: "BTC → USDC", amount: 1200, currency: "USD", status: "Processing", date: "Nov 4", details: "Conversion executed on chain" },
  { id: "t3", type: "Payout", method: "PayPal", amount: 450, currency: "USD", status: "Completed", date: "Nov 2", details: "PayPal transfer" },
  { id: "t4", type: "Refund", method: "Bank", amount: 100, currency: "USD", status: "Failed", date: "Oct 30", details: "Insufficient funds" },
];

const Transactions = () => {
  const [query, setQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<string | null>(null);
  const [selected, setSelected] = useState<typeof TRANSACTIONS[number] | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const filtered = useMemo(() => {
    return TRANSACTIONS.filter((t) => {
      const matchesQuery = query
        ? [t.type, t.method, t.amount.toString(), t.currency, t.status, t.date]
            .join(" ")
            .toLowerCase()
            .includes(query.toLowerCase())
        : true;
      const matchesStatus = filterStatus ? t.status === filterStatus : true;
      return matchesQuery && matchesStatus;
    });
  }, [query, filterStatus]);

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />

      <div className="flex-1">
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold">Transactions</h1>
              <p className="text-sm text-muted-foreground">Overview, search and audit your transactions.</p>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="outline">Export CSV</Button>
              <Button variant="gold">Run Audit</Button>
            </div>
          </div>

          {/* Summary cards + AI banner */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Volume</p>
                    <p className="text-2xl font-semibold">$24,500</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Transactions</p>
                    <p className="text-2xl font-semibold">324</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Fees Collected</p>
                    <p className="text-2xl font-semibold">$120</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Disputes</p>
                    <p className="text-2xl font-semibold">2</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Success Rate</p>
                    <p className="text-2xl font-semibold">98.6%</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Alerts</p>
                    <p className="text-2xl font-semibold">3</p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-4 flex items-center gap-4">
              <div className="flex-1">
                <h3 className="font-semibold">AI Insight</h3>
                <p className="text-sm text-muted-foreground">AI detected a spike in refunds on Oct 30; suggestion: run automated reconciliation.</p>
              </div>
              <div>
                <Button variant="gold">Apply Fix</Button>
              </div>
            </Card>
          </div>

          {/* Search + Filters and Table */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center border rounded px-3 py-1 gap-2 w-full max-w-md">
                      <Search className="h-4 w-4 text-muted-foreground" />
                      <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search by type, method, amount, date..."
                        className="w-full bg-transparent outline-none"
                      />
                    </div>

                    <select
                      value={filterStatus ?? ""}
                      onChange={(e) => setFilterStatus(e.target.value || null)}
                      className="rounded border p-2"
                    >
                      <option value="">All statuses</option>
                      <option>Completed</option>
                      <option>Processing</option>
                      <option>Failed</option>
                    </select>
                  </div>

                  <Table>
                    <TableHeader>
                      <tr>
                        <TableHead>Type</TableHead>
                        <TableHead>Method</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead></TableHead>
                      </tr>
                    </TableHeader>
                    <TableBody>
                      {filtered.map((t) => (
                        <TableRow key={t.id}>
                          <TableCell>
                            <div className="font-semibold">{t.type}</div>
                          </TableCell>
                          <TableCell>{t.method}</TableCell>
                          <TableCell>
                            {t.currency === "USD" ? `$${t.amount}` : `${t.amount} ${t.currency}`}
                          </TableCell>
                          <TableCell>{t.status}</TableCell>
                          <TableCell>{t.date}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2 justify-end">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => {
                                  setSelected(t);
                                  setDetailsOpen(true);
                                }}
                              >
                                <FileText className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-4">
                <h4 className="font-semibold">Notifications & Alerts</h4>
                <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <Bell className="h-4 w-4 text-primary mt-1" />
                    <div>
                      <div className="font-medium">Refund spike</div>
                      <div className="text-xs">3 refunds flagged on Oct 30</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Bell className="h-4 w-4 text-primary mt-1" />
                    <div>
                      <div className="font-medium">High volume</div>
                      <div className="text-xs">Volume increased 12% this week</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <h4 className="font-semibold">AI Optimization</h4>
                <p className="text-sm text-muted-foreground">Automations to reduce failed payouts and optimize routing.</p>
                <div className="mt-3 flex flex-col gap-2">
                  <Button variant="outline" size="sm">Enable Auto-Reroute</Button>
                  <Button size="sm">Run Optimization</Button>
                </div>
              </Card>
            </div>
          </div>

          {/* Analytics charts + Export & Audit panel */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer id="tx-line" config={{ volume: { label: "Volume", color: "#f97316" } }} className="h-56">
                    <svg className="w-full h-full" viewBox="0 0 100 40" />
                  </ChartContainer>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="p-4">
                  <h4 className="font-semibold">By Method</h4>
                  <div className="mt-3">
                    <ChartContainer id="tx-pie" config={{ methods: { label: "Methods", color: "#06b6d4" } }} className="h-40">
                      <svg className="w-full h-full" viewBox="0 0 100 40" />
                    </ChartContainer>
                  </div>
                </Card>

                <Card className="p-4">
                  <h4 className="font-semibold">By Status</h4>
                  <div className="mt-3">
                    <ChartContainer id="tx-bar" config={{ status: { label: "Status", color: "#34d399" } }} className="h-40">
                      <svg className="w-full h-full" viewBox="0 0 100 40" />
                    </ChartContainer>
                  </div>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-4">
                <h4 className="font-semibold">Export & Audit</h4>
                <p className="text-sm text-muted-foreground">Export CSV or run on-demand audit reports.</p>
                <div className="mt-3 flex flex-col gap-2">
                  <Button variant="outline">Export CSV</Button>
                  <Button>Run Audit</Button>
                </div>
              </Card>

              <Card className="p-4">
                <h4 className="font-semibold">Security & Transparency</h4>
                <p className="text-sm text-muted-foreground">All transactions are signed and auditable.</p>
                <div className="mt-3">
                  <Button variant="outline">View Audit Log</Button>
                </div>
              </Card>
            </div>
          </div>

          {/* Row details modal */}
          <Dialog open={detailsOpen} onOpenChange={setDetailsOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Transaction Details</DialogTitle>
                <DialogDescription>View full transaction details and audit trail.</DialogDescription>
              </DialogHeader>
              <div className="mt-2">
                {selected ? (
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">Type</div>
                    <div className="font-medium">{selected.type}</div>
                    <div className="text-sm text-muted-foreground">Method</div>
                    <div className="font-medium">{selected.method}</div>
                    <div className="text-sm text-muted-foreground">Amount</div>
                    <div className="font-medium">{selected.currency === "USD" ? `$${selected.amount}` : `${selected.amount} ${selected.currency}`}</div>
                    <div className="text-sm text-muted-foreground">Details</div>
                    <div className="font-mono text-sm">{selected.details}</div>
                  </div>
                ) : (
                  <div>No transaction selected</div>
                )}
              </div>
              <DialogFooter>
                <Button variant="outline">Close</Button>
                <Button onClick={() => { /* placeholder action */ }}>Export</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Transactions;

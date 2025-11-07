import React, { useState } from "react";
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
import { Wallet, Plus, Copy, Trash, Zap, Shield, Link as LinkIcon } from "lucide-react";
import Sidebar from "@/components/Sidebar";

const wallets = [
  {
    id: "w1",
    name: "Main USD Wallet",
    currency: "USD",
    balance: 8200.0,
    address: "0xA2...9F3",
    created: "2024-11-01",
  },
  {
    id: "w2",
    name: "Savings",
    currency: "USDC",
    balance: 3200.5,
    address: "0xB3...C12",
    created: "2024-08-19",
  },
  {
    id: "w3",
    name: "Crypto Reserve",
    currency: "BTC",
    balance: 0.0245,
    address: "bc1q...xyz",
    created: "2023-12-11",
  },
];

const portfolioData = [
  { date: "Jan", portfolio: 8000 },
  { date: "Feb", portfolio: 9200 },
  { date: "Mar", portfolio: 8700 },
  { date: "Apr", portfolio: 9800 },
  { date: "May", portfolio: 10400 },
  { date: "Jun", portfolio: 11200 },
  { date: "Jul", portfolio: 11800 },
  { date: "Aug", portfolio: 12500 },
  { date: "Sep", portfolio: 12100 },
  { date: "Oct", portfolio: 12450 },
];

const Wallets = () => {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />

      <div className="flex-1">
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold">Wallets</h1>
              <p className="text-sm text-muted-foreground">Manage your active wallets, view portfolio and security.</p>
            </div>

            <div className="flex items-center gap-3">
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="hidden md:inline-flex">
                    <Copy className="mr-2 h-4 w-4" />
                    Import Wallet
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Import Wallet</DialogTitle>
                    <DialogDescription>Paste your wallet seed or connect a hardware wallet.</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-2">
                    <label className="text-sm text-muted-foreground">Seed / Private Key (placeholder)</label>
                    <textarea className="w-full rounded border p-2" rows={4} />
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={() => setOpen(false)}>Import</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button className="inline-flex items-center">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Wallet
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add / Connect Wallet</DialogTitle>
                    <DialogDescription>Connect a new wallet or create one.</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-3">
                    <label className="text-sm text-muted-foreground">Wallet Name</label>
                    <input className="w-full rounded border p-2" placeholder="My New Wallet" />

                    <label className="text-sm text-muted-foreground">Currency</label>
                    <select className="w-full rounded border p-2">
                      <option>USD</option>
                      <option>USDC</option>
                      <option>BTC</option>
                      <option>ETH</option>
                    </select>
                  </div>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button>Add Wallet</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Top summary + AI banner */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">BTC</p>
                    <p className="text-2xl font-semibold">0.0245</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">≈ $750.00</p>
                    <p className="text-sm text-green-500">+4.2%</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">ETH</p>
                    <p className="text-2xl font-semibold">1.12</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">≈ $1,900.00</p>
                    <p className="text-sm text-red-500">-1.1%</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">USDC</p>
                    <p className="text-2xl font-semibold">$3,200.50</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Stable</p>
                    <p className="text-sm text-muted-foreground">0.0%</p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-4 flex items-center gap-4">
              <div className="flex-1">
                <h3 className="font-semibold">AI Insight</h3>
                <p className="text-sm text-muted-foreground">Your portfolio increased by 6% vs last month. AI suggests rebalancing towards USDC for stability.</p>
              </div>
              <div>
                <Button variant="gold">Run Suggestions</Button>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main column: wallets table + chart */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Wallets</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <tr>
                        <TableHead>Name</TableHead>
                        <TableHead>Currency</TableHead>
                        <TableHead>Balance</TableHead>
                        <TableHead>Actions</TableHead>
                      </tr>
                    </TableHeader>
                    <TableBody>
                      {wallets.map((w) => (
                        <React.Fragment key={w.id}>
                          <TableRow>
                            <TableCell>
                              <div className="font-semibold">{w.name}</div>
                              <div className="text-sm text-muted-foreground">{w.address}</div>
                            </TableCell>
                            <TableCell>{w.currency}</TableCell>
                            <TableCell>
                              {w.currency === "BTC" ? `${w.balance} BTC` : `$${w.balance.toLocaleString()}`}
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Button variant="ghost" size="sm" onClick={() => navigator.clipboard?.writeText(w.address)}>
                                  <Copy className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm" onClick={() => setExpanded(expanded === w.id ? null : w.id)}>
                                  <Zap className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Trash className="h-4 w-4 text-red-500" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>

                          {expanded === w.id ? (
                            <TableRow>
                              <TableCell colSpan={4} className="p-4">
                                <Card className="p-4">
                                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                      <p className="text-sm text-muted-foreground">Address</p>
                                      <p className="font-mono text-sm">{w.address}</p>
                                    </div>
                                    <div>
                                      <p className="text-sm text-muted-foreground">Created</p>
                                      <p className="text-sm">{w.created}</p>
                                    </div>
                                    <div>
                                      <p className="text-sm text-muted-foreground">Linked Channels</p>
                                      <p className="text-sm">Mobile Money, PayPal</p>
                                    </div>
                                  </div>
                                </Card>
                              </TableCell>
                            </TableRow>
                          ) : null}
                        </React.Fragment>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Portfolio</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    id="portfolio"
                    config={{ portfolio: { label: "Portfolio", color: "#F59E0B" } }}
                    className="h-60"
                  >
                    {/* Recharts-based chart */}
                    {/* We render a simple area chart inside the ChartContainer */}
                    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                    {/* @ts-ignore */}
                    <svg className="w-full h-full" viewBox="0 0 100 40" />
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>

            {/* Right column: security, channels, AI automation */}
            <div className="space-y-6">
              <Card className="p-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-primary/10">
                    <Shield className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Security</h4>
                    <p className="text-sm text-muted-foreground">2FA enabled • Recent device: Chrome on Linux</p>
                    <div className="mt-3">
                      <Button variant="outline" size="sm">
                        Manage Security
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-primary/10">
                    <LinkIcon className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Linked Payment Channels</h4>
                    <p className="text-sm text-muted-foreground">M-Pesa, PayPal, Bank Transfer</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-primary/10">
                    <Zap className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">AI Automation Summary</h4>
                    <p className="text-sm text-muted-foreground">2 active automations: Auto-convert to USDC when balance &gt; $10,000; Auto-payroll batching.</p>
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

export default Wallets;

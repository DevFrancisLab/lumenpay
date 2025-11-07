import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Plus, RefreshCw, Play, Pause, Trash2, Edit, Lightbulb, Activity } from "lucide-react";

type Rule = {
  id: string;
  name: string;
  trigger: string;
  action: string;
  status: "active" | "paused";
  lastRun: string;
};

const initialRules: Rule[] = [
  {
    id: "r1",
    name: "Auto-Convert BTC → USDC",
    trigger: "WHEN BTC wallet > $5000",
    action: "Convert to USDC and payout to M-Pesa",
    status: "active",
    lastRun: "1h ago",
  },
  {
    id: "r2",
    name: "Weekly Income Report",
    trigger: "Every Friday 5PM",
    action: "Send email summary + voice report",
    status: "paused",
    lastRun: "3d ago",
  },
  {
    id: "r3",
    name: "Smart Payout",
    trigger: "Balance > $1000",
    action: "Auto payout 50% to Stripe",
    status: "active",
    lastRun: "6h ago",
  },
];

const AutomationRules = () => {
  const [rules, setRules] = useState<Rule[]>(initialRules);
  const [openBuilder, setOpenBuilder] = useState(false);
  const [editing, setEditing] = useState<Rule | null>(null);

  const toggleRule = (id: string) => {
    setRules((r) => r.map((rule) => (rule.id === id ? { ...rule, status: rule.status === "active" ? "paused" : "active" } : rule)));
  };

  const deleteRule = (id: string) => {
    setRules((r) => r.filter((rr) => rr.id !== id));
  };

  const saveRule = (rule: Rule) => {
    setRules((r) => {
      const exists = r.some((x) => x.id === rule.id);
      if (exists) return r.map((x) => (x.id === rule.id ? rule : x));
      return [rule, ...r];
    });
    setOpenBuilder(false);
    setEditing(null);
  };

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />

      <div className="flex-1 p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Automation Rules</h1>
            <p className="text-sm text-muted-foreground">Create and manage intelligent triggers for automation.</p>
          </div>

          <div className="flex items-center gap-3">
            <Dialog open={openBuilder} onOpenChange={setOpenBuilder}>
              <DialogTrigger asChild>
                <Button variant="gold" onClick={() => { setEditing(null); setOpenBuilder(true); }}>
                  <Plus className="mr-2 h-4 w-4" /> New Rule
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{editing ? `Edit Rule: ${editing.name}` : "New Rule"}</DialogTitle>
                  <DialogDescription>Create or edit automation rules.</DialogDescription>
                </DialogHeader>
                {/* Simple builder placeholder: in a real app we'd use forms */}
                <div className="grid gap-3">
                  <label className="text-sm text-muted-foreground">IF (Trigger)</label>
                  <input className="w-full rounded border p-2" placeholder="Trigger expression or schedule" defaultValue={editing?.trigger ?? ""} />

                  <label className="text-sm text-muted-foreground">THEN (Action)</label>
                  <input className="w-full rounded border p-2" placeholder="Action to run" defaultValue={editing?.action ?? ""} />

                  <label className="text-sm text-muted-foreground">Rule Name</label>
                  <input className="w-full rounded border p-2" placeholder="Rule name" defaultValue={editing?.name ?? ""} />
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => { setOpenBuilder(false); setEditing(null); }}>Cancel</Button>
                  <Button onClick={() => {
                    // lightweight save using simple values (not hooked to form libs)
                    const el = (document.activeElement as HTMLElement) || document.body;
                    const inputs = Array.from(document.querySelectorAll("[placeholder]")) as HTMLInputElement[];
                    const name = inputs[2]?.value || `Rule ${Date.now()}`;
                    const trigger = inputs[0]?.value || "";
                    const action = inputs[1]?.value || "";
                    const newRule: Rule = editing ? { ...editing, name, trigger, action } : { id: `r${Date.now()}`, name, trigger, action, status: "active", lastRun: "never" };
                    saveRule(newRule);
                  }}>Save Rule</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <select className="rounded border p-2">
              <option>All</option>
              <option>Active</option>
              <option>Paused</option>
            </select>
            <Button variant="outline"><RefreshCw className="mr-2 h-4 w-4" />Refresh</Button>
          </div>
        </div>

        {/* Overview cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Rules</p>
                <p className="text-2xl font-semibold">{rules.filter((r) => r.status === "active").length}</p>
              </div>
              <div className="text-muted-foreground"><Play /></div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Paused Rules</p>
                <p className="text-2xl font-semibold">{rules.filter((r) => r.status === "paused").length}</p>
              </div>
              <div className="text-muted-foreground"><Pause /></div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Success Rate</p>
                <p className="text-2xl font-semibold">94%</p>
              </div>
              <div className="text-muted-foreground"><Lightbulb /></div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Last Run</p>
                <p className="text-2xl font-semibold">3 mins ago</p>
              </div>
              <div className="text-muted-foreground"><Activity /></div>
            </div>
          </Card>
        </div>

        {/* Rules list */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          <div className="space-y-4">
            {rules.map((rule) => (
              <Card key={rule.id} className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">{rule.name}</h3>
                    <p className="text-sm text-muted-foreground">Trigger: {rule.trigger}</p>
                    <p className="text-sm text-muted-foreground">Action: {rule.action}</p>
                    <p className="text-xs text-muted-foreground mt-2">Last Run: {rule.lastRun} • Status: {rule.status}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" onClick={() => toggleRule(rule.id)}>{rule.status === "active" ? "Pause" : "Resume"}</Button>
                      <Button variant="ghost" size="sm" onClick={() => { setEditing(rule); setOpenBuilder(true); }}><Edit className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="sm" onClick={() => deleteRule(rule.id)}><Trash2 className="h-4 w-4 text-red-500" /></Button>
                    </div>
                    <div>
                      <Button variant="link">View History →</Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Right column: AI recommendations & activity log */}
          <div className="space-y-4">
            <Card className="p-4">
              <h4 className="font-semibold">AI Recommendations</h4>
              <div className="mt-3 space-y-2 text-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-medium">Suggested: Rebalance conversion threshold</div>
                    <div className="text-xs text-muted-foreground">Increase threshold to $6,000 to avoid small conversions.</div>
                  </div>
                  <div>
                    <Button size="sm">Apply</Button>
                  </div>
                </div>

                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-medium">Suggested: Pause low-volume rules</div>
                    <div className="text-xs text-muted-foreground">Rules with &lt; 3 triggers/month can be paused.</div>
                  </div>
                  <div>
                    <Button size="sm">Review</Button>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <h4 className="font-semibold">Activity Log</h4>
              <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                <div>✅ Auto-Convert executed for wallet 0xA2...9F3 (1h ago)</div>
                <div>⚠️ Weekly Income Report failed to send (3d ago)</div>
                <div>✅ Smart Payout completed (6h ago)</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationRules;

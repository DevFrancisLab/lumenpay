import { useMemo, useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChartContainer } from "@/components/ui/chart";
import { Search, RefreshCw, Download, TrendingUp, DollarSign, Repeat, MessageSquare } from "lucide-react";

const insights = [
  {
    id: "i1",
    icon: "💡",
    text: "Your USD wallet balance is 25% higher this quarter.",
    tag: "Forecast",
  },
  {
    id: "i2",
    icon: "📊",
    text: "Most conversions occur between 9AM–12PM. Consider scheduling.",
    tag: "Optimization",
  },
  {
    id: "i3",
    icon: "📈",
    text: "AI predicts +10% income growth next week.",
    tag: "Prediction",
  },
];

const OverviewCards = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    <Card className="p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Spending Trend</p>
          <p className="text-xl font-semibold">↑ 8%</p>
        </div>
        <div className="text-muted-foreground">📈</div>
      </div>
      <div className="mt-3 h-6">
        {/* small sparkline placeholder */}
        <svg className="w-full h-full" viewBox="0 0 100 10" />
      </div>
    </Card>

    <Card className="p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Income Flow</p>
          <p className="text-xl font-semibold">Ksh 124,000</p>
          <p className="text-sm text-muted-foreground">This Month</p>
        </div>
        <div className="text-muted-foreground">💵</div>
      </div>
    </Card>

    <Card className="p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Conversion Efficiency</p>
          <p className="text-xl font-semibold">92%</p>
          <p className="text-sm text-muted-foreground">+5% vs last week</p>
        </div>
        <div className="text-muted-foreground">🔁</div>
      </div>
    </Card>

    <Card className="p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">AI Confidence</p>
          <p className="text-xl font-semibold">87%</p>
          <p className="text-sm text-muted-foreground">Model Accuracy</p>
        </div>
        <div className="text-muted-foreground">🤖</div>
      </div>
    </Card>
  </div>
);

const AIInsights = () => {
  const [search, setSearch] = useState("");
  const [timeframe, setTimeframe] = useState("30d");
  const [assistantOpen, setAssistantOpen] = useState(true);
  const [messages, setMessages] = useState<Array<{ from: "user" | "ai"; text: string }>>([
    { from: "ai", text: "Hello — how can I help with your insights today?" },
  ]);
  const [input, setInput] = useState("");

  const filteredInsights = useMemo(() => {
    if (!search) return insights;
    return insights.filter((i) => i.text.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = { from: "user" as const, text: input.trim() };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    // fake AI reply
    setTimeout(() => {
      setMessages((m) => [...m, { from: "ai", text: "Likely around Ksh 97,000 based on current trends." }]);
    }, 700);
  };

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />

      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">AI Insights</h1>
            <p className="text-sm text-muted-foreground">Actionable insights powered by our models</p>
            <p className="text-xs text-muted-foreground mt-1">Last updated: 2 mins ago</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center border rounded px-3 py-1 gap-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input placeholder="Search insights..." className="outline-none bg-transparent" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <select value={timeframe} onChange={(e) => setTimeframe(e.target.value)} className="rounded border p-2">
              <option value="7d">7d</option>
              <option value="30d">30d</option>
              <option value="90d">90d</option>
            </select>
            <Button variant="outline"><RefreshCw className="mr-2 h-4 w-4" />Refresh</Button>
            <Button variant="outline"><Download className="mr-2 h-4 w-4" />Export PDF</Button>
          </div>
        </div>

        {/* Overview cards */}
        <OverviewCards />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Insights feed */}
          <div className="lg:col-span-2 space-y-4">
            {filteredInsights.map((ins) => (
              <Card key={ins.id} className="p-4">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">{ins.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm">{ins.text}</p>
                      <span className="text-xs rounded bg-muted/30 px-2 py-1">{ins.tag}</span>
                    </div>
                    <div className="mt-2">
                      <Button variant="link">View Details →</Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            {/* Visual analytics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <Card>
                <CardHeader>
                  <CardTitle>Spending Forecast (30 Days)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-muted-foreground">Toggle: Actual / AI</div>
                    <div className="text-sm text-muted-foreground">Actual</div>
                  </div>
                  <ChartContainer id="spend-forecast" config={{ spend: { label: "Spend", color: "#fb923c" } }} className="h-48">
                    <svg className="w-full h-full" viewBox="0 0 100 40" />
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Income vs Expenses (AI Adjusted)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer id="income-expenses" config={{ income: { label: "Income", color: "#10b981" } }} className="h-48">
                    <svg className="w-full h-full" viewBox="0 0 100 40" />
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Conversion Rate Prediction</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer id="conv-pred" config={{ conv: { label: "Conv", color: "#6366f1" } }} className="h-48">
                  <svg className="w-full h-full" viewBox="0 0 100 40" />
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* Right column: AI assistant + settings */}
          <div className="space-y-4">
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Lumen AI Assistant 🤖</h4>
                <Button variant="outline" size="sm" onClick={() => setAssistantOpen((s) => !s)}>
                  {assistantOpen ? "Hide" : "Show"}
                </Button>
              </div>
              {assistantOpen && (
                <div className="mt-3 border rounded p-3 flex flex-col gap-2">
                  <div className="h-40 overflow-auto bg-muted/5 p-2 rounded">
                    {messages.map((m, i) => (
                      <div key={i} className={m.from === "user" ? "text-right" : "text-left"}>
                        <div className={`inline-block rounded px-3 py-1 ${m.from === "user" ? "bg-primary/10" : "bg-muted/20"}`}>{m.text}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded border"><MessageSquare className="h-4 w-4" /></button>
                    <input className="flex-1 rounded border px-2 py-1" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a question..." onKeyDown={(e) => e.key === 'Enter' && sendMessage()} />
                    <Button onClick={sendMessage}>➤</Button>
                  </div>
                </div>
              )}
            </Card>

            <Card className="p-4">
              <h4 className="font-semibold">AI Insights Settings</h4>
              <div className="mt-3 space-y-2 text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked />
                  Daily Summaries
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Weekly Email Reports
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked />
                  Predictive Alerts
                </label>

                <label className="block mt-2 text-sm text-muted-foreground">Change Voice (ElevenLabs)</label>
                <select className="w-full rounded border p-2">
                  <option>Neutral - Emma</option>
                  <option>Assertive - John</option>
                </select>

                <div className="mt-3">
                  <Button variant="link">Manage Automation Rules →</Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInsights;

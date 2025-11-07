import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { HelpCircle, Mail, MessageSquare, Clock } from "lucide-react";
import ContactSupportLink from "@/components/ContactSupportLink";
import { useLocation } from "react-router-dom";

const mockTickets = [
  { id: "TCK-001", subject: "Unable to connect M-Pesa", status: "open", date: "2025-11-06" },
  { id: "TCK-002", subject: "Refund not processed", status: "in progress", date: "2025-11-04" },
  { id: "TCK-003", subject: "API key rotation", status: "closed", date: "2025-10-28" },
];

const Support = () => {
  const [tickets] = useState(mockTickets);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const submitTicket = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submit: in future hook to React Query + backend
    // For now just clear
    setEmail("");
    setMessage("");
    alert("Support request submitted (mock)");
  };

  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact") {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />

      <main className="flex-1 p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Support</h1>
            <p className="text-sm text-muted-foreground">Get help, submit a ticket or browse the knowledge base.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline">Knowledge base</Button>
            <ContactSupportLink>Contact support</ContactSupportLink>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-4">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded bg-muted/10"><HelpCircle className="h-6 w-6 text-primary" /></div>
                <div className="flex-1">
                  <h3 className="font-semibold">Open Support Tickets</h3>
                  <p className="text-sm text-muted-foreground">Track recent issues and their status.</p>

                  <div className="mt-4 space-y-3">
                    {tickets.map((t) => (
                      <div key={t.id} className="flex items-center justify-between p-3 border rounded">
                        <div>
                          <div className="font-medium">{t.subject}</div>
                          <div className="text-xs text-muted-foreground">{t.id} • {t.date}</div>
                        </div>
                        <div className="text-sm">
                          <span className={`px-2 py-1 rounded text-xs ${t.status === "open" ? "bg-yellow-100 text-yellow-800" : t.status === "in progress" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"}`}>
                            {t.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded bg-muted/10"><MessageSquare className="h-6 w-6 text-primary" /></div>
                <div className="flex-1">
                  <h3 className="font-semibold">Contact Support</h3>
                  <p className="text-sm text-muted-foreground">Send us a message and our team will get back to you.</p>

                  <form id="contact" onSubmit={submitTicket} className="mt-4 grid gap-2">
                    <Input placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Textarea placeholder="Describe the issue" value={message} onChange={(e) => setMessage(e.target.value)} />
                    <div className="flex gap-2">
                      <Button type="submit">Submit</Button>
                      <Button variant="outline">Cancel</Button>
                    </div>
                  </form>
                </div>
              </div>
            </Card>
          </div>

          <aside className="space-y-6">
            <Card className="p-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-muted/10"><Mail className="h-6 w-6 text-primary" /></div>
                <div>
                  <h4 className="font-semibold">Support Hours</h4>
                  <p className="text-sm text-muted-foreground">Mon — Fri, 08:00 — 18:00</p>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-muted/10"><Clock className="h-6 w-6 text-primary" /></div>
                <div>
                  <h4 className="font-semibold">Response SLA</h4>
                  <p className="text-sm text-muted-foreground">Typical first response within 24 hours.</p>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <h4 className="font-semibold mb-2">Quick links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="text-primary hover:underline">Knowledge base</a></li>
                <li><a href="#" className="text-primary hover:underline">API docs</a></li>
                <li><a href="#" className="text-primary hover:underline">Status page</a></li>
              </ul>
            </Card>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Support;

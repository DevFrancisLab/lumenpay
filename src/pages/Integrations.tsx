import Sidebar from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Usb, Plug } from "lucide-react";

const mockProviders = [
  { id: "mpesa", name: "M-Pesa", status: "connected", description: "Mobile money channel" },
  { id: "stripe", name: "Stripe", status: "connected", description: "Card processing" },
  { id: "flutterwave", name: "Flutterwave", status: "disconnected", description: "Payments gateway" },
  { id: "payfast", name: "Payfast", status: "disconnected", description: "Local payments" },
];

const Integrations = () => {
  const [providers] = useState(mockProviders);

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />

      <main className="flex-1 p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Integrations</h1>
            <p className="text-sm text-muted-foreground">Connect and manage payment channels, webhooks and third-party services.</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">Refresh</Button>
            <Button>Connect new</Button>
          </div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {providers.map((p) => (
            <Card key={p.id} className="p-4">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded bg-muted/10">
                  {p.status === "connected" ? <Plug className="h-6 w-6 text-success" /> : <Usb className="h-6 w-6 text-muted-foreground" />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{p.name}</h3>
                      <p className="text-xs text-muted-foreground">{p.description}</p>
                    </div>
                    <div className="text-sm">
                      <span className={`px-2 py-1 rounded text-xs ${p.status === "connected" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}>
                        {p.status}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    {p.status === "connected" ? (
                      <>
                        <Button variant="ghost">Manage</Button>
                        <Button variant="destructive">Disconnect</Button>
                      </>
                    ) : (
                      <Button>Connect</Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </section>

        <section className="mt-8">
          <Card className="p-4">
            <h3 className="font-semibold">Webhooks & API</h3>
            <p className="text-sm text-muted-foreground">Manage webhook endpoints and API/webhook signing keys.</p>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Webhook endpoints</p>
                    <p className="text-xs text-muted-foreground">Receive events for payments, payouts and refunds.</p>
                  </div>
                  <div>
                    <Button variant="outline">View</Button>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Signing keys</p>
                    <p className="text-xs text-muted-foreground">Rotate your webhook signing keys securely.</p>
                  </div>
                  <div>
                    <Button variant="outline">Rotate</Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Integrations;

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { User, Shield, Bell, Key, CreditCard, Cpu } from "lucide-react";

const Settings = () => {
  const [openPwd, setOpenPwd] = useState(false);

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />

      <div className="flex-1 p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Settings</h1>
            <p className="text-sm text-muted-foreground">Manage account, security, integrations and preferences.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline">Restore Defaults</Button>
            <Button variant="gold">Save Changes</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column: profile & security */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded bg-muted/10"><User className="h-6 w-6 text-primary" /></div>
                <div className="flex-1">
                  <h3 className="font-semibold">Profile</h3>
                  <p className="text-sm text-muted-foreground">Update your personal and business information.</p>

                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input className="rounded border p-2" placeholder="Full name" defaultValue="Frank" />
                    <input className="rounded border p-2" placeholder="Email" defaultValue="frank@example.com" />
                    <input className="rounded border p-2" placeholder="Company" defaultValue="DevFrancisLab" />
                    <input className="rounded border p-2" placeholder="Phone" defaultValue="+2547xxxxxxx" />
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded bg-muted/10"><Shield className="h-6 w-6 text-primary" /></div>
                <div className="flex-1">
                  <h3 className="font-semibold">Security</h3>
                  <p className="text-sm text-muted-foreground">Manage passwords, two-factor authentication and sessions.</p>

                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Two-factor Authentication</p>
                        <p className="text-xs text-muted-foreground">Use an authenticator app for additional security.</p>
                      </div>
                      <div>
                        <label className="inline-flex items-center gap-2">
                          <input type="checkbox" defaultChecked />
                        </label>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Change Password</p>
                        <p className="text-xs text-muted-foreground">Update your account password regularly.</p>
                      </div>
                      <div>
                        <Dialog open={openPwd} onOpenChange={setOpenPwd}>
                          <DialogTrigger asChild>
                            <Button variant="outline">Change</Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Change Password</DialogTitle>
                              <DialogDescription>Enter a new secure password for your account.</DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-2">
                              <input type="password" placeholder="Current password" className="rounded border p-2" />
                              <input type="password" placeholder="New password" className="rounded border p-2" />
                              <input type="password" placeholder="Confirm new password" className="rounded border p-2" />
                            </div>
                            <DialogFooter>
                              <Button variant="outline" onClick={() => setOpenPwd(false)}>Cancel</Button>
                              <Button onClick={() => setOpenPwd(false)}>Save</Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded bg-muted/10"><Bell className="h-6 w-6 text-primary" /></div>
                <div className="flex-1">
                  <h3 className="font-semibold">Notifications</h3>
                  <p className="text-sm text-muted-foreground">Control alerts and notification preferences.</p>

                  <div className="mt-4 space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked />
                      Email alerts
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" />
                      Push notifications
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked />
                      SMS alerts
                    </label>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right column: integrations, api & billing */}
          <div className="space-y-6">
            <Card className="p-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded bg-muted/10"><LinkIcon /></div>
                <div className="flex-1">
                  <h3 className="font-semibold">Integrations</h3>
                  <p className="text-sm text-muted-foreground">Connect third-party services and payment channels.</p>
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm">M-Pesa</div>
                      <div><Button variant="ghost" size="sm">Disconnect</Button></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">Stripe</div>
                      <div><Button variant="ghost" size="sm">Manage</Button></div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded bg-muted/10"><Key className="h-6 w-6 text-primary" /></div>
                <div className="flex-1">
                  <h3 className="font-semibold">API Keys</h3>
                  <p className="text-sm text-muted-foreground">Create and manage API keys for programmatic access.</p>
                  <div className="mt-3 flex gap-2">
                    <Button variant="outline">Create Key</Button>
                    <Button>View Keys</Button>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded bg-muted/10"><CreditCard className="h-6 w-6 text-primary" /></div>
                <div className="flex-1">
                  <h3 className="font-semibold">Billing</h3>
                  <p className="text-sm text-muted-foreground">View invoices, update card and manage subscription.</p>
                  <div className="mt-3">
                    <Button variant="outline">View Invoices</Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

// fallback small icon to avoid extra imports
const LinkIcon = () => (
  <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 14a4 4 0 005.657 0l1.414-1.414a4 4 0 10-5.657-5.657L10 8.343" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 10a4 4 0 00-5.657 0L6.93 11.414A4 4 0 0012.586 17l1.414-1.414" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default Settings;

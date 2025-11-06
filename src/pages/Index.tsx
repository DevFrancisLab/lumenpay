import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Brain, Shield, Coins, ArrowRightLeft, Twitter, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-ai-crypto.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0" />
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase border border-primary/30 rounded-full px-4 py-2">
                Powered by AI & Arc
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              AI-powered crypto payments bridging{" "}
              <span className="text-primary">global digital assets</span> and real-world money
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Convert crypto to USDC and receive instant payouts via M-Pesa, PayPal, or Stripe — powered by AI and Arc.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button variant="gold" size="xl" className="group">
                Get Started
                <ArrowRightLeft className="ml-2 group-hover:rotate-180 transition-transform duration-500" />
              </Button>
              <Button variant="gold-outline" size="xl">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card/50 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Why Choose <span className="text-primary">LumenPay AI</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Seamlessly bridge the gap between cryptocurrency and traditional finance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Feature 1 */}
            <Card className="bg-card border-border p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(51_100%_50%/0.2)] group">
              <div className="mb-6 inline-block p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Automation</h3>
              <p className="text-muted-foreground">
                Intelligent agents monitor your crypto, decide optimal conversion paths, and execute payments automatically.
              </p>
            </Card>

            {/* Feature 2 */}
            <Card className="bg-card border-border p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(51_100%_50%/0.2)] group">
              <div className="mb-6 inline-block p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Coins className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">USDC Settlements on Arc</h3>
              <p className="text-muted-foreground">
                All transactions are stable, programmable, and auditable using Circle USDC on Arc.
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className="bg-card border-border p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(51_100%_50%/0.2)] group">
              <div className="mb-6 inline-block p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <ArrowRightLeft className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Real-World Payouts</h3>
              <p className="text-muted-foreground">
                Seamlessly receive funds to M-Pesa, PayPal, Stripe, or your preferred wallet.
              </p>
            </Card>

            {/* Feature 4 */}
            <Card className="bg-card border-border p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(51_100%_50%/0.2)] group">
              <div className="mb-6 inline-block p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Secure & Transparent</h3>
              <p className="text-muted-foreground">
                Track every transaction with a transparent, auditable ledger powered by blockchain technology.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Powerful <span className="text-primary">Dashboard</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Monitor your crypto deposits, conversion status, and payout history in real-time
            </p>
          </div>

          <Card className="max-w-6xl mx-auto bg-card border-primary/20 overflow-hidden shadow-[0_0_50px_hsl(51_100%_50%/0.15)]">
            <div className="bg-gradient-to-br from-card via-card to-primary/5 p-8 md:p-12">
              {/* Dashboard Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">Transaction Overview</h3>
                <p className="text-muted-foreground">Last updated: Just now</p>
              </div>

              {/* Stats Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-background/50 backdrop-blur border border-border rounded-lg p-6">
                  <p className="text-muted-foreground text-sm mb-2">Crypto Balance</p>
                  <p className="text-3xl font-bold text-primary">$12,450.00</p>
                  <p className="text-sm text-muted-foreground mt-1">≈ 0.245 BTC</p>
                </div>
                
                <div className="bg-background/50 backdrop-blur border border-border rounded-lg p-6">
                  <p className="text-muted-foreground text-sm mb-2">USDC Converted</p>
                  <p className="text-3xl font-bold">$8,200.00</p>
                  <p className="text-sm text-green-500 mt-1">+12% this week</p>
                </div>
                
                <div className="bg-background/50 backdrop-blur border border-border rounded-lg p-6">
                  <p className="text-muted-foreground text-sm mb-2">Total Payouts</p>
                  <p className="text-3xl font-bold">$7,950.00</p>
                  <p className="text-sm text-muted-foreground mt-1">23 transactions</p>
                </div>
              </div>

              {/* Recent Transactions */}
              <div className="bg-background/50 backdrop-blur border border-border rounded-lg p-6">
                <h4 className="font-bold text-lg mb-4">Recent Transactions</h4>
                <div className="space-y-3">
                  {[
                    { type: "Payout", method: "M-Pesa", amount: "$250.00", status: "Completed" },
                    { type: "Conversion", method: "BTC → USDC", amount: "$1,200.00", status: "Processing" },
                    { type: "Payout", method: "PayPal", amount: "$450.00", status: "Completed" },
                  ].map((tx, i) => (
                    <div key={i} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                      <div className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <div>
                          <p className="font-semibold">{tx.type}</p>
                          <p className="text-sm text-muted-foreground">{tx.method}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{tx.amount}</p>
                        <p className={`text-sm ${tx.status === "Completed" ? "text-green-500" : "text-primary"}`}>
                          {tx.status}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-card/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Trusted by <span className="text-primary">Early Adopters</span> Worldwide
            </h2>
            <p className="text-xl text-muted-foreground">See what our users have to say</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "LumenPay AI made converting crypto into usable money effortless. The AI automation is genius!",
                author: "Alex K.",
                role: "Beta User"
              },
              {
                quote: "Finally, a platform that bridges crypto and traditional finance seamlessly. The M-Pesa integration is a game-changer.",
                author: "Sarah M.",
                role: "Freelancer"
              },
              {
                quote: "The transparency and speed of USDC settlements on Arc give me peace of mind. Highly recommended!",
                author: "James T.",
                role: "Crypto Trader"
              }
            ].map((testimonial, i) => (
              <Card key={i} className="bg-card border-border p-8 hover:border-primary/50 transition-all duration-300 relative">
                <div className="text-primary text-6xl font-serif leading-none mb-4 opacity-30">"</div>
                <p className="text-lg mb-6 relative z-10">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">{testimonial.author.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-primary">Lumen</span>Pay AI
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Bridging cryptocurrency and real-world finance with AI-powered automation. Convert, settle, and payout with confidence.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all">
                  <Twitter className="w-5 h-5 text-primary" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all">
                  <Github className="w-5 h-5 text-primary" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all">
                  <Linkedin className="w-5 h-5 text-primary" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all">
                  <Mail className="w-5 h-5 text-primary" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">API</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="border-t border-border pt-12">
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <h4 className="text-2xl font-bold">Stay Updated on <span className="text-primary">LumenPay AI</span></h4>
              <p className="text-muted-foreground">Get the latest updates, news, and insights delivered to your inbox.</p>
              <div className="flex gap-2 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-card border-border focus:border-primary"
                />
                <Button variant="gold" size="lg">Subscribe</Button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground text-sm">
            <p>&copy; 2025 LumenPay AI. All rights reserved. Built with AI, powered by Arc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

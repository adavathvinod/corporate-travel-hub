import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { 
  LogIn, Mail, Lock, Eye, EyeOff, Shield, 
  ArrowRight, Phone, HelpCircle
} from "lucide-react";

export default function Portal() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // This would integrate with actual authentication
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-12">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Login Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-card rounded-2xl border border-border shadow-card p-8 md:p-10">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <LogIn className="h-8 w-8 text-primary" />
                  </div>
                  <h1 className="text-2xl font-bold text-foreground mb-2">Client Portal Login</h1>
                  <p className="text-muted-foreground">
                    Access your dashboard, invoices, and reports
                  </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        className="pl-10"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <a href="#" className="text-sm text-primary hover:underline">
                        Forgot password?
                      </a>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="pl-10 pr-10"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  <Button type="submit" variant="corporate" className="w-full gap-2">
                    Sign In to Portal
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4 text-[hsl(158,64%,40%)]" />
                    <span>Protected by 2FA • SSL Encrypted</span>
                  </div>
                </div>

                <div className="mt-6 text-center text-sm text-muted-foreground">
                  Not a client yet?{" "}
                  <Link to="/quote" className="text-primary hover:underline font-medium">
                    Request a quote
                  </Link>
                </div>
              </div>
            </div>

            {/* Right - Info */}
            <div className="order-1 lg:order-2">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Client Portal
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Manage Your Corporate Transportation
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Access real-time tracking, invoices, reports, and more through our 
                secure client portal.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { title: "Real-Time Dashboard", desc: "Track active trips and vehicle locations" },
                  { title: "Invoice Management", desc: "View, download, and pay invoices online" },
                  { title: "Custom Reports", desc: "Generate usage and cost analysis reports" },
                  { title: "User Management", desc: "Manage team access and permissions" },
                ].map((feature) => (
                  <div key={feature.title} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                    <div className="w-8 h-8 rounded-lg bg-[hsl(158,64%,40%)]/10 flex items-center justify-center shrink-0">
                      <Shield className="h-4 w-4 text-[hsl(158,64%,40%)]" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{feature.title}</div>
                      <div className="text-sm text-muted-foreground">{feature.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-muted border border-border">
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground mb-1">Need Help?</div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Contact our support team for portal access or technical assistance.
                    </p>
                    <a 
                      href="tel:+918523880666" 
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <Phone className="h-4 w-4" />
                      +91 8523880666
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

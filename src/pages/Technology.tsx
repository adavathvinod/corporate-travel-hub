import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Cpu, MapPin, Shield, BarChart3, Smartphone, 
  ArrowRight, CheckCircle2, Zap, Clock, Users
} from "lucide-react";

const integrationFeatures = [
  {
    icon: Smartphone,
    title: "OTP-Verified Rides",
    description: "Every ride starts with OTP verification, ensuring only authorized employees board the vehicle."
  },
  {
    icon: MapPin,
    title: "Real-Time GPS Tracking",
    description: "Track all your assigned vehicles in real-time through the client portal or mobile app."
  },
  {
    icon: Zap,
    title: "Route Optimization",
    description: "AI-powered routing algorithms minimize travel time and fuel consumption for efficient commutes."
  },
  {
    icon: Shield,
    title: "SOS & Safety Alerts",
    description: "Emergency SOS button in every vehicle connected to our 24/7 control room."
  },
  {
    icon: BarChart3,
    title: "Comprehensive Reporting",
    description: "Download detailed reports on usage, punctuality, cost centers, and more."
  },
  {
    icon: Users,
    title: "Employee Self-Service",
    description: "Employees can book, modify, and track their rides through the mobile app."
  },
];

const clientPortalFeatures = [
  {
    title: "Real-Time Dashboard",
    description: "View live status of all active trips, vehicle locations, and driver assignments in one place.",
    items: ["Live vehicle tracking on map", "Active trip status", "Driver details and contact", "ETA predictions"]
  },
  {
    title: "Financial Management",
    description: "Complete visibility into billing, invoices, and payment history.",
    items: ["View & download invoices", "Online payment integration", "Cost center allocation", "Budget tracking"]
  },
  {
    title: "Analytics & Reports",
    description: "Generate custom reports to analyze usage patterns and optimize costs.",
    items: ["Trip history reports", "Punctuality metrics", "Usage breakdown by department", "CSV/PDF export"]
  },
  {
    title: "User Management",
    description: "Hierarchical access control for different stakeholders.",
    items: ["Admin/HR full access", "Manager department view", "Employee self-service", "Custom role creation"]
  },
];

export default function Technology() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-corporate-navy via-primary-dark to-primary text-primary-foreground py-20">
          <div className="container">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-sm font-medium mb-4">
                Technology
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Powered by MoveInSync Integration
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Experience seamless corporate transportation with our deep technology 
                integration that delivers real-time visibility, safety, and efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* MoveInSync Integration */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-[hsl(200,85%,55%)]/10 text-[hsl(200,85%,55%)] text-sm font-medium mb-4">
                  Fleet Management
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  MoveInSync Integration
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our operations are powered by MoveInSync — India's leading employee 
                  transportation management platform. This integration enables:
                </p>
                <ul className="space-y-3">
                  {[
                    "Real-time two-way data exchange",
                    "Automated trip scheduling and dispatch",
                    "Live GPS tracking and ETA updates",
                    "Instant billing and invoice generation",
                    "Comprehensive safety compliance"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[hsl(158,64%,40%)]" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card rounded-2xl border border-border p-8 shadow-card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[hsl(200,85%,55%)]/10 flex items-center justify-center">
                    <Cpu className="h-7 w-7 text-[hsl(200,85%,55%)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">API Integration</h3>
                    <p className="text-sm text-muted-foreground">Two-way real-time sync</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-sm text-muted-foreground">API Uptime</span>
                    <span className="font-semibold text-[hsl(158,64%,40%)]">99.9%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-sm text-muted-foreground">Data Sync</span>
                    <span className="font-semibold text-[hsl(200,85%,55%)]">Real-time</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-sm text-muted-foreground">Security</span>
                    <span className="font-semibold text-primary">SSL/TLS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrationFeatures.map((feature) => (
                <div 
                  key={feature.title}
                  className="bg-card rounded-2xl border border-border p-6 hover:shadow-card-hover hover:border-primary/20 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Portal */}
        <section className="py-20 bg-card">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Client Portal
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Secure Client Portal Features
              </h2>
              <p className="text-lg text-muted-foreground">
                Access everything you need to manage your corporate transportation 
                through our secure, role-based client portal.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {clientPortalFeatures.map((feature) => (
                <div 
                  key={feature.title}
                  className="bg-background rounded-2xl border border-border p-8"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-[hsl(158,64%,40%)]" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/portal">
                <Button variant="corporate" size="lg" className="gap-2">
                  Access Client Portal
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Performance */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="bg-gradient-to-br from-corporate-navy via-primary-dark to-primary rounded-3xl p-12 text-primary-foreground text-center">
              <h2 className="text-3xl font-bold mb-4">Performance & Reliability</h2>
              <p className="text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
                Our technology infrastructure is built for enterprise-grade performance and security.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl font-bold text-[hsl(200,85%,55%)]">99.9%</div>
                  <div className="text-sm text-primary-foreground/70 mt-1">Platform Uptime</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[hsl(158,64%,48%)]">SSL/TLS</div>
                  <div className="text-sm text-primary-foreground/70 mt-1">Encryption</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[hsl(38,92%,50%)]">2FA</div>
                  <div className="text-sm text-primary-foreground/70 mt-1">Authentication</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white">90+</div>
                  <div className="text-sm text-primary-foreground/70 mt-1">PageSpeed Score</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted">
          <div className="container text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              See Our Technology in Action
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule a demo to see how our technology integration can streamline 
              your corporate transportation operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/quote">
                <Button variant="corporate" size="lg" className="gap-2">
                  Request Demo
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

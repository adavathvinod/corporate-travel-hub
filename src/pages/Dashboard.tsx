import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, Car, FileText, BarChart3, Users, Settings,
  MapPin, Clock, CheckCircle2, AlertCircle, Download, LogOut,
  Phone, ChevronRight, TrendingUp, Calendar
} from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Car, label: "Active Trips", count: 12 },
  { icon: FileText, label: "Invoices", count: 3 },
  { icon: BarChart3, label: "Reports" },
  { icon: Users, label: "Users" },
  { icon: Settings, label: "Settings" },
];

const activeTrips = [
  { id: "TR-001", route: "Madhapur → Gachibowli", driver: "Ravi Kumar", vehicle: "TS09AB1234", status: "In Transit", eta: "12 mins" },
  { id: "TR-002", route: "Hitech City → Jubilee Hills", driver: "Suresh Reddy", vehicle: "TS09CD5678", status: "Pickup Done", eta: "25 mins" },
  { id: "TR-003", route: "Kondapur → Banjara Hills", driver: "Venkat Rao", vehicle: "TS09EF9012", status: "En Route", eta: "18 mins" },
];

const recentInvoices = [
  { id: "INV-2024-089", month: "November 2024", amount: "₹1,45,000", status: "Due", dueDate: "Dec 15" },
  { id: "INV-2024-078", month: "October 2024", amount: "₹1,38,500", status: "Paid", paidDate: "Nov 10" },
  { id: "INV-2024-067", month: "September 2024", amount: "₹1,42,200", status: "Paid", paidDate: "Oct 12" },
];

export default function Dashboard() {
  const [selectedNav, setSelectedNav] = useState("Dashboard");

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
        <div className="p-6 border-b border-sidebar-border">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sidebar-primary flex items-center justify-center text-sidebar-primary-foreground font-bold">
              AT
            </div>
            <div>
              <div className="font-semibold text-sidebar-foreground">AdityaTravels</div>
              <div className="text-xs text-sidebar-foreground/60">Client Portal</div>
            </div>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setSelectedNav(item.label)}
              className={cn(
                "w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm transition-colors",
                selectedNav === item.label
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </div>
              {item.count && (
                <span className="px-2 py-0.5 rounded-full bg-sidebar-primary text-sidebar-primary-foreground text-xs">
                  {item.count}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-sidebar-border">
          <div className="p-4 rounded-xl bg-sidebar-accent">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-sidebar-primary/20 flex items-center justify-center">
                <Phone className="h-5 w-5 text-sidebar-primary" />
              </div>
              <div>
                <div className="text-sm font-medium text-sidebar-foreground">Need Help?</div>
                <div className="text-xs text-sidebar-foreground/60">24/7 Support</div>
              </div>
            </div>
            <a href="tel:+918523880666" className="text-sm text-sidebar-primary hover:underline">
              +91 8523880666
            </a>
          </div>
        </div>

        <div className="p-4 border-t border-sidebar-border">
          <Link to="/">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-sidebar-foreground/70 hover:bg-sidebar-accent/50 transition-colors">
              <LogOut className="h-5 w-5" />
              <span>Sign Out</span>
            </button>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
          <div>
            <h1 className="text-lg font-semibold text-foreground">Welcome back, TechCorp Admin</h1>
            <p className="text-sm text-muted-foreground">Here's your transportation overview</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="h-5 w-5 text-primary" />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6 overflow-auto">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Car className="h-6 w-6 text-primary" />
                </div>
                <span className="text-xs font-medium text-[hsl(158,64%,40%)] bg-[hsl(158,64%,40%)]/10 px-2 py-1 rounded-full">
                  +5% ↑
                </span>
              </div>
              <div className="text-2xl font-bold text-foreground">12</div>
              <div className="text-sm text-muted-foreground">Active Trips</div>
            </div>

            <div className="bg-card rounded-xl border border-border p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[hsl(158,64%,40%)]/10 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-[hsl(158,64%,40%)]" />
                </div>
                <span className="text-xs font-medium text-[hsl(158,64%,40%)] bg-[hsl(158,64%,40%)]/10 px-2 py-1 rounded-full">
                  98.5%
                </span>
              </div>
              <div className="text-2xl font-bold text-foreground">847</div>
              <div className="text-sm text-muted-foreground">Trips This Month</div>
            </div>

            <div className="bg-card rounded-xl border border-border p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[hsl(38,92%,50%)]/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-[hsl(38,92%,50%)]" />
                </div>
                <span className="text-xs font-medium text-[hsl(38,92%,50%)] bg-[hsl(38,92%,50%)]/10 px-2 py-1 rounded-full">
                  On Track
                </span>
              </div>
              <div className="text-2xl font-bold text-foreground">4.2 min</div>
              <div className="text-sm text-muted-foreground">Avg Wait Time</div>
            </div>

            <div className="bg-card rounded-xl border border-border p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[hsl(200,85%,55%)]/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-[hsl(200,85%,55%)]" />
                </div>
                <span className="text-xs font-medium text-destructive bg-destructive/10 px-2 py-1 rounded-full">
                  Due Soon
                </span>
              </div>
              <div className="text-2xl font-bold text-foreground">₹1.45L</div>
              <div className="text-sm text-muted-foreground">Outstanding Balance</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Active Trips */}
            <div className="lg:col-span-2 bg-card rounded-xl border border-border">
              <div className="p-6 border-b border-border flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-foreground">Active Trips</h2>
                  <p className="text-sm text-muted-foreground">Real-time tracking</p>
                </div>
                <Button variant="ghost" size="sm" className="gap-2">
                  View All <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="divide-y divide-border">
                {activeTrips.map((trip) => (
                  <div key={trip.id} className="p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground">{trip.route}</div>
                          <div className="text-sm text-muted-foreground">{trip.driver} • {trip.vehicle}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={cn(
                          "text-xs font-medium px-2 py-1 rounded-full",
                          trip.status === "In Transit" ? "bg-[hsl(200,85%,55%)]/10 text-[hsl(200,85%,55%)]" :
                          trip.status === "Pickup Done" ? "bg-[hsl(158,64%,40%)]/10 text-[hsl(158,64%,40%)]" :
                          "bg-[hsl(38,92%,50%)]/10 text-[hsl(38,92%,50%)]"
                        )}>
                          {trip.status}
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">ETA: {trip.eta}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Invoices */}
            <div className="bg-card rounded-xl border border-border">
              <div className="p-6 border-b border-border flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-foreground">Invoices</h2>
                  <p className="text-sm text-muted-foreground">Recent billing</p>
                </div>
                <Button variant="ghost" size="sm" className="gap-2">
                  View All <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="divide-y divide-border">
                {recentInvoices.map((invoice) => (
                  <div key={invoice.id} className="p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium text-foreground">{invoice.id}</div>
                      <span className={cn(
                        "text-xs font-medium px-2 py-1 rounded-full",
                        invoice.status === "Due" 
                          ? "bg-destructive/10 text-destructive" 
                          : "bg-[hsl(158,64%,40%)]/10 text-[hsl(158,64%,40%)]"
                      )}>
                        {invoice.status}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground">{invoice.month}</div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="font-semibold text-foreground">{invoice.amount}</div>
                      <Button variant="ghost" size="sm" className="h-8 gap-1">
                        <Download className="h-4 w-4" />
                        PDF
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-border">
                <Button variant="corporate" className="w-full">
                  Pay Outstanding Balance
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors text-left">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="font-medium text-foreground">Generate Report</div>
                <div className="text-sm text-muted-foreground">Download usage analytics</div>
              </div>
            </button>
            <button className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors text-left">
              <div className="w-12 h-12 rounded-xl bg-[hsl(158,64%,40%)]/10 flex items-center justify-center">
                <Calendar className="h-6 w-6 text-[hsl(158,64%,40%)]" />
              </div>
              <div>
                <div className="font-medium text-foreground">Schedule Trip</div>
                <div className="text-sm text-muted-foreground">Book executive travel</div>
              </div>
            </button>
            <button className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors text-left">
              <div className="w-12 h-12 rounded-xl bg-[hsl(38,92%,50%)]/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-[hsl(38,92%,50%)]" />
              </div>
              <div>
                <div className="font-medium text-foreground">Manage Users</div>
                <div className="text-sm text-muted-foreground">Add team members</div>
              </div>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Briefcase, CalendarDays, Plane, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Employee Commute",
    description: "Daily pick-up and drop services for your workforce with OTP-verified rides and real-time tracking powered by MoveInSync.",
    features: ["OTP Verified Rides", "Real-time GPS Tracking", "Route Optimization", "Daily Reports"],
    color: "bg-primary/10 text-primary",
    href: "/services#employee-commute"
  },
  {
    icon: Briefcase,
    title: "Executive Travel",
    description: "Premium chauffeur services for your leadership team with luxury vehicles and professionally trained drivers.",
    features: ["Luxury Fleet", "Trained Chauffeurs", "Confidential Service", "Flexible Booking"],
    color: "bg-corporate-gold/10 text-corporate-gold",
    href: "/services#executive-travel"
  },
  {
    icon: CalendarDays,
    title: "Event Logistics",
    description: "Comprehensive transportation solutions for corporate events, conferences, and team outings.",
    features: ["Large Fleet Capacity", "Event Coordination", "Multi-vehicle Sync", "On-ground Support"],
    color: "bg-corporate-green/10 text-corporate-green",
    href: "/services#event-logistics"
  },
  {
    icon: Plane,
    title: "Airport Transfers",
    description: "Reliable airport pick-up and drop services with flight tracking and meet-and-greet options.",
    features: ["Flight Tracking", "Meet & Greet", "24/7 Availability", "Luggage Assistance"],
    color: "bg-corporate-sky/10 text-corporate-sky",
    href: "/services#airport-transfers"
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Corporate Travel Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From daily employee commute to executive travel and event logistics, 
            we provide end-to-end transportation solutions tailored for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group bg-card rounded-2xl border border-border p-8 hover:shadow-card-hover hover:border-primary/20 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-7 w-7" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature) => (
                  <span 
                    key={feature}
                    className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <Link to={service.href}>
                <Button variant="ghost" className="gap-2 p-0 h-auto text-primary hover:bg-transparent hover:gap-4 transition-all">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/quote">
            <Button variant="corporate" size="lg" className="gap-2">
              Get Custom Quote for Your Business
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

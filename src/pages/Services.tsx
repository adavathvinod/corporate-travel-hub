import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Users, Briefcase, CalendarDays, Plane, 
  CheckCircle2, ArrowRight, Clock, Shield, 
  MapPin, Phone, Smartphone
} from "lucide-react";

const services = [
  {
    id: "employee-commute",
    icon: Users,
    title: "Employee Commute Services",
    subtitle: "Daily Pick-up & Drop Solutions",
    description: "Reliable daily transportation for your workforce with technology-enabled operations. Our employee commute services ensure your team arrives on time, every time.",
    features: [
      { icon: Smartphone, text: "OTP-verified rides for security" },
      { icon: MapPin, text: "Real-time GPS tracking" },
      { icon: Clock, text: "Route optimization for efficiency" },
      { icon: Shield, text: "Daily reports and analytics" },
    ],
    benefits: [
      "Reduced absenteeism",
      "Improved employee satisfaction",
      "Cost-effective fleet management",
      "Seamless MoveInSync integration"
    ],
    color: "primary"
  },
  {
    id: "executive-travel",
    icon: Briefcase,
    title: "Executive Travel Services",
    subtitle: "Premium Chauffeur Experience",
    description: "Exclusive travel solutions for your leadership team. Our executive service combines luxury vehicles with professionally trained chauffeurs.",
    features: [
      { icon: Shield, text: "Confidential & discreet service" },
      { icon: Users, text: "Background-verified chauffeurs" },
      { icon: Clock, text: "Flexible scheduling" },
      { icon: Phone, text: "Dedicated account manager" },
    ],
    benefits: [
      "Luxury sedan and SUV options",
      "Professional, uniformed drivers",
      "In-car amenities available",
      "24/7 availability"
    ],
    color: "corporate-gold"
  },
  {
    id: "event-logistics",
    icon: CalendarDays,
    title: "Event Logistics",
    subtitle: "Corporate Event Transportation",
    description: "End-to-end transportation management for corporate events, conferences, team outings, and large-scale gatherings.",
    features: [
      { icon: Users, text: "Large fleet capacity" },
      { icon: MapPin, text: "Multi-point coordination" },
      { icon: Clock, text: "Event-specific scheduling" },
      { icon: Phone, text: "On-ground support team" },
    ],
    benefits: [
      "Buses & coaches (15-50 seaters)",
      "Synchronized vehicle dispatch",
      "Custom branding available",
      "Dedicated event coordinator"
    ],
    color: "corporate-green"
  },
  {
    id: "airport-transfers",
    icon: Plane,
    title: "Airport Transfer Services",
    subtitle: "Seamless Airport Pick-up & Drop",
    description: "Professional airport transfer services with flight tracking, meet-and-greet options, and reliable punctuality.",
    features: [
      { icon: Plane, text: "Real-time flight tracking" },
      { icon: Users, text: "Meet & greet service" },
      { icon: Clock, text: "24/7 availability" },
      { icon: Shield, text: "Luggage assistance" },
    ],
    benefits: [
      "Domestic & international terminals",
      "Waiting time flexibility",
      "Corporate billing options",
      "Premium vehicle options"
    ],
    color: "corporate-sky"
  },
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-corporate-navy via-primary-dark to-primary text-primary-foreground py-20">
          <div className="container">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-sm font-medium mb-4">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Comprehensive Corporate Transportation Solutions
              </h1>
              <p className="text-xl text-primary-foreground/80">
                From daily employee commute to executive travel and event logistics — 
                we provide tailored solutions for every corporate transportation need.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 bg-background">
          <div className="container space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
                    service.color === 'primary' ? 'bg-primary/10 text-primary' :
                    service.color === 'corporate-gold' ? 'bg-[hsl(38,92%,50%)]/10 text-[hsl(38,92%,50%)]' :
                    service.color === 'corporate-green' ? 'bg-[hsl(158,64%,40%)]/10 text-[hsl(158,64%,40%)]' :
                    'bg-[hsl(200,85%,55%)]/10 text-[hsl(200,85%,55%)]'
                  }`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  
                  <span className="text-sm font-medium text-muted-foreground">{service.subtitle}</span>
                  <h2 className="text-3xl font-bold text-foreground mt-2 mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-8">{service.description}</p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature.text} className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                        <feature.icon className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-sm text-foreground">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/quote">
                    <Button variant="corporate" className="gap-2">
                      Request Quote for {service.title.split(' ')[0]}
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </Link>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-card rounded-2xl border border-border p-8 shadow-card">
                    <h3 className="text-lg font-semibold text-foreground mb-6">Key Benefits</h3>
                    <ul className="space-y-4">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <CheckCircle2 className={`h-5 w-5 shrink-0 mt-0.5 ${
                            service.color === 'primary' ? 'text-primary' :
                            service.color === 'corporate-gold' ? 'text-[hsl(38,92%,50%)]' :
                            service.color === 'corporate-green' ? 'text-[hsl(158,64%,40%)]' :
                            'text-[hsl(200,85%,55%)]'
                          }`} />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted">
          <div className="container text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need a Custom Transportation Solution?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team will work with you to design a transportation plan that fits 
              your specific requirements and budget.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/quote">
                <Button variant="corporate" size="lg" className="gap-2">
                  Get Custom Quote
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Talk to an Expert
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

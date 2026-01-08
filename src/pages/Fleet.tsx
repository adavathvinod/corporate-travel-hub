import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Car, Users, Shield, Wrench, CheckCircle2, 
  ArrowRight, Sparkles, Clock, FileCheck
} from "lucide-react";
import teamFleetImage from "@/assets/team-fleet.png";

const vehicles = [
  {
    type: "Sedan",
    models: "Swift Dzire, Honda Amaze, Maruti Ciaz",
    capacity: "4 Passengers",
    features: ["AC", "GPS Enabled", "Clean Interiors", "Sanitized Daily"],
    ideal: "Executive travel, Airport transfers",
    image: "sedan"
  },
  {
    type: "Premium Sedan",
    models: "Honda City, Hyundai Verna",
    capacity: "4 Passengers",
    features: ["Premium AC", "GPS Enabled", "Leather Seats", "Newspaper/Water"],
    ideal: "CXO travel, Client meetings",
    image: "premium"
  },
  {
    type: "SUV",
    models: "Toyota Innova, Innova Crysta",
    capacity: "6-7 Passengers",
    features: ["Spacious", "GPS Enabled", "Luggage Space", "AC"],
    ideal: "Group travel, Outstation trips",
    image: "suv"
  },
  {
    type: "Luxury SUV",
    models: "Toyota Fortuner, MG Gloster",
    capacity: "6-7 Passengers",
    features: ["Premium Interior", "GPS Enabled", "Entertainment System", "Refreshments"],
    ideal: "Board members, VIP guests",
    image: "luxury"
  },
  {
    type: "Tempo Traveller",
    models: "Force Traveller 12/15 Seater",
    capacity: "12-15 Passengers",
    features: ["Pushback Seats", "AC", "PA System", "Ample Luggage"],
    ideal: "Team outings, Event logistics",
    image: "tempo"
  },
  {
    type: "Luxury Bus",
    models: "35-50 Seater AC Buses",
    capacity: "35-50 Passengers",
    features: ["AC", "Reclining Seats", "Entertainment", "Restroom (select)"],
    ideal: "Corporate events, Large group transport",
    image: "bus"
  },
];

const safetyProtocols = [
  {
    icon: Shield,
    title: "Background Verified Drivers",
    description: "Every driver undergoes thorough police verification and background checks before joining our team."
  },
  {
    icon: FileCheck,
    title: "Regular Training",
    description: "Drivers receive monthly training on safety protocols, customer service, and defensive driving techniques."
  },
  {
    icon: Wrench,
    title: "Vehicle Maintenance",
    description: "All vehicles undergo bi-weekly maintenance checks and annual comprehensive servicing at authorized centers."
  },
  {
    icon: Sparkles,
    title: "Hygiene Standards",
    description: "Vehicles are sanitized before and after every trip. Deep cleaning performed weekly with hospital-grade disinfectants."
  },
  {
    icon: Clock,
    title: "Vehicle Age Policy",
    description: "All fleet vehicles are under 5 years old, ensuring modern safety features and reliable performance."
  },
  {
    icon: Car,
    title: "GPS & Safety Features",
    description: "Every vehicle equipped with GPS tracking, speed governors, and emergency SOS buttons connected to our control room."
  },
];

export default function Fleet() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-primary-foreground py-20">
          <div className="container">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-sm font-medium mb-4">
                Fleet & Safety
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Modern Fleet, Uncompromising Safety
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Explore our diverse fleet of well-maintained vehicles and learn about 
                our rigorous safety and hygiene protocols.
              </p>
            </div>
          </div>
        </section>

        {/* Team & Fleet Gallery */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Team & Fleet
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Meet Our Professional Team
              </h2>
              <p className="text-lg text-muted-foreground">
                Our dedicated drivers and modern fleet ensure safe, comfortable transportation for your employees.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
              <img 
                src={teamFleetImage} 
                alt="Aditya Travels Team and Fleet" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Fleet Gallery */}
        <section className="py-20 bg-card">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Fleet
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Vehicles for Every Corporate Need
              </h2>
              <p className="text-lg text-muted-foreground">
                From compact sedans to luxury buses — choose the right vehicle for your requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vehicles.map((vehicle) => (
                <div 
                  key={vehicle.type}
                  className="bg-background rounded-2xl border border-border overflow-hidden hover:shadow-card-hover transition-shadow"
                >
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <Car className="h-20 w-20 text-primary/30" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{vehicle.type}</h3>
                      <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        <Users className="h-3 w-3 inline mr-1" />
                        {vehicle.capacity}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{vehicle.models}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {vehicle.features.map((feature) => (
                        <span key={feature} className="px-2 py-1 rounded bg-muted text-xs text-muted-foreground">
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-sm">
                      <span className="text-muted-foreground">Ideal for: </span>
                      <span className="text-foreground font-medium">{vehicle.ideal}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Protocols */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-corporate-green/10 text-corporate-green text-sm font-medium mb-4">
                Safety First
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Safety & Hygiene Protocols
              </h2>
              <p className="text-lg text-muted-foreground">
                Your safety is our top priority. We maintain the highest standards in 
                driver training, vehicle maintenance, and hygiene.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {safetyProtocols.map((protocol) => (
                <div 
                  key={protocol.title}
                  className="bg-card rounded-2xl border border-border p-6 hover:border-corporate-green/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-corporate-green/10 text-corporate-green flex items-center justify-center mb-4">
                    <protocol.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{protocol.title}</h3>
                  <p className="text-muted-foreground text-sm">{protocol.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Driver Standards */}
        <section className="py-20 bg-card">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Our Drivers
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Professionally Trained Chauffeurs
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our drivers are the backbone of our service. Each one is carefully selected, 
                  trained, and continuously evaluated to ensure the highest standards.
                </p>

                <ul className="space-y-4">
                  {[
                    "Police verification and background check completed",
                    "Minimum 5 years of professional driving experience",
                    "Bilingual communication skills (Hindi & English)",
                    "Monthly defensive driving training sessions",
                    "Customer service and etiquette training",
                    "Regular health check-ups and fitness certifications"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-corporate-green shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-background rounded-2xl border border-border p-8">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">24+</h3>
                  <p className="text-muted-foreground mb-6">Professional Drivers</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-4 rounded-lg bg-muted">
                      <div className="text-2xl font-bold text-corporate-green">100%</div>
                      <div className="text-xs text-muted-foreground">Verified</div>
                    </div>
                    <div className="p-4 rounded-lg bg-muted">
                      <div className="text-2xl font-bold text-primary">5+ yrs</div>
                      <div className="text-xs text-muted-foreground">Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Experience Safe, Reliable Travel?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Request a quote today and discover how our fleet can serve your corporate transportation needs.
            </p>
            <Link to="/quote">
              <Button variant="hero" size="lg" className="gap-2">
                Request Corporate Quote
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

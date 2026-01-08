import { Shield, Users, Cpu, Award, CheckCircle2, Car, Leaf, Globe } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Our Strength – The Drivers",
    description: "Our drivers are our brand ambassadors. Professionally trained bilingual communicators, regularly coached in politeness, punctuality, and safety. 100% background-checked and police-verified profiles.",
    highlights: ["Bilingual Trained", "Police Verified", "Courteous Service"]
  },
  {
    icon: Shield,
    title: "Safety & Hygiene First",
    description: "We take pride in our zero-compromise policy on safety and hygiene. Vehicles not older than 5 years with regular service and sanitization. In-cab sanitizers, tissues, and cleanliness checks before every trip.",
    highlights: ["Vehicles < 5 Years", "Daily Sanitization", "Pre-trip Checks"]
  },
  {
    icon: Cpu,
    title: "Technology-Driven Operations",
    description: "Partnered with MoveInSync, we bring technology to your doorstep. Contactless, OTP-verified rides for employee safety. Real-time tracking of vehicles and optimized route mapping.",
    highlights: ["OTP Verification", "Real-time Tracking", "Route Optimization"]
  },
  {
    icon: Award,
    title: "Our Achievements",
    description: "Zero vehicle breakdowns since inception. 100% client retention – every contract renewed year after year. Excellent client feedback and trusted reputation in the IT commute space.",
    highlights: ["Zero Breakdowns", "100% Retention", "Top Rated"]
  },
];

const missionPoints = [
  { icon: Globe, text: "Serve IT, Pharma, any manufacturing units or factories with excellence" },
  { icon: Leaf, text: "Reduce our carbon footprint by introducing CNG and Electric vehicles into our fleet" },
  { icon: Car, text: "Deliver reliable, eco-conscious, and employee-friendly mobility solutions" },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-card">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Excellence in Every Journey
          </h2>
          <p className="text-lg text-muted-foreground">
            "Your Corporate Travel Partner for Safe, Smart & Sustainable Rides"
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="flex gap-6 p-6 rounded-2xl bg-background border border-border hover:border-primary/20 hover:shadow-card transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="shrink-0">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <feature.icon className="h-7 w-7" />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {feature.highlights.map((highlight) => (
                    <span 
                      key={highlight}
                      className="inline-flex items-center gap-1.5 text-sm text-corporate-green"
                    >
                      <CheckCircle2 className="h-4 w-4" />
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-r from-primary/5 to-corporate-gold/5 rounded-2xl p-8 border border-primary/10">
          <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
          <p className="text-lg text-primary font-medium mb-6 italic">
            "To provide safe, secure, and sustainable corporate transportation across India."
          </p>
          <p className="text-muted-foreground mb-6">We're on a mission to:</p>
          <div className="grid md:grid-cols-3 gap-6">
            {missionPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <point.icon className="h-5 w-5" />
                </div>
                <p className="text-sm text-muted-foreground">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
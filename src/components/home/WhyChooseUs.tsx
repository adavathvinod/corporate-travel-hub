import { Shield, Users, Cpu, Award, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Our Strength – The Drivers",
    description: "Professionally trained, bilingual, and background-verified chauffeurs known for punctuality, safety, and maintaining comfort throughout every trip.",
    highlights: ["Background Verified", "Professionally Trained", "Bilingual Staff"]
  },
  {
    icon: Shield,
    title: "Safety & Hygiene First",
    description: "Vehicles under 5 years, regularly serviced and sanitized. Cleanliness and hygiene checks before every trip for worry-free travel.",
    highlights: ["Vehicles < 5 Years", "Regular Sanitization", "Pre-trip Checks"]
  },
  {
    icon: Cpu,
    title: "Technology-Driven Operations",
    description: "Powered by MoveInSync — offering OTP-verified rides, real-time tracking, and optimized routing for safe, efficient employee commutes.",
    highlights: ["OTP Verification", "Real-time Tracking", "Route Optimization"]
  },
  {
    icon: Award,
    title: "Our Achievements",
    description: "Zero breakdowns, 100% client retention, and top-rated service satisfaction. Ensuring reliability and transparency through seamless integration.",
    highlights: ["Zero Breakdowns", "100% Retention", "Top Rated"]
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-card">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-corporate-green/10 text-corporate-green text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Excellence in Every Journey
          </h2>
          <p className="text-lg text-muted-foreground">
            We combine professional drivers, modern technology, and stringent safety protocols 
            to deliver an unmatched corporate travel experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
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
                <p className="text-muted-foreground">
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
      </div>
    </section>
  );
}

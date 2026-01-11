import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "HR Director",
    company: "TechCorp India",
    content: "Aditya Travels has transformed our employee commute operations. The MoveInSync integration gives us complete visibility, and their drivers are exceptionally professional.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Admin Head",
    company: "FinServe Ltd",
    content: "We've been using their services for over a year now. Zero incidents, 100% punctuality. The executive travel service is top-notch for our leadership team.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "CFO",
    company: "DataWorks",
    content: "The billing transparency and detailed reporting have made budget planning so much easier. Their client portal is a game-changer for managing our travel expenses.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-corporate-navy via-primary-dark to-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground/90 text-sm font-medium mb-4">
            Client Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Don't just take our word for it. Here's what corporate leaders have to say about partnering with Aditya Travels.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="h-10 w-10 text-corporate-sky/50 mb-6" />
              
              <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-corporate-gold text-corporate-gold" />
                ))}
              </div>

              <div className="border-t border-primary-foreground/10 pt-4">
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-primary-foreground/70">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState, useRef } from "react";
import { Calendar, Users, Smile, Car } from "lucide-react";

const stats = [
  { icon: Calendar, value: 6, suffix: "+", label: "Years Experience", color: "text-primary" },
  { icon: Users, value: 24, suffix: "+", label: "Professional Drivers", color: "text-corporate-gold" },
  { icon: Smile, value: 7, suffix: "+", label: "Corporate Clients", color: "text-corporate-green" },
  { icon: Car, value: 60, suffix: "+", label: "Trips Per Day", color: "text-primary" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * value));
            if (progress < 1) {
              requestAnimationFrame(step);
            }
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold">
      {count}{suffix}
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our Achievements</h2>
          <div className="max-w-2xl mx-auto space-y-2 text-muted-foreground">
            <p>✓ Zero vehicle breakdowns since inception</p>
            <p>✓ 100% client retention – every contract renewed year after year</p>
            <p>✓ Excellent client feedback and trusted reputation in the IT commute space</p>
            <p>✓ Seamless MoveInSync adoption, ensuring transparency and efficiency</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-muted mb-4 group-hover:scale-110 transition-transform duration-300 ${stat.color}`}>
                <stat.icon className="h-8 w-8" />
              </div>
              <div className={stat.color}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-muted-foreground mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
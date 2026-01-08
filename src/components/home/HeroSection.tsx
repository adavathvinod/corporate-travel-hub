import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Shield } from "lucide-react";
import teamFleetImage from "@/assets/team-fleet.png";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light min-h-[90vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container relative z-10 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-sm backdrop-blur-sm animate-fade-up">
              <Shield className="h-4 w-4 text-corporate-gold" />
              <span>Trusted by 7+ Leading Corporations Since 2019</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Your Corporate
              <span className="block text-corporate-gold">Travel Partner</span>
              for Safe Rides
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Founded in 2019, Aditya Travels began its journey with a vision to simplify corporate 
              employee transportation for Hyderabad's IT industry. Safe, Smart & Sustainable rides.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Link to="/quote">
                <Button variant="hero" size="xl" className="gap-2">
                  Request Corporate Quote
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/portal">
                <Button variant="hero-outline" size="xl" className="gap-2">
                  <Play className="h-5 w-5" />
                  Client Login
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-primary-foreground/20 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div>
                <div className="text-3xl font-bold text-corporate-gold">60+</div>
                <div className="text-sm text-primary-foreground/70">Daily Trips</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-primary-foreground/70">Client Retention</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-corporate-gold">0</div>
                <div className="text-sm text-primary-foreground/70">Breakdowns</div>
              </div>
            </div>
          </div>

          {/* Team & Fleet Image */}
          <div className="hidden lg:block relative animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
              <img 
                src={teamFleetImage} 
                alt="Aditya Travels Professional Team and Fleet" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl font-bold">Our Professional Team</h3>
                <p className="text-sm text-white/80">24+ Background Verified Drivers & Modern Fleet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

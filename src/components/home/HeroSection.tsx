import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Shield, Users, Clock } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-corporate-navy via-primary-dark to-primary min-h-[90vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Animated Shapes */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-corporate-sky/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-corporate-green/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

      <div className="container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-sm backdrop-blur-sm animate-fade-up">
              <Shield className="h-4 w-4 text-corporate-green" />
              <span>Trusted by 19+ Leading Corporations</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Your Premier
              <span className="block text-corporate-sky">Corporate Travel</span>
              Partner
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Technology-driven employee commute and executive transportation solutions. 
              Safe, reliable, and available 24×7 across India.
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
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div>
                <div className="text-3xl font-bold text-corporate-sky">60+</div>
                <div className="text-sm text-primary-foreground/70">Daily Trips</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-corporate-green">100%</div>
                <div className="text-sm text-primary-foreground/70">Client Retention</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-corporate-gold">0</div>
                <div className="text-sm text-primary-foreground/70">Breakdowns</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="hidden lg:block relative animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Main Card */}
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl shadow-corporate p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Users className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Employee Commute</h3>
                    <p className="text-sm text-muted-foreground">MoveInSync Powered</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-sm text-muted-foreground">Today's Active Trips</span>
                    <span className="font-semibold text-primary">47</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-sm text-muted-foreground">On-Time Rate</span>
                    <span className="font-semibold text-corporate-green">98.5%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-sm text-muted-foreground">Vehicles Active</span>
                    <span className="font-semibold text-corporate-sky">24</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-corporate-green text-primary-foreground rounded-xl p-4 shadow-lg animate-pulse-slow">
                <Clock className="h-6 w-6 mb-1" />
                <div className="text-xs font-medium">Live Tracking</div>
              </div>

              {/* Secondary Card */}
              <div className="absolute -bottom-8 -left-8 bg-card rounded-xl shadow-card-hover p-4 transform -rotate-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-corporate-gold/20 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-corporate-gold" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Safety Score</div>
                    <div className="text-xs text-muted-foreground">Background Verified Drivers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, FileText } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="bg-card rounded-3xl border border-border shadow-card-hover overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left - Quote CTA */}
            <div className="p-12 lg:p-16 bg-gradient-to-br from-primary to-primary-dark text-primary-foreground">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/10 text-sm mb-6">
                <FileText className="h-4 w-4" />
                For New Clients
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Transform Your Corporate Travel?
              </h3>
              <p className="text-primary-foreground/80 mb-8">
                Get a customized quote tailored to your company's specific transportation needs. 
                Our multi-step form helps us understand your requirements perfectly.
              </p>
              <Link to="/quote">
                <Button variant="hero" size="lg" className="gap-2">
                  Request Corporate Quote
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Right - Contact CTA */}
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-corporate-green/10 text-corporate-green text-sm mb-6 w-fit">
                <Phone className="h-4 w-4" />
                Existing Clients
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Already a Client? Access Your Portal
              </h3>
              <p className="text-muted-foreground mb-8">
                Log in to track vehicles, view invoices, generate reports, and manage your 
                corporate transportation account.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/portal">
                  <Button variant="corporate" size="lg" className="gap-2">
                    Client Login
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <a href="tel:+918523880666">
                  <Button variant="outline" size="lg" className="gap-2">
                    <Phone className="h-5 w-5" />
                    Call Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

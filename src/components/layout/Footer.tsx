import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Facebook, Twitter, Shield, Clock, Award } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-corporate-navy text-primary-foreground">
      {/* Trust Strip */}
      <div className="border-b border-primary-foreground/10">
        <div className="container py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-corporate-green" />
              <span>100% Safety Record</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-corporate-sky" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-corporate-gold" />
              <span>ISO Certified Operations</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-light to-corporate-sky flex items-center justify-center text-primary-foreground font-bold text-xl">
                AT
              </div>
              <div>
                <h3 className="text-lg font-bold">AdityaTravels</h3>
                <p className="text-xs text-primary-foreground/70">Corporate Travel Partner</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your trusted partner for corporate transportation solutions. 
              Providing safe, reliable, and technology-driven commute services 
              to leading corporations across India.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Fleet Gallery", href: "/fleet" },
                { label: "Technology", href: "/technology" },
                { label: "Client Portal", href: "/portal" },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className="text-primary-foreground/70 hover:text-primary-foreground hover:pl-2 transition-all text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Employee Commute",
                "Executive Travel",
                "Event Logistics",
                "Airport Transfers",
                "Outstation Trips",
              ].map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-corporate-sky shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  Hyderabad, Telangana,<br />India
                </span>
              </li>
              <li>
                <a href="tel:+918523880666" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Phone className="h-5 w-5 text-corporate-green shrink-0" />
                  <span className="text-sm">+91 8523880666</span>
                </a>
              </li>
              <li>
                <a href="tel:+918919543489" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Phone className="h-5 w-5 text-corporate-green shrink-0" />
                  <span className="text-sm">+91 8919543489</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@adityatrav.com" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Mail className="h-5 w-5 text-corporate-gold shrink-0" />
                  <span className="text-sm">info@adityatrav.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Aditya Travels. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
            <Link to="/sla" className="hover:text-primary-foreground transition-colors">SLA</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

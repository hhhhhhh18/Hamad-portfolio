import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin, Heart } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" }
];

const services = [
  "Website Development",
  "Frontend Development", 
  "Data Analysis",
  "UI/UX Design",
  "API Development",
  "Database Design"
];

export const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <button 
                onClick={scrollToTop}
                className="text-2xl font-bold gradient-text hover:scale-105 smooth-transition"
              >
                Shaik Hamad
              </button>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Computer Science student passionate about creating innovative web solutions 
              and analyzing data to drive meaningful insights.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary hover:scale-110 smooth-transition"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary hover:scale-110 smooth-transition"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:shaikhamad42792@gmail.com"
                className="text-muted-foreground hover:text-primary hover:scale-110 smooth-transition"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary smooth-transition"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-muted-foreground">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <a 
                  href="mailto:shaikhamad42792@gmail.com"
                  className="text-muted-foreground hover:text-primary smooth-transition"
                >
                  shaikhamad42792@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <a 
                  href="tel:+916309508057"
                  className="text-muted-foreground hover:text-primary smooth-transition"
                >
                  +91 6309508057
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">
                  Hyderabad, India
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <Button 
                onClick={() => scrollToSection("#contact")}
                className="w-full hover:scale-105 smooth-transition"
              >
                Start a Project
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center text-sm text-muted-foreground">
              <span>© {new Date().getFullYear()} Shaik Hamad. Made with</span>
              <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
              <span>using React & Tailwind CSS</span>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <button className="text-muted-foreground hover:text-primary smooth-transition">
                Privacy Policy
              </button>
              <button className="text-muted-foreground hover:text-primary smooth-transition">
                Terms of Service
              </button>
              <button 
                onClick={scrollToTop}
                className="text-muted-foreground hover:text-primary smooth-transition"
              >
                Back to Top ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
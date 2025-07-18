import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Code, 
  BarChart3, 
  Smartphone, 
  Database, 
  Palette,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const services = [
  {
    title: "Website Development",
    icon: Globe,
    description: "Full-stack web development services from concept to deployment",
    features: [
      "Responsive web design",
      "Modern frontend frameworks (React, Vue)",
      "Backend API development",
      "Database integration",
      "Performance optimization",
      "SEO-friendly development"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    price: "Starting from ₹15,000",
    popular: true
  },
  {
    title: "Frontend Development", 
    icon: Code,
    description: "Creating beautiful, interactive user interfaces that engage users",
    features: [
      "Modern UI/UX implementation",
      "Cross-browser compatibility",
      "Mobile-first design",
      "Component-based architecture",
      "Interactive animations",
      "Accessibility compliance"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    price: "Starting from ₹8,000",
    popular: false
  },
  {
    title: "Data Analysis",
    icon: BarChart3,
    description: "Transform your data into actionable insights and visualizations",
    features: [
      "Data cleaning and preprocessing",
      "Statistical analysis",
      "Interactive dashboards",
      "Custom reports and visualizations",
      "Trend analysis and forecasting",
      "Business intelligence solutions"
    ],
    technologies: ["Python", "Pandas", "Power BI", "Tableau"],
    price: "Starting from ₹5,000",
    popular: false
  }
];

const additionalServices = [
  {
    title: "Mobile-Responsive Design",
    icon: Smartphone,
    description: "Ensure your website looks perfect on all devices"
  },
  {
    title: "Database Design",
    icon: Database,
    description: "Efficient database architecture and optimization"
  },
  {
    title: "UI/UX Consultation",
    icon: Palette,
    description: "Design guidance for better user experience"
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional services tailored to bring your digital vision to life with modern technologies and best practices
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className={`floating-card border-0 relative overflow-hidden ${
              service.popular ? 'ring-2 ring-primary' : ''
            }`}>
              {service.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-primary text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <CardContent className={`p-8 ${service.popular ? 'pt-12' : ''}`}>
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-muted text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-center border-t pt-6">
                  <div className="text-2xl font-bold text-primary mb-4">
                    {service.price}
                  </div>
                  <Button 
                    className={`w-full ${
                      service.popular 
                        ? 'bg-primary hover:bg-primary-dark' 
                        : ''
                    }`}
                    variant={service.popular ? 'default' : 'outline'}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Additional Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="floating-card border-0 bg-gradient-card text-center">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-bold mb-2">{service.title}</h4>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Overview */}
        <Card className="floating-card border-0 bg-gradient-primary text-white">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">My Work Process</h3>
              <p className="text-lg opacity-90">
                A streamlined approach to deliver high-quality results on time
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Discovery", desc: "Understanding your requirements and goals" },
                { step: "02", title: "Planning", desc: "Creating detailed project roadmap" },
                { step: "03", title: "Development", desc: "Building with modern technologies" },
                { step: "04", title: "Delivery", desc: "Testing, deployment, and support" }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold opacity-60 mb-2">{process.step}</div>
                  <h4 className="font-semibold mb-2">{process.title}</h4>
                  <p className="text-sm opacity-80">{process.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss your ideas and create something amazing together. 
            I'm here to help bring your vision to life with modern technology and creative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="hover:scale-105 smooth-transition">
              Start a Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="hover:scale-105 smooth-transition">
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
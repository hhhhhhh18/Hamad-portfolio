import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Amazon Portfolio Clone",
    description: "A pixel-perfect clone of Amazon's e-commerce interface featuring responsive design, product listings, shopping cart functionality, and modern UI components.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&crop=center",
    demoUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "Real-time Quiz Application",
    description: "Interactive quiz platform with real-time scoring, multiple question types, timer functionality, and responsive design for optimal user experience.",
    technologies: ["React JS", "Vue JS", "WebSocket", "REST API"],
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&fit=crop&crop=center",
    demoUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "Currency Converter",
    description: "Smart currency conversion tool with real-time exchange rates, historical data visualization, and support for multiple international currencies.",
    technologies: ["JavaScript", "REST API", "Chart.js", "Local Storage"],
    category: "Utility Application",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop&crop=center",
    demoUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    title: "Data Analytics Dashboard",
    description: "Comprehensive dashboard for data visualization and analysis with interactive charts, filtering capabilities, and export functionality.",
    technologies: ["Python", "Pandas", "Power BI", "Tableau"],
    category: "Data Analysis",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=center",
    demoUrl: "#",
    githubUrl: "#",
    featured: false
  }
];

const categories = ["All", "Web Development", "Web Application", "Data Analysis", "Utility Application"];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my latest projects showcasing my skills in web development, data analysis, and modern technologies
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className="hover:scale-105 smooth-transition"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <Folder className="mr-3 h-6 w-6 text-primary" />
            Featured Projects
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <Card key={index} className="floating-card border-0 bg-gradient-card overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 smooth-transition"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-90 smooth-transition flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button size="sm" variant="secondary">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                      <Button size="sm" variant="secondary">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-bold">{project.title}</h4>
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="h-4 w-4 mr-2" />
                      Source Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8">All Projects</h3>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="floating-card border-0 bg-gradient-card overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-40 object-cover group-hover:scale-110 smooth-transition"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-5">
                  <h4 className="font-bold text-lg mb-2">{project.title}</h4>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1 text-xs">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 text-xs">
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="floating-card border-0 bg-gradient-primary text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Interested in Working Together?</h3>
              <p className="text-lg mb-6 opacity-90">
                I'm always open to discussing new opportunities and exciting projects.
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                className="hover:scale-105 smooth-transition"
              >
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
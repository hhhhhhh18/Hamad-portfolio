import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Calendar, MapPin, Download } from "lucide-react";

const education = [
  {
    institution: "Sri Indu College of Engineering and Technology, Hyderabad",
    degree: "B.Tech Computer Science (AI & DS)",
    duration: "2022 - 2026",
    description: "Currently pursuing Bachelor's degree with specialization in Artificial Intelligence and Data Science"
  },
  {
    institution: "Sri Chaitanya Junior College, Khammam",
    degree: "Intermediate (MPC)",
    duration: "2020 - 2022",
    description: "Completed intermediate education in Mathematics, Physics, and Chemistry"
  },
  {
    institution: "Rabindranath Tagore Vidyalayam",
    degree: "Secondary School",
    duration: "2020",
    description: "Achieved 10 GPA in secondary school education"
  }
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, education, and passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Information */}
          <div className="space-y-8">
            <Card className="floating-card border-0 bg-gradient-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <User className="mr-3 h-6 w-6 text-primary" />
                  Who Am I?
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a passionate Computer Science student with a core focus on 
                    <span className="text-primary font-semibold"> Artificial Intelligence and Data Science</span>, 
                    graduating in 2026. My journey in technology is driven by curiosity and the desire to create 
                    meaningful solutions.
                  </p>
                  <p>
                    I thrive on <span className="text-primary font-semibold">developing, testing, and deploying websites</span> 
                    that not only look great but also provide exceptional user experiences. Every project is an opportunity 
                    to learn something new and push the boundaries of what's possible.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, analyzing data patterns, 
                    or working on personal projects that challenge my skills and creativity.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    <span>Hyderabad, India</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    <span>Graduating 2026</span>
                  </div>
                </div>

                <Button className="mt-6 bg-primary hover:bg-primary-dark smooth-transition">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <GraduationCap className="mr-3 h-6 w-6 text-primary" />
              Education Journey
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="floating-card border-l-4 border-l-primary bg-gradient-card">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold text-lg text-foreground leading-tight">
                        {edu.institution}
                      </h4>
                      <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                        {edu.duration}
                      </span>
                    </div>
                    <p className="font-medium text-primary mb-2">{edu.degree}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Achievement Highlight */}
            <Card className="floating-card bg-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-2">🎯</div>
                <h4 className="font-semibold mb-2">Notable Achievement</h4>
                <p className="text-sm text-muted-foreground">
                  Successfully cracked EAMCET and secured admission to a prestigious engineering college 
                  for Computer Science with AI & Data Science specialization
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

// Import User icon
import { User } from "lucide-react";
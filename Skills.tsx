import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Server, 
  Database, 
  Code, 
  BarChart3, 
  Cpu,
  Palette,
  Brain
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Globe,
    description: "Creating beautiful and responsive user interfaces",
    skills: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React JS"],
    color: "text-blue-500"
  },
  {
    title: "Backend Development", 
    icon: Server,
    description: "Building robust server-side applications",
    skills: ["Node.js", "Express.js", "React JS", "API Development"],
    color: "text-green-500"
  },
  {
    title: "Database Management",
    icon: Database,
    description: "Designing and managing data storage solutions",
    skills: ["MySQL", "MongoDB", "Database Design", "Data Modeling"],
    color: "text-purple-500"
  },
  {
    title: "Programming Languages",
    icon: Code,
    description: "Proficient in multiple programming paradigms",
    skills: ["C", "Python", "Java", "JavaScript", "TypeScript"],
    color: "text-orange-500"
  },
  {
    title: "Data Analysis",
    icon: BarChart3,
    description: "Extracting insights from complex datasets",
    skills: ["Python Libraries (Pandas, NumPy)", "MS Excel", "Power BI", "Tableau"],
    color: "text-cyan-500"
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    description: "Exploring artificial intelligence and data science",
    skills: ["Data Science", "Machine Learning Basics", "Statistical Analysis", "AI Concepts"],
    color: "text-pink-500"
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="floating-card border-0 bg-gradient-card group">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted ${category.color} mb-4 group-hover:scale-110 smooth-transition`}>
                    <category.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="text-xs hover:bg-primary hover:text-primary-foreground smooth-transition cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Skill Level Indicator */}
                <div className="mt-6">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className="font-medium">
                      {index < 2 ? "Advanced" : index < 4 ? "Intermediate" : "Learning"}
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-1000 ease-out ${category.color.replace('text-', 'bg-')}`}
                      style={{
                        width: index < 2 ? "90%" : index < 4 ? "75%" : "60%"
                      }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <Card className="floating-card border-0 bg-gradient-primary text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
              <p className="text-lg mb-6 opacity-90">
                I'm constantly exploring new technologies and expanding my skill set. 
                Currently diving deeper into advanced AI concepts, cloud technologies, and modern web frameworks.
              </p>
              <div className="flex justify-center items-center space-x-6 text-sm opacity-80">
                <div className="flex items-center">
                  <Cpu className="h-4 w-4 mr-2" />
                  <span>Cloud Computing</span>
                </div>
                <div className="flex items-center">
                  <Palette className="h-4 w-4 mr-2" />
                  <span>UI/UX Design</span>
                </div>
                <div className="flex items-center">
                  <Brain className="h-4 w-4 mr-2" />
                  <span>Deep Learning</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
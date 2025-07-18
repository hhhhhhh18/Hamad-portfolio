import { Button } from "@/components/ui/button";
import { Download, ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import hamadProfile from "@/assets/hamad-profile.jpg";
import heroBackground from "@/assets/hero-background.jpg";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Modern Background with Enhanced Effects */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-hero opacity-95"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundBlendMode: 'overlay'
          }}
        />
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 animate-pulse"></div>
        {/* Mesh gradient effect */}
        <div className="absolute inset-0 opacity-30" 
             style={{
               background: `radial-gradient(circle at 20% 80%, hsl(142, 69%, 58%, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, hsl(200, 100%, 60%, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 40% 40%, hsl(280, 100%, 70%, 0.2) 0%, transparent 50%)`
             }}>
        </div>
      </div>

      {/* Modern Floating Elements */}
      <div className="absolute inset-0 z-10">
        {/* Geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 rounded-2xl bg-white/5 backdrop-blur-sm animate-float border border-white/10"></div>
        <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 animate-float backdrop-blur-sm" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 rotate-45 bg-white/10 animate-float backdrop-blur-sm" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-60 left-1/3 w-6 h-6 rounded-full bg-white/20 animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-60 right-1/3 w-8 h-8 rounded-full bg-primary/30 animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Content with Modern Layout */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Enhanced Profile Image */}
          <div className="mb-10 flex justify-center">
            <div className="relative group">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-primary opacity-30 blur-xl group-hover:opacity-50 smooth-transition"></div>
              {/* Main image container */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm">
                <img 
                  src={hamadProfile} 
                  alt="Shaik Hamad" 
                  className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 smooth-transition"></div>
              </div>
              {/* Animated border */}
              <div className="absolute -inset-1 rounded-full bg-gradient-primary opacity-60 blur animate-pulse"></div>
              {/* Status indicator */}
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-3 border-white animate-pulse shadow-lg"></div>
            </div>
          </div>

          {/* Modern Typography */}
          <div className="space-y-6 mb-10">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 tracking-tight">
              Hi, I'm{" "}
              <span className="relative inline-block">
                <span className="gradient-text bg-gradient-primary bg-clip-text text-transparent">
                  Shaik Hamad
                </span>
                {/* Underline effect */}
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-primary rounded-full opacity-60"></div>
              </span>
            </h1>

            {/* Animated tagline */}
            <div className="relative">
              <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-medium bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/10 inline-block">
                <span className="animate-pulse">✨</span> Aspiring Web Developer & Data Analyst
              </p>
            </div>

            {/* Enhanced description */}
            <p className="text-lg sm:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light">
              Computer Science student specializing in <span className="text-primary font-medium">AI & Data Science</span>. 
              Passionate about developing, testing, and deploying modern web applications. 
              <span className="text-white/90 font-medium">Graduating in 2026</span>.
            </p>
          </div>

          {/* Modern CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="group bg-white text-primary hover:bg-white/90 hover:scale-105 smooth-transition font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl border-2 border-transparent hover:border-white/20 backdrop-blur-sm"
            >
              <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 smooth-transition" />
              Get In Touch
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-10 smooth-transition"></div>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="group border-white/30 text-white hover:bg-white/10 hover:scale-105 smooth-transition font-semibold px-8 py-4 rounded-2xl backdrop-blur-sm hover:border-white/50"
            >
              <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 smooth-transition" />
              Download CV
            </Button>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center space-x-8 mb-12">
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:shaikhamad42792@gmail.com", label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <a 
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : "_blank"}
                rel={href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                className="group relative p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-white/70 hover:text-white hover:scale-110 smooth-transition hover:bg-white/10"
                aria-label={label}
              >
                <Icon className="h-6 w-6 group-hover:rotate-12 smooth-transition" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-20 smooth-transition"></div>
              </a>
            ))}
          </div>

          {/* Modern Scroll Indicator */}
          <div className="flex flex-col items-center space-y-2">
            <span className="text-white/60 text-sm font-medium">Scroll Down</span>
            <button 
              onClick={scrollToAbout}
              className="group p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 animate-bounce hover:animate-none text-white/60 hover:text-white smooth-transition hover:bg-white/10"
            >
              <ArrowDown className="h-6 w-6 group-hover:translate-y-1 smooth-transition" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};
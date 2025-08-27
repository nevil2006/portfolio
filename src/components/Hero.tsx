import { useState, useEffect } from 'react';
import { ChevronDown, Download, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "AI & Data Science | Computer Vision & ML";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-card"
    >
      {/* Professional Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[radial-gradient(circle,_hsl(var(--primary))_1px,_transparent_1px)] bg-[length:50px_50px]"></div>
      </div>

      {/* Subtle Accent Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-secondary/20 to-transparent"></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/10 to-transparent"></div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="float absolute top-20 left-10 text-4xl text-primary/30" style={{ animationDelay: '0s' }}>🐍</div>
        <div className="float absolute top-32 right-20 text-4xl text-secondary/30" style={{ animationDelay: '2s' }}>🤖</div>
        <div className="float absolute bottom-32 left-20 text-4xl text-primary/30" style={{ animationDelay: '4s' }}>📊</div>
        <div className="float absolute bottom-20 right-10 text-4xl text-secondary/30" style={{ animationDelay: '1s' }}>🔍</div>
        <div className="float absolute top-1/2 left-1/4 text-3xl text-primary/20" style={{ animationDelay: '3s' }}>⚡</div>
        <div className="float absolute top-1/3 right-1/3 text-3xl text-secondary/20" style={{ animationDelay: '5s' }}>🧠</div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-gradient">NEVIL J</span>
          </h1>
          
          <div className="h-16 mb-8">
            <p className="text-2xl md:text-3xl text-muted-foreground font-mono">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          “Aspiring AI/ML/CV Engineer with a strong passion for developing intelligent solutions 
           and exploring cutting-edge technologies.”
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button className="btn-neon group">
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
            <Button className="btn-glass">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 p-3 glass rounded-lg hover:glow-primary"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 p-3 glass rounded-lg hover:glow-primary"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary hover:text-primary-glow transition-colors duration-300 animate-bounce"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
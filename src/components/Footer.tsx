import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-glass-border bg-gradient-glow">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-gradient mb-4">Nevil's Portfolio</h3>
            <p className="text-muted-foreground mb-4">
              AI & Machine Learning Engineer passionate about creating intelligent solutions 
              for real-world problems.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/nevil2006" target="_blank" rel="noopener noreferrer" 
                 className="p-2 glass rounded-full hover:glow-primary transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/nevilj/" target="_blank" rel="noopener noreferrer"
                 className="p-2 glass rounded-full hover:glow-primary transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:nevilj22@gmail.com"
                 className="p-2 glass rounded-full hover:glow-primary transition-all duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Experience', 'Education', 'Skills', 'Projects', 'Blog', 'Achievements', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} 
                     className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Expertise</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Artificial Intelligence</li>
              <li>• Machine Learning</li>
              <li>• Computer Vision</li>
              <li>• Traffic Management</li>
              <li>• Deep Learning</li>
              <li>• Performance Optimization</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-glass-border">
          <div className="flex flex-col md:flex-row items-center justify-between">
            
            {/* Made with Text */}
            <div className="flex items-center text-muted-foreground mb-4 md:mb-0">
              <span>Made with React, TypeScript & Tailwind CSS</span>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={scrollToTop}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Back to Top ↑
              </button>
              <span className="text-muted-foreground">
                © 2024 Nevil. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

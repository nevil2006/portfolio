import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 bg-gradient-to-t from-card to-background border-t border-glass-border">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gradient mb-4">NEVIL J</h3>
            <p className="text-muted-foreground mb-4">
              AI & Data Science student passionate about creating innovative solutions 
              that bridge technology and real-world impact.
            </p>
            <div className="flex justify-center md:justify-start space-x-2">
              <span className="glass px-3 py-1 rounded-full text-xs text-primary">AI Expert</span>
              <span className="glass px-3 py-1 rounded-full text-xs text-secondary">Computer Vision</span>
              <span className="glass px-3 py-1 rounded-full text-xs text-primary">ML Engineer</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Projects', 'Experience', 'Skills', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300 mx-auto"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 text-foreground">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>nevil.j@example.com</p>
              <p>Coimbatore, Tamil Nadu</p>
              <p>Available for opportunities</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-glass-border to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-muted-foreground mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-2 text-red-500 fill-current animate-pulse" />
            <span>© {currentYear} Nevil J. All rights reserved.</span>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="glass p-3 rounded-full hover:glow-primary transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5 text-primary group-hover:text-primary-glow transition-colors duration-300" />
          </button>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8 text-xs text-muted-foreground">
          <p>
            This portfolio showcases my journey in AI & Data Science. 
            Always open to collaborating on innovative projects that make a difference.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
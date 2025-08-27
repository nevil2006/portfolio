import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Code, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      // Show success message (you can add toast here)
      console.log('Message sent successfully!');
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "nevil.j@example.com",
      href: "mailto:nevil.j@example.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "Coimbatore, Tamil Nadu",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      href: "https://github.com",
      username: "@nevil-j"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      href: "https://linkedin.com",
      username: "/in/nevil-j"
    },
    {
      icon: <Code className="h-6 w-6" />,
      label: "LeetCode",
      href: "https://leetcode.com",
      username: "@nevil_j"
    },
    {
      icon: <User className="h-6 w-6" />,
      label: "SkillRack",
      href: "https://skillrack.com",
      username: "@nevil_j"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on your next AI project? Let's build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="slide-up">
            <div className="glass-neon p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="glass border-glass-border focus:ring-primary focus:border-primary"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="glass border-glass-border focus:ring-primary focus:border-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="glass border-glass-border focus:ring-primary focus:border-primary"
                    placeholder="Project Collaboration"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="glass border-glass-border focus:ring-primary focus:border-primary resize-none"
                    placeholder="Tell me about your project or how we can work together..."
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-neon w-full group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="slide-up space-y-8" style={{ animationDelay: '0.2s' }}>
            {/* Contact Details */}
            <div className="glass-neon p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 glass rounded-lg hover:glow-primary transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                      <div className="text-primary group-hover:text-primary-glow transition-colors duration-300">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-neon p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Find Me Online</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 glass rounded-lg hover:glow-primary transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-3 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                      <div className="text-primary group-hover:text-primary-glow transition-colors duration-300">
                        {social.icon}
                      </div>
                    </div>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300 text-center">
                      {social.label}
                    </p>
                    <p className="text-xs text-muted-foreground text-center">
                      {social.username}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            {/* AI Assistant Teaser */}
            <div className="glass-neon p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5">
              <h3 className="text-xl font-bold mb-4 text-gradient">🤖 Ask Nevil AI (Coming Soon)</h3>
              <p className="text-muted-foreground mb-4">
                Get instant answers about my experience, projects, and skills through an AI-powered chatbot.
              </p>
              <Button className="btn-glass w-full" disabled>
                Launch AI Assistant
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
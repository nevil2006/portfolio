import { Bot, Trophy, Briefcase, BookOpen, Zap } from 'lucide-react';

const WhyHireMe = () => {
  const reasons = [
    {
      icon: <Bot className="h-10 w-10" />,
      title: "AI Expertise",
      description: "YOLOv8, CLIP, OpenCV, Vision-Language Models",
      highlight: "🤖"
    },
    {
      icon: <Trophy className="h-10 w-10" />,
      title: "Proven Impact",
      description: "AI Traffic Management (1st Prize Ideathon & Project Expo, approved by Police Commissioner)",
      highlight: "🏆"
    },
    {
      icon: <Briefcase className="h-10 w-10" />,
      title: "Industry Experience",
      description: "Internships at CMLI, Hizen.ai, SaiKet Systems",
      highlight: "💼"
    },
    {
      icon: <BookOpen className="h-10 w-10" />,
      title: "Continuous Learner",
      description: "Research + open-source contributor",
      highlight: "📚"
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Adaptable",
      description: "Quick learner, team player, growth mindset",
      highlight: "⚡"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Why Hire Me?</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Combining technical expertise with proven results to deliver innovative AI solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="glass-neon p-8 rounded-2xl group hover:scale-105 transition-all duration-500 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon Background */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                  <div className="text-primary group-hover:text-primary-glow transition-colors duration-300">
                    {reason.icon}
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 text-2xl">
                  {reason.highlight}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-gradient transition-all duration-300">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                {reason.description}
              </p>

              {/* Hover Effect Line */}
              <div className="w-0 h-0.5 bg-gradient-to-r from-primary to-secondary mt-6 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 slide-up">
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Ready to Innovate Together?</h3>
            <p className="text-muted-foreground mb-6">
              Let's build the next generation of AI solutions that make a real difference.
            </p>
            <button className="btn-neon">
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
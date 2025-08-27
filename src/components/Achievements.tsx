import { Trophy, Award, CheckCircle, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "1st Prize - Ideathon",
      subtitle: "AI Traffic Management System",
      description: "Won first place in the prestigious Ideathon competition for developing an innovative AI-powered traffic management solution using computer vision and IoT technologies.",
      date: "2024",
      category: "Competition",
      impact: "Regional Recognition"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "1st Prize - Project Expo",
      subtitle: "SNS Institute",
      description: "Secured first place at the SNS Institute Project Expo for presenting a comprehensive AI traffic system that impressed judges with its practical implementation and real-world impact.",
      date: "2024",
      category: "Exhibition",
      impact: "Academic Excellence"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Police Commissioner Approval",
      subtitle: "Coimbatore Traffic Management",
      description: "Official approval and recognition from the Coimbatore Police Commissioner for the AI Traffic Management System, validating its potential for real-world deployment.",
      date: "2024",
      category: "Government Recognition",
      impact: "Official Validation"
    }
  ];

  const stats = [
    { number: "3", label: "Major Awards", suffix: "+" },
    { number: "2", label: "Competition Wins", suffix: "" },
    { number: "1", label: "Government Approval", suffix: "" },
    { number: "100", label: "Recognition Score", suffix: "%" }
  ];

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Recognition for innovation, technical excellence, and real-world impact in AI and Data Science
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="glass-neon p-6 rounded-xl text-center group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="glass-neon p-8 rounded-2xl group hover:scale-105 transition-all duration-500 slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid md:grid-cols-12 gap-6 items-center">
                {/* Icon & Category */}
                <div className="md:col-span-3 text-center md:text-left">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto md:mx-0 mb-4 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                    <div className="text-primary group-hover:text-primary-glow transition-colors duration-300">
                      {achievement.icon}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <span className="glass px-3 py-1 rounded-full text-xs text-primary font-medium">
                      {achievement.category}
                    </span>
                    <p className="text-sm text-muted-foreground">{achievement.date}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-7">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-gradient transition-all duration-300">
                    {achievement.title}
                  </h3>
                  <h4 className="text-lg text-primary font-semibold mb-4">
                    {achievement.subtitle}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {achievement.description}
                  </p>
                </div>

                {/* Impact Badge */}
                <div className="md:col-span-2 text-center md:text-right">
                  <div className="inline-flex items-center glass px-4 py-2 rounded-lg">
                    <Star className="h-4 w-4 text-yellow-500 mr-2" />
                    <span className="text-sm font-medium text-foreground">
                      {achievement.impact}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Highlight */}
        <div className="mt-16 slide-up">
          <div className="glass-neon p-8 md:p-12 rounded-2xl text-center bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-gradient mb-6">
                🏆 Career Defining Moment
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                The AI Traffic Management System represents a milestone in my journey - 
                from conceptualization to winning competitions and receiving official government approval. 
                This project showcases my ability to translate cutting-edge AI research into practical, 
                impactful solutions that address real-world challenges.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="glass p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Innovation</h4>
                  <p className="text-sm text-muted-foreground">
                    Cutting-edge AI and Computer Vision technologies
                  </p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h4 className="font-semibold text-secondary mb-2">Recognition</h4>
                  <p className="text-sm text-muted-foreground">
                    Multiple competition wins and awards
                  </p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Impact</h4>
                  <p className="text-sm text-muted-foreground">
                    Government approval for real-world implementation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
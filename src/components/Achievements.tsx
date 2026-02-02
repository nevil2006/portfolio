import { Trophy, Award, CheckCircle, Star } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Best Team – National Level Hackathon",
      subtitle: "IFET Hack Warriors ’26 | IFET College of Engineering, Villupuram",
      description:
        "Awarded Best Team at IFET Hack Warriors ’26, a 24-hour National-Level Hackathon held from 23rd to 24th January 2026. Worked alongside team members Diwakaran Balakrishnan and Mithunavannan J.R to solve real-world problems under strict time constraints. The experience strengthened my technical competence, analytical thinking, innovation, and collaborative skills in a high-pressure environment.",
      date: "2026",
      category: "National Hackathon",
      impact: "Best Team Award",
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "1st Prize - National Level Hackathon",
      subtitle: "Trixathon - Sengunthar Engineering College",
      description:
        "Won 1st prize in the National Level Hackathon 'Trixathon' for building an impactful and scalable AI-driven solution. Demonstrated innovation, problem-solving, and teamwork.",
      date: "2024",
      category: "Hackathon",
      impact: "National Recognition",
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "1st Prize - Ideathon",
      subtitle: "Traffic Management System",
      description:
        "Won first place in the prestigious Ideathon competition for developing an innovative traffic management solution using computer vision and IoT technologies.",
      date: "2024",
      category: "Competition",
      impact: "Regional Recognition",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "1st Prize - Project Expo",
      subtitle: "SNS Institute",
      description:
        "Secured first place at the SNS Institute Project Expo for presenting a comprehensive traffic system that impressed judges with its practical implementation and real-world impact.",
      date: "2024",
      category: "Exhibition",
      impact: "Academic Excellence",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Police Commissioner Approval",
      subtitle: "Coimbatore Traffic Management",
      description:
        "Received official validation from the Coimbatore Police Commissioner for the proposed Traffic Management System, confirming its potential real-world deployment.",
      date: "2024",
      category: "Government Recognition",
      impact: "Official Validation",
    },
  ];

  const stats = [
    { number: "5", label: "Major Awards", suffix: "+" },
    { number: "4", label: "Competition Wins", suffix: "" },
    { number: "1", label: "Government Approval", suffix: "" },
    { number: "4", label: "Internal Tech Events", suffix: "+" },
    { number: "10", label: "Inter-College Events", suffix: "+" },
    { number: "3", label: "National Tech Events", suffix: "+" },
  ];

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Recognition for innovation, technical excellence, and real-world
            impact in AI, Data Science, and National/Inter-College Competitions
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-neon p-6 rounded-xl text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.number}
                {stat.suffix}
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
            >
              <div className="grid md:grid-cols-12 gap-6 items-center">
                {/* Icon & Category */}
                <div className="md:col-span-3 text-center md:text-left">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto md:mx-0 mb-4">
                    <div className="text-primary">{achievement.icon}</div>
                  </div>
                  <div className="space-y-2">
                    <span className="glass px-3 py-1 rounded-full text-xs text-primary font-medium">
                      {achievement.category}
                    </span>
                    <p className="text-sm text-muted-foreground">
                      {achievement.date}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-7">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    {achievement.title}
                  </h3>
                  <h4 className="text-lg text-primary font-semibold mb-4">
                    {achievement.subtitle}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                {/* Impact Badge */}
                <div className="md:col-span-2 text-center md:text-right">
                  <div className="inline-flex items-center glass px-4 py-2 rounded-lg">
                    <Star className="h-4 w-4 text-yellow-500 mr-2" />
                    <span className="text-sm font-medium">
                      {achievement.impact}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

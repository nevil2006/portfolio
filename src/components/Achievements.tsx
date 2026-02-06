import { Trophy, Award, CheckCircle, Star } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Overall Winner – National Level Hackathon",
      subtitle: "Inter-College / National Hackathon",
      description:
        "Secured the Overall Winner title by delivering a high-impact AI-based solution evaluated on innovation, feasibility, and real-world applicability.",
      date: "2025",
      category: "National Hackathon",
      impact: "Overall Winner",
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Best Team – National Level Hackathon",
      subtitle: "IFET Hack Warriors ’26 | IFET College of Engineering, Villupuram",
      description:
        "Awarded Best Team at IFET Hack Warriors ’26, a 24-hour National-Level Hackathon, for strong collaboration, execution quality, and problem-solving.",
      date: "2026",
      category: "National Hackathon",
      impact: "Best Team Award",
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "1st Prize – National Level Hackathon",
      subtitle: "Trixathon | Sengunthar Engineering College",
      description:
        "Won 1st Prize for building an AI-driven solution demonstrating innovation, scalability, and practical relevance under time constraints.",
      date: "2024",
      category: "Hackathon",
      impact: "First Prize",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "1st Prize – Project Expo",
      subtitle: "SNS Institute of Technology",
      description:
        "Secured First Prize at a Project Expo by presenting a real-world AI-based traffic management system with strong technical validation.",
      date: "2024",
      category: "Project Expo",
      impact: "First Prize",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "1st Prize – Ideathon",
      subtitle: "AI-Based Traffic Management System",
      description:
        "Won First Prize in an Ideathon for proposing an innovative traffic management solution using Computer Vision and IoT concepts.",
      date: "2024",
      category: "Ideathon",
      impact: "First Prize",
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Finalist – National Level Hackathon",
      subtitle: "Shortlisted Among Top Teams",
      description:
        "Selected as a finalist among multiple competing teams, recognized for technical depth, innovation, and solution feasibility.",
      date: "2023",
      category: "National Hackathon",
      impact: "Finalist",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Government Project Validation",
      subtitle: "Traffic Management System | Coimbatore",
      description:
        "AI-based traffic management system reviewed and approved for pilot consideration by the Commissioner of Police, Coimbatore.",
      date: "2024",
      category: "Government Recognition",
      impact: "Official Validation",
    },
  ];

  const stats = [
    { number: "6", label: "Major Awards", suffix: "" },
    { number: "3", label: "First Prizes", suffix: "" },
    { number: "1", label: "Overall Winner", suffix: "" },
    { number: "1", label: "Best Team Award", suffix: "" },
    { number: "1", label: "Finalist", suffix: "" },
    { number: "29", label: "Total Tech Events", suffix: "+" },
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
            Recognitions for innovation, technical excellence, teamwork, and
            real-world impact across national and inter-college competitions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-neon p-6 rounded-xl text-center hover:scale-105 transition-all duration-300"
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

        {/* Achievements */}
        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="glass-neon p-8 rounded-2xl hover:scale-105 transition-all duration-500"
            >
              <div className="grid md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-3 text-center md:text-left">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto md:mx-0 mb-4">
                    <div className="text-primary">{achievement.icon}</div>
                  </div>
                  <span className="glass px-3 py-1 rounded-full text-xs text-primary font-medium">
                    {achievement.category}
                  </span>
                  <p className="text-sm text-muted-foreground mt-2">
                    {achievement.date}
                  </p>
                </div>

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

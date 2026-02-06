import { Trophy, Award, CheckCircle, Star } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "1st Prize – National Level Hackathon",
      subtitle: "Sri Sengunthar Engineering College, Erode",
      description:
        "Secured First Prize for developing an AI-based solution evaluated on innovation, execution quality, and real-world applicability.",
      date: "2024",
      category: "National Hackathon",
      impact: "First Prize",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "1st Prize – Ideathon",
      subtitle: "SNS College of Engineering, Coimbatore",
      description:
        "Won First Prize for proposing an innovative AI-driven idea addressing real-world challenges.",
      date: "2024",
      category: "Ideathon",
      impact: "First Prize",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "1st Prize – Project Expo",
      subtitle: "SNS College of Engineering, Coimbatore",
      description:
        "Secured First Prize at a Project Expo for presenting a practically implemented and impactful technical project.",
      date: "2024",
      category: "Project Expo",
      impact: "First Prize",
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Best Team Award – National Level Hackathon",
      subtitle: "IFET College of Engineering, Villupuram",
      description:
        "Awarded Best Team for outstanding collaboration, execution quality, and problem-solving in a 24-hour national-level hackathon.",
      date: "2026",
      category: "National Hackathon",
      impact: "Best Team",
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Best Team Award – Technical Hackathon",
      subtitle: "Sri Venkateswara College of Engineering (SVCE), Chennai",
      description:
        "Recognized as Best Team for delivering a technically strong and well-coordinated solution.",
      date: "2024",
      category: "Hackathon",
      impact: "Best Team",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "III Prize – Designathon",
      subtitle: "KPR Institute of Engineering and Technology",
      description:
        "Secured III Prize at Designathon for presenting an innovative and technically sound project solution.",
      date: "2025",
      category: "Project Expo",
      impact: "III Prize",
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Finalist – Hack Horizon",
      subtitle: "Karpagam College of Engineering",
      description:
        "Selected as a finalist among multiple teams for demonstrating innovation, feasibility, and technical depth.",
      date: "2024",
      category: "Hackathon",
      impact: "Finalist",
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Finalist – Intel Gen-AI Hackathon",
      subtitle: "KPR Institute of Engineering and Technology",
      description:
        "Shortlisted as a finalist in a Generative AI hackathon focused on innovative AI-driven solutions.",
      date: "2024",
      category: "Hackathon",
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
    { number: "8", label: "Major Awards", suffix: "" },
    { number: "3", label: "First Prizes", suffix: "" },
    { number: "2", label: "Best Team Awards", suffix: "" },
    { number: "2", label: "Finalist Selections", suffix: "" },
    { number: "29", label: "Total Tech Events", suffix: "+" },
  ];

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
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

        {/* Achievement Cards */}
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

import { Bot, Trophy, Briefcase, BookOpen, Zap } from "lucide-react";

const WhyHireMe = () => {
  const reasons = [
    {
      icon: <Bot className="h-10 w-10" />,
      title: "AI & CV Expertise",
      description:
        "Hands-on experience building real-time computer vision and machine learning systems using YOLO, OpenCV, and Vision-Language Models, with a strong focus on reliability and deployment readiness.",
      highlight: "🤖",
      metric: "5+ AI & CV systems",
    },
    {
      icon: <Trophy className="h-10 w-10" />,
      title: "Proven & Approved Achievements",
      description:
        "Built a real-time AI-based Traffic Management System that was evaluated and approved for pilot deployment by the Commissioner of Police, Coimbatore.",
      highlight: "🏆",
      metric: "1 Govt-approved deployment",
    },
    {
      icon: <Briefcase className="h-10 w-10" />,
      title: "Practical Engineering Experience",
      description:
        "Experience across the full system lifecycle, including model development, backend integration, real-time processing, testing, and deployment on edge and embedded platforms.",
      highlight: "💼",
      metric: "2+ internships",
    },
    {
      icon: <BookOpen className="h-10 w-10" />,
      title: "Leadership & Mentorship",
      description:
        "Mentored and supported more than four junior student teams across multiple academic and technical projects, contributing both guidance and hands-on development support.",
      highlight: "📘",
      metric: "4+ teams mentored",
      badge: "Mentor",
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Continuous Growth",
      description:
        "Research-driven learner and active hackathon participant, continuously improving skills while focusing on strong fundamentals and system-level problem solving.",
      highlight: "⚡",
      metric: "29+ events",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Why Hire Me?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Blending technical expertise, real-time system development, leadership,
            and proven project impact to deliver reliable AI solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="glass-neon p-8 rounded-2xl group hover:scale-105 transition-all duration-500 cursor-pointer relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Mentor Badge */}
              {reason.badge && (
                <span className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
                  {reason.badge}
                </span>
              )}

              {/* Icon */}
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
              <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-gradient transition-all duration-300">
                {reason.title}
              </h3>

              {/* Metric */}
              <p className="text-sm font-semibold text-primary mb-3">
                {reason.metric}
              </p>

              <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                {reason.description}
              </p>

              {/* Hover line */}
              <div className="w-0 h-0.5 bg-gradient-to-r from-primary to-secondary mt-6 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;

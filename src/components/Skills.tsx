import { Code, Brain, Wrench, Database } from "lucide-react";

const Skills = () => {
  const skillSections = [
    {
      title: "Languages & Frameworks",
      icon: <Code className="h-6 w-6" />,
      items: ["Python", "JavaScript", "HTML", "CSS", "Bootstrap", "SQL"],
    },
    {
      title: "Machine Learning & Data Science",
      icon: <Brain className="h-6 w-6" />,
      items: [
        "Linear Regression",
        "Polynomial Regression",
        "Lasso Regression",
        "Ridge Regression",
      ],
      description:
        "Used for regression problems, feature selection, overfitting control, and model optimization.",
    },
    {
      title: "Computer Vision & NLP",
      icon: <Wrench className="h-6 w-6" />,
      items: [
        "Image Classification",
        "Object Detection (YOLO v5 / v8 / v11)",
        "Vision–Language Models (CLIP)",
        "Text Embeddings",
        "DeepSORT",
        "ByteTrack",
      ],
    },
    {
      title: "Development Tools",
      icon: <Database className="h-6 w-6" />,
      items: [
        "VS Code",
        "Jupyter Notebook / Colab",
        "Git & GitHub",
        "Docker",
      ],
    },
    {
      title: "Model Serving & Utilities",
      icon: <Database className="h-6 w-6" />,
      items: [
        "Streamlit",
        "Flask APIs",
        "Firebase",
        "Replit",
        "Real-time AI Systems",
        "ESP32 / IoT Integration",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gradient mb-12">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillSections.map((section, index) => (
            <div
              key={index}
              className="glass-neon p-8 rounded-2xl hover:glow-primary transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-primary">{section.icon}</div>
                <h3 className="text-xl font-semibold">{section.title}</h3>
              </div>

              <ul className="flex flex-wrap gap-3">
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="px-4 py-2 rounded-full text-sm glass text-primary"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              {section.description && (
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {section.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

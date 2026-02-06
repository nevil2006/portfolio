import { Code, Brain, Cpu, Database, Wrench, Rocket } from "lucide-react";

const Skills = () => {
  const skillSections = [
    {
      title: "Programming & Core Tech",
      icon: <Code className="h-6 w-6" />,
      items: [
        "Python",
        "JavaScript",
        "SQL",
        "HTML",
        "CSS",
        "Bootstrap",
      ],
    },

    {
      title: "Machine Learning & Data Pipeline",
      icon: <Brain className="h-6 w-6" />,
      items: [
        "Supervised & Unsupervised Learning",
        "Feature Engineering",
        "Data Cleaning & Preprocessing",
        "Model Evaluation (Precision, Recall, F1)",
        "Hyperparameter Tuning",
        "Experimentation & Model Optimization",
      ],
    },

    {
      title: "Deep Learning & Computer Vision",
      icon: <Cpu className="h-6 w-6" />,
      items: [
        "CNNs & Transfer Learning",
        "Object Detection (YOLO v5 / v8 / v11)",
        "Multi-Object Tracking (DeepSORT, ByteTrack)",
        "Image Classification & Localization",
        "Vision-Language Models (CLIP)",
      ],
    },

    {
      title: "Frameworks & Libraries",
      icon: <Database className="h-6 w-6" />,
      items: [
        "Scikit-learn",
        "PyTorch / TensorFlow",
        "OpenCV",
        "Ultralytics YOLO",
        "Roboflow",
        "NumPy",
        "Pandas",
        "Matplotlib",
      ],
    },

    {
      title: "Tools & Development Environment",
      icon: <Wrench className="h-6 w-6" />,
      items: [
        "Git & GitHub",
        "Docker",
        "VS Code",
        "Jupyter Notebook",
        "Google Colab",
      ],
    },

    {
      title: "Deployment & Real-Time AI Systems",
      icon: <Rocket className="h-6 w-6" />,
      items: [
        "Flask APIs",
        "Streamlit Apps",
        "Firebase",
        "Real-time AI Pipelines",
        "Edge / IoT Integration (ESP32)",
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

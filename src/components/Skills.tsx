import { Code, Brain, Cpu, Database, Wrench, Rocket } from "lucide-react";

const Skills = () => {
  const skillSections = [
    {
      title: "Programming & Core Technologies",
      icon: <Code className="h-6 w-6" />,
      items: [
        "Python",
        "JavaScript",
        "SQL",
        "Embedded C",
        "HTML",
        "CSS",
        "Bootstrap",
      ],
    },

    {
      title: "Machine Learning & Data Pipelines",
      icon: <Brain className="h-6 w-6" />,
      items: [
        "Supervised and Unsupervised Learning",
        "Feature Engineering",
        "Data Cleaning and Preprocessing",
        "Model Evaluation (Precision, Recall, F1)",
        "Hyperparameter Tuning",
        "Experimentation and Model Optimization",
      ],
    },

    {
      title: "Deep Learning & Computer Vision",
      icon: <Cpu className="h-6 w-6" />,
      items: [
        "CNNs and Transfer Learning",
        "Object Detection (YOLO v5, v8, v11)",
        "Multi-Object Tracking (DeepSORT, ByteTrack)",
        "Image Classification and Localization",
        "Vision-Language Models (CLIP)",
        "Real-Time Vision Systems",
      ],
    },

    {
      title: "Frameworks & Libraries",
      icon: <Database className="h-6 w-6" />,
      items: [
        "Scikit-learn",
        "PyTorch",
        "TensorFlow",
        "OpenCV",
        "Ultralytics YOLO",
        "Roboflow",
        "NumPy",
        "Pandas",
        "Matplotlib",
      ],
    },

    {
      title: "Embedded Systems & IoT",
      icon: <Cpu className="h-6 w-6" />,
      items: [
        "ESP32 Development",
        "Sensor Interfacing (MPU6050)",
        "I2C Communication",
        "State Machine Based Design",
        "Real-Time Embedded Systems",
        "Hardware–Software Integration",
        "Wokwi Simulation",
      ],
    },

    {
      title: "Tools & Development Environment",
      icon: <Wrench className="h-6 w-6" />,
      items: [
        "Git and GitHub",
        "Docker",
        "VS Code",
        "Jupyter Notebook",
        "Google Colab",
      ],
    },

    {
      title: "Deployment & Real-Time Systems",
      icon: <Rocket className="h-6 w-6" />,
      items: [
        "Flask REST APIs",
        "Streamlit Applications",
        "Firebase Integration",
        "Real-Time AI Pipelines",
        "Edge and IoT Integration",
        "System Validation and Testing",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gradient mb-12">
          Skills and Technologies
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

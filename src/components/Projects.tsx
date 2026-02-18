import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Github } from "lucide-react";

const FeaturedProjects = () => {
  const projectCategories = {
    "AI + IoT Systems": [
      {
        title: "Smart Traffic Management System",
        date: "Sep 2024 – May 2025",
        link: "https://github.com/nevil2006/AI-Based-Smart-Traffic-Management-System-with-Emergency-Vehicle-Prioritization",
        objective:
          "Designed a real-time traffic signal control system using vehicle detection and tracking.",
        outcome:
          "Approved by Police Department and deployed for live signal monitoring.",
        skills: "YOLOv11s, ESP32-CAM, OpenCV",
        highlight:
          "Reduced congestion and improved emergency vehicle prioritization."
      },
      {
        title: "AI-Based Elderly Fall Detection & Emergency Alert System",
        date: "Jan 2026 – Feb 2026",
        link: "https://github.com/nevil2006/fall-detection",
        objective:
          "Built an AI-powered fall detection system using sensor fusion and ML.",
        outcome:
          "Triggered real-time SMS & call alerts on confirmed fall detection.",
        skills: "ESP32, MPU6050, ML, Python, Twilio",
        highlight:
          "Improved elderly safety using AI-driven emergency alerts."
      },
    ],

    "AI / Machine Learning": [
      {
        title: "AI-Powered Biometric Authentication System",
        date: "Jan 2026 – Feb 2026",
        link: "https://github.com/nevil2006/biometric-authentication",
        objective:
          "Built a secure multi-factor authentication system with face recognition and liveness detection.",
        outcome:
          "Implemented cosine similarity-based face embedding matching.",
        skills:
          "React, Flask, OpenCV, SQLAlchemy, Twilio",
        highlight:
          "Prevented spoof attacks using real-time liveness detection."
      },
      {
        title: "Pathology Image Analysis using CLIP & ResNet50",
        date: "Jun 2025 – Jul 2025",
        link: "https://github.com/nevil2006/medical-analysis-app",
        objective:
          "Performed breast lesion classification using multimodal learning.",
        outcome:
          "Achieved interpretable diagnosis support with F1-score evaluation.",
        skills: "CLIP, ResNet50, PyTorch",
        highlight:
          "Enhanced diagnostic decision-making using AI."
      },
      {
        title: "AI-Based Cyber Threat Detection System",
        date: "Aug 2025 – Sep 2025",
        link: "https://github.com/nevil2006/AI_Threat_Detection_Project",
        objective:
          "Detected abnormal system behavior using ML-based anomaly detection.",
        outcome:
          "Identified suspicious activities and zero-day threats.",
        skills:
          "Python, Isolation Forest, Scikit-learn, Cybersecurity",
        highlight:
          "Enabled behavior-based cyber threat detection."
      },
    ],

    "Full-Stack & Automation": [
      {
        title: "Career Compass (Ongoing)",
        date: "Oct 2025 – Present",
        link: "https://github.com/nevil2006/career-compass",
        objective:
          "Developing an AI-powered career and learning recommendation platform.",
        outcome:
          "Generates personalized learning paths and skill roadmaps.",
        skills: "Next.js, Tailwind, FastAPI, Vector Embeddings",
        highlight:
          "Helps students make AI-driven career decisions."
      },
      {
        title: "Masking Tool for Documents",
        date: "Jul 2025 – Aug 2025",
        link: "https://github.com/nevil2006/masking-tool-in-image-",
        objective:
          "Automated masking of sensitive data in ID documents.",
        outcome:
          "Improved data privacy using OCR and regex.",
        skills: "Python, Flask, OpenCV, OCR",
        highlight:
          "Enhanced compliance with automated redaction."
      },
    ],

    "Web Development": [
      {
        title: "Eco-Friendly Product Showcase Website",
        date: "May 2025 – Jun 2025",
        link: "https://github.com/nevil2006/eco-friendly-website-frontened",
        objective:
          "Built a responsive website to promote sustainable products.",
        outcome:
          "Delivered a clean and modern UI design.",
        skills: "HTML, CSS, Bootstrap",
        highlight:
          "Promotes environmental awareness through digital platforms."
      },
    ],
  };

  const [showAll, setShowAll] = useState(false);

  const renderCard = (project, index) => (
    <Card
      key={index}
      className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <CardContent className="p-6 flex flex-col h-full justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
          <p className="text-sm text-gray-500 mb-3">{project.date}</p>
          <p className="mb-2"><strong>Objective:</strong> {project.objective}</p>
          <p className="mb-2"><strong>Outcome:</strong> {project.outcome}</p>
          <p className="mb-2"><strong>Skills:</strong> {project.skills}</p>
          <p className="text-green-600 font-medium">{project.highlight}</p>
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center text-blue-600 hover:underline"
        >
          <Github className="h-5 w-5 mr-2" /> View on GitHub
        </a>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-12 px-6 lg:px-20" id="projects">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

      {Object.entries(projectCategories)
        .slice(0, showAll ? undefined : 2)
        .map(([category, projects]) => (
          <div key={category} className="mb-14">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              {category}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map(renderCard)}
            </div>
          </div>
        ))}

      <div className="flex justify-center mt-8">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all"
        >
          {showAll ? "Show Less" : "Show More Projects"}
        </button>
      </div>
    </section>
  );
};

export default FeaturedProjects;

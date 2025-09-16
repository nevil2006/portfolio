import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Github } from "lucide-react";

const FeaturedProjects = () => {
  const mainProjects = [
    {
      title: "Smart Traffic Management System",
      date: "Sep 2024 – May 2025",
      link: "https://github.com/nevil2006/AI-Based-Smart-Traffic-Management-System-with-Emergency-Vehicle-Prioritization",
      objective:
        "Designed a traffic signal control system using real-time detection and tracking of vehicles.",
      outcome:
        "Approved by the Commissioner of Police and deployed for live traffic monitoring.",
      skills: "YOLOv11s, ESP32-CAM, OpenCV",
      highlight:
        " Reduced congestion and improved emergency vehicle prioritization through intelligent signal control."
    },
    {
      title: "pathology Image Analysis using CLIP and ResNet50",
      date: "Jun 2025 – Jul 2025",
      link: "https://github.com/nevil2006/medical-analysis-app",
      objective:
        "Applied CLIP and ResNet50 for zero-shot and few-shot classification of breast lesions from histopathology images.",
      outcome:
        "Achieved robust interpretability with engineered prompts and evaluated results using accuracy, F1-score, and confusion matrix.",
      skills: "CLIP, RN50, PyTorch, Prompt Engineering",
      highlight:
        " Enhanced diagnostic support in healthcare by leveraging multimodal models for pathology image analysis."
    },
  ];

  const otherProjects = [
    {
      title: "Eco-Friendly Product Showcase Website",
      date: "May 2025 – Jun 2025",
      link: "https://github.com/nevil2006/eco-friendly-website-frontened",
      objective:
        "Built a responsive website to promote sustainable and eco-friendly products.",
      outcome:
        "Delivered a mobile-optimized, semantic, and visually engaging green UI.",
      skills: "HTML, CSS, Bootstrap",
      highlight:
        " Promoted sustainability through a clean and eco-conscious digital presence."
    },
    {
      title: "Masking Tool for Documents",
      date: "Jul 2025 – Aug 2025",
      link: "https://github.com/nevil2006/masking-tool-in-image-",
      objective:
        "Developed a web app for masking sensitive information in ID documents using computer vision and OCR.",
      outcome:
        "Enabled secure document handling with automated privacy protection.",
      skills: "Python, Flask, OpenCV, OCR, Regex",
      highlight:
        " Improved privacy compliance by automating sensitive data redaction."
    },
  ];

  const [showMore, setShowMore] = useState(false);

  const renderCard = (project, index) => (
    <Card
      key={index}
      className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <CardContent className="p-6 flex flex-col h-full justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-sm text-gray-500 mb-3">{project.date}</p>
          <p className="mb-2">
            <strong>Objective:</strong> {project.objective}
          </p>
          <p className="mb-2">
            <strong>Outcome:</strong> {project.outcome}
          </p>
          <p className="mb-2">
            <strong>Skills & Tools:</strong> {project.skills}
          </p>
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
    <section className="py-10 px-6 lg:px-20" id="projects">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>

      {/* Main Projects (Always Visible) */}
      <div className="grid md:grid-cols-2 gap-8">
        {mainProjects.map((project, index) => renderCard(project, index))}
      </div>

      {/* Toggle Section for Other Projects */}
      {showMore && (
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {otherProjects.map((project, index) =>
            renderCard(project, `other-${index}`)
          )}
        </div>
      )}

      {/* Toggle Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setShowMore(!showMore)}
          className="px-6 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all"
        >
          {showMore ? "Show Less" : "Show More Projects"}
        </button>
      </div>
    </section>
  );
};

export default FeaturedProjects;

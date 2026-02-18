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
        "Designed a real-time traffic signal control system using vehicle detection and tracking.",
      outcome:
        "Approved by Police Department and deployed for live signal monitoring.",
      skills: "YOLOv11s, ESP32-CAM, OpenCV",
      highlight:
        "Reduced congestion and improved emergency vehicle prioritization."
    },
    {
      title: "AI-Powered Biometric Authentication System",
      date: "Jan 2026 – Feb 2026",
      link: "https://github.com/nevil2006/biometric-authentication",
      objective:
        "Built a secure multi-factor authentication system combining OTP verification, face recognition, and liveness detection.",
      outcome:
        "Implemented cosine similarity-based face embedding matching with secure database storage.",
      skills:
        "React, Flask, SQLAlchemy, OpenCV, Cosine Similarity, Twilio",
      highlight:
        "Prevented spoof attacks using real-time liveness detection and AI-based face matching."
    },
    {
      title: "Pathology Image Analysis using CLIP & ResNet50",
      date: "Jun 2025 – Jul 2025",
      link: "https://github.com/nevil2006/medical-analysis-app",
      objective:
        "Used CLIP & ResNet50 for zero-shot & few-shot breast lesion classification.",
      outcome:
        "Achieved interpretable diagnosis assistance with accuracy and F1-score evaluations.",
      skills: "CLIP, RN50, PyTorch, Prompt Engineering",
      highlight:
        "Enhanced diagnostic decision-making through multimodal learning."
    },
  ];

  const otherProjects = [
    {
      title: "Eco-Friendly Product Showcase Website",
      date: "May 2025 – Jun 2025",
      link: "https://github.com/nevil2006/eco-friendly-website-frontened",
      objective:
        "Built a responsive website to promote sustainable products.",
      outcome:
        "Achieved visually clean layout with modern UI patterns.",
      skills: "HTML, CSS, Bootstrap",
      highlight:
        "Supports environmental awareness through digital promotion."
    },
    {
      title: "Masking Tool for Documents",
      date: "Jul 2025 – Aug 2025",
      link: "https://github.com/nevil2006/masking-tool-in-image-",
      objective:
        "Built a tool for automated masking of sensitive fields in ID documents.",
      outcome:
        "Ensured secure data handling through OCR & regex-driven detection.",
      skills: "Python, Flask, OpenCV, OCR",
      highlight:
        "Improved privacy compliance via automated redaction."
    },
    {
      title: "AI-Based Cyber Threat Detection System",
      date: "Aug 2025 – Sep 2025",
      link: "https://github.com/nevil2006/AI_Threat_Detection_Project",
      objective:
        "Developed an AI-driven system to detect abnormal system behavior and potential cyber threats using anomaly detection.",
      outcome:
        "Successfully identified suspicious activities by learning normal behavior baselines and generating risk-based security alerts.",
      skills:
        "Python, Machine Learning, Isolation Forest, NumPy, Scikit-learn, Cybersecurity",
      highlight:
        "Enabled detection of zero-day and ransomware threats through behavior-based analysis."
    }
  ];

  const ongoingProjects = [
    {
      title: "Career Compass (Ongoing)",
      date: "Oct 2025 – Present",
      link: "https://github.com/nevil2006/career-compass",
      objective:
        "Developing an AI-powered personalized learning and career path recommendation platform.",
      outcome:
        "Generates tailored roadmaps, skill analysis, and role-based course recommendations.",
      skills: "Next.js, Tailwind, FastAPI, ML Models, Vector Embeddings",
      highlight:
        "Helps students and professionals identify career roles and learning paths using AI."
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
          <p className="mb-2"><strong>Objective:</strong> {project.objective}</p>
          <p className="mb-2"><strong>Outcome:</strong> {project.outcome}</p>
          <p className="mb-2"><strong>Skills & Tools:</strong> {project.skills}</p>
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

      <div className="grid md:grid-cols-2 gap-8">
        {mainProjects.map(renderCard)}
      </div>

      {showMore && (
        <>
          <h3 className="text-2xl font-semibold mt-12 mb-6 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map(renderCard)}
          </div>

          <h3 className="text-2xl font-semibold mt-12 mb-6 text-center">Ongoing Projects</h3>
          <div className="grid md:grid-cols-1 gap-8">
            {ongoingProjects.map(renderCard)}
          </div>
        </>
      )}

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

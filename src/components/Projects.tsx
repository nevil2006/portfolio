import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Github } from "lucide-react";

const projects = [
  // ===== FEATURED PROJECTS =====
  {
    title: "Smart Traffic Management System",
    category: ["AI + IoT"],
    date: "Sep 2024 – May 2025",
    link: "https://github.com/nevil2006/AI-Based-Smart-Traffic-Management-System-with-Emergency-Vehicle-Prioritization",
    objective:
      "Developed a real-time smart traffic management system with emergency vehicle prioritization using AI and IoT.",
    outcome:
      "Approved by the Police Department and successfully deployed in a live environment.",
    skills: "YOLOv11s, ESP32-CAM, OpenCV, DeepSORT, Python",
    isFeatured: true,
  },
  {
    title: "Embedded IoT-Based Fall Detection System",
    category: ["AI + IoT"],
    date: "Feb 2026",
    link: "https://github.com/nevil2006",
    objective:
      "Designed and developed a real-time embedded fall detection system for healthcare safety.",
    outcome:
      "Implemented reliable offline fall detection using deterministic logic and state-machine based confirmation.",
    skills: "ESP32, MPU6050, Embedded C, I2C, LCD, Buzzer",
    isFeatured: true,
  },
  {
    title: "AI Biometric Authentication System",
    category: ["AI / ML / CV"],
    date: "Jan 2026 – Feb 2026",
    link: "https://github.com/nevil2006/biometric-authentication",
    objective:
      "Built a secure authentication platform using face recognition, OTP verification, and liveness detection.",
    outcome:
      "Developed secure authentication APIs with real-time identity verification and session management.",
    skills: "Python, Flask, OpenCV, SQLAlchemy, HTML, CSS",
    isFeatured: true,
  },
  {
    title: "Pathology Image Analysis",
    category: ["AI / ML / CV"],
    date: "Jun 2025 – Jul 2025",
    link: "https://github.com/nevil2006/medical-analysis-app",
    objective:
      "Developed an AI-powered pathology image analysis system for breast lesion classification.",
    outcome:
      "Improved diagnostic support using CLIP and ResNet50-based image classification.",
    skills: "PyTorch, CLIP, ResNet50, Python",
    isFeatured: true,
  },

  // ===== OTHER PROJECTS =====
  {
    title: "Yuno AI Agent Platform",
    category: ["Full Stack"],
    date: "Mar 2026",
    link: "https://github.com/nevil2006",
    objective:
      "Developed a multi-agent AI orchestration platform using FastAPI, CrewAI, and Groq LLM.",
    outcome:
      "Built scalable REST APIs and intelligent workflow automation for AI-powered productivity.",
    skills: "FastAPI, CrewAI, Groq API, SQLite, Python",
  },
  {
    title: "Career Compass",
    category: ["Full Stack"],
    date: "Oct 2025 – 2026",
    link: "https://github.com/nevil2006/career-compass",
    objective:
      "Built a career guidance platform with structured learning paths and AI-powered recommendations.",
    outcome:
      "Generates personalized career roadmaps and skill recommendations for users.",
    skills: "Next.js, FastAPI, Machine Learning, PostgreSQL",
  },
  {
    title: "Document Masking Tool",
    category: ["AI / ML / CV", "Full Stack"],
    date: "Feb 2026",
    link: "https://github.com/nevil2006",
    objective:
      "Developed a document privacy application to detect and mask sensitive information using OCR and image processing.",
    outcome:
      "Automated OCR extraction, preprocessing, and secure masking workflows for sensitive documents.",
    skills: "Python, OpenCV, OCR, Flask, HTML, CSS",
  },
  {
    title: "Eco-Friendly Website",
    category: ["Full Stack"],
    date: "May 2025 – Jun 2025",
    link: "https://github.com/nevil2006/eco-friendly-website-frontened",
    objective:
      "Developed a responsive website showcasing eco-friendly products and sustainability initiatives.",
    outcome:
      "Created a modern, responsive UI with an improved user experience.",
    skills: "HTML, CSS, Bootstrap",
  },
];

const tabs = ["All", "AI + IoT", "AI / ML / CV", "Full Stack"];

export default function FeaturedProjects() {
  const [activeTab, setActiveTab] = useState("All");
  const [showAllInAllTab, setShowAllInAllTab] = useState(false);

  const filteredProjects =
    activeTab === "All"
      ? showAllInAllTab
        ? projects
        : projects.filter((project) => project.isFeatured)
      : projects.filter((project) =>
          project.category.includes(activeTab)
        );

  return (
    <section
      id="projects"
      className="py-32 px-6 lg:px-20 scroll-mt-28"
    >
      <h2 className="text-3xl font-bold text-center mb-6">
        Projects
      </h2>

      {/* Category Tabs */}
      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setShowAllInAllTab(false);
            }}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <Card
            key={index}
            className="rounded-2xl shadow-lg hover:shadow-xl transition-all"
          >
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-1">
                {project.title}
              </h3>

              <p className="text-sm text-gray-500 mb-4">
                {project.date}
              </p>

              <p>
                <strong>Objective:</strong> {project.objective}
              </p>

              <p className="mt-2">
                <strong>Outcome:</strong> {project.outcome}
              </p>

              <p className="mt-2">
                <strong>Skills:</strong> {project.skills}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center text-blue-600 hover:underline"
              >
                <Github className="h-5 w-5 mr-2" />
                View on GitHub
              </a>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* View All Button */}
      {activeTab === "All" && !showAllInAllTab && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAllInAllTab(true)}
            className="px-6 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            View All Projects
          </button>
        </div>
      )}
    </section>
  );
}

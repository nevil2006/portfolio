import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Smart Traffic Management System",
    category: "AI + IoT",
    date: "Sep 2024 – May 2025",
    link: "https://github.com/nevil2006/AI-Based-Smart-Traffic-Management-System-with-Emergency-Vehicle-Prioritization",
    objective: "Real-time traffic signal control using vehicle detection.",
    outcome: "Approved by Police Department and deployed live.",
    skills: "YOLOv11s, ESP32-CAM, OpenCV",
  },
  {
    title: "AI-Based Elderly Fall Detection System",
    category: "AI + IoT",
    date: "Jan 2026 – Feb 2026",
    link: "https://github.com/nevil2006/fall-detection",
    objective: "Detects elderly falls using sensor fusion & ML.",
    outcome: "Triggers SMS & call alerts on confirmed fall.",
    skills: "ESP32, MPU6050, ML, Twilio",
  },
  {
    title: "Biometric Authentication System",
    category: "AI / ML",
    date: "Jan 2026 – Feb 2026",
    link: "https://github.com/nevil2006/biometric-authentication",
    objective: "Multi-factor authentication with face recognition.",
    outcome: "Prevents spoofing using liveness detection.",
    skills: "OpenCV, Flask, React",
  },
  {
    title: "Pathology Image Analysis",
    category: "AI / ML",
    date: "Jun 2025 – Jul 2025",
    link: "https://github.com/nevil2006/medical-analysis-app",
    objective: "Breast lesion classification using CLIP.",
    outcome: "Improved diagnosis support using AI.",
    skills: "CLIP, ResNet50, PyTorch",
  },
  {
    title: "Career Compass",
    category: "Full Stack",
    date: "Oct 2025 – Present",
    link: "https://github.com/nevil2006/career-compass",
    objective: "AI-powered career recommendation platform.",
    outcome: "Generates personalized learning paths.",
    skills: "Next.js, FastAPI, ML",
  },
  {
    title: "Eco-Friendly Website",
    category: "Web",
    date: "May 2025 – Jun 2025",
    link: "https://github.com/nevil2006/eco-friendly-website-frontened",
    objective: "Responsive product showcase website.",
    outcome: "Clean and modern UI.",
    skills: "HTML, CSS, Bootstrap",
  },
];

const tabs = ["All", "AI + IoT", "AI / ML", "Full Stack", "Web"];

export default function FeaturedProjects() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section className="py-12 px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-center mb-6">
        Projects
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all
              ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Projects */}
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
              <p className="text-sm text-gray-500 mb-3">
                {project.date}
              </p>
              <p><strong>Objective:</strong> {project.objective}</p>
              <p><strong>Outcome:</strong> {project.outcome}</p>
              <p className="mt-2"><strong>Skills:</strong> {project.skills}</p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-blue-600 hover:underline"
              >
                <Github className="h-5 w-5 mr-2" />
                View on GitHub
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

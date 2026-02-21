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
    skills: "YOLOv11s, ESP32-CAM, OpenCV, DeepSORT",
    isFeatured: true,
  },
  {
    title: "Embedded IoT-Based Fall Detection System (Mentorship)",
    category: "AI + IoT",
    date: "Feb 2026",
    link: "https://github.com/nevil2006",
    objective:
      "Design and development of a real-time embedded fall detection system for healthcare safety.",
    outcome:
      "Reliable offline fall detection using deterministic logic and state-machine based confirmation.",
    skills: "ESP32, MPU6050, Embedded C, I2C, LCD, Buzzer",
    isFeatured: true,
  },
  {
    title: "Biometric Authentication System",
    category: "AI / ML",
    date: "Jan 2026 – Feb 2026",
    link: "https://github.com/nevil2006/biometric-authentication",
    objective: "Multi-factor authentication with face recognition.",
    outcome: "Prevents spoofing using liveness detection.",
    skills: "OpenCV, Flask, React, Cosine Similarity",
    isFeatured: true,
  },
  {
    title: "Pathology Image Analysis",
    category: "AI / ML",
    date: "Jun 2025 – Jul 2025",
    link: "https://github.com/nevil2006/medical-analysis-app",
    objective: "Breast lesion classification using vision-language models.",
    outcome: "Improved diagnosis support through image-based analysis.",
    skills: "CLIP, ResNet50, PyTorch",
  },
  {
    title: "Career Compass",
    category: "Full Stack",
    date: "Oct 2025 – Present",
    link: "https://github.com/nevil2006/career-compass",
    objective: "Career guidance platform with structured learning paths.",
    outcome: "Generates personalized recommendations for users.",
    skills: "Next.js, FastAPI, Machine Learning",
  },
  {
    title: "Eco-Friendly Website",
    category: "Web",
    date: "May 2025 – Jun 2025",
    link: "https://github.com/nevil2006/eco-friendly-website-frontened",
    objective: "Responsive product showcase website.",
    outcome: "Clean and modern user interface.",
    skills: "HTML, CSS, Bootstrap",
  },
];

const tabs = ["All", "AI + IoT", "AI / ML", "Full Stack", "Web"];

export default function FeaturedProjects() {
  const [activeTab, setActiveTab] = useState("All");
  const [showAllInAllTab, setShowAllInAllTab] = useState(false);

  const filteredProjects =
    activeTab === "All"
      ? showAllInAllTab
        ? projects
        : projects.filter((p) => p.isFeatured)
      : projects.filter((p) => p.category === activeTab);

  return (
    <section
      id="projects"
      className="py-32 px-6 lg:px-20 scroll-mt-28"
    >
      <h2 className="text-3xl font-bold text-center mb-6">
        Projects
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setShowAllInAllTab(false);
            }}
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

      {/* Projects Grid */}
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
              <p>
                <strong>Objective:</strong> {project.objective}
              </p>
              <p>
                <strong>Outcome:</strong> {project.outcome}
              </p>
              <p className="mt-2">
                <strong>Skills:</strong> {project.skills}
              </p>

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

      {/* View All Button (only for All tab) */}
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

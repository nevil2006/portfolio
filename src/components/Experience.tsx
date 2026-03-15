import { Calendar, MapPin, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Lehigh University & KGiSL Institute of Technology",
      position: "BIOE 396/496 Study Abroad Program Participant",
      duration: "March 2026",
      location: "Coimbatore, India",
      description:
        "Participated in an international academic collaboration focused on AgriTech and Global Innovation. Worked with students from Lehigh University and KGiSL Institute of Technology on interdisciplinary projects and gained exposure to chemistry laboratory experiments and global research collaboration.",
      technologies: [
        "AgriTech",
        "Global Innovation",
        "Research Collaboration",
        "Lab Experiments",
      ],
    },
    {
      company: "Pinnacle Labs Pvt Ltd",
      position: "Artificial Intelligence Intern",
      duration: "February 2026",
      location: "Remote",
      description:
        "Worked as an Artificial Intelligence Intern focusing on developing AI-driven solutions and gaining practical exposure to machine learning workflows. Contributed to building intelligent systems, data preprocessing, and experimenting with AI models for real-world problem solving.",
      technologies: [
        "Artificial Intelligence",
        "Machine Learning",
        "Python",
        "Data Processing",
        "AI Development",
      ],
    },
    {
      company: "CMLI (Center For Machine Learning And Intelligence)",
      position: "Vision-Language Models Intern",
      duration: "2025",
      location: "Onsite",
      description:
        "Developed CLIP-based healthcare imaging solutions for medical diagnosis and analysis.",
      technologies: ["CLIP", "PyTorch", "Computer Vision", "Healthcare AI"],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Experience
          </h2>
          <p className="text-lg text-gray-400">
            Building AI solutions across healthcare, automation, and data analytics
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-500"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-start mb-12">

              {/* Timeline Dot */}
              <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-black"></div>

              {/* Experience Card */}
              <div className="ml-16 p-6 rounded-xl shadow-lg bg-white dark:bg-gray-900 w-full transition hover:shadow-xl">

                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">

                  {/* Position + Company */}
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
                      {exp.position}
                    </h3>

                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {exp.company}
                    </div>
                  </div>

                  {/* Date + Location */}
                  <div className="flex flex-col md:items-end text-sm text-gray-500 dark:text-gray-400 mt-3 md:mt-0">
                    <div className="flex items-center mb-1">
                      <Calendar className="h-4 w-4 mr-2" />
                      {exp.duration}
                    </div>

                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>

                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {exp.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-full text-sm bg-gray-100 text-blue-600 dark:bg-gray-800 dark:text-blue-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Experience;

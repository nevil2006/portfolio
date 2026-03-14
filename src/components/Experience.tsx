import { Calendar, MapPin, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Lehigh University × KGiSL Institute of Technology",
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
      company: "CMLI (Center For Machine Learning And Intelligence)",
      position: "Vision-Language Models Intern",
      duration: "2025",
      location: "Onsite",
      description:
        "Developed CLIP-based healthcare imaging solutions for medical diagnosis and analysis.",
      technologies: ["CLIP", "PyTorch", "Computer Vision", "Healthcare AI"],
    },
    {
      company: "Hizen.ai",
      position: "Machine Learning Intern",
      duration: "2023",
      location: "Remote",
      description:
        "Built NLP automation pipelines using BERT and advanced ML techniques for document processing.",
      technologies: ["BERT", "NLP", "ML Pipelines", "Python"],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience</h2>
          <p className="text-lg text-muted-foreground">
            Building AI solutions across healthcare, automation, and data analytics
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-start mb-12">
              <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>

              <div className="ml-16 p-6 rounded-xl shadow-lg bg-white w-full">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{exp.position}</h3>
                    <div className="flex items-center text-blue-600 font-semibold">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-col md:items-end text-sm text-gray-500">
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

                <p className="text-gray-600 mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-full text-sm bg-gray-100 text-blue-600"
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

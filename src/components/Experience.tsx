import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "CMLI(center for machine learning and intelligence)",
      position: "Vision-Language Models Intern",
      duration: "2025",
      location: "Onsite",
      description: "Developed CLIP-based healthcare imaging solutions for medical diagnosis and analysis",
      technologies: ["CLIP", "PyTorch", "Computer Vision", "Healthcare AI"],
      type: "internship"
    },
    {
      company: "Hizen.ai",
      position: "Machine learning Intern",
      duration: "2023",
      location: "Remote",
      description: "Built NLP automation pipelines using BERT and advanced ML techniques for document processing",
      technologies: ["BERT", "NLP", "ML Pipelines", "Python"],
      type: "internship"
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground">
            Building AI solutions across healthcare, automation, and data analytics
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary"></div>

          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative flex items-start mb-12 slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background glow-primary z-10"></div>

              {/* Content Card */}
              <div className="ml-16 glass-neon p-8 rounded-2xl w-full group hover:scale-105 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-gradient transition-all duration-300">
                      {exp.position}
                    </h3>
                    <div className="flex items-center text-primary font-semibold mb-2">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {exp.company}
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:items-end text-sm text-muted-foreground">
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

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="glass px-3 py-1 rounded-full text-sm text-primary font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Highlight */}
        <div className="mt-16 text-center slide-up">
          <div className="glass-neon p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10">
            <h3 className="text-2xl font-bold text-gradient mb-4">Career Highlight</h3>
            <p className="text-lg text-muted-foreground">
              Successfully applied AI and Computer Vision knowledge in real-world internships, 
              contributing to healthcare imaging, NLP automation, and predictive analytics projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

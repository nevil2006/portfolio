import { Github, ExternalLink, Lightbulb, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "AI Traffic Management System",
      description: "Intelligent traffic flow optimization using YOLOv5 for real-time vehicle detection, integrated with ESP32-CAM and BeagleBone Black for IoT connectivity. Winner of multiple competitions and approved by Coimbatore Police Commissioner.",
      technologies: ["YOLOv5", "ESP32-CAM", "BeagleBone Black", "OpenCV", "IoT", "Python"],
      icon: <Lightbulb className="h-8 w-8" />,
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true,
      achievements: ["🏆 1st Prize Ideathon", "🏆 1st Prize Project Expo", "✅ Police Commissioner Approved"]
    },
    {
      title: "Eco-Friendly Website",
      description: "Lightweight, environmentally conscious website built with pure HTML/CSS focusing on minimal carbon footprint and maximum performance. Showcases sustainable web development practices.",
      technologies: ["HTML5", "CSS3", "Vanilla JS", "Performance Optimization"],
      icon: <Leaf className="h-8 w-8" />,
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false,
      achievements: ["🌱 Carbon Neutral", "⚡ 100% Lighthouse Score"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Innovative AI solutions that bridge the gap between cutting-edge technology and real-world impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`glass-neon rounded-2xl p-8 group hover:scale-105 transition-all duration-500 ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                    <div className="text-primary group-hover:text-primary-glow transition-colors duration-300">
                      {project.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="inline-block bg-gradient-to-r from-primary to-secondary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold mt-2">
                        FEATURED PROJECT
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground/80 transition-colors duration-300">
                {project.description}
              </p>

              {/* Achievements (if any) */}
              {project.achievements && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary mb-3">Achievements</h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {project.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="glass px-3 py-2 rounded-lg text-sm">
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="glass px-3 py-1 rounded-full text-xs text-primary font-medium border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <Button className="btn-neon flex-1 sm:flex-none" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                </Button>
                <Button className="btn-glass flex-1 sm:flex-none">
                  <Lightbulb className="mr-2 h-4 w-4" />
                  AI Explain
                </Button>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12 slide-up">
          <Button className="btn-glass">
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
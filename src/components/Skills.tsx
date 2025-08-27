import { Code, Database, Brain, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Python", level: 90, color: "from-blue-500 to-blue-600" },
        { name: "JavaScript", level: 85, color: "from-yellow-500 to-yellow-600" },
        { name: "HTML/CSS", level: 88, color: "from-orange-500 to-red-500" },
        { name: "SQL", level: 75, color: "from-purple-500 to-purple-600" }
      ]
    },
    {
      title: "AI/ML Frameworks",
      icon: <Brain className="h-6 w-6" />,
      skills: [
        { name: "YOLOv8", level: 92, color: "from-primary to-primary-glow" },
        { name: "TensorFlow", level: 85, color: "from-secondary to-secondary-glow" },
        { name: "OpenCV", level: 88, color: "from-green-500 to-green-600" },
        { name: "Keras", level: 80, color: "from-red-500 to-red-600" }
      ]
    },
    {
      title: "Development Tools",
      icon: <Wrench className="h-6 w-6" />,
      skills: [
        { name: "Flask", level: 82, color: "from-primary to-secondary" },
        { name: "Flutter", level: 75, color: "from-blue-400 to-blue-500" },
        { name: "Git/GitHub", level: 88, color: "from-gray-600 to-gray-700" },
        { name: "VS Code", level: 90, color: "from-blue-600 to-blue-700" }
      ]
    },
    {
      title: "Databases & Cloud",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "PostgreSQL", level: 78, color: "from-blue-700 to-blue-800" },
        { name: "Firebase", level: 80, color: "from-yellow-600 to-orange-500" },
        { name: "Android Studio", level: 72, color: "from-green-600 to-green-700" },
        { name: "Figma", level: 85, color: "from-purple-600 to-pink-600" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across AI/ML, web development, and emerging technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="glass-neon p-8 rounded-2xl slide-up group"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mr-4 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                  <div className="text-primary group-hover:text-primary-glow transition-colors duration-300">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <div className="mt-16 text-center slide-up">
          <h3 className="text-2xl font-bold mb-8 text-gradient">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "BERT", "CLIP", "ESP32", "BeagleBone", "IoT", "Computer Vision", 
              "NLP", "Deep Learning", "Machine Learning", "Data Visualization",
              "RESTful APIs", "Responsive Design", "Agile Development", "Problem Solving"
            ].map((tech, index) => (
              <span 
                key={index}
                className="glass px-4 py-2 rounded-full text-sm text-primary font-medium hover:glow-primary transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Skill Summary */}
        <div className="mt-16 glass p-8 rounded-2xl text-center slide-up">
          <h3 className="text-2xl font-bold text-gradient mb-4">Continuous Learning</h3>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Always exploring new technologies and methodologies. Currently diving deeper into 
            Vision-Language Models, advanced Computer Vision techniques, and cloud-native AI deployments. 
            Passionate about staying at the forefront of AI innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
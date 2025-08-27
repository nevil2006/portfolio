import { Brain, Eye, Code, Zap } from 'lucide-react';

const About = () => {
  const interests = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Vision-Language Models",
      description: "Medical imaging analysis with CLIP and multimodal AI systems"
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Real-time Computer Vision",
      description: "YOLO + IoT integration for smart traffic and surveillance systems"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "NLP & Document Intelligence",
      description: "BERT, prompt engineering, and intelligent document processing"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Full-stack AI Systems",
      description: "End-to-end AI applications with modern web technologies"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="slide-up">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              I'm an <span className="text-primary font-semibold">AI & Data Science student</span> passionate 
              about solving real-world problems in traffic management, healthcare, and automation. 
              With hands-on experience in building ML models and deploying interactive AI-driven web applications, 
              I bridge the gap between cutting-edge research and practical solutions.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              My expertise spans from <span className="text-secondary font-semibold">computer vision algorithms</span> to 
              full-stack development, allowing me to create comprehensive AI systems that make a real impact. 
              I'm always exploring new technologies and contributing to open-source projects.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="glass px-4 py-2 rounded-lg">
                <span className="text-primary font-mono">🎓</span>
                <span className="ml-2 text-sm">B.Tech AI & Data Science</span>
              </div>
              <div className="glass px-4 py-2 rounded-lg">
                <span className="text-secondary font-mono">🏆</span>
                <span className="ml-2 text-sm">Competition Winner</span>
              </div>
              <div className="glass px-4 py-2 rounded-lg">
                <span className="text-primary font-mono">💼</span>
                <span className="ml-2 text-sm">Industry Experience</span>
              </div>
            </div>
          </div>

          {/* Core Interests */}
          <div className="slide-up">
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">Core Interests</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {interests.map((interest, index) => (
                <div 
                  key={index}
                  className="glass p-6 rounded-xl glow-hover group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-primary mb-4 group-hover:text-primary-glow transition-colors duration-300">
                    {interest.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-foreground">
                    {interest.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {interest.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
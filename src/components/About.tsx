import { Brain, Eye } from 'lucide-react';

const About = () => {
  const interests = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Vision-Language Models",
      description: "Exploring multimodal AI systems like CLIP for medical imaging and cross-domain understanding."
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Real-time Computer Vision",
      description: "Building robust traffic and surveillance solutions with YOLO and IoT integration."
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Artificial Intelligence",
      description: "Designing and deploying machine learning systems that bridge research with real-world impact."
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
              I’m a <span className="text-primary font-semibold">B.Tech AI & Data Science student</span> 
              passionate about leveraging AI to solve real-world challenges in traffic management, 
              healthcare, and automation. My focus lies in developing scalable and impactful AI systems 
              with strong foundations in <span className="text-secondary font-semibold">computer vision</span> 
              and <span className="text-secondary font-semibold">vision-language models</span>.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              With hands-on experience in <span className="text-primary font-semibold">machine learning, 
              deep learning, and real-time computer vision</span>, I aim to transform cutting-edge research 
              into practical, industry-ready applications. I’m continuously exploring emerging AI 
              technologies while contributing to innovative projects and collaborations.
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
                <span className="ml-2 text-sm">Research & Industry Exposure</span>
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

import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-br from-background via-muted/5 to-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground">
            Building a strong foundation in AI and Data Science
          </p>
        </div>

        {/* Education Card */}
        <div className="slide-up">
          <div className="glass-neon p-8 md:p-12 rounded-2xl group hover:scale-105 transition-all duration-300">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mr-6 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                  <GraduationCap className="h-8 w-8 text-primary group-hover:text-primary-glow transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                    Bachelor of Technology
                  </h3>
                  <p className="text-lg text-primary font-semibold">
                    AI & Data Science
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col items-start md:items-end text-muted-foreground">
                <div className="flex items-center mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>2023 - 2027</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Coimbatore, Tamil Nadu</span>
                </div>
              </div>
            </div>

            {/* Institution */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-foreground mb-2">
                KGiSL Institute of Technology
              </h4>
              <p className="text-muted-foreground">
                Specialized program focusing on Artificial Intelligence, Machine Learning, 
                Data Science, and Computer Vision technologies.
              </p>
            </div>

            {/* CGPA */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold text-foreground">Current CGPA</span>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-primary mr-2" />
                  <span className="text-2xl font-bold text-gradient">7.1</span>
                  <span className="text-muted-foreground ml-1">/10.0</span>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                  style={{ width: '71%' }}
                ></div>
              </div>
            </div>

            {/* Key Subjects */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">Key Subjects</h4>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Machine Learning",
                  "Deep Learning",
                  "Computer Vision",
                  "Natural Language Processing",
                  "Data Structures & Algorithms",
                  "Statistics & Probability",
                  "Neural Networks",
                  "Big Data Analytics",
                  "Python Programming"
                ].map((subject, index) => (
                  <div 
                    key={index}
                    className="glass px-3 py-2 rounded-lg text-sm text-center hover:glow-primary transition-all duration-300"
                  >
                    {subject}
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Highlights */}
            <div className="border-t border-glass-border pt-6">
              <h4 className="text-lg font-semibold text-foreground mb-4">Academic Highlights</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Active participation in AI research projects and competitions
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Practical experience through industry internships
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Leadership in technical projects and team collaborations
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Strong foundation in both theoretical and applied AI concepts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Learning */}
        <div className="mt-12 text-center slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="glass p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gradient mb-3">Continuous Learning</h3>
            <p className="text-muted-foreground">
              Beyond formal education, I actively pursue online courses, research papers, 
              and hands-on projects to stay current with the rapidly evolving AI landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
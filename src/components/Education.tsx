import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology",
      field: "AI & Data Science",
      institution: "KGiSL Institute of Technology",
      duration: "2023 - 2027",
      location: "Coimbatore, Tamil Nadu",
      cgpa: "7.1",
      keySubjects: [
        "Machine Learning", "Deep Learning", "Computer Vision",
        "Natural Language Processing", "Data Structures & Algorithms",
        "Statistics & Probability", "Neural Networks",
        "Big Data Analytics", "Python Programming"
      ],
      highlights: [
        "Active participation in AI research projects and competitions",
        "Practical experience through industry internships",
        "Leadership in technical projects and team collaborations",
        "Strong foundation in both theoretical and applied AI concepts"
      ]
    },
    {
      degree: "Higher Secondary",
      field: "Science",
      institution: "Chavara Vidya Bhavan",
      duration: "2019 - 2023",
      location: "Coimbatore, Tamil Nadu",
      keySubjects: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
      highlights: ["Topper in Mathematics", "Member of Science Club"]
    },
    {
      degree: "Secondary School",
      field: "SSC",
      institution: "Lisieux Matriculation Higher Secondary School",
      duration: "2009 - 2020",
      location: "Coimbatore, Tamil Nadu",
      keySubjects: ["English", "Maths", "Science", "Social Studies"],
      highlights: ["Excellence in academics", "Active in extracurricular activities"]
    }
  ];

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

        {educationData.map((edu, index) => (
          <div key={index} className="slide-up mb-12">
            <div className="glass-neon p-8 md:p-12 rounded-2xl group hover:scale-105 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mr-6 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                    <GraduationCap className="h-8 w-8 text-primary group-hover:text-primary-glow transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-primary font-semibold">{edu.field}</p>
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end text-muted-foreground">
                  <div className="flex items-center mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-foreground mb-2">{edu.institution}</h4>
              </div>

              {/* Show CGPA only if it exists */}
              {edu.cgpa && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-foreground">CGPA</span>
                    <div className="flex items-center">
                      <Award className="h-5 w-5 text-primary mr-2" />
                      <span className="text-2xl font-bold text-gradient">{edu.cgpa}</span>
                    </div>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${parseFloat(edu.cgpa) * 10}%` }}
                    ></div>
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-foreground mb-3">Key Subjects</h4>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {edu.keySubjects.map((subject, i) => (
                    <div 
                      key={i}
                      className="glass px-3 py-2 rounded-lg text-sm text-center hover:glow-primary transition-all duration-300"
                    >
                      {subject}
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-glass-border pt-4">
                <h4 className="text-lg font-semibold text-foreground mb-3">Highlights</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {edu.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Education;

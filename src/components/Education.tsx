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

  // ✅ Completed Certification
  const completedCertificationsData = [
    {
      degree: "Global Certification",
      field: "Oracle Certified Foundations Associate – AI Fundamentals",
      institution: "Oracle University",
      duration: "2024",
      location: "Online / Global",
      keySubjects: [
        "AI Foundations", 
        "Machine Learning Basics", 
        "Data Analysis", 
        "Python for AI", 
        "Cloud Infrastructure Essentials"
      ],
      highlights: [
        "Successfully completed Oracle Certified Foundations Associate credential",
        "Gained foundational knowledge in AI, ML, and data-driven problem solving",
        "Built hands-on experience with Oracle Cloud and Python integration",
        "Recognized globally as an entry-level certification in Artificial Intelligence"
      ]
    }
  ];

  // 🚀 Ongoing Certifications
  const ongoingCertificationsData = [
    {
      degree: "AI & Deep Learning Certification (Ongoing)",
      field: "Hugging Face – Reinforcement Learning",
      institution: "Hugging Face ",
      duration: "2025 (Ongoing)",
      location: "Online / Global",
      keySubjects: [
        "Reinforcement Learning Fundamentals", 
        "Policy Gradients & PPO", 
        "Transformers for RL", 
        "RLHF (Reinforcement Learning with Human Feedback)"
      ],
      highlights: [
        "Exploring advanced reinforcement learning models using Hugging Face Transformers",
        "Hands-on experience with PPO and RLHF implementations",
        "Learning to integrate reinforcement learning into large language models",
        "Focused on real-world applications like dialogue optimization and robotics"
      ]
    },
    {
      degree: "AI & Vision Certification (Ongoing)",
      field: "Computer Vision – Deep Learning Specialization",
      institution: "Hugging Face ",
      duration: "2025 (Ongoing)",
      location: "Online / Global",
      keySubjects: [
        "Convolutional Neural Networks (CNNs)", 
        "Object Detection (YOLO, RCNN)", 
        "Image Segmentation", 
        "Transfer Learning & Pretrained Models"
      ],
      highlights: [
        "Developing strong understanding of deep computer vision models",
        "Hands-on experience with image classification and detection tasks",
        "Working with TensorFlow and OpenCV for real-time vision applications",
        "Focused on connecting visual intelligence with AI-driven decision systems"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-br from-background via-muted/5 to-background">
      <div className="max-w-4xl mx-auto">

        {/* 🎓 Education Section */}
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
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mr-6">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">{edu.degree}</h3>
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

              <h4 className="text-xl font-bold text-foreground mb-2">{edu.institution}</h4>

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
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      style={{ width: `${parseFloat(edu.cgpa) * 10}%` }}
                    ></div>
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-foreground mb-3">Key Subjects</h4>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {edu.keySubjects.map((subject, i) => (
                    <div key={i} className="glass px-3 py-2 rounded-lg text-sm text-center">
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
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <p className="text-muted-foreground">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* 🌐 Certifications Section */}
        <div className="text-center mt-24 mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Certifications</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground">
            Validating skills with globally recognized credentials
          </p>
        </div>

        {/* 🚀 Ongoing Certifications */}
        <h3 className="text-3xl font-bold text-foreground mb-10 text-center">Ongoing Certifications</h3>
        {ongoingCertificationsData.map((cert, index) => (
          <div key={index} className="slide-up mb-12">
            <div className="glass-neon p-8 md:p-12 rounded-2xl group hover:scale-105 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mr-6">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">{cert.degree}</h3>
                    <p className="text-lg text-primary font-semibold">{cert.field}</p>
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end text-muted-foreground">
                  <div className="flex items-center mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{cert.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{cert.location}</span>
                  </div>
                </div>
              </div>

              <h4 className="text-xl font-bold text-foreground mb-2">{cert.institution}</h4>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-foreground mb-3">Key Subjects</h4>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {cert.keySubjects.map((subject, i) => (
                    <div key={i} className="glass px-3 py-2 rounded-lg text-sm text-center">
                      {subject}
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-glass-border pt-4">
                <h4 className="text-lg font-semibold text-foreground mb-3">Highlights</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {cert.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <p className="text-muted-foreground">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* ✅ Completed Certifications */}
        <h3 className="text-3xl font-bold text-foreground mb-10 text-center mt-24">Completed Certifications</h3>
        {completedCertificationsData.map((cert, index) => (
          <div key={index} className="slide-up mb-12">
            <div className="glass-neon p-8 md:p-12 rounded-2xl group hover:scale-105 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-300/30 to-primary/20 rounded-2xl flex items-center justify-center mr-6">
                    <Award className="h-8 w-8 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">{cert.degree}</h3>
                    <p className="text-lg text-green-500 font-semibold">{cert.field}</p>
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end text-muted-foreground">
                  <div className="flex items-center mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{cert.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{cert.location}</span>
                  </div>
                </div>
              </div>

              <h4 className="text-xl font-bold text-foreground mb-2">{cert.institution}</h4>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-foreground mb-3">Key Subjects</h4>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {cert.keySubjects.map((subject, i) => (
                    <div key={i} className="glass px-3 py-2 rounded-lg text-sm text-center">
                      {subject}
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-glass-border pt-4">
                <h4 className="text-lg font-semibold text-foreground mb-3">Highlights</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {cert.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
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

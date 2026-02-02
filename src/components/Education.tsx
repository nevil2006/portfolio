import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

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
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "Natural Language Processing",
        "Data Structures & Algorithms",
        "Statistics & Probability",
        "Neural Networks",
        "Big Data Analytics",
        "Python Programming",
      ],
      highlights: [
        "Active participation in AI research projects and competitions",
        "Practical experience through industry internships",
        "Leadership in technical projects and team collaborations",
        "Strong foundation in both theoretical and applied AI concepts",
      ],
    },
    {
      degree: "Higher Secondary",
      field: "Science",
      institution: "Chavara Vidya Bhavan",
      duration: "2019 - 2023",
      location: "Coimbatore, Tamil Nadu",
      keySubjects: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "Computer Science",
      ],
      highlights: [
        "Topper in Mathematics",
        "Active member of the Science Club",
      ],
    },
    {
      degree: "Secondary School",
      field: "SSC",
      institution: "Lisieux Matriculation Higher Secondary School",
      duration: "2009 - 2020",
      location: "Coimbatore, Tamil Nadu",
      keySubjects: [
        "English",
        "Mathematics",
        "Science",
        "Social Studies",
      ],
      highlights: [
        "Consistent academic excellence",
        "Active participation in extracurricular activities",
      ],
    },
  ];

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
        "Cloud Infrastructure Essentials",
      ],
      highlights: [
        "Successfully earned Oracle Certified Foundations Associate credential",
        "Strong understanding of AI, ML, and data-driven systems",
        "Hands-on exposure to Oracle Cloud and Python",
        "Globally recognized certification in Artificial Intelligence",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="py-20 px-4 bg-gradient-to-br from-background via-muted/5 to-background"
    >
      <div className="max-w-4xl mx-auto">

        {/* 🎓 Education Section */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground">
            Building a strong foundation in AI and Data Science
          </p>
        </div>

        {educationData.map((edu, index) => (
          <div key={index} className="slide-up mb-12">
            <div className="glass-neon p-8 md:p-12 rounded-2xl hover:scale-105 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mr-6">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-primary font-semibold">
                      {edu.field}
                    </p>
                  </div>
                </div>

                <div className="text-muted-foreground">
                  <div className="flex items-center mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {edu.duration}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {edu.location}
                  </div>
                </div>
              </div>

              <h4 className="text-xl font-bold mb-4">
                {edu.institution}
              </h4>

              {edu.cgpa && (
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">CGPA</span>
                    <span className="font-bold text-gradient">
                      {edu.cgpa}
                    </span>
                  </div>
                  <div className="w-full bg-muted h-3 rounded-full">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      style={{ width: `${parseFloat(edu.cgpa) * 10}%` }}
                    />
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h4 className="font-semibold mb-3">Key Subjects</h4>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {edu.keySubjects.map((sub, i) => (
                    <div
                      key={i}
                      className="glass px-3 py-2 rounded-lg text-sm text-center"
                    >
                      {sub}
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-glass-border pt-4">
                <h4 className="font-semibold mb-3">Highlights</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {edu.highlights.map((point, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <p className="text-muted-foreground">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* 🌐 Certifications */}
        <div className="text-center mt-24 mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Certifications
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground">
            Verified and completed professional certifications
          </p>
        </div>

        {completedCertificationsData.map((cert, index) => (
          <div key={index} className="slide-up mb-12">
            <div className="glass-neon p-8 md:p-12 rounded-2xl hover:scale-105 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-green-300/30 rounded-2xl flex items-center justify-center mr-6">
                    <Award className="h-8 w-8 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{cert.degree}</h3>
                    <p className="text-green-500 font-semibold">
                      {cert.field}
                    </p>
                  </div>
                </div>

                <div className="text-muted-foreground">
                  <div className="flex items-center mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {cert.duration}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {cert.location}
                  </div>
                </div>
              </div>

              <h4 className="text-xl font-bold mb-4">
                {cert.institution}
              </h4>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">Key Subjects</h4>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {cert.keySubjects.map((sub, i) => (
                    <div
                      key={i}
                      className="glass px-3 py-2 rounded-lg text-sm text-center"
                    >
                      {sub}
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-glass-border pt-4">
                <h4 className="font-semibold mb-3">Highlights</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {cert.highlights.map((point, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                      <p className="text-muted-foreground">{point}</p>
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

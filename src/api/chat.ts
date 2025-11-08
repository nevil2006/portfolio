export function askNevilAI(message: string): string {
  const msg = message.toLowerCase().trim();

  const responses: { keywords: string[]; answer: string }[] = [
    // GREETINGS
    { keywords: ["hi", "hello", "hey"], answer: "Hello, I am Nevil AI. How can I help you?" },
    { keywords: ["how are you"], answer: "I am functioning well and ready to assist." },

    // ABOUT NEVIL
    { keywords: ["who is nevil", "about nevil", "introduce nevil"], answer: "Nevil J is an AI and Data Science student skilled in Machine Learning, Computer Vision, and real-time AI system development." },
    { keywords: ["nevil from"], answer: "Nevil is from Coimbatore, Tamil Nadu." },

    // EDUCATION
    { keywords: ["education", "college", "study"], answer: "Nevil is pursuing B.Tech in Artificial Intelligence and Data Science at KGiSL Institute of Technology." },
    { keywords: ["cgpa"], answer: "Current CGPA: 7.1" },

    // SKILLS
    { keywords: ["skills", "technical skills", "skillset"], answer: "Python, Machine Learning, Deep Learning, Neural Networks, YOLO, OpenCV, CLIP, Pandas, NumPy, React, SQL, IoT Systems." },
    { keywords: ["programming languages"], answer: "Python, JavaScript, SQL" },
    { keywords: ["frameworks", "libraries"], answer: "PyTorch, TensorFlow, Scikit-learn, Keras, OpenCV, React." },
    { keywords: ["tools"], answer: "Git, Linux, VS Code, Jupyter Notebook, Docker (beginner), Firebase (beginner)." },

    // PROJECTS
    { keywords: ["traffic", "smart traffic"], answer: "Nevil developed a Smart Traffic Management System using YOLO and ESP32-CAM for intelligent real-time signal control. The project was validated by the Police Department and won multiple competitions." },
    { keywords: ["clip", "pathology", "breast cancer"], answer: "Nevil built a pathology image analysis system using CLIP and ResNet50 for breast lesion classification with interpretable decision support." },
    { keywords: ["face recognition", "attendance"], answer: "Nevil created a Wi-Fi-based Face Recognition Attendance System that operates even on local hotspot networks." },
    { keywords: ["masking", "ocr", "document"], answer: "Nevil designed an automated Document Masking System using OCR and OpenCV to securely hide sensitive information in documents." },

    // EXPERIENCE
    { keywords: ["intern", "internship"], answer: "Nevil worked at CMLI on Vision-Language Models and at Hizen.ai on NLP automation pipelines using CLIP and BERT." },

    // PERSONALITY & HR ANSWERS
    { keywords: ["tell me about yourself"], answer: "I am an AI and Data Science engineer focused on applying Machine Learning and Computer Vision to solve practical real-world problems. I aim to build reliable and scalable AI systems." },
    { keywords: ["strength"], answer: "Strong analytical thinking, quick learning capability, and the ability to convert research into deployable systems." },
    { keywords: ["weakness"], answer: "Nevil sometimes spends extra time on fine details, but he is improving by balancing precision and time management." },
    { keywords: ["why should we hire you"], answer: "Nevil builds real working AI systems, not just prototypes. He understands problem requirements, learns fast, adapts quickly, and works responsibly in teams." },
    { keywords: ["career goal", "future goal"], answer: "Nevil aims to specialize in Vision-Language Models and real-time AI system deployment in Smart City and Healthcare applications." },

    // ACHIEVEMENTS
    { keywords: ["achievement", "award", "prize"], answer: "Nevil won first place in national-level competitions and received official recognition for the Smart Traffic System from the Coimbatore Police Commissioner." },

    // CONTACT
    { keywords: ["contact", "email"], answer: "Email: nevilj22@gmail.com" },
    { keywords: ["linkedin"], answer: "LinkedIn: linkedin.com/in/nevil-j" },
    { keywords: ["github"], answer: "GitHub: github.com/nevil-j" },

    // GOODBYE
    { keywords: ["thank", "thanks"], answer: "You are welcome. Let me know if you have more questions." },
    { keywords: ["bye", "exit"], answer: "Goodbye. Have a productive day." },
  ];

  for (const r of responses) {
    if (r.keywords.some((k) => msg.includes(k))) return r.answer;
  }

  return "I am Nevil AI. You can ask about skills, projects, experience, achievements, portfolio details, or interview questions.";
}

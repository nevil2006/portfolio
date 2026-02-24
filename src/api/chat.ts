// src/api/chat.ts
// Intent-based portfolio chatbot (scales to 200+ questions)

type Intent = {
  intent: string;
  keywords: string[];
  response: string;
};

const intents: Intent[] = [
  /* =======================
     GREETINGS
  ======================== */
  {
    intent: "greeting",
    keywords: [
      "hi", "hello", "hey", "hii", "hai",
      "good morning", "good evening", "good afternoon",
      "start", "welcome"
    ],
    response:
      "Hi 👋 I’m Nevil’s AI assistant. Ask me about skills, projects, hackathons, AI experience, or career goals.",
  },

  /* =======================
     PROFILE / ABOUT
  ======================== */
  {
    intent: "about",
    keywords: [
      "who are you",
      "about you",
      "introduce yourself",
      "tell me about yourself",
      "profile",
      "bio",
      "summary",
      "who is nevil",
      "one line"
    ],
    response:
      "I’m Nevil, an AI & Data Science engineer specializing in Computer Vision, Vision-Language Models, and real-world AI systems.",
  },
  {
    intent: "portfolio_focus",
    keywords: ["portfolio focus", "portfolio about", "portfolio goal"],
    response:
      "My portfolio focuses on end-to-end AI systems, from model development to deployment, with real-world impact.",
  },
  {
    intent: "why_ai",
    keywords: ["why ai", "why artificial intelligence", "why ml", "why data science"],
    response:
      "I chose AI to solve real-world, data-driven problems with measurable impact.",
  },
  {
    intent: "goal",
    keywords: ["goal", "career goal", "long term goal", "future", "ambition"],
    response:
      "My long-term goal is to become an AI Research Scientist building real-world vision systems.",
  },

  /* =======================
     SKILLS
  ======================== */
  {
    intent: "skills",
    keywords: [
      "skills",
      "skill",
      "tech stack",
      "technologies",
      "tools",
      "expertise",
      "programming",
      "languages"
    ],
    response:
      "My core skills include Computer Vision, Machine Learning, YOLO, CLIP, PyTorch, OpenCV, Flask, FastAPI, and real-world AI deployment.",
  },
  {
    intent: "strengths",
    keywords: ["strength", "strong points", "what are you good at"],
    response:
      "My strengths are execution, consistency, and building production-ready AI systems.",
  },
  {
    intent: "weakness",
    keywords: ["weakness", "areas to improve"],
    response:
      "I sometimes over-optimize early, but I actively improve through iteration and feedback.",
  },

  /* =======================
     PROJECTS
  ======================== */
  {
    intent: "projects",
    keywords: [
      "projects",
      "project",
      "portfolio projects",
      "work",
      "what have you built"
    ],
    response:
      "My projects include AI-based traffic management, biometric authentication, pathology image analysis, and full-stack AI systems.",
  },
  {
    intent: "traffic_project",
    keywords: [
      "traffic",
      "smart traffic",
      "traffic management",
      "traffic project",
      "signal control"
    ],
    response:
      "My Smart Traffic Management System uses YOLO and tracking for real-time signal optimization and has government-level validation.",
  },
  {
    intent: "pathology_project",
    keywords: [
      "pathology",
      "medical ai",
      "healthcare ai",
      "medical imaging",
      "breast cancer"
    ],
    response:
      "The Pathology Image Analysis project focuses on breast lesion classification using CLIP and ResNet-based vision models.",
  },
  {
    intent: "biometric_project",
    keywords: [
      "biometric",
      "face recognition",
      "authentication",
      "liveness detection"
    ],
    response:
      "The Biometric Authentication System prevents spoofing using face recognition and liveness detection.",
  },

  /* =======================
     AI / ML / CV
  ======================== */
  {
    intent: "computer_vision",
    keywords: ["computer vision", "cv"],
    response:
      "Computer Vision enables machines to interpret and act on visual data.",
  },
  {
    intent: "yolo",
    keywords: ["yolo", "object detection"],
    response:
      "YOLO is a fast, real-time object detection algorithm optimized for speed and accuracy.",
  },
  {
    intent: "clip",
    keywords: ["clip", "vision language", "multimodal"],
    response:
      "CLIP aligns images and text using multimodal embeddings.",
  },
  {
    intent: "deployment",
    keywords: ["deployment", "production", "api", "serving"],
    response:
      "Deployment makes AI models usable via APIs, web apps, or edge devices.",
  },

  /* =======================
     HACKATHONS
  ======================== */
  {
    intent: "hackathons",
    keywords: ["hackathon", "hackathons", "competitions", "contests"],
    response:
      "I’ve participated in 29+ hackathons, workshops, and symposiums, winning 8 major awards.",
  },
  {
    intent: "awards",
    keywords: ["awards", "wins", "achievements", "prizes"],
    response:
      "My achievements include first prizes, best team awards, and government-validated projects.",
  },

  /* =======================
     CAREER
  ======================== */
  {
    intent: "roles",
    keywords: ["job", "roles", "position", "career"],
    response:
      "I’m targeting ML Intern, Computer Vision Engineer, Applied AI Engineer, and Research roles.",
  },
  {
    intent: "internship",
    keywords: ["internship", "intern"],
    response:
      "Yes, I’m actively looking for ML / CV internships and applied AI roles.",
  },
  {
    intent: "why_hire",
    keywords: ["why hire you", "why should we hire"],
    response:
      "I deliver practical, validated AI solutions with real-world deployment experience.",
  },
];

/* =======================
   CHAT ENGINE
======================== */

export function askNevilAI(input: string): string {
  const text = input.toLowerCase().trim();

  for (const intent of intents) {
    for (const keyword of intent.keywords) {
      if (text.includes(keyword)) {
        return intent.response;
      }
    }
  }

  return "Ask me about my skills, projects, hackathons, AI experience, or career goals.";
}

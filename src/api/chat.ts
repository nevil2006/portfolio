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


    { keywords: ["background", "yourself", "intro"], answer: "I am an AI and Data Science student focused on building real-world ML and Computer Vision systems that run in live environments." },
    { keywords: ["why computer vision", "choose cv", "vision specialization"], answer: "I chose Computer Vision because I like solving real-world camera-based problems where AI interacts with the physical world." },
    { keywords: ["problem solving", "what problems you like"], answer: "I enjoy solving practical problems like traffic optimization and medical image support where impact is visible." },
    { keywords: ["learn new technology", "how you learn"], answer: "I learn new tech by experimenting hands-on first, then studying documentation, and finally building a small working project." },
    { keywords: ["signature project", "defining project"], answer: "My Smart Traffic Management System defines me because it proves I can build, optimize, and deploy real-time AI systems." },

    { keywords: ["ocr engine", "which ocr"], answer: "I used Tesseract OCR because it is open-source, reliable for text extraction, and customizable for different document formats." },
    { keywords: ["detect sensitive text", "sensitive info masking"], answer: "I detected sensitive text using regex patterns for PAN, Aadhar, phone numbers, and names combined with confidence thresholds from OCR." },
    { keywords: ["avoid false masking", "false positive masking"], answer: "I verified patterns with contextual cues and used a secondary check to confirm if the extracted text actually matches a sensitive format." },
    { keywords: ["hardest format", "difficult document type"], answer: "Scanned low-resolution PDFs were hardest due to noise and blur. I improved results using preprocessing like thresholding and denoising." },
    { keywords: ["api integration", "external system connect"], answer: "My API accepts files via REST endpoints and returns masked output, making it easy to integrate with web dashboards and enterprise workflows." },
    
    { keywords: ["statistical patterns", "internship data insights"], answer: "I observed trends, correlations, and class distributions to understand data behavior before choosing modeling strategies." },
    { keywords: ["detect outliers", "outlier detection"], answer: "I use IQR, Z-score, and visualization methods like boxplots to identify and analyze outliers." },
    { keywords: ["feature selection", "important features"], answer: "I use correlation analysis, mutual information, and model-based feature importance to select impactful features." },
    { keywords: ["visualization tools", "plot tools"], answer: "I mainly use Matplotlib, Seaborn, and Plotly for interactive and clear visualizations." },
    { keywords: ["steps in eda", "how do eda"], answer: "I clean data, analyze distributions, detect patterns, visualize relationships, then document insights for model-building." },

    { keywords: ["statistical patterns", "internship data insights"], answer: "I observed trends, correlations, and class distributions to understand data behavior before choosing modeling strategies." },
    { keywords: ["detect outliers", "outlier detection"], answer: "I use IQR, Z-score, and visualization methods like boxplots to identify and analyze outliers." },
    { keywords: ["feature selection", "important features"], answer: "I use correlation analysis, mutual information, and model-based feature importance to select impactful features." },
    { keywords: ["visualization tools", "plot tools"], answer: "I mainly use Matplotlib, Seaborn, and Plotly for interactive and clear visualizations." },
    { keywords: ["steps in eda", "how do eda"], answer: "I clean data, analyze distributions, detect patterns, visualize relationships, then document insights for model-building." },
      

    { keywords: ["bert tokenize", "how bert tokenize"], answer: "BERT uses WordPiece tokenization, splitting words into smaller units to handle unknown and rare words." },
    { keywords: ["attention mechanism", "transformer attention"], answer: "Attention assigns importance scores to different tokens so the model can focus on relevant context." },
    { keywords: ["summarization evaluation", "eval summary"], answer: "I used ROUGE scores to compare generated summaries against reference summaries." },
    { keywords: ["topic modeling", "lda topic modeling"], answer: "Topic modeling extracts themes from text. I used LDA to group text into coherent topics." },
    { keywords: ["reduce manual review time", "workflow improvement"], answer: "Automation filtered high-confidence results first, reducing human review effort significantly." },

    { keywords: ["why streamlit", "streamlit deployment"], answer: "Streamlit is fast to develop, easy to host, and user-friendly for ML demos and internal tools." },
    { keywords: ["manage model size", "inference cost"], answer: "I used model quantization and light architectures to reduce memory and speed up inference." },
    { keywords: ["what is docker", "docker use"], answer: "Docker packages the application and dependencies into containers, ensuring consistent runtime across systems." },
    { keywords: ["secure api", "api security"], answer: "I used token-based authentication and restricted API endpoints with role control." },
    { keywords: ["update deployment", "continuous update"], answer: "I versioned models and used controlled rollout so updates don’t break existing workflow." },

    { keywords: ["readme structure", "how write readme"], answer: "I structure README with overview, setup, usage, demo media, architecture, and results for clarity." },
    { keywords: ["commit clarity", "commit messages"], answer: "I write small commits with meaningful messages describing exactly what changed." },
    { keywords: ["why documentation", "importance of docs"], answer: "Documentation helps others understand your work and speeds up collaboration and onboarding." },
    { keywords: ["which projects showcase", "portfolio selection"], answer: "I showcase projects that demonstrate real-world impact, creativity, and strong problem-solving." },
    { keywords: ["open source contribution", "oss contribution"], answer: "Yes, I have contributed to community repos by improving documentation and fixing small issues." },

    { keywords: ["model failed", "fix model issue"], answer: "When my model failed, I analyzed error cases, checked dataset quality, and tuned hyperparameters until performance improved." },
    { keywords: ["debugging approach", "how debug"], answer: "I isolate components, test assumptions, print intermediate outputs, and narrow down the root cause step-by-step." },
    { keywords: ["hardest challenge", "difficult problem"], answer: "The hardest challenge was optimizing real-time inference under hardware limits, which I solved using lightweight architectures." },
    { keywords: ["work under pressure", "stress handling"], answer: "I stay calm, break tasks into smaller steps, and execute one by one." },
    { keywords: ["what makes unique", "unique work style"], answer: "I focus on building working systems, not just theoretical models. I convert ideas into real deployable solutions." },

    { keywords: ["gradient explosion", "nan loss"], answer: "Gradient explosion happens when values grow too large. I fix it using gradient clipping and stable initialization." },
    { keywords: ["model drift", "performance drop over time"], answer: "Model drift occurs when data changes over time. I handle it by monitoring metrics and retraining periodically." },
    { keywords: ["deploy at edge", "edge inference"], answer: "I use lightweight models optimized for low-power devices with quantization and smaller architectures." },
    { keywords: ["pipeline scalability", "scale ml pipeline"], answer: "I design modular pipelines with asynchronous workers and load-balanced inference servers." },
    { keywords: ["energy cost optimization", "inference efficiency"], answer: "I reduce resolution, batch operations, and use hardware accelerators like GPU/TPU to optimize runtime power usage." },
    
    { keywords: ["portfolio tagline", "tagline meaning"], answer: "My tagline communicates that I focus on practical AI systems that work in the real world, not just theoretical projects." },
    { keywords: ["real world impact", "why real world"], answer: "Because projects only have value when they solve real problems. I want my work to create visible improvements in daily life." },
    { keywords: ["latest concept explored", "new concept you learned"], answer: "The most recent concept I explored was Vision-Language Alignment tuning for improving zero-shot recognition." },
    { keywords: ["choose top projects", "project order"], answer: "I place the most impactful and deployment-ready projects first to show engineering ability quickly to interviewers." },
    { keywords: ["why chatbot portfolio", "portfolio chatbot purpose"], answer: "The chatbot makes my portfolio interactive and helps interviewers explore my skills faster." },
    { keywords: ["visual hierarchy", "design choices"], answer: "Strong hierarchy makes information easy to scan so the viewer understands my strengths quickly." },
    { keywords: ["keep portfolio updated", "time management portfolio"], answer: "I update my portfolio in small batches weekly so it does not pile up and become overwhelming." },
    { keywords: ["why react tailwind", "react vs html css"], answer: "React + Tailwind allows reusable components, faster iteration, and clean styling while maintaining consistency." },
    { keywords: ["measure portfolio impact", "portfolio effective"], answer: "If the viewer understands my strengths within 30 seconds and asks deeper questions, the portfolio is effective." },
    { keywords: ["portfolio international", "apply global portfolio"], answer: "I would include more research credibility, standardize language tone, and highlight collaborations with global teams." },

    { keywords: ["cv expertise difference", "unique computer vision skill"], answer: "I have deployed CV models on actual hardware and handled real environmental noise, which many candidates have not." },
    { keywords: ["government approval relevance", "why government recognition"], answer: "Government validation proves my work was practical, reliable, and tested in real field conditions." },
    { keywords: ["hackathon value", "hackathon relevance"], answer: "Hackathons trained me to solve problems fast with limited time, resources, and high pressure." },
    { keywords: ["prove passion", "show passion"], answer: "I prove passion through consistent project building, documentation, blog writing, and continuous improvement." },
    { keywords: ["leadership example", "tech leadership"], answer: "I led my team in planning datasets, dividing responsibilities, and guiding real-world deployment tests." },
    { keywords: ["strong learner", "learn fast"], answer: "I learn by experimenting hands-on quickly and building working prototypes before deep diving into theory." },
    { keywords: ["hardest self-taught skill", "learn alone"], answer: "Model deployment optimization was the hardest skill I learned without guidance." },
    { keywords: ["self improvement", "improve skill"], answer: "I am improving my communication skills to explain complex topics more clearly." },
    { keywords: ["team value", "team contribution"], answer: "I bring clarity, task ownership, and collaboration. I push the team forward instead of waiting for direction." },
    { keywords: ["confidence vs overconfidence", "stay grounded"], answer: "I stay confident by focusing on facts and results, not assumptions or exaggeration." },
   
    { keywords: ["daily routine cmli", "cmli workflow"], answer: "My daily routine included dataset cleaning, embedding experiments, model tuning, evaluation, and documentation." },
    { keywords: ["medical dataset prep", "medical images processing"], answer: "I performed stain normalization, resizing, and consistent labeling to maintain medical data reliability." },
    { keywords: ["explainability doctors", "explain model doctors"], answer: "I used Grad-CAM visual maps to show which regions influenced the model's decisions." },
    { keywords: ["data privacy healthcare", "medical ethics ai"], answer: "I anonymized patient data and followed strict access control rules." },
    { keywords: ["zero shot learning", "zero shot cmli"], answer: "Zero-shot learning means the model can classify unseen categories using text descriptions instead of retraining." },
    { keywords: ["research vs development", "research environment"], answer: "Research required more experimentation and exploration, while development required optimized delivery." },
    { keywords: ["hardest obstacle cmli", "cmli challenge"], answer: "The hardest obstacle was stabilizing embeddings to reduce overlap between visually similar tissue classes." },
    { keywords: ["why clip not vit", "clip vs vit"], answer: "CLIP was chosen because it aligns images and language directly, which supported medical terminology." },
    { keywords: ["embedding integration", "inference pipeline embeddings"], answer: "Image features and text prompts were converted into vectors and compared using cosine similarity." },
    { keywords: ["reproducibility docs", "project documentation"], answer: "I documented dataset sources, preprocessing steps, hyperparameters, and embedding pipeline design." },

    { keywords: ["hizen pipeline", "research summarization pipeline", "summarization workflow"], answer: "I built a pipeline where documents were chunked, encoded, summarized, and ranked to produce clean research summaries." },
    { keywords: ["summarization metric", "rouge score", "evaluate summary"], answer: "ROUGE was the most important because it measures similarity between the generated summary and a reference summary." },
    { keywords: ["avoid hallucinations", "llm hallucinations", "accurate text generation"], answer: "I used grounded context windows and limited generation to only source-supported content." },
    { keywords: ["topic modeling retrieval", "lda retrieval", "semantic clustering"], answer: "Topic modeling grouped documents by themes, making retrieval more accurate and faster." },
    { keywords: ["manual workflow replaced", "automation benefit", "reduced manual review"], answer: "The pipeline replaced lengthy manual document reading and summarization, cutting review time significantly." },
    { keywords: ["biggest contribution hizen", "impact at hizen", "internship outcome"], answer: "I designed and integrated the summarization engine that automated the core workflow." },
    { keywords: ["pipeline testing", "accuracy and reliability", "system validation"], answer: "I tested outputs with domain experts, quality checks, and evaluation benchmarks." },
    { keywords: ["improvements for pipeline", "pipeline future plan", "what next"], answer: "I would add human-in-the-loop review and multi-pass reasoning for higher precision." },
    { keywords: ["nlp supports cv", "cv and nlp link", "multimodal learning"], answer: "Both require representation learning. My NLP work strengthens my understanding of model embedding spaces." },
    { keywords: ["remote internship learning", "remote collaboration", "work from home internship"], answer: "I learned structured communication, progress tracking, and delivering independently without supervision." },
  
  
    { keywords: ["career compass problem", "what problem career compass solves", "platform purpose"], answer: "Career Compass helps students identify skill gaps and match them to suitable career paths." },
    { keywords: ["skill gap analysis", "analyze skills", "find missing skills"], answer: "The system compares user skills with job role vectors to identify missing or weak skill areas." },
    { keywords: ["why fastapi", "backend choice fastapi", "api framework selection"], answer: "FastAPI provides high speed, async support, and clean schema validation which fits scalable APIs." },
    { keywords: ["vector embeddings role match", "embedding recommendation", "semantic job matching"], answer: "Embeddings capture semantic similarity, so roles are recommended based on meaning, not just keywords." },
    { keywords: ["evaluate career path", "check recommendation quality", "suggestion validation"], answer: "I validate recommendations through feedback loops and comparison with standard career frameworks." },
    { keywords: ["user privacy", "data collection policy", "profile data handling"], answer: "I collect only skill and interest inputs and store them securely with limited retention." },
    { keywords: ["ai models role engine", "matching engine model", "recommendation algorithm"], answer: "I use sentence-transformer embeddings and similarity scoring for role alignment." },
    { keywords: ["platform scaling", "scale to more users", "scalability challenges"], answer: "I plan to containerize services and use load balancing once traffic grows." },
    { keywords: ["deployment challenges", "platform deployment issues", "launch obstacles"], answer: "Handling real user behavior diversity and ensuring stable inference are main challenges." },
    { keywords: ["target users career compass", "who uses the platform", "user group"], answer: "The primary users are students and early professionals seeking clarity on career direction." },

    { keywords: ["deepsort identity", "tracking identity", "track across frames"], answer: "DeepSORT tracks identity using motion prediction plus appearance embeddings from a feature extractor." },
    { keywords: ["bytetrack vs deepsort", "bytetrack or deepsort choice"], answer: "Bytetrack performs better in crowded scenes because it keeps low-score detections instead of discarding them early." },
    { keywords: ["clip tokenize vs bert", "clip prompt tokenize"], answer: "CLIP tokenizes prompts with a text encoder aligned to image embeddings, while BERT tokenizes for language-only understanding." },
    { keywords: ["yolov5 yolov8 yolov11 difference", "yolo versions"], answer: "YOLOv5 is PyTorch-based and stable, YOLOv8 improves accuracy and speed, YOLOv11 focuses on efficiency and smaller edge models." },
    { keywords: ["mediapipe vs yolo pose", "pose estimation choice"], answer: "Mediapipe uses landmark models optimized for speed, while YOLO-based pose is heavier but more robust for complex scenes." },
    { keywords: ["padding vs resizing", "image preprocessing"], answer: "Resize to maintain uniform input. Use padding if you want to preserve aspect ratio without distortion." },
    { keywords: ["transfer learning example", "fine tuning example"], answer: "I fine-tuned a pretrained ResNet50 on histopathology data to classify breast lesion categories." },
    { keywords: ["edge device limitation", "deploy on esp32 or raspberry", "low power inference"], answer: "Edge devices limit memory and processing power, so lightweight or quantized models are necessary." },
    { keywords: ["git branching strategies", "manage project branches"], answer: "I use feature branches, pull requests, and version tagging to maintain clean progress history." },
    { keywords: ["regex document masking", "pattern masking"], answer: "Regex identifies structured sensitive patterns like ID numbers, which triggers automatic masking." },

    { keywords: ["why blog stress", "engineering stress blog"], answer: "I wrote it to share practical ways to handle pressure during projects and deadlines." },
    { keywords: ["indian perception ai blog", "ai cultural perspective"], answer: "I was inspired because AI adoption in India depends heavily on awareness and trust." },
    { keywords: ["traffic project blog feedback", "blog response"], answer: "Readers appreciated the real deployment insights instead of just model architecture descriptions." },
    { keywords: ["purpose of writing blogs", "why write blogs"], answer: "Blogs help me express my thinking clearly and share knowledge with others." },
    { keywords: ["non technical readable blog", "simplify complex topics"], answer: "I use analogies and visuals to explain technical concepts without overwhelming readers." },
    { keywords: ["best blog you wrote", "favorite blog"], answer: "My blog on Smart Traffic AI best reflects my approach to solving real problems." },
    { keywords: ["blog research method", "verify blog info"], answer: "I cross-check papers, github repos, and official docs before writing any technical statement." },
    { keywords: ["writing clarity habits", "clear writing"], answer: "I write in small sentences, avoid jargon unless needed, and revise for readability." },
    { keywords: ["blog influence portfolio", "blogs brand image"], answer: "Yes. Blogs show my thinking style and reinforce that I focus on real-world application." },
    { keywords: ["blog to youtube", "expand to video"], answer: "I would convert my Smart Traffic System blog into a YouTube case study walkthrough." },

    { keywords: ["hackathon scoring", "hackathon evaluation"], answer: "Judges evaluated innovation, technical depth, problem fit, and real-world feasibility." },
    { keywords: ["traffic solution judged", "police evaluation"], answer: "They tested it at junction simulation and verified signal improvement and vehicle flow." },
    { keywords: ["documentation for police", "submit project authorities"], answer: "We prepared reports, model descriptions, hardware layout, and real-world test evidence." },
    { keywords: ["criticism expo", "feedback handling"], answer: "I listened, noted concerns, and improved weak parts instead of reacting emotionally." },
    { keywords: ["why real world validation", "field proof importance"], answer: "Real-world validation proves the system works beyond controlled benchmarks." },
    { keywords: ["commissioner suggestions", "gov feedback"], answer: "They suggested improving nighttime detection and adding emergency lane priority logic." },
    { keywords: ["team responsibility split", "teamwork traffic project"], answer: "We divided roles into hardware integration, detection pipeline, and deployment testing." },
    { keywords: ["redo project improvements", "do differently next time"], answer: "I would collect larger nighttime datasets earlier to reduce iteration time." },
    { keywords: ["project scalability proof", "scalable traffic system"], answer: "By designing modular camera and controller units, the system can scale intersection-by-intersection." },
    { keywords: ["real validation vs awards", "why field testing matters"], answer: "Awards show skill. Real validation shows impact. I focus on impact." },

  
    { keywords: ["maintain consistency learning", "daily learning habit"], answer: "I learn in small daily chunks rather than long inconsistent sessions." },
    { keywords: ["break down complex concepts", "understand hard topic"], answer: "I simplify into components, learn each one, then combine them back together." },
    { keywords: ["avoid burnout", "stay motivated"], answer: "I balance work with rest and switch tasks when I feel mental saturation." },
    { keywords: ["motivation to improve", "why keep learning"], answer: "Seeing real improvement in my project outcomes keeps me motivated." },
    { keywords: ["model failure production", "handle failure"], answer: "I analyze logs, isolate the failing component, fix root cause, and test thoroughly." },
    { keywords: ["debug complex systems", "debugging approach"], answer: "I systematically isolate modules, verify assumptions, and test each layer step-by-step." },
    { keywords: ["future of ai", "next decade ai"], answer: "I believe multi-modal AI with real-time awareness will shape the next decade." },
    { keywords: ["teamwork strength", "strong team player"], answer: "I communicate clearly, take responsibility, and help teammates when needed." },
    { keywords: ["biggest weakness improving", "current improvement area"], answer: "I am improving my presentation skills to explain ideas more concisely." },
    { keywords: ["stay updated research", "follow ai trends"], answer: "I read papers, follow open-source repos, and practice implementation regularly." },

    { keywords: ["work ethic values", "work discipline"], answer: "Consistency, ownership, and responsibility define my work ethic." },
    { keywords: ["negative feedback reaction", "criticism response"], answer: "I listen, understand the reasoning, learn from it, and adjust." },
    { keywords: ["preferred leadership style", "team leader style"], answer: "I respect leaders who guide with clarity and encourage autonomy." },
    { keywords: ["role model ai", "inspiration ai"], answer: "I admire researchers who build real deployable systems that help society." },
    { keywords: ["5 year goal", "future self"], answer: "I see myself leading practical AI system development in smart city or healthcare applications." },
    { keywords: ["work culture fit", "team culture preference"], answer: "I work best in collaborative and growth-focused teams." },
    { keywords: ["salary expectation fresher", "expected package"], answer: "I am open to standard fresher compensation with growth-focused opportunities." },
    { keywords: ["invest in growth", "why support you"], answer: "I learn fast, adapt quickly, and deliver results. Growth investment returns value." },
    { keywords: ["impact you want", "work impact vision"], answer: "I want my work to genuinely improve how cities operate and how people access healthcare." },
    { keywords: ["remember after interview", "final impression"], answer: "Remember me as someone who builds real solutions that work, not just projects on slides." },
  ];


  for (const r of responses) {
    if (r.keywords.some((k) => msg.includes(k))) return r.answer;
  }

  return "I am Nevil AI. You can ask about skills, projects, experience, achievements, portfolio details, or interview questions.";
}

export function askNevilAI(input: string): string {
  const q = input.toLowerCase();

  /* =======================
     1–15: PROFILE & PORTFOLIO
  ======================== */
  if (q.includes("who are you") || q.includes("about you"))
    return "I’m Nevil, an AI & Data Science engineer specializing in Computer Vision, Vision-Language Models, and real-world AI systems.";

  else if (q.includes("portfolio focus"))
    return "My portfolio focuses on end-to-end AI systems, from model development to deployment, with real-world impact.";

  else if (q.includes("why ai"))
    return "I chose AI to solve real-world, data-driven problems with measurable impact.";

  else if (q.includes("why computer vision"))
    return "Computer Vision allows me to build systems that understand and act on visual data.";

  else if (q.includes("different from others"))
    return "My portfolio emphasizes deployed systems, government validation, and competition-backed projects.";

  else if (q.includes("production ready"))
    return "Yes, many of my projects are built with scalability, robustness, and deployment in mind.";

  else if (q.includes("research or application"))
    return "I currently focus on applied AI with a strong research mindset.";

  else if (q.includes("roles") || q.includes("job"))
    return "I’m targeting ML Intern, Computer Vision Engineer, Applied AI Engineer, and Research roles.";

  else if (q.includes("update portfolio"))
    return "I update my portfolio whenever I complete a meaningful project or achievement.";

  else if (q.includes("tech stack"))
    return "Python, OpenCV, YOLO, CLIP, PyTorch, Flask, and Streamlit.";

  else if (q.includes("why portfolio"))
    return "A portfolio presents skills, impact, and achievements better than GitHub alone.";

  else if (q.includes("certificates"))
    return "I include only impactful certificates that validate skills and achievements.";

  else if (q.includes("problems excite"))
    return "I enjoy problems involving vision, automation, and decision-making under constraints.";

  else if (q.includes("recruiter"))
    return "Yes, my portfolio is designed for quick recruiter scanning.";

  else if (q.includes("long term goal"))
    return "My goal is to become an AI Research Scientist building real-world vision systems.";

  /* =======================
     16–30: HACKATHONS
  ======================== */
  else if (q.includes("how many hackathons"))
    return "I’ve participated in 29+ hackathons, workshops, and symposiums.";

  else if (q.includes("major awards"))
    return "I’ve won 8 major awards including first prizes, best team awards, and finalist selections.";

  else if (q.includes("biggest achievement"))
    return "Government-level validation for my AI-based traffic management system.";

  else if (q.includes("best team"))
    return "Best Team awards recognize collaboration, execution, and teamwork.";

  else if (q.includes("hackathon teach"))
    return "Hackathons taught me rapid prototyping, teamwork, and time management.";

  else if (q.includes("hackathons help job"))
    return "Yes, hackathons simulate real-world engineering constraints.";

  else if (q.includes("choose hackathon"))
    return "I choose AI, ML, and Computer Vision-focused hackathons.";

  else if (q.includes("your role hackathon"))
    return "I usually handle model design, system architecture, and integration.";

  else if (q.includes("failure"))
    return "I analyze feedback and iterate on improvements.";

  else if (q.includes("reuse project"))
    return "Yes, many hackathon projects evolve into full systems.";

  else if (q.includes("first prize project"))
    return "An AI-based traffic and surveillance system.";

  else if (q.includes("why achievements"))
    return "Achievements provide external validation of skills.";

  else if (q.includes("list all certificates"))
    return "No, only meaningful and impactful ones.";

  else if (q.includes("stand out hackathon"))
    return "Clear problem definition, feasibility, and execution.";

  else if (q.includes("soft skills"))
    return "Communication, leadership, and collaboration.";

  /* =======================
     31–55: AI / ML / CV
  ======================== */
  else if (q.includes("computer vision"))
    return "Computer Vision enables machines to interpret visual data.";

  else if (q.includes("yolo"))
    return "YOLO is a fast, real-time object detection algorithm.";

  else if (q.includes("clip"))
    return "CLIP aligns images and text using multimodal embeddings.";

  else if (q.includes("zero shot"))
    return "Zero-shot learning classifies unseen classes without training examples.";

  else if (q.includes("opencv"))
    return "OpenCV supports image processing and real-time vision tasks.";

  else if (q.includes("metrics"))
    return "Accuracy, precision, recall, and F1-score.";

  else if (q.includes("overfitting"))
    return "I reduce overfitting using augmentation, validation, and regularization.";

  else if (q.includes("deepsort"))
    return "DeepSORT tracks objects by assigning consistent IDs.";

  else if (q.includes("real time"))
    return "I optimize models and pipelines for low latency.";

  else if (q.includes("ml vs dl"))
    return "ML relies on features; DL learns features automatically.";

  else if (q.includes("edge ai"))
    return "Edge AI runs models on devices like cameras.";

  else if (q.includes("deployment"))
    return "Deployment makes models usable via apps or APIs.";

  else if (q.includes("flask"))
    return "Flask is lightweight and ideal for ML APIs.";

  else if (q.includes("ocr"))
    return "OCR extracts text from images.";

  else if (q.includes("anomaly detection"))
    return "Detecting unusual patterns in data.";

  else if (q.includes("evaluation"))
    return "Evaluation ensures reliability and trust.";

  else if (q.includes("datasets"))
    return "Traffic footage, medical images, and document scans.";

  else if (q.includes("imbalance"))
    return "Handled using resampling and weighted losses.";

  else if (q.includes("pipeline"))
    return "A structured flow from input to output.";

  else if (q.includes("debug model"))
    return "Using error analysis and visualization.";

  else if (q.includes("prompt engineering"))
    return "Designing inputs for models like CLIP.";

  else if (q.includes("classification vs detection"))
    return "Classification labels images; detection localizes objects.";

  else if (q.includes("real world ai"))
    return "AI solving practical problems beyond demos.";

  else if (q.includes("scalability"))
    return "Ability to handle increased load.";

  else if (q.includes("explainability"))
    return "It builds trust and accountability.";

  /* =======================
     56–70: DSA / LEETCODE
  ======================== */
  else if (q.includes("dsa"))
    return "DSA improves problem-solving and interview performance.";

  else if (q.includes("leetcode"))
    return "I practice arrays, strings, hashing, and recursion on LeetCode.";

  else if (q.includes("hackerrank"))
    return "HackerRank strengthens logic and fundamentals.";

  else if (q.includes("favorite problem"))
    return "Array and string problems.";

  else if (q.includes("easy hard"))
    return "I focus on fundamentals first.";

  else if (q.includes("track progress"))
    return "Yes, using platform dashboards.";

  else if (q.includes("approach problem"))
    return "Understand → Plan → Code → Optimize.";

  else if (q.includes("clean code"))
    return "Yes, readability is a priority.";

  else if (q.includes("time complexity"))
    return "Both time and space complexity matter.";

  else if (q.includes("stuck"))
    return "Break down the problem or revisit later.";

  else if (q.includes("competitive coding"))
    return "Not mandatory but very useful.";

  /* =======================
     71–100: CAREER & FUTURE
  ======================== */
  else if (q.includes("mlops"))
    return "MLOps manages the ML lifecycle in production.";

  else if (q.includes("proud project"))
    return "AI-based traffic management system.";

  else if (q.includes("measure impact"))
    return "Approval, adoption, and deployment.";

  else if (q.includes("research interest"))
    return "Applied research in CV and multimodal AI.";

  else if (q.includes("higher studies"))
    return "Open to MS or research roles.";

  else if (q.includes("learning"))
    return "Projects, papers, and competitions.";

  else if (q.includes("inspiration"))
    return "AI systems that improve daily life.";

  else if (q.includes("companies"))
    return "AI-driven startups and R&D labs.";

  else if (q.includes("learning style"))
    return "Hands-on and iterative.";

  else if (q.includes("feedback"))
    return "I treat feedback as improvement input.";

  else if (q.includes("strength"))
    return "Execution, consistency, curiosity.";

  else if (q.includes("weakness"))
    return "Over-optimizing early, actively improving.";

  else if (q.includes("team or solo"))
    return "Comfortable with both.";

  else if (q.includes("leadership"))
    return "Yes, in hackathons and projects.";

  else if (q.includes("time management"))
    return "Prioritization and planning.";

  else if (q.includes("hire you"))
    return "I deliver practical, validated AI solutions.";

  else if (q.includes("reliable"))
    return "Consistency and documented results.";

  else if (q.includes("pressure"))
    return "Break tasks into manageable steps.";

  else if (q.includes("success"))
    return "Building systems that matter.";

  else if (q.includes("mentor"))
    return "I help peers whenever possible.";

  else if (q.includes("next"))
    return "Advanced CV and research projects.";

  else if (q.includes("master"))
    return "Vision-language and multimodal AI.";

  else if (q.includes("internship"))
    return "Yes, I’m open to internships.";

  else if (q.includes("collaboration"))
    return "Absolutely open to collaboration.";

  else if (q.includes("document work"))
    return "Through READMEs and reports.";

  else if (q.includes("mission"))
    return "Build AI systems that deliver real value.";

  else if (q.includes("one line"))
    return "I build AI that works in the real world.";

  /* =======================
     DEFAULT
  ======================== */
  else
    return "Ask me about my portfolio, projects, hackathons, AI skills, DSA practice, or career goals.";
}

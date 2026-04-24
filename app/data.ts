export const portfolioData = {
  name: "Maqdad Ali",
  title: "AI Engineer & Full Stack Developer",
  tagline: "Building intelligent systems that matter",
  email: "maqdadali0072@gmail.com",
  phone: "+92 336 8940288",
  location: "Islamabad, Pakistan",
  github: "https://github.com/Maqdadali282",
  linkedin: "https://linkedin.com/in/maqdad-ali-75241b293",

  summary: `Final-year Artificial Intelligence student at COMSATS University Islamabad, 
  crafting ML-powered systems, scalable Python backends, and end-to-end AI pipelines. 
  I bridge the gap between research and production — turning raw data into intelligent, 
  deployable solutions. Passionate about real-world AI impact and building systems that scale.`,

  skills: [
    { name: "Python", level: 92, category: "Languages" },
    { name: "JavaScript", level: 85, category: "Languages" },
    { name: "FastAPI", level: 90, category: "Backend & APIs" },
    { name: "Node.js / Express", level: 84, category: "Backend & APIs" },
    { name: "Django", level: 82, category: "Backend & APIs" },
    { name: "REST APIs", level: 91, category: "Backend & APIs" },
    { name: "React.js", level: 86, category: "Frontend" },
    { name: "HTML / CSS", level: 88, category: "Frontend" },
    { name: "scikit-learn", level: 90, category: "ML & AI" },
    { name: "PyTorch", level: 83, category: "ML & AI" },
    { name: "TensorFlow", level: 81, category: "ML & AI" },
    { name: "Generative AI", level: 85, category: "ML & AI" },
    { name: "NumPy / Pandas", level: 93, category: "Data & Libraries" },
    { name: "Matplotlib", level: 87, category: "Data & Libraries" },
    { name: "MongoDB / MySQL", level: 84, category: "Databases" },
    { name: "AWS / Docker", level: 82, category: "Cloud & DevOps" },
    { name: "Git / GitHub", level: 91, category: "Tools" },
  ],

  projects: [
    {
      title: "Movie Recommendation System",
      description: "ML-based recommendation engine using collaborative and content-based filtering to suggest personalised movies from user preference data.",
      tech: ["Python", "scikit-learn", "Pandas", "NumPy"],
      github: "https://github.com/Maqdadali282",
      emoji: "🎬",
      gradient: "from-cyan-500/20 to-blue-600/20",
      borderGradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "Insurance Premium Prediction",
      description: "Regression-based ML system predicting insurance premiums from demographic and health features. Achieved high accuracy via systematic feature engineering and model tuning.",
      tech: ["Python", "scikit-learn", "Regression", "Pandas", "Matplotlib"],
      github: "https://github.com/Maqdadali282",
      emoji: "📊",
      gradient: "from-violet-500/20 to-purple-700/20",
      borderGradient: "from-violet-500 to-purple-700",
    },
    {
      title: "FastAPI ML API",
      description: "Production-ready REST API serving real-time ML model predictions with Pydantic schema validation and clean service-layer architecture.",
      tech: ["Python", "FastAPI", "Pydantic", "scikit-learn"],
      github: "https://github.com/Maqdadali282",
      emoji: "⚡",
      gradient: "from-amber-500/20 to-orange-600/20",
      borderGradient: "from-amber-500 to-orange-600",
    },
  ],

  experience: [
    {
      role: "Machine Learning Intern",
      company: "Nexus AI",
      period: "Jul – Aug 2025",
      type: "Remote",
      points: [
        "Trained and deployed classification and regression models using scikit-learn, improving prediction accuracy through systematic feature engineering.",
        "Designed end-to-end data preprocessing pipelines handling cleaning, normalisation, and feature selection using NumPy and Pandas.",
      ],
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      role: "Full Stack Web Developer",
      company: "Freelance / Self-Employed",
      period: "Aug 2023 – Present",
      type: "Remote",
      points: [
        "Built and deployed full-stack web applications using React.js, Node.js, and FastAPI with clean REST API architecture.",
        "Integrated AWS services and Docker for containerised deployments, ensuring reliable and scalable production environments.",
      ],
      gradient: "from-violet-400 to-purple-500",
    },
  ],

  education: [
    {
      degree: "Bachelor of Science in Artificial Intelligence",
      institution: "COMSATS University Islamabad",
      period: "Jan 2023 – Jan 2027",
      status: "Final Year",
      gradient: "from-cyan-400 via-violet-400 to-amber-400",
    },
  ],
}

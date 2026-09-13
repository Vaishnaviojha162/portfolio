export const personalInfo = {
  name: "Vaishnavi Ojha",
  title: "Aspiring Software Engineer",
  tagline: "Building scalable, modern, and user-focused web applications.",
  bio: "I’m a Computer Science student passionate about creating meaningful digital experiences, from intuitive interfaces to scalable systems. I solve problems with code, explore modern technologies, and turn ideas into real-world products.",
  aboutBio: "I’m a Computer Science Engineering student and aspiring Software Engineer with a strong interest in full-stack development. I focus on building scalable, efficient, and user-centric web applications while continuously strengthening my problem-solving and software engineering skills. I’m passionate about learning new technologies and turning ideas into reliable, real-world solutions.",
  availability: "Open to Internships & Opportunities",
  education: {
    institution: "Lovely Professional University (LPU)",
    degree: "B.Tech – Computer Science and Engineering",
    duration: "2023 – 2027",
    location: "Phagwara, Punjab, India",
    collegeMapUrl: "https://maps.google.com/?q=Lovely+Professional+University,+Phagwara,+Punjab",
    description: "Specializing in software engineering, core algorithms, database systems, web development, and cloud computing architectures.",
    highlights: [
      "Data Structures & Algorithms",
      "Full Stack Web Development",
      "Database Management Systems",
      "Operating Systems & Computer Networks"
    ]
  },
  links: {
    resume: "https://drive.google.com/",
    github: "https://github.com/Vaishnaviojha162",
    linkedin: "https://www.linkedin.com/in/vaishnaviojha/",
    email: "mailto:vaishnaviojha006@gmail.com",
    collegeMap: "https://maps.google.com/?q=Lovely+Professional+University,+Phagwara,+Punjab",
  },
  stats: [
    { label: "Technologies", value: 10, suffix: "+" },
    { label: "Featured Projects", value: 4, suffix: "+" },
    { label: "Coding Problems", value: 100, suffix: "+" },
    { label: "Education", text: "B.Tech CSE" },
  ],
  heroSnippet: `const developer = {
  name: "Vaishnavi Ojha",
  role: "Full-Stack Developer",
  focus: "Scalable Web & Systems",
  status: "Building & Learning"
};`,
};

export const skillsData = {
  frontend: [
    { name: "HTML", level: "Advanced", icon: "Code2" },
    { name: "CSS", level: "Advanced", icon: "Palette" },
    { name: "JavaScript", level: "Advanced", icon: "FileJson" },
    { name: "React.js", level: "Advanced", icon: "Atom" },
    { name: "Next.js", level: "Intermediate", icon: "Layers" },
    { name: "Tailwind CSS", level: "Advanced", icon: "Wind" },
  ],
  backend: [
    { name: "Node.js", level: "Advanced", icon: "Server" },
    { name: "Express.js", level: "Advanced", icon: "Cpu" },
    { name: "REST APIs", level: "Advanced", icon: "Webhook" },
    { name: "Socket.IO", level: "Intermediate", icon: "Zap" },
  ],
  database: [
    { name: "MongoDB", level: "Advanced", icon: "Database" },
    { name: "MySQL", level: "Advanced", icon: "Table" },
    { name: "SQL Server", level: "Intermediate", icon: "HardDrive" },
    { name: "Oracle", level: "Intermediate", icon: "Box" },
  ],
  programming: [
    { name: "C++", level: "Advanced", icon: "Terminal" },
    { name: "JavaScript", level: "Advanced", icon: "FileCode" },
    { name: "Python", level: "Intermediate", icon: "Binary" },
  ],
  tools: [
    { name: "Git", level: "Advanced", icon: "GitBranch" },
    { name: "GitHub", level: "Advanced", icon: "Github" },
    { name: "VS Code", level: "Advanced", icon: "Laptop" },
    { name: "Postman", level: "Advanced", icon: "Send" },
    { name: "Jira", level: "Intermediate", icon: "CheckSquare" },
  ],
};

export const projectsData = [
  {
    id: "01",
    title: "Samriddhi Enterprises",
    category: "Client Project | Revenue Generation",
    description:
      "Full-stack web application developed for a client (Samriddhi Enterprises) as a revenue generation business platform. Built with Node.js, Express, and MongoDB, integrating Razorpay for processing appointments and transactions with secure JWT-based authentication.",
    image: "/projects/samriddhi.jpg",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Razorpay",
      "JWT Auth",
      "Bcrypt.js",
      "JavaScript",
      "HTML5 / CSS3",
    ],
    features: [
      "Revenue generation platform developed for a client",
      "Appointment booking system with Razorpay payment integration",
      "Secure JWT-based user authentication with Bcrypt hashing",
      "User profile management & secure credential updates",
      "Client feedback submission system backed by MongoDB",
      "Express.js REST API for vendor & resource management",
    ],
    github: "https://github.com/Vaishnaviojha162/revenue-frontend-project",
    live: "https://samriddhienterprises.netlify.app",
    isDesktopApp: false,
  },
  {
    id: "02",
    title: "Smart Expression Evaluator (Calculator)",
    category: "C++ & WebAssembly (WASM)",
    description:
      "A high-performance calculation engine and dashboard built with C++17 and WebAssembly (WASM). Features Shunting-Yard expression parsing, infix-to-postfix conversion, and a responsive glassmorphic web interface.",
    image: "/projects/calculator.jpg",
    technologies: [
      "C++17",
      "WebAssembly (WASM)",
      "JavaScript",
      "Algorithms",
      "Data Structures",
      "HTML5 / CSS3",
    ],
    features: [
      "Shunting-Yard mathematical expression parsing algorithm",
      "Infix-to-postfix AST syntax conversion & evaluation",
      "Blazing fast C++ core compiled to WebAssembly binary",
      "Real-time operator precedence and parenthesis matching",
      "Interactive animated computation stack & parse tree",
      "Responsive scientific formula input and history log",
    ],
    github: "https://github.com/Vaishnaviojha162/Smart-Expression-Evaluator",
    live: "/apps/smart-calculator/index.html",
    isDesktopApp: false,
  },
  {
    id: "03",
    title: "Quote Bot – AI Quote Platform",
    category: "AI & Web Application",
    description:
      "An intelligent AI-powered quote generation and recommendation bot designed to suggest curated, context-aware quotes according to user demand, mood, and sentiment preferences.",
    image: "/projects/quotebot.jpg",
    technologies: [
      "JavaScript",
      "AI APIs",
      "Node.js",
      "Express.js",
      "HTML5",
      "CSS3",
    ],
    features: [
      "Context-aware quote generation tailored to user demand",
      "Mood and sentiment classification algorithms",
      "Multiple quote categories, themes, and author styles",
      "Interactive quote inspiration cards with social sharing",
      "Dynamic prompt assistant with custom tone options",
      "Clean, modern animated glassmorphism interface",
    ],
    github: "https://github.com/Vaishnaviojha162/Quote-Bot",
    live: null,
    isDesktopApp: false,
  },
  {
    id: "04",
    title: "Hospital Management System (HMS)",
    category: "Full Stack Healthcare System",
    description:
      "Full-Stack Hospital Management System built with Spring Boot & MongoDB. Features multi-role portals (Patient, Doctor, Admin), custom Min-Heap emergency scheduling, and collision prevention.",
    image: "/projects/secureauth.jpg",
    technologies: [
      "Java",
      "Spring Boot",
      "MongoDB",
      "Min-Heap",
      "Data Structures",
      "REST APIs",
    ],
    features: [
      "Multi-role role-based access control (Patient, Doctor, Admin)",
      "Min-Heap algorithm for prioritized emergency scheduling",
      "Appointment collision prevention engine",
      "Secure patient medical records and doctor consultation tracking",
    ],
    github: "https://github.com/Vaishnaviojha162/HospitalManagementSystem",
    live: null,
    isDesktopApp: false,
  },
];

export const experienceData = [
  {
    role: "Aspiring Software Engineer",
    company: "Projects & Freelance",
    period: "2024 – Present",
    type: "Full Stack Development",
    description:
      "Engineered high-performance web applications, REST APIs, microservices, and database systems using modern JavaScript frameworks and Node.js.",
    skillsApplied: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
      "React",
      "Next.js",
      "Authentication",
      "Backend development",
      "Database integration",
      "API development",
    ],
    achievements: [
      "Architected scalable backend infrastructure and integrated real-time Socket.IO communication.",
      "Implemented secure JWT/PBKDF2 authentication mechanisms with multi-factor support.",
      "Designed responsive glassmorphic frontend interfaces with Next.js & React.",
    ],
  },
];

export const certificatesData = [
  {
    id: "cert-01",
    title: "Web Development Certification (Django)",
    issuer: "Infosys Springboard",
    issuerLogo: "Code2",
    issueDate: "July 10, 2025",
    year: "2025",
    credentialId: "INF-DJANGO-2025",
    image: "/certificates/infosys-django.png",
    shortDescription: "Advanced Python web engineering with Django framework, ORM database design, and RESTful API architecture.",
    description:
      "Awarded by Infosys Springboard for successfully mastering Advanced Web Development with Django. Verifies advanced proficiency in Python backend engineering, Django MVC/MTV framework, ORM database querying, RESTful API architecture, and scalable application deployment.",
    skills: ["Django", "Python", "Web Architecture", "REST APIs", "Database ORM", "Backend Engineering"],
    link: "https://verify.onwingspan.com",
    verified: true,
  },
  {
    id: "cert-02",
    title: "AI-Powered Shopping Ads Certification",
    issuer: "Google",
    issuerLogo: "Cpu",
    issueDate: "July 8, 2025",
    year: "2025",
    expiryDate: "July 8, 2026",
    credentialId: "154455048",
    image: "/certificates/google-ai-ads.png",
    shortDescription: "Expertise in AI-driven advertising systems, machine learning bidding algorithms, and analytics optimization.",
    description:
      "Official Google certification validating expertise in AI-driven advertising systems, machine learning bidding algorithms, automated inventory feeds, conversion optimization, and analytics.",
    skills: ["Artificial Intelligence", "Machine Learning", "Optimization Algorithms", "Data Analytics", "Google AI"],
    link: "https://skillshop.credential.net/",
    verified: true,
  },
  {
    id: "cert-03",
    title: "Introduction to AI & Machine Learning",
    issuer: "Skillera",
    issuerLogo: "Award",
    issueDate: "March 21, 2025",
    year: "2025",
    credentialId: "CER/TM/MAR/IAM/485",
    image: "/certificates/skillera-ai-ml.png",
    shortDescription: "Comprehensive training in core Machine Learning algorithms, neural networks, and proctored examination.",
    description:
      "Certificate of Appreciation awarded following successful completion of a proctored examination on AI & Machine Learning foundations, supervised & unsupervised learning models, neural networks, and algorithmic data preprocessing.",
    skills: ["Machine Learning", "AI Foundations", "Neural Networks", "Data Modeling", "Proctored Exam"],
    link: "mailto:support@skillera.org?subject=Verification%20Request%20for%20Certificate%20CER/TM/MAR/IAM/485",
    verified: true,
  },
];


/**
 * =========================================================================
 * PORTFOLIO DATA STARTER TEMPLATE
 * =========================================================================
 * 
 * Instructions:
 * 1. Fill in your personal information, links, projects, and skills below.
 * 2. When ready, copy or rename this file to replace `portfolioData.js`:
 *    cp data/portfolioData.template.js data/portfolioData.js
 * 
 * Your changes will immediately update the live website!
 * =========================================================================
 */

export const personalInfo = {
  name: "Your Full Name",
  title: "Full Stack Developer / Software Engineer",
  tagline: "Building scalable, high-performance, and user-centric web applications.",
  bio: "Passionate software engineer specializing in building high-quality web applications, backend services, and interactive user interfaces.",
  availability: "Available for Opportunities", // e.g., "Available for Hire", "Open to Work"
  
  // Education Details
  education: {
    institution: "Your University / College Name",
    degree: "B.Tech / B.S. in Computer Science",
    duration: "2023 – 2027",
    location: "City, State / Country",
    description: "Specializing in Software Engineering, Algorithms, Full Stack Development, and Cloud Computing.",
    highlights: [
      "Data Structures & Algorithms",
      "Full Stack Web Development",
      "Database Management Systems",
      "Distributed Systems & Cloud Computing",
    ],
  },

  // Social and Contact Links
  links: {
    resume: "https://drive.google.com/your-resume-link",
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
    email: "mailto:your-email@example.com",
    twitter: "https://x.com/your-handle", // optional
  },

  // Key Statistics displayed on Hero section
  stats: [
    { label: "Technologies Mastered", value: 12, suffix: "+" },
    { label: "Full Stack Projects", value: 5, suffix: "+" },
    { label: "Coding Problems", value: 250, suffix: "+" },
    { label: "Education", text: "B.Tech CSE" },
  ],

  // Code snippet displayed in hero visual animation
  heroSnippet: `const engineer = {
  name: "Your Name",
  role: "Software Engineer",
  passion: "Crafting exceptional digital experiences"
};`,
};

// Technical Skills categorization
export const skillsData = {
  frontend: [
    { name: "React.js", level: "Advanced", icon: "Atom" },
    { name: "Next.js", level: "Advanced", icon: "Layers" },
    { name: "JavaScript / TypeScript", level: "Advanced", icon: "FileJson" },
    { name: "Tailwind CSS", level: "Advanced", icon: "Wind" },
    { name: "HTML5 & CSS3", level: "Advanced", icon: "Palette" },
  ],
  backend: [
    { name: "Node.js", level: "Advanced", icon: "Server" },
    { name: "Express.js", level: "Advanced", icon: "Cpu" },
    { name: "RESTful APIs", level: "Advanced", icon: "Webhook" },
    { name: "WebSockets / Socket.IO", level: "Intermediate", icon: "Zap" },
  ],
  database: [
    { name: "PostgreSQL", level: "Advanced", icon: "Database" },
    { name: "MongoDB", level: "Advanced", icon: "Database" },
    { name: "MySQL", level: "Advanced", icon: "Table" },
    { name: "Redis", level: "Intermediate", icon: "HardDrive" },
  ],
  programming: [
    { name: "JavaScript", level: "Advanced", icon: "FileCode" },
    { name: "Python", level: "Intermediate", icon: "Binary" },
    { name: "C++", level: "Intermediate", icon: "Terminal" },
    { name: "Java", level: "Intermediate", icon: "Code2" },
  ],
  tools: [
    { name: "Git & GitHub", level: "Advanced", icon: "GitBranch" },
    { name: "Docker", level: "Intermediate", icon: "Box" },
    { name: "VS Code", level: "Advanced", icon: "Laptop" },
    { name: "Postman", level: "Advanced", icon: "Send" },
  ],
};

// Featured Projects
export const projectsData = [
  {
    id: "01",
    title: "Project Alpha – Cloud Platform",
    category: "Full Stack Web Application",
    description:
      "A real-time collaborative cloud management dashboard built for scaling high-throughput modern services.",
    image: "/projects/mindforum.jpg", // Replace with your project screenshot in /public/projects/
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Tailwind CSS",
      "MongoDB",
    ],
    features: [
      "Modern server-side rendering and static optimization",
      "Secure user authentication and role management",
      "Real-time event processing and live updates",
      "Responsive glassmorphism UI design",
    ],
    github: "https://github.com/your-username/project-alpha",
    live: "https://project-alpha-demo.vercel.app",
    isDesktopApp: false,
  },
  {
    id: "02",
    title: "AI Chat & Assistant Suite",
    category: "AI & Web Application",
    description:
      "An intelligent workflow automation agent powered by modern LLM APIs with real-time streaming answers.",
    image: "/projects/brainware.jpg",
    technologies: [
      "React",
      "Node.js",
      "OpenAI API",
      "Express.js",
      "Tailwind CSS",
    ],
    features: [
      "Streaming AI responses with markdown rendering",
      "Context-aware persistent chat memory",
      "Custom system prompts and preset templates",
      "Export and share conversation histories",
    ],
    github: "https://github.com/your-username/ai-chat-suite",
    live: "https://ai-chat-suite.vercel.app",
    isDesktopApp: false,
  },
  {
    id: "03",
    title: "DevMetrics – System Monitor",
    category: "Desktop / System Tool",
    description:
      "A cross-platform system utility to monitor hardware utilization, network traffic, and background services.",
    image: "/projects/secureauth.jpg",
    technologies: [
      "Python",
      "CustomTkinter",
      "psutil",
      "SQLite",
    ],
    features: [
      "Real-time CPU, RAM, GPU, and disk metrics",
      "Interactive graphs and historical performance logging",
      "Low CPU overhead background daemon",
    ],
    github: "https://github.com/your-username/devmetrics",
    live: null,
    isDesktopApp: true,
    desktopLabel: "Desktop Application",
  },
];

// Experience and Activities
export const experienceData = [
  {
    role: "Full Stack Developer",
    company: "Freelance / Personal Projects",
    period: "2024 – Present",
    type: "Full Stack Development",
    description:
      "Engineered end-to-end web applications, REST APIs, microservices, and database systems with modern JavaScript & React.",
    skillsApplied: [
      "React.js",
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "MongoDB",
      "REST APIs",
    ],
    achievements: [
      "Built and deployed scalable web apps with 99.9% uptime and responsive UI.",
      "Integrated secure authentication, payment workflows, and real-time WebSockets.",
      "Optimized frontend performance, achieving 95+ Google Lighthouse scores.",
    ],
  },
];

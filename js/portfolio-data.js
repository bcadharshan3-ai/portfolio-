/**
 * Portfolio Data Module for Dharshan A
 * Full-Stack Software Engineer
 * 
 * Clean, type-safe data structures adhering to SonarQube standards.
 */

export const personalInfo = {
  name: "Dharshan A",
  initials: "DA",
  headline: "Full-Stack Software Engineer",
  subHeadline: "React.js · Next.js · Node.js · Express.js · AWS Cloud Architecture",
  location: "Madurai, Tamil Nadu, India",
  email: "bcadharshan3@gmail.com",
  phone: "+91 90871 05098",
  phoneRaw: "+919087105098",
  linkedin: "https://www.linkedin.com/in/dharshan03",
  resumePath: "./Dharshan_A.pdf",
  currentRole: "Software Engineer",
  currentCompany: "Tringapps Research Labs Private Limited",
  experienceYears: "4+ Years",
  summary:
    "Full-Stack Software Engineer with 4+ years of experience building scalable web applications using React.js, Next.js, TypeScript, Node.js, and GraphQL. Skilled in end-to-end project delivery, technical leadership, client communication, Jira sprint planning, code reviews, and AWS deployments. Demonstrated impact through 30% faster page loads, 90% code coverage, 20% fewer post-release bugs, and successful delivery of major feature releases ahead of schedule."
};

export const keyMetrics = [
  {
    value: "30%",
    label: "Faster Page Loads",
    detail: "Next.js App Router SSR/SSG, GraphQL batching & AWS Lambda caching"
  },
  {
    value: "90%",
    label: "Unit Test Coverage",
    detail: "Enforced via Jest and SonarQube quality gates across modules"
  },
  {
    value: "20%",
    label: "Fewer Post-Release Bugs",
    detail: "Achieved via rigorous peer reviews, CI/CD automated linting and tests"
  },
  {
    value: "4+",
    label: "Major Feature Releases",
    detail: "Delivered ahead of schedule through agile sprint leadership"
  },
  {
    value: "9.86",
    label: "BCA CGPA · Gold Medallist",
    detail: "Rank 1 holder & Best Student of the Year at Thiagarajar College"
  }
];

export const skillCategories = [
  {
    id: "frontend",
    name: "Frontend Engineering",
    icon: "code",
    skills: [
      "React.js",
      "Next.js (App Router)",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Sass",
      "Tailwind CSS",
      "Bootstrap",
      "Redux Toolkit",
      "Responsive Design",
      "Webflow",
      "Adobe Experience Manager (AEM)"
    ]
  },
  {
    id: "backend",
    name: "Backend & APIs",
    icon: "server",
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "GraphQL",
      "TypeORM",
      "WebSockets",
      "Serverless Architecture"
    ]
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    icon: "cloud",
    skills: [
      "AWS Chime SDK",
      "AWS Lambda",
      "Amazon API Gateway",
      "Amazon S3",
      "AWS Cognito",
      "AWS Amplify",
      "Amazon CloudWatch",
      "Jenkins CI/CD",
      "Git & GitHub"
    ]
  },
  {
    id: "databases",
    name: "Databases & Search",
    icon: "database",
    skills: [
      "PostgreSQL",
      "SQL",
      "Amazon DynamoDB",
      "Amazon OpenSearch Service",
      "Firebase"
    ]
  },
  {
    id: "testing",
    name: "Testing & Code Quality",
    icon: "shield-check",
    skills: [
      "Jest",
      "Unit Testing (90% Coverage)",
      "SonarQube Quality Gates",
      "Veracode Security Scans",
      "Snyk Vulnerability Audits",
      "Peer Code Reviews"
    ]
  },
  {
    id: "analytics",
    name: "Analytics & Monitoring",
    icon: "activity",
    skills: [
      "PostHog",
      "Datadog",
      "Recharts Data Viz",
      "Google Analytics",
      "Adobe Analytics",
      "Jira",
      "Figma",
      "Azure Boards"
    ]
  },
  {
    id: "leadership",
    name: "Engineering Leadership",
    icon: "users",
    skills: [
      "Sprint Planning (Jira)",
      "Technical Architecture",
      "Requirements Gathering",
      "Client Communication",
      "Mentoring & PR Reviews",
      "Release Management"
    ]
  }
];

export const experienceData = [
  {
    title: "Software Engineer",
    company: "Tringapps Research Labs Private Limited",
    location: "Madurai, Tamil Nadu, India",
    period: "Mar 2022 – Present",
    type: "Full-Time",
    intro:
      "Leading full-stack development, frontend architecture, AWS serverless deployments, and client-facing feature deliveries for high-traffic web platforms.",
    highlights: [
      "Developed scalable React.js, Next.js, Node.js, and Express.js applications integrating REST APIs, GraphQL, PostgreSQL, and AWS Lambda, reducing page load times by 30%.",
      "Led end-to-end client project delivery, including requirements gathering, Jira sprint planning, development coordination, QA cycles, and production deployments; delivered 4 major feature releases ahead of schedule.",
      "Improved code quality through peer reviews and Jest-based unit testing, achieving 90% code coverage and reducing post-release bugs by 20%.",
      "Optimized responsive interfaces using analytics and A/B testing, contributing to a 15% increase in user retention.",
      "Built serverless real-time messaging and AWS Chime SDK video conferencing (screen sharing, noise suppression, dynamic layout switching, participant invitations) using DynamoDB, Lambda, and API Gateway.",
      "Delivered a subscription management and role-based dashboard for Thomson Reuters users, automating deployments with Jenkins and passing Veracode and Snyk security checks as sole full-stack developer.",
      "Led frontend delivery and mentored team members on Katon Classroom & Meet and Memomatic platforms, reviewing and merging pull requests and coordinating QA and release cycles."
    ]
  }
];

export const projectsData = [
  {
    id: "katon-classroom",
    index: "01",
    title: "Katon Classroom & Meet",
    subtitle: "Nationwide Digital Education Platform for Ghana",
    role: "Core Frontend Developer & Team Lead",
    category: "edtech",
    description:
      "Architected a centralized digital learning platform for schools across Ghana featuring interactive assignments, timed quizzes, digital textbooks, real-time messaging, and multi-user video conferencing.",
    metrics: "Nationwide scale · Low-bandwidth optimization · 99.9% uptime",
    highlights: [
      "Architected with Next.js (App Router) for high-performance server-side rendering, SEO, and Open Graph metadata.",
      "Integrated AWS Chime SDK for multi-party video conferencing with noise suppression and screen sharing.",
      "Implemented PostHog and Recharts for student engagement tracking and visual learning progress analytics.",
      "Led frontend delivery, reviewed pull requests, and coordinated QA release cycles."
    ],
    tags: [
      "Next.js (App Router)",
      "Firebase",
      "AWS Chime SDK",
      "Recharts",
      "PostHog",
      "Tailwind CSS",
      "Deep Linking"
    ]
  },
  {
    id: "reuters-portal",
    index: "02",
    title: "Thomson Reuters Corp Admin Portal",
    subtitle: "Enterprise Subscription & Security Platform",
    role: "Sole Full-Stack Developer",
    category: "enterprise",
    description:
      "Engineered an enterprise-grade administration and subscription management portal for Thomson Reuters with comprehensive role-based access control (RBAC) and high-throughput data pipelines.",
    metrics: "Zero security vulnerabilities · 100% Jenkins CI/CD automation",
    highlights: [
      "Engineered role-based dashboards with interactive Recharts visualizations for subscription analytics.",
      "Designed PostgreSQL relational schemas and persistence layers using TypeORM and Express.js.",
      "Established production monitoring with Datadog and agile sprint tracking in Azure Boards.",
      "Automated CI/CD deployments with Jenkins and passed rigorous Veracode and Snyk corporate security audits as sole full-stack developer."
    ],
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "TypeORM",
      "Recharts",
      "Jenkins CI/CD",
      "Veracode",
      "Snyk",
      "Datadog"
    ]
  },
  {
    id: "memomatic-ai",
    index: "03",
    title: "Memomatic (AI Integration Platform)",
    subtitle: "Enterprise AI-Powered Memo Generation",
    role: "Frontend Developer & Tech Lead",
    category: "ai",
    description:
      "Architected an AI-powered corporate memo and document generation platform from initial setup, providing dynamic prompt templates, customizable tone, length variations, and multi-format export engines.",
    metrics: "Dynamic AI prompts · Role-based access · Instant PDF/Word exports",
    highlights: [
      "Architected frontend system architecture and state management from initial setup using React and Redux.",
      "Implemented dynamic prompt customization, real-time variant comparison, and AI response formatting.",
      "Built client-side export pipelines to PDF and Word documents with customized branding.",
      "Mentored junior developers on implementation best practices and SonarQube code quality standards."
    ],
    tags: ["React.js", "Redux", "Material UI", "Recharts", "AI Prompting", "PDF/Word Export"]
  },
  {
    id: "tring-hub",
    index: "04",
    title: "Tring Hub, Hire, Chat & Meet",
    subtitle: "Internal Real-Time Collaboration Suite",
    role: "Full-Stack Developer",
    category: "realtime",
    description:
      "Developed a serverless enterprise collaboration suite combining real-time chat, video conferencing, project allocation dashboards, and an automated candidate assessment platform.",
    metrics: "Sub-second WebSockets messaging · Automated candidate grading",
    highlights: [
      "Developed serverless real-time messaging using DynamoDB, AWS Lambda, API Gateway, and WebSockets.",
      "Configured AWS Chime SDK video meetings featuring noise suppression, participant invite links, and dynamic tile layout switching.",
      "Constructed project-allocation dashboards with two-way Jira API sync and workload visualizations.",
      "Built an interactive hiring portal with timed multiple-choice tests (MCQ) and automated scoring."
    ],
    tags: [
      "React.js",
      "Node.js",
      "AWS Lambda",
      "API Gateway",
      "WebSockets",
      "DynamoDB",
      "AWS Chime SDK",
      "Recharts"
    ]
  },
  {
    id: "revolt-aem",
    index: "05",
    title: "Revolt AEM – Media & Content Platform",
    subtitle: "Enterprise CMS with Video Ad Integrations",
    role: "Enterprise CMS & Frontend Engineer",
    category: "cms",
    description:
      "Implemented enterprise UI features and content pipelines for Revolt TV using Adobe Experience Manager (AEM), Amazon OpenSearch, and advanced video streaming controllers.",
    metrics: "High-traffic media streaming · OpenSearch indexing · OneTrust compliance",
    highlights: [
      "Integrated JW Player with scheduled pre-roll, mid-roll, and post-roll video advertisement controls.",
      "Connected Amazon OpenSearch Service for instantaneous content querying, tag filtering, and RSS feed curation.",
      "Integrated OneTrust GDPR/CCPA consent management with Google Analytics and Adobe Analytics tracking.",
      "Partnered directly with client stakeholders to resolve technical tickets and deploy custom AEM components."
    ],
    tags: [
      "Adobe Experience Manager (AEM)",
      "SharePoint",
      "Amazon OpenSearch",
      "JW Player",
      "RSS Feeds",
      "OneTrust",
      "Adobe Analytics"
    ]
  },
  {
    id: "revolt-creator",
    index: "06",
    title: "Revolt Creator Network & Creator Cash",
    subtitle: "Fintech & Creator Monetization Portal",
    role: "Frontend Developer",
    category: "frontend",
    description:
      "Owned end-to-end product frontend development for creator onboarding, authentication, analytics visualization, and payouts.",
    metrics: "A/B tested 3 design variants · 15% user retention gain",
    highlights: [
      "Owned the full frontend lifecycle from requirements discovery to production deployment and client demos.",
      "Implemented secure cloud authentication utilizing AWS Amplify and AWS Cognito user pools.",
      "Conducted A/B testing on 3 design variations using Google Analytics to optimize creator conversion rates.",
      "Built complete SEO architecture with dynamic Open Graph metadata for viral social sharing."
    ],
    tags: [
      "React.js",
      "AWS Amplify",
      "AWS Cognito",
      "Google Analytics",
      "A/B Testing",
      "Open Graph SEO"
    ]
  }
];

export const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "University of Madras, Institute of Distance Education",
    location: "Chennai, Tamil Nadu",
    period: "2022 – 2024",
    score: "CGPA: 8.5 / 10",
    badge: "First Class with Distinction"
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Thiagarajar College",
    location: "Madurai, Tamil Nadu",
    period: "2019 – 2022",
    score: "CGPA: 9.86 / 10",
    badge: "Gold Medallist · 1st Rank Holder"
  }
];

export const awardsData = [
  {
    title: "Gold Medallist & 1st Rank Holder",
    institution: "Thiagarajar College, Madurai",
    date: "Dec 2022",
    description:
      "Awarded the prestigious Gold Medal for securing the 1st Rank across the entire Bachelor of Computer Applications (BCA) graduating class with an outstanding 9.86 / 10 CGPA."
  },
  {
    title: "Best Student Award",
    institution: "Thiagarajar College, Madurai",
    date: "Apr 2022",
    description:
      "Conferred the prestigious Best Student Award for exceptional academic excellence, technical leadership, extracurricular accomplishments, and peer mentorship."
  }
];

/**
 * ReDoS-safe email validation regex matching standard RFC 5322 subset without catastrophic backtracking
 */
const EMAIL_SAFE_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

/**
 * Validates contact form inputs adhering to SonarQube security standards
 * @param {Object} formData
 * @param {string} formData.name
 * @param {string} formData.email
 * @param {string} formData.subject
 * @param {string} formData.message
 * @returns {{isValid: boolean, errors: Record<string, string>}}
 */
export function validateContactForm({ name, email, subject, message } = {}) {
  const errors = {};

  if (!name || typeof name !== "string" || name.trim().length < 2) {
    errors.name = "Please provide your name (at least 2 characters).";
  } else if (name.trim().length > 100) {
    errors.name = "Name must not exceed 100 characters.";
  }

  if (!email || typeof email !== "string" || !EMAIL_SAFE_REGEX.test(email.trim())) {
    errors.email = "Please provide a valid corporate or personal email address.";
  } else if (email.trim().length > 254) {
    errors.email = "Email address is too long.";
  }

  if (!subject || typeof subject !== "string" || subject.trim().length < 3) {
    errors.subject = "Please enter a subject (at least 3 characters).";
  } else if (subject.trim().length > 150) {
    errors.subject = "Subject must not exceed 150 characters.";
  }

  if (!message || typeof message !== "string" || message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters long.";
  } else if (message.trim().length > 2000) {
    errors.message = "Message must not exceed 2000 characters.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Filter projects by category
 * @param {Array} projects
 * @param {string} category
 * @returns {Array}
 */
export function filterProjects(projects, category) {
  if (!Array.isArray(projects)) return [];
  if (!category || category === "all") {
    return projects;
  }
  return projects.filter((project) => project.category === category);
}

/**
 * Filter skills by category ID
 * @param {Array} categories
 * @param {string} categoryId
 * @returns {Array}
 */
export function filterSkills(categories, categoryId) {
  if (!Array.isArray(categories)) return [];
  if (!categoryId || categoryId === "all") {
    return categories;
  }
  return categories.filter((cat) => cat.id === categoryId);
}

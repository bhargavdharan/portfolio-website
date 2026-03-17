export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  type: "work" | "education";
}

export const experiences: Experience[] = [
  {
    title: "Identity Security Engineer",
    company: "Professional Experience",
    period: "2020 - Present",
    description:
      "Specializing in identity and access management solutions, building secure authentication systems, and implementing enterprise-grade security frameworks.",
    highlights: [
      "Designed and implemented IAM solutions for enterprise clients",
      "Built OAuth2/OIDC providers with multi-factor authentication",
      "Developed role-based access control systems with fine-grained permissions",
      "Conducted security audits and implemented compliance frameworks",
      "Reduced security incidents by implementing zero-trust architecture",
    ],
    type: "work",
  },
  {
    title: "Full Stack Developer",
    company: "Freelance & Projects",
    period: "2019 - Present",
    description:
      "Building modern web applications using React, Spring Boot, Node.js, and Python across diverse industries.",
    highlights: [
      "Delivered 20+ full-stack web applications for clients",
      "Built real-time applications using WebSocket and Socket.io",
      "Developed RESTful APIs with comprehensive documentation",
      "Implemented CI/CD pipelines with GitHub Actions",
      "Cross-platform mobile development with Flutter",
    ],
    type: "work",
  },
  {
    title: "Bachelor's in Computer Science",
    company: "University",
    period: "2016 - 2020",
    description:
      "Focused on software engineering, cybersecurity, and distributed systems.",
    highlights: [
      "Specialized in cybersecurity and network security",
      "Research in identity management and authentication protocols",
      "Graduated with distinction",
    ],
    type: "education",
  },
];

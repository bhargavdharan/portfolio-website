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
    title: "Sr. Engineer - Implementation",
    company: "Ilantus Services",
    period: "Apr 2024 - Present",
    description:
      "Leading IAM implementations with SailPoint IIQ and Saviynt, delivering end-to-end identity solutions for enterprise clients.",
    highlights: [
      "End-to-end SailPoint IIQ deployment including onboarding 20+ JDBC applications",
      "Enhancement projects: advanced reporting, lifecycle automation, and UAT-to-production transitions",
      "Custom development of ARS File Automation and Audit Automation modules",
      "Saviynt support: access management workflows, compliance integrations, and system tuning",
      "Led security compliance initiatives including VAPT handling and audit readiness",
    ],
    type: "work",
  },
  {
    title: "Software Support Engineer",
    company: "Ilantus Services",
    period: "Apr 2022 - Mar 2024",
    description:
      "Provided technical support and maintenance for enterprise IAM platforms, resolving complex identity and access issues.",
    highlights: [
      "Technical troubleshooting for SailPoint IIQ and Saviynt identity platforms",
      "Application maintenance and issue resolution for IAM implementations",
      "Customer assistance and incident management for identity security solutions",
      "Supported access governance, certification campaigns, and provisioning workflows",
      "Collaborated with implementation teams on platform enhancements and upgrades",
    ],
    type: "work",
  },
  {
    title: "Full Stack Developer & AI Explorer",
    company: "Freelance & Personal Projects",
    period: "2022 - Present",
    description:
      "Building modern web and mobile applications while actively exploring Generative AI, Agentic AI, and LLM integrations.",
    highlights: [
      "Built full-stack web applications with React, Next.js, and Spring Boot",
      "Developed RESTful APIs with comprehensive documentation and testing",
      "Real-time applications using WebSocket and Socket.io",
      "Cross-platform mobile development with Flutter and Firebase",
      "Exploring Generative AI: LLM integrations, prompt engineering, and AI agent workflows",
      "Learning Agentic AI: autonomous agents, multi-agent orchestration, and AI-driven automation",
    ],
    type: "work",
  },
];

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
  category: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "SecureAuth IAM",
    description:
      "Enterprise-grade Identity & Access Management platform with MFA, RBAC, and audit logging.",
    longDescription:
      "A comprehensive IAM solution featuring OAuth2/OIDC, multi-factor authentication, role-based access control with fine-grained permissions, user lifecycle management, session tracking, and detailed audit trails.",
    tech: ["React", "Spring Boot", "PostgreSQL", "JWT", "TOTP MFA"],
    image: "/images/secureauth.svg",
    github: "https://github.com/bhargavdharan/secureauth-iam",
    demo: "https://secureauth-iam-production.up.railway.app",
    category: "Security",
    featured: true,
  },
  {
    title: "CyberShield Dashboard",
    description:
      "Real-time security monitoring dashboard with threat visualization and incident tracking.",
    longDescription:
      "A cybersecurity dashboard featuring real-time threat feeds, vulnerability scanning, network traffic monitoring, incident response workflows, and comprehensive security scoring.",
    tech: ["React", "Node.js", "Socket.io", "Chart.js", "Express"],
    image: "/images/cybershield.svg",
    github: "https://github.com/bhargavdharan/cybershield-dashboard",
    demo: "#",
    category: "Security",
    featured: true,
  },
  {
    title: "ShopStack E-Commerce",
    description:
      "Full-featured e-commerce platform with Stripe payments, admin panel, and order tracking.",
    longDescription:
      "Production-grade e-commerce solution with product catalog, cart management, Stripe payment integration, order lifecycle tracking, admin analytics dashboard, and email notifications.",
    tech: ["React", "Spring Boot", "PostgreSQL", "Stripe", "Cloudinary"],
    image: "/images/shopstack.svg",
    github: "https://github.com/bhargavdharan/shopstack-ecommerce",
    demo: "#",
    category: "Full Stack",
    featured: true,
  },
  {
    title: "TaskFlow API",
    description:
      "RESTful project management API with full documentation, caching, and real-time notifications.",
    longDescription:
      "A well-architected REST API with HATEOAS, Swagger documentation, JWT authentication, rate limiting, WebSocket notifications, and comprehensive test coverage.",
    tech: ["Spring Boot", "PostgreSQL", "Redis", "Swagger", "WebSocket"],
    image: "/images/taskflow.svg",
    github: "https://github.com/bhargavdharan/taskflow-api",
    demo: "#",
    category: "Backend",
    featured: false,
  },
  {
    title: "DataPulse Analytics",
    description:
      "Interactive analytics dashboard with data upload, auto-visualization, and report generation.",
    longDescription:
      "A data analytics tool that processes CSV/JSON uploads, generates intelligent visualizations, offers drag-and-drop dashboard building, and exports reports as PDF.",
    tech: ["React", "Python", "FastAPI", "Pandas", "PostgreSQL"],
    image: "/images/datapulse.svg",
    github: "https://github.com/bhargavdharan/datapulse-analytics",
    demo: "#",
    category: "Data",
    featured: false,
  },
  {
    title: "ChatNexus",
    description:
      "Real-time chat application with E2E encryption, file sharing, and presence indicators.",
    longDescription:
      "A feature-rich messaging platform with real-time communication, end-to-end encryption, file sharing, read receipts, emoji reactions, and responsive design.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "AES"],
    image: "/images/chatnexus.svg",
    github: "https://github.com/bhargavdharan/chatnexus-realtime",
    demo: "#",
    category: "Full Stack",
    featured: true,
  },
  {
    title: "MedTrack",
    description:
      "Cross-platform health & fitness tracker with goal setting, charts, and cloud sync.",
    longDescription:
      "A Flutter-based health tracker supporting weight, steps, water, sleep, and calorie tracking with interactive charts, streak tracking, reminders, and Firebase cloud sync.",
    tech: ["Flutter", "Dart", "Firebase", "Firestore", "Material 3"],
    image: "/images/medtrack.svg",
    github: "https://github.com/bhargavdharan/medtrack-flutter",
    demo: "#",
    category: "Mobile",
    featured: false,
  },
];

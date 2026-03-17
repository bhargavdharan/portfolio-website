export interface Skill {
  name: string;
  level: number; // 0-100
  icon: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "🖥️",
    skills: [
      { name: "React", level: 95, icon: "react" },
      { name: "Next.js", level: 90, icon: "nextjs" },
      { name: "TypeScript", level: 88, icon: "typescript" },
      { name: "Tailwind CSS", level: 92, icon: "tailwind" },
      { name: "Flutter", level: 80, icon: "flutter" },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Java / Spring Boot", level: 92, icon: "java" },
      { name: "Node.js / Express", level: 88, icon: "nodejs" },
      { name: "Python / FastAPI", level: 82, icon: "python" },
      { name: "REST API Design", level: 95, icon: "api" },
      { name: "GraphQL", level: 75, icon: "graphql" },
    ],
  },
  {
    title: "Database & Cloud",
    icon: "☁️",
    skills: [
      { name: "PostgreSQL", level: 90, icon: "postgresql" },
      { name: "MongoDB", level: 85, icon: "mongodb" },
      { name: "Redis", level: 78, icon: "redis" },
      { name: "Firebase", level: 82, icon: "firebase" },
      { name: "Docker", level: 80, icon: "docker" },
    ],
  },
  {
    title: "Security",
    icon: "🔒",
    skills: [
      { name: "Identity & Access Mgmt", level: 95, icon: "shield" },
      { name: "OAuth2 / OIDC", level: 92, icon: "auth" },
      { name: "MFA Implementation", level: 90, icon: "mfa" },
      { name: "RBAC / ABAC", level: 88, icon: "rbac" },
      { name: "Security Auditing", level: 85, icon: "audit" },
    ],
  },
];

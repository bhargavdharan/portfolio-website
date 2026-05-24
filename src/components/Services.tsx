"use client";

import { motion } from "framer-motion";
import {
  FiShield,
  FiGlobe,
  FiSmartphone,
  FiDatabase,
  FiCloud,
  FiCpu,
} from "react-icons/fi";
import SectionHeading from "./SectionHeading";

const services = [
  {
    icon: FiShield,
    title: "IAM & Security Consulting",
    description:
      "Enterprise identity solutions with SailPoint IIQ, Saviynt, OAuth2/OIDC, MFA, RBAC/ABAC, and zero-trust architecture implementation.",
    tags: ["SailPoint", "Saviynt", "OAuth2", "MFA", "Zero Trust"],
  },
  {
    icon: FiGlobe,
    title: "Full-Stack Web Development",
    description:
      "End-to-end web applications using React, Next.js, Spring Boot, and Node.js. From concept to deployment with clean, scalable code.",
    tags: ["React", "Next.js", "Spring Boot", "Node.js"],
  },
  {
    icon: FiSmartphone,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications built with Flutter and Firebase. Native-like performance with single codebase efficiency.",
    tags: ["Flutter", "Dart", "Firebase", "Firestore"],
  },
  {
    icon: FiDatabase,
    title: "API Design & Development",
    description:
      "Scalable RESTful and GraphQL APIs with comprehensive documentation, caching strategies, rate limiting, and real-time capabilities.",
    tags: ["REST", "GraphQL", "Swagger", "Redis"],
  },
  {
    icon: FiCloud,
    title: "Cloud & DevOps",
    description:
      "Containerization with Docker, CI/CD pipeline setup, cloud deployment on AWS/Railway, and infrastructure optimization.",
    tags: ["Docker", "AWS", "CI/CD", "Railway"],
  },
  {
    icon: FiCpu,
    title: "AI Integration & Automation",
    description:
      "Integrating LLMs and AI agents into applications. Chatbots, intelligent automation, prompt engineering, and AI-enhanced workflows.",
    tags: ["OpenAI API", "LLMs", "Agentic AI", "Prompt Engineering"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding bg-white dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Services"
          subtitle="Professional services tailored to your business needs — from AI integration to security and full-stack development"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group p-6 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary/50 dark:hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-full font-medium hover:shadow-lg hover:shadow-primary/25 transition-shadow"
          >
            Discuss Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}

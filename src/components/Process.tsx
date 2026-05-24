"use client";

import { motion } from "framer-motion";
import {
  FiMessageSquare,
  FiSearch,
  FiLayout,
  FiCode,
  FiCheckCircle,
  FiZap,
} from "react-icons/fi";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    icon: FiMessageSquare,
    step: "01",
    title: "Discovery",
    description:
      "We discuss your requirements, goals, timeline, and budget to ensure we're aligned on the project scope.",
  },
  {
    icon: FiSearch,
    step: "02",
    title: "Research & Planning",
    description:
      "I analyze your needs, research the best tech stack, and create a detailed project roadmap with milestones.",
  },
  {
    icon: FiLayout,
    step: "03",
    title: "Design & Architecture",
    description:
      "Wireframes, system architecture, and database design are created and reviewed before any code is written.",
  },
  {
    icon: FiCode,
    step: "04",
    title: "Development",
    description:
      "Agile development with regular updates. Clean, documented code with security best practices built-in.",
  },
  {
    icon: FiCheckCircle,
    step: "05",
    title: "Testing & QA",
    description:
      "Rigorous testing including unit tests, integration tests, security scans, and performance optimization.",
  },
  {
    icon: FiZap,
    step: "06",
    title: "Deployment & Support",
    description:
      "Smooth deployment to production with monitoring setup. Post-launch support and maintenance available.",
  },
];

export default function Process() {
  return (
    <section className="section-padding bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="How I Work"
          subtitle="A proven process that ensures transparent communication and high-quality delivery"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-2xl font-bold text-slate-200 dark:text-slate-700">
                  {item.step}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

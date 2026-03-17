"use client";

import { motion } from "framer-motion";
import { FiShield, FiCode, FiServer, FiSmartphone } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

const highlights = [
  {
    icon: FiShield,
    title: "Identity Security",
    description:
      "4+ years securing enterprise identity systems with IAM, OAuth2, MFA, and zero-trust architecture.",
  },
  {
    icon: FiCode,
    title: "Full Stack Development",
    description:
      "End-to-end application development with React, Next.js, Spring Boot, and Node.js.",
  },
  {
    icon: FiServer,
    title: "API Architecture",
    description:
      "Designing scalable REST APIs with comprehensive documentation, caching, and real-time capabilities.",
  },
  {
    icon: FiSmartphone,
    title: "Cross-Platform",
    description:
      "Mobile and web development with Flutter, React, and responsive design for all devices.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-white dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Passionate about building secure, scalable, and user-friendly applications"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4 text-slate-600 dark:text-slate-300">
              <p className="text-lg leading-relaxed">
                I&apos;m <span className="text-primary font-semibold">Dharan Kumar Bera</span>,
                a full-stack developer and identity security specialist with over 4 years
                of professional experience building enterprise-grade applications.
              </p>
              <p className="leading-relaxed">
                My background in <span className="text-accent font-medium">identity security</span> gives
                me a unique perspective on building applications that are not just functional,
                but inherently secure. I specialize in implementing IAM solutions, OAuth2/OIDC
                protocols, and zero-trust security models.
              </p>
              <p className="leading-relaxed">
                Whether it&apos;s a high-performance API, an interactive web dashboard, or a
                cross-platform mobile app, I bring the same commitment to quality, security,
                and clean code to every project.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["React", "Spring Boot", "Node.js", "Python", "Flutter", "PostgreSQL", "Docker", "AWS"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Right: Highlight cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary/50 dark:hover:border-primary/50 transition-colors"
              >
                <item.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

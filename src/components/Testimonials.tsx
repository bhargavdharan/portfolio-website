"use client";

import { motion } from "framer-motion";
import { FiStar, FiMessageSquare } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    name: "Enterprise IAM Client",
    role: "IT Security Manager",
    company: "Fortune 500 Company",
    content:
      "Dharan delivered a complex SailPoint IIQ implementation on time and with exceptional quality. His deep understanding of identity security and attention to detail saved us months of potential rework.",
  },
  {
    name: "Startup Founder",
    role: "CEO",
    company: "SaaS Startup",
    content:
      "Working with Dharan was seamless. He built our entire full-stack platform from scratch — secure auth, admin dashboard, payment integration. Highly recommend for any serious project.",
  },
  {
    name: "Product Lead",
    role: "Engineering Manager",
    company: "Tech Consultancy",
    content:
      "His code is clean, well-documented, and production-ready. Dharan brings both technical excellence and strong communication skills — a rare combination in freelance development.",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Client Testimonials"
          subtitle="Feedback from clients and colleagues I've had the pleasure of working with"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary/30 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <FiStar
                    key={idx}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-white text-sm">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

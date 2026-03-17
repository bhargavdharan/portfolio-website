"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="gradient-text">{title}</span>
      </h2>
      <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
        {subtitle}
      </p>
      <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-primary via-accent to-cyan rounded-full" />
    </motion.div>
  );
}

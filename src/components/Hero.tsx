"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";
import ParticleBackground from "./ParticleBackground";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950"
    >
      <ParticleBackground />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/20 rounded-full blur-[100px] animate-pulse delay-1000" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
          >
            <span className="text-primary text-sm font-medium">
              Available for Freelance Projects
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-slate-900 dark:text-white">
            Hi, I&apos;m{" "}
            <span className="gradient-text">Dharan Kumar</span>
          </h1>

          <div className="text-xl sm:text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mb-8 h-10">
            <TypeAnimation
              sequence={[
                "Identity Security Engineer",
                2000,
                "Full Stack Developer",
                2000,
                "Cybersecurity Specialist",
                2000,
                "Java & React Expert",
                2000,
                "Cloud & DevOps Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10">
            4+ years building secure, scalable applications. Specializing in{" "}
            <span className="text-primary font-medium">identity security</span>,{" "}
            <span className="text-accent font-medium">full-stack development</span>, and{" "}
            <span className="text-cyan font-medium">enterprise solutions</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-full font-medium hover:shadow-lg hover:shadow-primary/25 transition-shadow"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-full font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Get in Touch
            </motion.a>
          </div>

          <div className="flex items-center justify-center gap-6">
            {[
              { icon: FiGithub, href: "https://github.com/bhargavdharan", label: "GitHub" },
              { icon: FiLinkedin, href: "https://www.linkedin.com/in/dharankumarbera/?skipRedirect=true", label: "LinkedIn" },
              { icon: FiMail, href: "mailto:bhargavdharan20@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-slate-400 dark:text-slate-500"
          >
            <FiArrowDown size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

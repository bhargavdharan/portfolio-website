"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageCircle, FiX } from "react-icons/fi";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 p-4 w-64"
              >
                <p className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                  Let&apos;s work together!
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                  I&apos;m available for freelance projects and consulting.
                </p>
                <a
                  href="#contact"
                  onClick={() => setExpanded(false)}
                  className="block w-full text-center px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-full text-sm font-medium hover:shadow-lg transition-shadow"
                >
                  Start a Project
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setExpanded(!expanded)}
            className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 flex items-center justify-center"
            aria-label="Contact me"
          >
            {expanded ? <FiX size={24} /> : <FiMessageCircle size={24} />}
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

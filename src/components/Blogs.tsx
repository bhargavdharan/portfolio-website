"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiBookOpen } from "react-icons/fi";
import { blogs } from "@/data/blogs";
import SectionHeading from "./SectionHeading";

export default function Blogs() {
  return (
    <section
      id="blogs"
      className="section-padding bg-slate-50 dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Latest Articles"
          subtitle="Thoughts and insights on identity security, programming, and emerging tech from my Medium blog"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {blogs.map((blog, i) => (
            <motion.a
              key={blog.title}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group flex flex-col sm:flex-row gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Thumbnail */}
              <div className="sm:w-40 h-40 sm:h-28 shrink-0 rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                {blog.image ? (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <FiBookOpen className="w-8 h-8 text-primary/50" />
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-primary/10 text-primary rounded text-xs font-medium">
                    {blog.category}
                  </span>
                  <span className="text-xs text-slate-400 dark:text-slate-500">
                    {blog.pubDate}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {blog.title}
                </h3>
                <div className="flex items-center gap-1 text-sm text-primary font-medium">
                  Read on Medium
                  <FiExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href="https://medium.com/@bhargavdharan20"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border border-primary text-primary dark:text-primary rounded-full font-medium hover:bg-primary/10 transition-colors"
          >
            <FiBookOpen size={18} />
            View All Articles on Medium
          </a>
        </motion.div>
      </div>
    </section>
  );
}

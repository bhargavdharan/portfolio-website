"use client";

import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";

const socialLinks = [
  { icon: FiGithub, href: "https://github.com/bhargavdharan", label: "GitHub" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/dharankumarbera/?skipRedirect=true", label: "LinkedIn" },
  { icon: FiMail, href: "mailto:bhargavdharan20@gmail.com", label: "Email" },
];

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div>
            <a href="#home" className="text-2xl font-bold gradient-text">
              &lt;DK /&gt;
            </a>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Full Stack Developer & Identity Security Specialist
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social links */}
          <div className="flex justify-end gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1">
            &copy; {new Date().getFullYear()} Dharan Kumar Bera. Built with{" "}
            <FiHeart className="w-4 h-4 text-red-500 inline" /> using Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}

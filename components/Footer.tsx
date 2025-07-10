'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram, Mail, ArrowUp } from "lucide-react";

const socialLinks = [
  { 
    name: "GitHub", 
    href: "https://github.com/wisdomnova", 
    icon: Github,
    color: "hover:text-gray-900"
  },
  { 
    name: "LinkedIn", 
    href: "https://linkedin.com/in/wisdomdivine", 
    icon: Linkedin,
    color: "hover:text-blue-600"
  },
  { 
    name: "Twitter", 
    href: "https://twitter.com/wisdomdivine", 
    icon: Twitter,
    color: "hover:text-blue-400"
  },
  { 
    name: "Instagram", 
    href: "https://instagram.com/wisdomdivine", 
    icon: Instagram,
    color: "hover:text-pink-500"
  },
  { 
    name: "Email", 
    href: "mailto:wisdom@example.com", 
    icon: Mail,
    color: "hover:text-emerald-600"
  }
];

const footerLinks = [
  {
    title: "Work",
    links: [
      { name: "Projects", href: "/projects" },
      { name: "About", href: "/about" },
      { name: "GitHub", href: "https://github.com/wisdomnova" }
    ]
  },
  {
    title: "Content",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" }
    ]
  }
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <Link href="/" className="flex items-center gap-3 group mb-6">
                <div className="w-10 h-10 relative overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="/logo.png"
                    alt="Wisdom Divine Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    Wisdom Divine
                  </h3>
                  <p className="text-sm text-gray-500 -mt-1">Full-Stack Developer</p>
                </div>
              </Link>
              
              <p className="text-gray-600 leading-relaxed mb-6 max-w-md">
                Passionate full-stack developer crafting exceptional digital experiences. 
                Specializing in web applications, mobile apps, and backend systems.
              </p>

              {/* Social links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      className={`p-3 bg-white border border-gray-200 rounded-xl text-gray-500 ${social.color} transition-all duration-300 hover:scale-105 hover:shadow-md`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                    >
                      <Icon size={18} />
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Footer links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h4 className="text-gray-900 font-semibold mb-4 text-lg">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                      target={link.href.startsWith('http') ? "_blank" : undefined}
                      rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Wisdom Divine. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <Link href="/privacy" className="text-gray-500 hover:text-gray-900 transition-colors">
                  Privacy
                </Link>
                <Link href="/terms" className="text-gray-500 hover:text-gray-900 transition-colors">
                  Terms
                </Link>
              </div>
            </div>
 
            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="text-sm font-medium">Back to Top</span>
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
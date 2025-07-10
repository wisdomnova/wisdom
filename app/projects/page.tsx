'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, ArrowUpRight, Calendar, Users, Zap, Smartphone, Globe, Chrome, Monitor } from "lucide-react";
import React from "react";

const projects = [
  {
    id: "kazamarka",
    title: "Kazamarka",
    subtitle: "E-commerce Mobile App",
    description: "E-commerce mobile app for men's and women's clothing, serving Jordan and Saudi Arabia markets.",
    longDescription: "Kazamarka is a full-featured e-commerce mobile application built with React Native. It serves the Jordan and Saudi Arabia clothing markets with secure payments via Stripe, real-time inventory management, and a seamless shopping experience.",
    href: "/projects/kazamarka",
    github: "https://github.com/wisdomnova/Kazamarka",
    tech: ["React Native", "TypeScript", "Firebase", "Stripe", "Axios"],
    icon: Smartphone,
    status: "Live",
    category: "Mobile App",
    timeline: "4 months",
    team: "Solo Developer",
    impact: "Active in 2 countries",
    featured: true,
    year: "2024"
  },
  {
    id: "imdev",
    title: "IMdev Sierra Leone",
    subtitle: "Media Organization Website",
    description: "Media development organization website promoting ethical journalism and human rights across Sierra Leone.",
    longDescription: "Built for The Initiatives for Media Development (IMdev), this website serves as a digital platform for promoting ethical journalism and human rights advocacy across all 16 districts of Sierra Leone, reaching 3.1 million people weekly.",
    href: "/projects/imdev",
    github: "https://github.com/wisdomnova/Imdev",
    live: "https://www.imdevsl.org",
    tech: ["JavaScript", "HTML/CSS", "MySQL", "Google Analytics"],
    icon: Globe,
    status: "Live",
    category: "Website",
    timeline: "3 months",
    team: "Solo Developer",
    impact: "3.1M weekly reach",
    featured: true,
    year: "2023"
  },
  {
    id: "beeseek",
    title: "BeeSeek",
    subtitle: "Service Marketplace Platform",
    description: "Upcoming service marketplace platform focused on connecting trusted service providers with customers.",
    longDescription: "BeeSeek is transforming the service marketplace landscape in West Africa by connecting trusted service providers with customers. Built with modern technologies and focused on digitalizinig door-to-door services across Nigeria and beyond.",
    href: "/projects/beeseek",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    icon: Globe,
    status: "Coming Soon",
    category: "Web App",
    timeline: "6 months",
    team: "Founder",
    impact: "West Africa focus",
    featured: true,
    year: "2024"
  },
  {
    id: "conneer",
    title: "Conneer",
    subtitle: "Professional Networking Platform",
    description: "Professional networking web application connecting industry professionals and opportunities.",
    longDescription: "Conneer is a comprehensive professional networking platform built with Vue.js that connects industry professionals with opportunities. Features include profile management, job matching, and professional networking tools.",
    href: "/projects/conneer",
    live: "https://conneer.com",
    tech: ["Vue.js", "JavaScript", "PostgreSQL", "CSS"],
    icon: Globe,
    status: "Live",
    category: "Web App",
    timeline: "5 months",
    team: "Contract Developer",
    impact: "Professional network",
    featured: false,
    year: "2023"
  },
  {
    id: "conneer-extension",
    title: "Conneer Extension",
    subtitle: "Chrome Extension",
    description: "Chrome extension companion for the Conneer platform, enhancing professional networking capabilities.",
    longDescription: "A powerful Chrome extension that integrates with the Conneer platform to provide seamless professional networking features directly in the browser, including profile quick-view and connection management.",
    href: "/projects/conneer-extension",
    tech: ["JavaScript", "Chrome APIs", "HTML/CSS"],
    icon: Chrome,
    status: "Live",
    category: "Extension",
    timeline: "2 months",
    team: "Solo Developer",
    impact: "Enhanced networking",
    featured: false,
    year: "2023"
  },
  {
    id: "kazamarka-admin",
    title: "Kazamarka Admin",
    subtitle: "Admin Dashboard App",
    description: "Administrative dashboard for managing the Kazamarka e-commerce platform, inventory, and orders.",
    longDescription: "A comprehensive admin dashboard built to manage the Kazamarka e-commerce platform. Features include inventory management, order processing, analytics, and customer management tools.",
    href: "/projects/kazamarka-admin",
    tech: ["React Native", "TypeScript", "Firebase"],
    icon: Monitor,
    status: "Live",
    category: "Mobile App",
    timeline: "2 months",
    team: "Solo Developer",
    impact: "Platform management",
    featured: false,
    year: "2024"
  },
  {
    id: "soco-mobile",
    title: "Soco Mobile App",
    subtitle: "Social Commerce Platform",
    description: "Mobile application for social commerce, connecting users through shared shopping experiences.",
    longDescription: "Soco is a social commerce mobile application that revolutionizes shopping by connecting users through shared experiences, recommendations, and social shopping features.",
    href: "/projects/soco",
    tech: ["React Native", "Node.js", "MongoDB"],
    icon: Smartphone,
    status: "Development",
    category: "Mobile App",
    timeline: "4 months",
    team: "Solo Developer",
    impact: "Social commerce",
    featured: false,
    year: "2024"
  },
  {
    id: "nspire-mobile",
    title: "Nspire Mobile App",
    subtitle: "Inspiration & Productivity App",
    description: "Mobile application focused on inspiration and productivity, helping users achieve their goals.",
    longDescription: "Nspire is a mobile application designed to inspire and boost productivity. It combines motivational content with productivity tools to help users achieve their personal and professional goals.",
    href: "/projects/nspire",
    tech: ["React Native", "Firebase", "TypeScript"],
    icon: Smartphone,
    status: "Development",
    category: "Mobile App",
    timeline: "3 months",
    team: "Solo Developer",
    impact: "Personal development",
    featured: false,
    year: "2024"
  },
  {
    id: "webinar-slides-extension",
    title: "Webinar Slides Extension",
    subtitle: "Chrome Extension",
    description: "Chrome extension for enhancing webinar presentations with interactive slide management.",
    longDescription: "A Chrome extension that enhances webinar experiences by providing interactive slide management, note-taking, and engagement features for both presenters and attendees.",
    href: "/projects/webinar-slides",
    tech: ["JavaScript", "Chrome APIs", "HTML/CSS"],
    icon: Chrome,
    status: "Live",
    category: "Extension",
    timeline: "1 month",
    team: "Solo Developer",
    impact: "Webinar enhancement",
    featured: false,
    year: "2023"
  },
  {
    id: "beeseek-agents",
    title: "BeeSeek Agents App",
    subtitle: "Service Provider Mobile App",
    description: "Mobile application for BeeSeek service providers to manage their services and customer interactions.",
    longDescription: "The BeeSeek Agents app is designed for service providers on the BeeSeek platform. It includes features for service management, customer communication, scheduling, and earnings tracking.",
    href: "/projects/beeseek-agents",
    tech: ["React Native", "TypeScript", "PostgreSQL"],
    icon: Smartphone,
    status: "Development",
    category: "Mobile App",
    timeline: "3 months",
    team: "Solo Developer",
    impact: "Service provider tools",
    featured: false,
    year: "2024"
  },
  {
    id: "safetybusters",
    title: "SafetyBusters Website",
    subtitle: "Safety Services Platform",
    description: "Website for safety services company providing comprehensive safety solutions and training.",
    longDescription: "SafetyBusters is a comprehensive website for a safety services company, featuring service listings, training programs, certification tracking, and safety resource management.",
    href: "/projects/safetybusters",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    icon: Globe,
    status: "Live",
    category: "Website",
    timeline: "2 months",
    team: "Solo Developer",
    impact: "Safety services",
    featured: false,
    year: "2024"
  },
  {
    id: "hdtoday-webview",
    title: "HDToday Webview",
    subtitle: "Media Streaming App",
    description: "Webview-based mobile application for media streaming with enhanced user experience.",
    longDescription: "HDToday Webview is a mobile application that provides an enhanced media streaming experience through a optimized webview interface with improved performance and user experience features.",
    href: "/projects/hdtoday",
    tech: ["React Native", "WebView", "JavaScript"],
    icon: Smartphone,
    status: "Live",
    category: "Mobile App",
    timeline: "1 month",
    team: "Solo Developer",
    impact: "Media streaming",
    featured: false,
    year: "2024"
  }
];

const categories = ["All", "Mobile App", "Website", "Web App", "Extension"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [filteredProjects, setFilteredProjects] = React.useState(projects);

  React.useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory]);

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Subtle background pattern */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, #000 2px, transparent 0), radial-gradient(circle at 75px 75px, #000 2px, transparent 0)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12 space-y-20">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-6"
          >
            Portfolio • {projects.length} Projects
          </motion.div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            My Projects &{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Work
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            A collection of mobile apps, websites, and digital solutions I've built for clients across Nigeria, 
            Jordan, Sierra Leone, and beyond. Each project represents a unique challenge and innovative solution.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.section>

        {/* Featured Projects */}
        <section>
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-gray-900">
            Featured Work
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                        <Icon size={24} className="text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-sm text-gray-500 font-medium">{project.subtitle}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      {project.live && (
                        <Link
                          href={project.live}
                          className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={16} />
                        </Link>
                      )}
                      {project.github && (
                        <Link
                          href={project.github}
                          className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={16} />
                        </Link>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.longDescription}
                  </p>

                  {/* Project Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                    <div className="text-center">
                      <Calendar size={16} className="text-blue-600 mx-auto mb-1" />
                      <div className="text-xs text-gray-500">{project.timeline}</div>
                    </div>
                    <div className="text-center">
                      <Users size={16} className="text-blue-600 mx-auto mb-1" />
                      <div className="text-xs text-gray-500">{project.team}</div>
                    </div>
                    <div className="text-center">
                      <Zap size={16} className="text-blue-600 mx-auto mb-1" />
                      <div className="text-xs text-gray-500">{project.impact}</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Live' 
                        ? 'bg-green-100 text-green-700'
                        : project.status === 'Coming Soon'
                        ? 'bg-orange-100 text-orange-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {project.status}
                    </span>
                    
                    {(project.live || project.github) && (
                      <Link
                        href={project.live || project.github || '#'}
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium group/link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                        <ArrowUpRight size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </Link>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* All Projects Grid */}
        <section>
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-gray-900">
            All Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center">
                        <Icon size={20} className="text-gray-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-blue-600 text-xs">{project.category}</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {project.live && (
                        <Link
                          href={project.live}
                          className="text-gray-400 hover:text-blue-600 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={14} />
                        </Link>
                      )}
                      {project.github && (
                        <Link
                          href={project.github}
                          className="text-gray-400 hover:text-gray-600 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={14} />
                        </Link>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-0.5 text-gray-500 text-xs">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Live'
                        ? 'bg-green-100 text-green-700'
                        : project.status === 'Coming Soon'
                        ? 'bg-orange-100 text-orange-700'
                        : project.status === 'Development'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-purple-100 text-purple-700'
                    }`}>
                      {project.status}
                    </span>
                    <span className="text-gray-500 text-xs">{project.year}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-8 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Have a project in mind?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            I'm always excited to work on new projects. Whether it's a mobile app, website, or custom solution, 
            let's discuss how we can bring your ideas to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start a Project
            <ArrowUpRight size={16} />
          </Link>
        </motion.section>
      </div>
    </div>
  );
}
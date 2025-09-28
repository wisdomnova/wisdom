'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, ArrowUpRight, Calendar, Users, Zap, Smartphone, Globe, Chrome, Monitor, Search, X, Plus, Eye } from "lucide-react";
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
    featured: true,
    year: "2023"
  },
  {
    id: "beeseek",
    title: "BeeSeek",
    subtitle: "Service Marketplace Platform",
    description: "Upcoming service marketplace platform focused on connecting trusted service providers with customers.",
    longDescription: "BeeSeek is transforming the service marketplace landscape in West Africa by connecting trusted service providers with customers. Built with modern technologies and focused on digitalizing door-to-door services across Nigeria and beyond.",
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
    id: "mhva",
    title: "MHVA (My Hero Virtual Assistant)",
    subtitle: "Virtual Assistant Platform",
    description: "Comprehensive virtual assistant platform connecting clients with professional VA services.",
    longDescription: "MHVA is a cutting-edge virtual assistant platform that bridges the gap between businesses and professional virtual assistants. Features include task management, communication tools, and performance analytics.",
    href: "/projects/mhva",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    icon: Globe,
    status: "Live",
    category: "Website",
    timeline: "4 months",
    team: "Lead Developer",
    impact: "VA marketplace",
    featured: true,
    year: "2024"
  },
  {
    id: "noisify",
    title: "Noisify",
    subtitle: "Audio Processing Platform",
    description: "Advanced audio processing and noise reduction platform from Noisify.se.",
    longDescription: "Noisify is an innovative audio processing platform that provides advanced noise reduction and audio enhancement capabilities. As a consultant, I contributed to the backend architecture and API development.",
    href: "/projects/noisify",
    live: "https://noisify.se",
    tech: ["Python", "FastAPI", "Audio Processing", "Docker"],
    icon: Globe,
    status: "Live",
    category: "Web App",
    timeline: "3 months",
    team: "Backend Consultant",
    impact: "Audio innovation",
    featured: false,
    year: "2024"
  },
  {
    id: "planwell",
    title: "Planwell",
    subtitle: "Project Planning Platform",
    description: "Comprehensive project planning and management platform from planwell.io.",
    longDescription: "Planwell is a sophisticated project planning platform that helps teams organize, track, and execute projects efficiently. As a backend consultant, I designed scalable APIs and database architecture.",
    href: "/projects/planwell",
    live: "https://planwell.io",
    tech: ["Node.js", "PostgreSQL", "Redis", "Microservices"],
    icon: Globe,
    status: "Live",
    category: "Web App",
    timeline: "5 months",
    team: "Backend Consultant",
    impact: "Project efficiency",
    featured: false,
    year: "2024"
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
  },
    {
    id: "leadflow",
    title: "Leadflow",
    subtitle: "Email Service Platform",
    description: "Advanced email service sender software for managing and automating email campaigns.",
    longDescription: "Leadflow is a sophisticated email service platform that enables businesses to create, manage, and automate their email marketing campaigns with powerful analytics and delivery optimization.",
    href: "/projects/leadflow",
    github: "https://github.com/wisdomnova/leadflow",
    live: "https://leadflow-five.vercel.app/",
    tech: ["Next.js", "Tailwind CSS", "PostgreSQL", "Email APIs"],
    icon: Globe,
    status: "Live",
    category: "Web App",
    timeline: "3 months",
    team: "Solo Developer",
    impact: "Email automation",
    featured: true,
    year: "2025"
  },
  {
    id: "velvet-signal",
    title: "Velvet Signal",
    subtitle: "VoIP Communication Platform",
    description: "Twilio-powered VoIP communication platform for seamless voice and messaging integration.",
    longDescription: "Velvet Signal leverages Twilio's powerful APIs to provide a comprehensive VoIP solution, enabling businesses to integrate voice calls and messaging capabilities into their applications.",
    href: "/projects/velvet-signal",
    github: "https://github.com/wisdomnova/velvet-signal",
    live: "https://velvet-signal.vercel.app/",
    tech: ["Next.js", "Tailwind CSS", "PostgreSQL", "Twilio API"],
    icon: Globe,
    status: "Live",
    category: "Web App",
    timeline: "4 months",
    team: "Solo Developer",
    impact: "VoIP integration",
    featured: true,
    year: "2025"
  },
  {
    id: "tractrac",
    title: "Tractrac Plus",
    subtitle: "Contributor Role",
    description: "On-site contribution to Tractrac's platform development in Abuja.",
    longDescription: "Contributed to the development and enhancement of Tractrac's platform, working on-site in Abuja to implement new features and improve existing functionality.",
    href: "https://tractrac.co/",
    live: "https://tractrac.co/",
    tech: ["Next.js", "Tailwind CSS", "PostgreSQL"],
    icon: Globe,
    status: "Live",
    category: "Web App",
    timeline: "Ongoing",
    team: "Contributor",
    impact: "Platform enhancement",
    featured: false,
    year: "2025"
  },
  {
    id: "twilio-demo",
    title: "Twilio Integration Demo",
    subtitle: "VoIP & SMS Demo",
    description: "Comprehensive demonstration of Twilio's VoIP, phone search, and SMS capabilities.",
    longDescription: "A functional demo showcasing Twilio's capabilities including VoIP calling, phone number search functionality, and SMS integration, serving as a proof of concept for communication features.",
    href: "/projects/twilio-demo",
    github: "https://github.com/wisdomnova/twilio-demo",
    tech: ["Next.js", "Tailwind CSS", "PostgreSQL", "Twilio API"],
    icon: Globe,
    status: "Live",
    category: "Web App",
    timeline: "2 months",
    team: "Solo Developer",
    impact: "Communication demo",
    featured: false,
    year: "2025"
  }
];

const categories = ["All", "Mobile App", "Website", "Web App", "Extension"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [filteredProjects, setFilteredProjects] = React.useState(projects);
  const [searchQuery, setSearchQuery] = React.useState("");

  React.useEffect(() => {
    let filtered = projects;
    
    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tech.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase())) ||
        project.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredProjects(filtered);
  }, [selectedCategory, searchQuery]);

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="min-h-screen bg-white pt-24 relative overflow-hidden">
      {/* Enhanced animated background - same as about page */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-400/15 to-purple-400/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-float-delay"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-br from-emerald-400/15 to-blue-400/15 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl animate-bounce-slow"></div>
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(180deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-15 animate-float-particle-${i % 3}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
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
            className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-full text-blue-700 text-sm font-medium mb-6 hover-glow"
          >
            Portfolio • {projects.length} Projects
          </motion.div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            My Projects &{" "}
            <span className="gradient-text-rainbow">
              Work
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            A collection of mobile apps, websites, and digital solutions I've built for clients across Nigeria, 
            Jordan, Sierra Leone, and beyond. Each project represents a unique challenge and innovative solution.
          </p>

          {/* Enhanced Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative max-w-md mx-auto mb-8"
          >
            <div className="relative">
              <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects, technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-4 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 hover-scale ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white/80 backdrop-blur-sm text-gray-600 hover:text-gray-900 hover:bg-white/90 border border-gray-200/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Results Counter */}
          {searchQuery && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mb-8"
            >
              <p className="text-gray-600">
                Found <span className="font-semibold text-blue-600">{filteredProjects.length}</span> project{filteredProjects.length !== 1 ? 's' : ''} 
                {searchQuery && ` matching "${searchQuery}"`}
              </p>
            </motion.div>
          )}
        </motion.section>

        {/* Featured Projects */}
        {!searchQuery && (
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
                    className="group bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:shadow-2xl hover:bg-white transition-all duration-500 hover-glow overflow-hidden relative"
                  >
                    {/* Floating particles */}
                    <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 animate-float-particle-0 transition-opacity duration-300"></div>
                    
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center border border-blue-100 group-hover:scale-110 transition-transform duration-300">
                          <Icon size={24} className="text-blue-600 group-hover:text-purple-600 transition-colors duration-300" />
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
                            className="p-2 bg-gray-100/80 backdrop-blur-sm text-gray-600 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors hover-scale"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink size={16} />
                          </Link>
                        )}
                        {project.github && (
                          <Link
                            href={project.github}
                            className="p-2 bg-gray-100/80 backdrop-blur-sm text-gray-600 rounded-lg hover:bg-gray-200/80 transition-colors hover-scale"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github size={16} />
                          </Link>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {project.longDescription}
                    </p>

                    {/* Project Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gradient-to-r from-gray-50/80 to-blue-50/80 backdrop-blur-sm rounded-xl">
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
                          className="px-3 py-1 bg-gradient-to-r from-gray-100/80 to-gray-50/80 backdrop-blur-sm text-gray-700 text-sm rounded-lg font-medium border border-gray-200/50 hover-scale transition-all duration-200 group-hover:from-blue-50/80 group-hover:to-purple-50/80 group-hover:text-blue-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-300 ${
                        project.status === 'Live' 
                          ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200'
                          : project.status === 'Coming Soon'
                          ? 'bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-700 border-orange-200'
                          : 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200'
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
        )}

        {/* All Projects Grid */}
        <section>
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-gray-900">
            {searchQuery ? 'Search Results' : 'All Projects'}
          </h2>
          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-500 text-lg">No projects found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          ) : (
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
                    className="group p-6 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-xl hover:shadow-lg hover:bg-white/95 transition-all duration-300 hover-scale relative overflow-hidden"
                  >
                    {/* Subtle hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 to-purple-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg flex items-center justify-center border border-gray-200 group-hover:scale-110 transition-transform duration-300">
                            <Icon size={20} className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
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
                              className="text-gray-400 hover:text-blue-600 transition-colors hover-scale"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink size={14} />
                            </Link>
                          )}
                          {project.github && (
                            <Link
                              href={project.github}
                              className="text-gray-400 hover:text-gray-600 transition-colors hover-scale"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github size={14} />
                            </Link>
                          )}
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 bg-gray-100/80 backdrop-blur-sm text-gray-600 text-xs rounded font-medium group-hover:bg-blue-50/80 group-hover:text-blue-600 transition-all duration-200"
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
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </section>

        {/* Additional Projects Teaser */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center relative"
        >
          <div className="relative p-8 bg-gradient-to-r from-gray-50/80 via-blue-50/80 to-purple-50/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl overflow-hidden group hover:shadow-lg transition-all duration-300">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 to-purple-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Floating particles */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-30 animate-float-particle-0"></div>
            <div className="absolute bottom-4 left-4 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-20 animate-float-particle-1 rotate-45"></div>
            
            <div className="relative">              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                + Additional Projects
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
                These are just some highlights from my portfolio. I've worked on many more projects including 
                internal tools, client prototypes, open-source contributions, and experimental applications 
                across various industries and technologies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/90 text-gray-900 rounded-xl font-semibold border border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300 magnetic backdrop-blur-sm"
                >
                  <Eye size={18} />
                  <span>Discuss More Projects</span>
                  <ArrowUpRight size={18} />
                </Link>
                
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>5+ Mobile Apps</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>10+ Websites</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>5+ Extensions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
 
        {/* Enhanced CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center relative"
        >
          {/* Multi-layered background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/8 via-purple-500/8 to-emerald-500/8 rounded-3xl"></div>
          <div className="absolute inset-0 bg-white/70 backdrop-blur-sm rounded-3xl border border-white/40"></div>
          
          <div className="relative p-12 rounded-3xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Have a project in mind?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              I'm always excited to work on new projects. Whether it's a mobile app, website, or custom solution, 
              let's discuss how we can bring your ideas to life with cutting-edge technology.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl magnetic"
            >
              Start a Project
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
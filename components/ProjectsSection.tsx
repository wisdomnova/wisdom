'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Smartphone, Globe, Chrome, Eye } from "lucide-react";

const projects = [
  {
    title: "Kazamarka",
    description: "E-commerce mobile app for men's and women's clothing, serving Jordan and Saudi Arabia markets.",
    tech: ["React Native", "TypeScript", "Firebase", "Stripe"],
    github: "https://github.com/wisdomnova/Kazamarka",
    type: "Mobile App",
    icon: Smartphone,
    status: "Live",  
    featured: true
  },
  {
    title: "IMdev Sierra Leone",
    description: "Media development organization website promoting ethical journalism and human rights across Sierra Leone.",
    tech: ["JavaScript", "HTML/CSS", "MySQL", "Google Analytics"],
    github: "https://github.com/wisdomnova/Imdev",
    live: "https://www.imdevsl.org",
    type: "Website",
    icon: Globe,
    status: "Live",
    featured: true
  },
  {
    title: "Conneer",
    description: "Professional networking web application connecting industry professionals and opportunities.",
    tech: ["Vue.js", "JavaScript", "PostgreSQL", "CSS"],
    live: "https://conneer.com",
    type: "Web App",
    icon: Globe,
    status: "Live",
    featured: false
  },
  {
    title: "Conneer Extension",
    description: "Chrome extension companion for the Conneer platform, enhancing professional networking capabilities.",
    tech: ["JavaScript", "Chrome APIs", "HTML/CSS"],
    type: "Extension",
    icon: Chrome,
    status: "Live",
    featured: false
  },
  {
    title: "BeeSeek",
    description: "Upcoming service marketplace platform focused on connecting trusted service providers with customers.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    type: "Web App",
    icon: Globe,
    status: "Coming Soon",
    featured: false
  } 
];
 
export default function ProjectsSection() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section className="container mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
          Featured Projects
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          A selection of projects showcasing my expertise in web and mobile development
        </p>
      </motion.div>

      {/* Featured Projects */}
      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        {featuredProjects.map((project, index) => {
          const Icon = project.icon;
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:shadow-xl hover:bg-white transition-all duration-300 hover-glow"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center border border-blue-100">
                    <Icon size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-500 font-medium">{project.type}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  {project.live && (
                    <Link
                      href={project.live}
                      className="p-2 bg-gray-100/80 text-gray-600 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors hover-scale"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                    </Link>
                  )}
                  {project.github && (
                    <Link
                      href={project.github}
                      className="p-2 bg-gray-100/80 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors hover-scale"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                    </Link>
                  )}
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 text-sm rounded-lg font-medium border border-gray-200/50 hover-scale"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
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

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">More Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-xl p-6 hover:shadow-lg hover:bg-white transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg flex items-center justify-center border border-gray-200">
                      <Icon size={20} className="text-gray-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h4>
                      <span className="text-xs text-gray-500">{project.type}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-gray-100/80 text-gray-600 text-xs rounded font-medium border border-gray-200/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 2 && (
                      <span className="px-2 py-0.5 text-gray-500 text-xs">
                        +{project.tech.length - 2}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${
                      project.status === 'Live' 
                        ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200'
                        : project.status === 'Coming Soon'
                        ? 'bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-700 border-orange-200'
                        : 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200'
                    }`}>
                      {project.status}
                    </span>
                    
                    {(project.live || project.github) && (
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
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

      {/* View All Projects CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="p-6 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-xl hover:shadow-lg transition-all duration-300 inline-block">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Want to see more of my work?
          </h3>
          <p className="text-gray-600 mb-4 max-w-md">
            These are just a few highlights. Check out my complete portfolio with detailed case studies.
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover-glow"
          >
            <Eye size={16} />
            View All Projects
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </motion.div>

      {/* Contact CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center relative"
      >
        {/* Background with subtle gradient and glass effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-emerald-500/5 rounded-2xl"></div>
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/20"></div>
        
        <div className="relative p-8 rounded-2xl">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-blue-200">
            <ArrowUpRight size={24} className="text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to start your project?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            I'm available for new projects and collaborations. Let's discuss how I can help bring your ideas to life with cutting-edge technology and exceptional user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl magnetic"
            >
              Get In Touch
              <ArrowUpRight size={16} />
            </Link>
            <Link
              href="https://calendly.com/wisdomdivine3d"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/80 text-gray-900 rounded-xl font-semibold border border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300 magnetic"
            >
              Schedule a Call
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Smartphone, Globe, Chrome } from "lucide-react";

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
                    <span className="text-sm text-gray-500 font-medium">{project.type}</span>
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
                {project.description}
              </p>

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

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">More Projects</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {otherProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center">
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
                        className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded font-medium"
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
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Live' 
                        ? 'bg-green-100 text-green-700'
                        : project.status === 'Coming Soon'
                        ? 'bg-orange-100 text-orange-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {project.status}
                    </span>
                    
                    {(project.live || project.github) && (
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
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center p-8 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-2xl"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to start your project?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          I'm available for new projects and collaborations. Let's discuss how I can help bring your ideas to life.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Get In Touch
          <ArrowUpRight size={16} />
        </Link>
      </motion.div>
    </section>
  );
}
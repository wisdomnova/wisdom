'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download, Calendar, MapPin, Music, Code, Zap, Heart, Github, Linkedin, Mail } from "lucide-react";

const skills = [
  { name: "React & Next.js", level: 95, category: "Frontend" },
  { name: "React Native", level: 90, category: "Mobile" },
  { name: "Node.js & Python", level: 88, category: "Backend" },
  { name: "TypeScript & JavaScript", level: 92, category: "Languages" },
  { name: "Database Design", level: 85, category: "Data" },
  { name: "API Development", level: 87, category: "Backend" }
];

const timeline = [
  {
    year: "2025 - Present",
    title: "Founder & Lead Developer",
    company: "BeeSeek",
    description: "Building service marketplace platform to digitalize door-to-door services in West Africa. Currently in development with beta launch planned for Q4 2025.",
    current: true
  },
  {
    year: "2025",
    title: "Software Engineer",
    company: "Shaprs HQ",
    description: "Building innovative digital solutions and leading development initiatives for cutting-edge projects.",
    current: true
  },
  {
    year: "2025",
    title: "Software Engineering Intern",
    company: "TRACTRAC",
    description: "Contributing to advanced tracking and analytics systems, gaining experience in enterprise-level development.",
    current: false
  },
  {
    year: "2024",
    title: "Full-Stack Developer",
    company: "Conneer Platform",
    description: "Developed professional networking platform and Chrome extension, focusing on user experience and scalability.",
    current: false
  },
  {
    year: "2023 - Present",
    title: "Lead Developer",
    company: "MHVA (My Hero VA)",
    description: "Leading development of virtual assistant platform, managing full-stack architecture and team coordination.",
    current: true
  },
  {
    year: "2023",
    title: "Web Developer",
    company: "IMDEV",
    description: "Built comprehensive media organization website promoting ethical journalism in Sierra Leone.",
    current: false
  },
  {
    year: "2022",
    title: "Mobile App Developer",
    company: "Kazamarka",
    description: "Developed cross-border e-commerce mobile application for Middle East markets with Stripe integration.",
    current: false
  }
];

const values = [
  {
    icon: Code,
    title: "Clean & Scalable",
    description: "Writing maintainable code that stands the test of time. Every line serves a purpose and follows best practices."
  },
  {
    icon: Zap,
    title: "Fast & Efficient",
    description: "Delivering projects on time without compromising quality. Optimizing for both performance and user experience."
  },
  {
    icon: Heart,
    title: "Impact-Driven",
    description: "Building solutions that make a real difference, especially for African markets and emerging economies."
  }
];

const socialLinks = [
  { icon: Github, href: "https://github.com/wisdomnova", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/wisdomdivine", label: "LinkedIn" },
  { icon: Mail, href: "mailto:wisdom@example.com", label: "Email" }
];

export default function AboutPage() {
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
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-6"
              >
                Full-Stack Developer & Digital Innovator
              </motion.div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Wisdom Divine
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
                A passionate developer with experience across multiple companies and projects, crafting digital solutions 
                that bridge technology and human needs. I specialize in building scalable web applications, mobile apps, 
                and backend systems for diverse markets.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Link 
                  href="/contact" 
                  className="group px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 justify-center"
                >
                  Let's Work Together
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
                
                <Link 
                  href="/projects"
                  className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-gray-900 hover:text-gray-900 transition-all duration-300 font-semibold flex items-center gap-2 justify-center"
                >
                  View My Work
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 justify-center lg:justify-start">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      className="p-3 bg-gray-100 text-gray-600 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </Link>
                  );
                })}
              </div>
            </div>

            <motion.div 
              className="flex-1 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-emerald-100 rounded-3xl opacity-60"></div>
                  <div className="relative w-full h-full rounded-3xl overflow-hidden border border-gray-200 shadow-2xl">
                    <Image
                      src="/profile.jpg"
                      alt="Wisdom Divine portrait"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-600 rounded-2xl opacity-80 rotate-12"></div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-600 rounded-2xl opacity-80 -rotate-12"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-gray-900">
            My Development Philosophy
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={24} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-50 -mx-6 px-6 py-20"
        >
          <div className="container mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-gray-900">
              Technical Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-900 font-semibold text-lg">{skill.name}</span>
                    <span className="text-blue-600 text-sm font-medium">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span className="text-xs text-gray-500 mt-1">{skill.category}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Timeline Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-gray-900">
            My Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex gap-6 pb-8"
              >
                {/* Timeline line */}
                {index !== timeline.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-full bg-gradient-to-b from-blue-400 to-purple-400 opacity-30"></div>
                )}
                
                {/* Timeline dot */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                  item.current 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600' 
                    : 'bg-white border-2 border-blue-600'
                }`}>
                  <div className={`w-3 h-3 rounded-full ${
                    item.current ? 'bg-white' : 'bg-blue-600'
                  }`}></div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-blue-600 font-semibold text-sm">{item.year}</span>
                    {item.current && (
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-blue-600 font-medium mb-2">{item.company}</p>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
            
            {/* Additional Experience Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center pt-8"
            >
              <p className="text-gray-500 text-sm">
                + Additional projects and collaborations across various companies and startups
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Personal Touch */} 
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center p-8 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-2xl"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Beyond the Code</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              When I'm not building digital solutions, I'm exploring the intersection of technology and social impact, 
              particularly focusing on how digital transformation can drive economic growth in Africa. 
              I believe technology should serve humanity and create opportunities for everyone.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Music size={16} className="text-blue-600" />
                <span>Music & Code</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-blue-600" />
                <span>Building for Africa</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-blue-600" />
                <span>Available for Projects</span>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
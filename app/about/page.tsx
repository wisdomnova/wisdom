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
  { icon: Linkedin, href: "https://www.linkedin.com/in/wisdom-divine-d-85b234237", label: "LinkedIn" },
  { icon: Mail, href: "mailto:wisdomdivine3d@gmail.com", label: "Email" }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-24 relative overflow-hidden">
      {/* Dynamic animated background - same as homepage */}
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

      {/* Color-changing accent lines */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x opacity-50"></div>
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 animate-gradient-x opacity-50"></div>

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
                className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-full text-blue-700 text-sm font-medium mb-6 hover-glow"
              >
                Full-Stack Developer & Digital Innovator
              </motion.div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                Hi, I'm{" "}
                <span className="gradient-text-rainbow">
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
                  className="group px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 justify-center magnetic"
                >
                  Let's Work Together
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
                
                <Link 
                  href="/projects"
                  className="px-8 py-4 border-2 border-gray-300/50 text-gray-700 rounded-xl hover:border-gray-900 hover:text-gray-900 transition-all duration-300 font-semibold flex items-center gap-2 justify-center bg-white/80 backdrop-blur-sm hover-scale"
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
                      className="p-3 bg-white/80 backdrop-blur-sm text-gray-600 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 border border-gray-200/50 hover-scale"
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
                {/* Animated gradient background with pulse effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/60 via-purple-100/60 to-emerald-100/60 rounded-3xl opacity-80 animate-pulse-glow"></div>
                
                {/* Profile image container with glass effect */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/50 shadow-2xl backdrop-blur-sm">
                  <Image
                    src="/profile.jpg"
                    alt="Wisdom Divine portrait"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
                {/* Animated decorative elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl opacity-80 rotate-12 animate-float hover-rotate"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl opacity-80 -rotate-12 animate-float-delay hover-rotate"></div>
                
                {/* Additional floating elements */}
                <div className="absolute top-1/4 -left-4 w-6 h-6 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full opacity-60 animate-bounce-slow"></div>
                <div className="absolute bottom-1/4 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg opacity-60 animate-float-slow rotate-45"></div>
              </div>

              {/* Floating particles around the image */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-30 animate-float-particle-${i % 3}`}
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                      animationDelay: `${Math.random() * 8}s`,
                    }}
                  />
                ))}
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
                  className="p-6 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl hover:shadow-lg transition-all duration-300 hover-glow hover:bg-white/90"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center mb-4 border border-blue-100">
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
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-50/80 to-blue-50/80 backdrop-blur-sm -mx-6 rounded-3xl"></div>
          <div className="relative container mx-auto py-20">
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
                  className="relative p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-white/50 hover-scale"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-900 font-semibold text-lg">{skill.name}</span>
                    <span className="text-blue-600 text-sm font-medium">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-200/50 rounded-full overflow-hidden backdrop-blur-sm">
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
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse-glow' 
                    : 'bg-white/80 backdrop-blur-sm border-2 border-blue-600'
                }`}>
                  <div className={`w-3 h-3 rounded-full ${
                    item.current ? 'bg-white' : 'bg-blue-600'
                  }`}></div>
                </div>

                <div className="flex-1 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-white/50 hover-scale">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-blue-600 font-semibold text-sm">{item.year}</span>
                    {item.current && (
                      <span className="px-2 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 text-xs rounded-full border border-green-200">
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
          className="text-center relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/60 to-purple-50/60 backdrop-blur-sm rounded-2xl"></div>
          <div className="relative p-8 border border-blue-100/50 rounded-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Beyond the Code</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                When I'm not building digital solutions, I'm exploring the intersection of technology and social impact, 
                particularly focusing on how digital transformation can drive economic growth in Africa. 
                I believe technology should serve humanity and create opportunities for everyone.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-gray-600">
                <div className="flex items-center gap-2 px-3 py-2 bg-white/70 backdrop-blur-sm rounded-lg border border-white/50 hover-scale">
                  <Music size={16} className="text-blue-600" />
                  <span>Music & Code</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-white/70 backdrop-blur-sm rounded-lg border border-white/50 hover-scale">
                  <MapPin size={16} className="text-blue-600" />
                  <span>Building for Africa</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-white/70 backdrop-blur-sm rounded-lg border border-white/50 hover-scale">
                  <Calendar size={16} className="text-blue-600" />
                  <span>Available for Projects</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section> 
      </div>
    </div>
  );
}
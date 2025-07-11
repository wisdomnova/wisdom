'use client';

import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogSection from "@/components/BlogSection";
import SkillsSection from "@/components/SkillsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import { motion, easeOut } from "framer-motion";

const sectionVariant = { 
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Dynamic animated background */}
      <div className="fixed inset-0 pointer-events-none"> 
        {/* Gradient orbs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-float-delay"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-blue-400/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-gradient-to-br from-yellow-400/15 to-orange-400/15 rounded-full blur-3xl animate-bounce-slow"></div>
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
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
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-float-particle-${i % 3}`}
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
      {/* <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x opacity-60"></div>
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 animate-gradient-x opacity-60"></div> */}

      <motion.div 
        variants={staggerContainer} 
        initial="hidden" 
        animate="show" 
        className="relative z-10 space-y-20 pt-24"
      >
        <motion.div variants={sectionVariant}>
          <Hero />
        </motion.div>

        <motion.div variants={sectionVariant} className="bg-gradient-to-r from-gray-50 to-blue-50/30 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/20"></div>
          <div className="relative">
            <AboutSection />
          </div>
        </motion.div>

        <motion.div variants={sectionVariant} className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-pink-50/30"></div>
          <div className="relative">
            <SkillsSection />
          </div>
        </motion.div>

        <motion.div variants={sectionVariant} className="bg-gradient-to-r from-emerald-50/30 to-blue-50/30 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/20 to-blue-100/20"></div>
          <div className="relative">
            <ProjectsSection />
          </div>
        </motion.div>

        <motion.div variants={sectionVariant} className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/30 to-orange-50/30"></div>
          <div className="relative">
            <TestimonialsSection />
          </div>
        </motion.div>

        <motion.div variants={sectionVariant} className="bg-gradient-to-r from-purple-50/30 to-pink-50/30 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 to-pink-100/20"></div>
          <div className="relative">
            <BlogSection />
          </div>
        </motion.div>

        <motion.div variants={sectionVariant} className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-emerald-50/30"></div>
          <div className="relative">
            <ContactSection />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
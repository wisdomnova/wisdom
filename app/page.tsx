'use client';

import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogSection from "@/components/BlogSection";
import SkillsSection from "@/components/SkillsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import { motion, easeOut } from "framer-motion"; // ✅ Import correct easing

const sectionVariant = { 
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut }, // ✅ Typed correctly
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
    <div className="min-h-screen bg-white">
      {/* Subtle background pattern */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #000 2px, transparent 0), radial-gradient(circle at 75px 75px, #000 2px, transparent 0)`,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <motion.div 
        variants={staggerContainer} 
        initial="hidden" 
        animate="show" 
        className="relative z-10 space-y-20 pt-24"
      >
        <motion.div variants={sectionVariant}>
          <Hero />
        </motion.div>

        <motion.div variants={sectionVariant} className="bg-gray-50">
          <AboutSection />
        </motion.div>

        <motion.div variants={sectionVariant}>
          <SkillsSection />
        </motion.div>

        <motion.div variants={sectionVariant} className="bg-gray-50">
          <ProjectsSection />
        </motion.div>

        <motion.div variants={sectionVariant}>
          <TestimonialsSection />
        </motion.div>

        <motion.div variants={sectionVariant} className="bg-gray-50">
          <BlogSection />
        </motion.div>

        <motion.div variants={sectionVariant}>
          <ContactSection />
        </motion.div>
      </motion.div>
    </div>
  );
}

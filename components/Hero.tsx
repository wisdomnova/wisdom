'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code, Smartphone, Server } from "lucide-react";

export default function Hero() {
  return (
    <section className="container mx-auto px-6 py-20 relative">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <motion.div 
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
        > 
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-emerald-200/50 rounded-full text-emerald-700 text-sm font-medium mb-6 hover-glow"
          >
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            Available for new projects
          </motion.div> 
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-gray-900 leading-tight">
            Hi, I'm{" "}
            <span className="gradient-text-rainbow">
              Wisdom Divine
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
            Full-stack developer crafting exceptional digital experiences. 
            From web applications to mobile solutions — I build products that matter.
          </p>

          {/* Specialties */}
          <div className="flex flex-wrap gap-6 mb-8 justify-center lg:justify-start">
            <div className="flex items-center gap-2 text-gray-700 px-3 py-2 bg-white/70 backdrop-blur-sm rounded-lg border border-white/50 hover-scale">
              <Code size={20} className="text-blue-600" />
              <span className="font-medium">Web Development</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 px-3 py-2 bg-white/70 backdrop-blur-sm rounded-lg border border-white/50 hover-scale">
              <Smartphone size={20} className="text-purple-600" />
              <span className="font-medium">Mobile Apps</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 px-3 py-2 bg-white/70 backdrop-blur-sm rounded-lg border border-white/50 hover-scale">
              <Server size={20} className="text-emerald-600" />
              <span className="font-medium">Backend Systems</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link 
              href="/projects" 
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl magnetic"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-gray-300/50 text-gray-700 rounded-xl hover:border-gray-900 hover:text-gray-900 transition-all duration-300 font-semibold bg-white/80 backdrop-blur-sm hover-scale"
            >
              Let's Talk
            </Link>
          </div>
        </motion.div>

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
    </section>
  );
}
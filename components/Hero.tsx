'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code, Smartphone, Server } from "lucide-react";

export default function Hero() {
  return (
    <section className="container mx-auto px-6 py-20">
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium mb-6"
          >
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            Available for new projects
          </motion.div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-gray-900 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Wisdom Divine
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
            Full-stack developer crafting exceptional digital experiences. 
            From web applications to mobile solutions — I build products that matter.
          </p>

          {/* Specialties */}
          <div className="flex flex-wrap gap-6 mb-8 justify-center lg:justify-start">
            <div className="flex items-center gap-2 text-gray-700">
              <Code size={20} className="text-blue-600" />
              <span className="font-medium">Web Development</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Smartphone size={20} className="text-purple-600" />
              <span className="font-medium">Mobile Apps</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Server size={20} className="text-emerald-600" />
              <span className="font-medium">Backend Systems</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link 
              href="/projects" 
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-gray-900 hover:text-gray-900 transition-all duration-300 font-semibold"
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
              {/* Subtle gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-emerald-100 rounded-3xl opacity-60"></div>
              
              {/* Profile image container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-gray-200 shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt="Wisdom Divine portrait"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-600 rounded-2xl opacity-80 rotate-12"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-600 rounded-2xl opacity-80 -rotate-12"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
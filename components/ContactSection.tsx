'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle, Users, Clock, Globe } from "lucide-react";

const workingPoints = [
  {
    icon: CheckCircle,
    title: "Quality Guaranteed",
    description: "Clean code, modern practices, thorough testing"
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Efficient development without compromising quality"
  },
  {
    icon: Users,
    title: "Collaborative Process",
    description: "Regular updates and your input throughout"
  },
  {
    icon: Globe,
    title: "Global Experience",
    description: "Serving clients across Nigeria, Jordan, Sierra Leone"
  }
];

export default function ContactSection() {
  return (
    <section className="container mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-6"
          >
            Ready to Start Your Project?
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-gray-900 leading-tight">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Whether you need a mobile app, web platform, or complete digital solution — 
            I'm here to turn your ideas into reality. Let's discuss your project and create something exceptional.
          </p>

          {/* Working Benefits */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {workingPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <Icon size={24} className="text-blue-600" />
                  </div>
                  <h3 className="text-gray-900 font-semibold mb-2 text-sm lg:text-base">{point.title}</h3>
                  <p className="text-gray-600 text-xs lg:text-sm">{point.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/projects"
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-gray-900 hover:text-gray-900 transition-all duration-300 font-semibold"
            >
              View My Work
            </Link>
          </motion.div>

          {/* Project Types */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              What Can I Build for You?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">📱 Mobile Apps</h4>
                <p className="text-gray-600 text-sm">React Native applications for iOS and Android</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">🌐 Web Applications</h4>
                <p className="text-gray-600 text-sm">Full-stack web apps with React, Next.js, and more</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">⚙️ Backend Systems</h4>
                <p className="text-gray-600 text-sm">APIs, databases, and server infrastructure</p>
              </div>
            </div>
          </motion.div>

          {/* Availability Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 flex items-center justify-center gap-3 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-600">Available for new projects</span>
            </div>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600">Typically responds within 24 hours</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
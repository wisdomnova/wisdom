'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle, Users, Clock, Globe, Smartphone, Monitor, Server, Calendar, Mail, ArrowUpRight } from "lucide-react";

const workingPoints = [
  {
    icon: CheckCircle,
    title: "Quality Guaranteed",
    description: "Clean code, modern practices, thorough testing",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50"
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Efficient development without compromising quality",
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: Users,
    title: "Collaborative Process",
    description: "Regular updates and your input throughout",
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    icon: Globe,
    title: "Global Experience",
    description: "Serving clients across Nigeria, Jordan, Sierra Leone",
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  }
];

const serviceTypes = [
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "React Native applications for iOS and Android",
    color: "text-blue-600",
    bgGradient: "from-blue-50 to-blue-100"
  },
  {
    icon: Monitor,
    title: "Web Applications", 
    description: "Full-stack web apps with React, Next.js, and more",
    color: "text-purple-600",
    bgGradient: "from-purple-50 to-purple-100"
  },
  {
    icon: Server,
    title: "Backend Systems",
    description: "APIs, databases, and server infrastructure",
    color: "text-emerald-600",
    bgGradient: "from-emerald-50 to-emerald-100"
  }
];

export default function ContactSection() {
  return (
    <section className="container mx-auto px-6 py-20 relative">
      {/* Floating decorative elements */}
      <div className="absolute top-16 right-12 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 left-16 w-4 h-4 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg opacity-15 animate-bounce-slow rotate-45"></div>
      <div className="absolute top-1/3 left-8 w-3 h-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-25 animate-float-delay"></div>

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
            className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-full text-blue-700 text-sm font-medium mb-6 hover-glow"
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse inline-block mr-2"></div>
            Ready to Start Your Project?
          </motion.div>

          {/* Keep original design for main heading */}
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

          {/* Enhanced Working Benefits */}
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
                  className="group text-center p-4 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl hover:shadow-lg hover:bg-white/90 transition-all duration-300 hover-scale relative"
                >
                  {/* Floating particle */}
                  <div className="absolute top-2 right-2 w-1 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 animate-float-particle-0 transition-opacity duration-300"></div>
                  
                  <div className={`w-16 h-16 ${point.bgColor}/80 backdrop-blur-sm rounded-2xl mx-auto mb-4 flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={24} className={`${point.color} group-hover:animate-pulse`} />
                  </div>
                  <h3 className="text-gray-900 font-semibold mb-2 text-sm lg:text-base group-hover:text-blue-600 transition-colors duration-300">{point.title}</h3>
                  <p className="text-gray-600 text-xs lg:text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{point.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl magnetic"
            >
              Start Your Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/projects"
              className="px-8 py-4 border-2 border-gray-300/50 text-gray-700 rounded-xl hover:border-gray-900 hover:text-gray-900 transition-all duration-300 font-semibold bg-white/80 backdrop-blur-sm hover-scale"
            >
              View My Work
            </Link>
          </motion.div>

          {/* Enhanced Project Types */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="relative p-8 bg-gradient-to-r from-blue-50/80 to-purple-50/80 backdrop-blur-sm border border-blue-100/50 rounded-2xl overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
            <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-30 animate-float-particle-0"></div>
            <div className="absolute bottom-4 left-4 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-20 animate-float-particle-1 rotate-45"></div>
            
            <div className="relative">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What Can I Build for You?
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                {serviceTypes.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + (index * 0.1) }}
                      viewport={{ once: true }}
                      className="group p-4 bg-white/70 backdrop-blur-sm border border-white/50 rounded-xl hover:shadow-lg hover:bg-white/90 transition-all duration-300 hover-scale"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${service.bgGradient} rounded-xl flex items-center justify-center mb-3 border border-white/50 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={20} className={`${service.color} group-hover:animate-pulse`} />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{service.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Enhanced Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
          >
            <Link
              href="mailto:wisdomdivine3d@gmail.com"
              className="group flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl hover:shadow-lg hover:bg-white/90 transition-all duration-300 hover-scale"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center border border-blue-100">
                <Mail size={18} className="text-blue-600 group-hover:text-purple-600 transition-colors duration-300" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Send Email</div>
                <div className="text-gray-600 text-sm">wisdomdivine3d@gmail.com</div>
              </div>
              <ArrowUpRight size={16} className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
            </Link>

            <Link
              href="https://calendly.com/wisdomdivine3d"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl hover:shadow-lg hover:bg-white/90 transition-all duration-300 hover-scale"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg flex items-center justify-center border border-emerald-100">
                <Calendar size={18} className="text-emerald-600 group-hover:text-blue-600 transition-colors duration-300" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">Schedule Call</div>
                <div className="text-gray-600 text-sm">Book a consultation</div>
              </div>
              <ArrowUpRight size={16} className="text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
            </Link>
          </motion.div>

          {/* Enhanced Availability Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            viewport={{ once: true }}
            className="mt-12 p-6 bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-xl inline-block"
          >
            <div className="flex items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-600 font-medium">Available for new projects</span>
              </div>
              <span className="text-gray-400">•</span>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-blue-600" />
                <span className="text-gray-600 font-medium">24h response time</span>
              </div>
              <span className="text-gray-400">•</span>
              <div className="flex items-center gap-2">
                <Globe size={14} className="text-emerald-600" />
                <span className="text-gray-600 font-medium">Global collaboration</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
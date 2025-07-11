'use client';

import { motion } from "framer-motion";
import { Award, Users, Coffee, MapPin } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "4+ Years Experience",
    description: "Building digital solutions across industries"
  },
  {
    icon: Users,
    title: "12+ Projects",
    description: "Delivered for startups and enterprises"
  },
  {
    icon: Coffee,
    title: "Full-Stack Focus",
    description: "From concept to deployment"
  },
  {
    icon: MapPin,
    title: "Global Collaboration",
    description: "Working with teams worldwide"
  }
];

export default function AboutSection() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}  
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            About Me
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              I'm <strong className="text-gray-900">Wisdom Divine</strong> — a passionate full-stack developer 
              who transforms ideas into powerful digital experiences. With expertise spanning frontend, 
              backend, and mobile development, I bring a holistic approach to every project.
            </p>
            <p>
              My journey in development has led me to master modern technologies like React, Next.js, 
              and React Native, while maintaining strong foundations in backend systems and database design. 
              I believe in writing clean, maintainable code that scales.
            </p>
            <p>
              Whether you need a responsive web application, a mobile app, or a complete digital platform, 
              I'm committed to delivering solutions that exceed expectations and drive real business value.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6"
        >
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={24} className="text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
'use client';

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Pappais",
    role: "Founder, Conneer",
    content: "Wisdom delivered exceptional work on both our web platform and Chrome extension. His technical expertise and attention to detail made the entire development process smooth and efficient.",
    project: "Conneer Platform & Extension"
  },
  {
    name: "Marina A",
    role: "Project Manager",
    content: "The backend architecture Wisdom designed for our site was robust and scalable. His understanding of complex systems and clean code implementation exceeded our expectations.",
    project: "Backend Development"
  },
  {
    name: "Yeanma Thompson",
    role: "Director, IMdev Sierra Leone",
    content: "Wisdom built our media organization website with professionalism and care. The site effectively serves our mission of promoting ethical journalism across Sierra Leone.",
    project: "IMdev Website"
  }
];

export default function TestimonialsSection() {
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
          Client Testimonials
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          What clients say about working with me
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-xl transition-all duration-300"
          >
            {/* Quote icon */}
            <div className="absolute top-6 right-6 w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
              <Quote size={16} className="text-blue-600" />
            </div>

            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="text-gray-900 font-semibold">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  <div className="text-blue-600 text-xs font-medium mt-1">
                    {testimonial.project}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Trust indicators */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">4+</div>
            <div className="text-gray-600 text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">12+</div>
            <div className="text-gray-600 text-sm">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">97%</div>
            <div className="text-gray-600 text-sm">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">24h</div>
            <div className="text-gray-600 text-sm">Response Time</div>
          </div>
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-2xl">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Ready to work together?
          </h3>
          <p className="text-gray-600 mb-4">
            Join these satisfied clients and let's build something amazing together.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Project
          </a>
        </div>
      </motion.div>
    </section>
  );
}
'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Calendar, Clock, Github, Linkedin, Twitter, Instagram, CheckCircle, AlertCircle } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Drop me a line anytime",
    value: "wisdomdivine3d@gmail.com",
    href: "mailto:wisdomdivine3d@gmail.com",
    color: "text-blue-600"
  },
  {
    icon: Calendar,
    title: "Schedule a Call",
    description: "Let's discuss your project",
    value: "Book a meeting",
    href: "https://calendly.com/wisdom-divine-d",
    color: "text-green-600"
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Working globally",
    value: "Nigeria & Remote",
    href: null,
    color: "text-purple-600"
  }
];

const socialLinks = [
  {
    icon: Github,
    name: "GitHub",
    href: "https://github.com/wisdomnova",
    username: "@wisdomnova"
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/wisdom-divine-d-85b234237",
    username: "/in/wisdom-divine-d-85b234237"
  },
  {
    icon: Twitter,
    name: "Twitter",
    href: "https://x.com/wisdom_divine_d",
    username: "@wisdom_divine_d"
  },
  {
    icon: Instagram,
    name: "Instagram",
    href: "https://www.instagram.com/wisdom_divine_d",
    username: "@wisdom_divine_d"
  }
];

export default function ContactPage() {
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    message: "" 
  });
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    }, 2000);
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Subtle background pattern */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, #000 2px, transparent 0), radial-gradient(circle at 75px 75px, #000 2px, transparent 0)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-6"
            >
              Let's Connect
            </motion.div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              Let's Build{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Something Great
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Whether you need a mobile app, web platform, or have an idea you'd like to discuss — 
              I'm here to help bring your vision to life. Let's talk about your project.
            </p>
          </motion.section>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors resize-none"
                    placeholder="Tell me about your project, what you need help with, timeline, budget, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full px-6 py-4 bg-gray-900 rounded-xl font-semibold text-white hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-700 bg-green-50 border border-green-200 rounded-xl p-4"
                  >
                    <CheckCircle size={16} />
                    <span>Message sent successfully! I'll get back to you within 24 hours.</span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-700 bg-red-50 border border-red-200 rounded-xl p-4"
                  >
                    <AlertCircle size={16} />
                    <span>Something went wrong. Please try again or email me directly.</span>
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Info & Social */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Contact Methods */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon;
                    const content = (
                      <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300">
                        <div className={`w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center ${method.color}`}>
                          <Icon size={20} />
                        </div>
                        <div>
                          <h3 className="text-gray-900 font-semibold">{method.title}</h3>
                          <p className="text-gray-600 text-sm mb-1">{method.description}</p>
                          <p className={`text-sm font-medium ${method.color}`}>{method.value}</p>
                        </div>
                      </div>
                    );

                    return method.href ? (
                      <a key={index} href={method.href} target="_blank" rel="noopener noreferrer">
                        {content}
                      </a>
                    ) : (
                      <div key={index}>{content}</div>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Connect Online</h3>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 group"
                      >
                        <Icon size={16} className="text-gray-600 group-hover:text-blue-600 transition-colors" />
                        <div>
                          <span className="text-gray-900 font-medium">{social.name}</span>
                          <span className="text-gray-500 text-sm ml-2">{social.username}</span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Availability */}
              <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-900 font-semibold">Available for Projects</span>
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  I'm currently accepting new projects. Typical response time is within 24 hours.
                </p>
                <div className="flex items-center gap-2 text-blue-600 text-sm">
                  <Clock size={14} />
                  <span>WAT Timezone (UTC+1)</span>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white border border-gray-200 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600 mb-1">24h</div>
                  <div className="text-gray-600 text-sm">Response Time</div>
                </div>
                <div className="text-center p-4 bg-white border border-gray-200 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600 mb-1">12+</div>
                  <div className="text-gray-600 text-sm">Projects Completed</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  question: "What's your typical project timeline?",
                  answer: "Project timelines vary based on scope. Simple mobile apps typically take 2-4 weeks, while complex platforms can take 2-4 months. I always provide realistic timelines upfront."
                },
                {
                  question: "Do you work with startups?",
                  answer: "Yes, I enjoy working with startups and growing businesses. I'm flexible with arrangements and understand the unique challenges early-stage companies face."
                },
                {
                  question: "What's your development process?",
                  answer: "I follow an iterative approach with regular check-ins and progress updates. You'll have visibility into development and can provide feedback throughout the process."
                },
                {
                  question: "Do you provide ongoing support?",
                  answer: "Yes, I offer post-launch support and maintenance. I believe in building lasting relationships and ensuring your product continues to perform well."
                }
              ].map((faq, index) => (
                <div key={index} className="p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300">
                  <h3 className="text-gray-900 font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
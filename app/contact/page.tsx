'use client';

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Calendar, Clock, Github, Linkedin, Twitter, Instagram, CheckCircle, AlertCircle, MessageSquare, Phone, Globe, Star, Zap, Users } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Drop me a line anytime",
    value: "wisdomdivine3d@gmail.com",
    href: "mailto:wisdomdivine3d@gmail.com",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    icon: Calendar,
    title: "Schedule a Call",
    description: "Let's discuss your project",
    value: "Book a meeting",
    href: "https://calendly.com/wisdom-divine-d",
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200"
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Working globally",
    value: "Nigeria & Remote",
    href: null,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200"
  } 
];

const socialLinks = [
  {
    icon: Github,
    name: "GitHub",
    href: "https://github.com/wisdomnova",
    username: "@wisdomnova",
    color: "hover:text-gray-900"
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/wisdom-divine-d-85b234237",
    username: "/in/wisdom-divine-d",
    color: "hover:text-blue-600"
  },
  {
    icon: Twitter,
    name: "Twitter",
    href: "https://x.com/wisdom_divine_d",
    username: "@wisdom_divine_d",
    color: "hover:text-blue-400"
  },
  {
    icon: Instagram,
    name: "Instagram",
    href: "https://www.instagram.com/wisdom_divine_d",
    username: "@wisdom_divine_d",
    color: "hover:text-pink-600"
  }
];

const faqs = [
  {
    question: "What's your typical project timeline?",
    answer: "Project timelines vary based on scope. Simple mobile apps typically take 2-4 weeks, while complex platforms can take 2-4 months. I always provide realistic timelines upfront and keep you updated throughout the process."
  },
  {
    question: "Do you work with startups and small businesses?",
    answer: "Absolutely! I enjoy working with startups and growing businesses. I'm flexible with arrangements and understand the unique challenges early-stage companies face. Let's discuss what works best for your budget and timeline."
  },
  {
    question: "What's your development process like?",
    answer: "I follow an iterative approach with regular check-ins and progress updates. You'll have full visibility into development and can provide feedback throughout the process. I believe in transparent communication and collaborative development."
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, I offer comprehensive post-launch support and maintenance packages. I believe in building lasting relationships and ensuring your product continues to perform well as your business grows."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize in React Native for mobile apps, Next.js for web platforms, Node.js for backends, and modern databases like PostgreSQL. I choose the right tech stack based on your specific needs and goals."
  },
  {
    question: "How do you handle project communication?",
    answer: "I provide regular updates via your preferred communication channel (email, Slack, WhatsApp). You'll receive weekly progress reports, and I'm always available for questions or quick calls when needed."
  }
];

// Predefined static particle positions to prevent hydration issues
const staticParticleData = [
  { left: 15.5, top: 25.3, delay: 2.1 },
  { left: 73.2, top: 45.8, delay: 5.7 },
  { left: 32.1, top: 78.9, delay: 1.4 },
  { left: 87.6, top: 12.7, delay: 8.2 },
  { left: 9.8, top: 65.4, delay: 3.9 },
  { left: 54.3, top: 89.1, delay: 6.3 },
  { left: 41.7, top: 35.6, delay: 0.8 },
  { left: 78.9, top: 58.2, delay: 7.1 },
  { left: 23.4, top: 14.5, delay: 4.6 },
  { left: 65.8, top: 82.3, delay: 2.9 },
  { left: 91.2, top: 39.7, delay: 9.4 },
  { left: 7.6, top: 71.8, delay: 1.7 }
];

export default function ContactPage() {
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    subject: "",
    message: "" 
  });
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    setStatus("loading");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      
      // Clear success message after 5 seconds
      setTimeout(() => setStatus(null), 5000);

    } catch (error) {
      console.error('Form submission error:', error);
      setStatus("error");
      
      // Clear error message after 5 seconds
      setTimeout(() => setStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-white pt-24 relative overflow-hidden">
      {/* Enhanced animated background - same as about page */}
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
        
        {/* Floating particles with static positions */}
        <div className="absolute inset-0">
          {staticParticleData.map((particle, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-15 animate-float-particle-${i % 3}`}
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12 space-y-20">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-full text-blue-700 text-sm font-medium mb-6 hover-glow"
          >
            <MessageSquare size={16} className="inline mr-2" />
            Let's Connect
          </motion.div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            Let's Build{" "}
            <span className="gradient-text-rainbow">
              Something Great
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Whether you need a mobile app, web platform, or have an idea you'd like to discuss — 
            I'm here to help bring your vision to life. Let's talk about your project.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full hover-glow">
              <Clock size={16} className="text-blue-600" />
              <span className="text-sm font-medium text-gray-700">24h Response Time</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full hover-glow">
              <Users size={16} className="text-green-600" />
              <span className="text-sm font-medium text-gray-700">7+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full hover-glow">
              <Globe size={16} className="text-purple-600" />
              <span className="text-sm font-medium text-gray-700">Global Remote Work</span>
            </div>
          </div>
        </motion.section>

        {/* Contact Methods */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            Choose Your <span className="gradient-text">Preferred Way</span>
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Pick the communication method that works best for you. I'm here to help however you'd like to connect.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              const content = (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative p-8 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl hover:shadow-2xl hover:bg-white transition-all duration-500 hover-glow overflow-hidden cursor-pointer min-h-[280px] flex flex-col justify-between"
                >
                  {/* Floating particles */}
                  <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 animate-float-particle-0 transition-opacity duration-300"></div>
                  
                  <div className="flex-1 flex flex-col items-center text-center">
                    <div className={`w-16 h-16 ${method.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 border ${method.borderColor} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={24} className={`${method.color} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed flex-1">
                      {method.description}
                    </p>
                  </div>
                  
                  <div className="mt-auto">
                    <p className={`font-semibold ${method.color} text-lg break-all text-center px-2`}>
                      {method.value}
                    </p>
                  </div>
                </motion.div>
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
        </motion.section>

        {/* Contact Form */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              Send Me a <span className="gradient-text">Message</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tell me about your project, timeline, budget, or any questions you have. 
              I'll get back to you within 24 hours with a detailed response.
            </p>
          </div>

          <div className="relative p-8 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl hover-glow overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 to-purple-500/3 opacity-50"></div>
            
            {/* Floating particles */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-30 animate-float-particle-0"></div>
            <div className="absolute bottom-4 left-4 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-20 animate-float-particle-1 rotate-45"></div>
            
            <form onSubmit={handleSubmit} className="relative space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
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
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 hover-glow disabled:opacity-50 disabled:cursor-not-allowed"
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
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 hover-glow disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 hover-glow disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Mobile App Development Project"
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
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none hover-glow disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tell me about your project: What kind of app/website do you need? What's your timeline? What's your budget range? Any specific features or requirements?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gray-900 rounded-xl font-semibold text-white hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 magnetic"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 text-green-700 bg-green-50/80 backdrop-blur-sm border border-green-200/50 rounded-xl p-4"
                >
                  <CheckCircle size={20} />
                  <div>
                    <p className="font-semibold">Message sent successfully!</p>
                    <p className="text-sm">I'll get back to you within 24 hours with a detailed response.</p>
                  </div>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 text-red-700 bg-red-50/80 backdrop-blur-sm border border-red-200/50 rounded-xl p-4"
                >
                  <AlertCircle size={20} />
                  <div>
                    <p className="font-semibold">Something went wrong</p>
                    <p className="text-sm">Please try again or email me directly at wisdomdivine3d@gmail.com</p>
                  </div>
                </motion.div>
              )}
            </form>
          </div>
        </motion.section>

        {/* Social Links & Availability */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Social Links */}
          <motion.section
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl hover-glow relative overflow-hidden"
          >
            {/* Floating particles */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-30 animate-float-particle-0"></div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-6 relative">
              Connect on <span className="gradient-text">Social</span>
            </h3>
            <p className="text-gray-600 mb-8">
              Follow my journey, see my latest projects, and connect with me on your favorite platform.
            </p>
            
            <div className="space-y-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl hover:shadow-lg transition-all duration-300 group hover-scale ${social.color}`}
                  >
                    <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon size={18} className="text-gray-600 group-hover:text-inherit transition-colors" />
                    </div>
                    <div>
                      <span className="text-gray-900 font-semibold group-hover:text-inherit transition-colors">{social.name}</span>
                      <span className="text-gray-500 text-sm ml-2">{social.username}</span>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.section>

          {/* Availability & Stats */}
          <motion.section
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Availability */}
            <div className="p-8 bg-gradient-to-r from-green-50/80 to-emerald-50/80 backdrop-blur-sm border border-green-200/50 rounded-2xl hover-glow relative overflow-hidden">
              {/* Floating particles */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full opacity-30 animate-float-particle-0"></div>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-900 font-bold text-lg">Available for New Projects</span>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                I'm currently accepting new projects. Whether it's a mobile app, 
                web platform, or custom solution, let's discuss how I can help bring your ideas to life.
              </p>
              <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                <Clock size={16} />
                <span>WAT Timezone (UTC+1) • Usually online 10 AM - 4 PM</span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-xl hover-glow group">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Clock size={20} className="text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-1">24h</div>
                <div className="text-gray-600 text-sm">Response Time</div>
              </div>
              
              <div className="text-center p-6 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-xl hover-glow group">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Star size={20} className="text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-purple-600 mb-1">12+</div>
                <div className="text-gray-600 text-sm">Projects Completed</div>
              </div>
              
              <div className="text-center p-6 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-xl hover-glow group">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Users size={20} className="text-emerald-600" />
                </div>
                <div className="text-2xl font-bold text-emerald-600 mb-1">3+</div>
                <div className="text-gray-600 text-sm">Countries Served</div>
              </div>
              
              <div className="text-center p-6 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-xl hover-glow group">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Zap size={20} className="text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-orange-600 mb-1">97%</div>
                <div className="text-gray-600 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </motion.section>
        </div>

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Have questions about working together? Here are answers to the most common questions I receive.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-xl hover:shadow-lg hover:bg-white transition-all duration-300 text-left hover-glow relative overflow-hidden"
              >
                {/* Subtle hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 to-purple-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative">
                  <h3 className="text-gray-900 font-bold mb-3 group-hover:text-blue-600 transition-colors">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Enhanced CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center relative"
        >
          {/* Multi-layered background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/8 via-purple-500/8 to-emerald-500/8 rounded-3xl"></div>
          <div className="absolute inset-0 bg-white/70 backdrop-blur-sm rounded-3xl border border-white/40"></div>
          
          {/* Floating decorations */}
          <div className="absolute top-8 left-12 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-30 animate-float-particle-0"></div>
          <div className="absolute bottom-8 right-16 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-25 animate-float-particle-1 rotate-45"></div>
          
          <div className="relative p-12 rounded-3xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to start your <span className="gradient-text">project</span>?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              I'm excited to learn about your project and discuss how we can work together 
              to bring your vision to life. Let's schedule a call or send me a message!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/wisdom-divine-d"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl magnetic"
              >
                Schedule a Call
              </a>
              <a
                href="mailto:wisdomdivine3d@gmail.com"
                className="px-8 py-4 bg-white/90 backdrop-blur-sm border border-gray-200/50 text-gray-700 rounded-xl font-semibold hover:border-gray-900 hover:text-gray-900 hover:bg-white transition-all duration-300 hover-scale"
              >
                Send an Email
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
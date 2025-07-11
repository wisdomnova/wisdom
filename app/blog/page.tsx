'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowUpRight, Tag, Search, Filter, X } from "lucide-react";

const blogPosts = [
  {
    id: "my-programming-journey",
    title: "From Curiosity to Code: My Programming Journey",
    excerpt: "The story of how I discovered programming and transformed passion into a career in tech.",
    content: "My personal journey into programming — from the first lines of code to becoming a full-stack developer. The challenges, breakthroughs, and lessons that shaped my path in technology.",
    href: "/blog/my-programming-journey",
    date: "2024-12-15",
    readTime: "8 min read",
    tags: ["Personal", "Career", "Programming"],
    category: "Personal",
    featured: true
  },
  {
    id: "beeseek-digitalizing-services-nigeria",
    title: "Digitalizing Door-to-Door Services: The BeeSeek Vision",
    excerpt: "Why Nigeria (and West Africa) needs a trusted platform for home services — and how BeeSeek aims to solve it.",
    content: "Exploring the massive opportunity in Nigeria's service economy. How digital transformation can connect skilled service providers with customers, creating jobs and improving lives across West Africa.",
    href: "/blog/beeseek-digitalizing-services-nigeria",
    date: "2024-12-10",
    readTime: "12 min read",
    tags: ["BeeSeek", "Nigeria", "Digital Transformation", "Marketplace"],
    category: "Entrepreneurship",
    featured: true
  },
  {
    id: "overcoming-programming-challenges",
    title: "Overcoming Programming Challenges: Lessons from the Trenches",
    excerpt: "The technical roadblocks, project setbacks, and debugging nightmares — and how I learned to push through them.",
    content: "Real stories from my development journey: the bugs that took days to fix, the features that seemed impossible, and the strategies I developed to overcome technical challenges and deliver successful projects.",
    href: "/blog/overcoming-programming-challenges",
    date: "2024-12-05",
    readTime: "10 min read",
    tags: ["Programming", "Problem Solving", "Career", "Lessons"],
    category: "Technical",
    featured: true
  },
  {
    id: "react-native-vs-flutter-2024",
    title: "React Native vs Flutter: A Developer's Perspective in 2024",
    excerpt: "Having built apps in both frameworks, here's my honest comparison and when to choose each one.",
    content: "After building multiple mobile apps with both React Native and Flutter, I share the real-world differences, performance considerations, and decision factors for choosing the right framework for your project.",
    href: "/blog/react-native-vs-flutter-2024",
    date: "2024-11-28",
    readTime: "15 min read",
    tags: ["React Native", "Flutter", "Mobile Development", "Comparison"],
    category: "Technical",
    featured: false
  },
  {
    id: "building-kazamarka-ecommerce-app",
    title: "Building Kazamarka: Lessons from Creating an E-commerce App",
    excerpt: "The technical and business challenges of building a cross-border e-commerce platform for the Middle East market.",
    content: "A deep dive into the development process of Kazamarka, covering payment integration with Stripe, inventory management, localization for Jordan and Saudi Arabia, and the technical decisions that shaped the platform.",
    href: "/blog/building-kazamarka-ecommerce-app",
    date: "2024-11-20",
    readTime: "18 min read",
    tags: ["E-commerce", "React Native", "Stripe", "Case Study"],
    category: "Projects",
    featured: false
  },
  {
    id: "freelancing-as-african-developer",
    title: "Freelancing as an African Developer: Challenges and Opportunities",
    excerpt: "The unique challenges and opportunities facing African developers in the global freelance market.",
    content: "Navigating time zones, building trust with international clients, pricing strategies, and leveraging Africa's growing tech reputation. Real experiences and practical advice for African developers entering the global market.",
    href: "/blog/freelancing-as-african-developer",
    date: "2024-11-15",
    readTime: "12 min read",
    tags: ["Freelancing", "Africa", "Career", "Business"],
    category: "Personal",
    featured: false
  },
  {
    id: "state-management-react-apps-2024",
    title: "State Management in React Apps: What I Learned the Hard Way",
    excerpt: "From prop drilling to Redux to Zustand — my evolution in managing state in React applications.",
    content: "A practical guide to state management patterns in React, covering when to use local state, Context API, Redux, Zustand, and other solutions. Real examples from projects and lessons learned from overengineering.",
    href: "/blog/state-management-react-apps-2024",
    date: "2024-11-08",
    readTime: "14 min read",
    tags: ["React", "State Management", "Redux", "Zustand"],
    category: "Technical",
    featured: false
  },
  {
    id: "african-tech-ecosystem-2024",
    title: "The African Tech Ecosystem: Where We Are and Where We're Going",
    excerpt: "Observations on the growth of tech hubs across Africa and opportunities for the next decade.",
    content: "An analysis of Africa's tech landscape, from fintech innovations to the rise of remote work, venture capital growth, and the potential for African solutions to global problems.",
    href: "/blog/african-tech-ecosystem-2024",
    date: "2024-10-30",
    readTime: "16 min read",
    tags: ["Africa", "Tech Ecosystem", "Fintech", "Future"],
    category: "Industry",
    featured: false
  }
];

const categories = ["All", "Technical", "Personal", "Entrepreneurship", "Projects", "Industry"];
const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags))).sort();

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => post.tags.includes(tag));
    
    return matchesCategory && matchesSearch && matchesTags;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

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
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-15 animate-float-particle-${i % 3}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
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
            Blog • {blogPosts.length} Articles
          </motion.div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            Thoughts &{" "}
            <span className="gradient-text-rainbow">
              Insights
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            My journey in programming, building products for Africa, lessons learned, and thoughts on technology's 
            role in transforming emerging markets.
          </p>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Enhanced Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles, topics, technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-12 py-4 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500 hover-glow"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={20} />
                </button>
              )}
            </motion.div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 hover-scale ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white/80 backdrop-blur-sm text-gray-600 hover:text-gray-900 hover:bg-white/90 border border-gray-200/50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search Results Counter */}
            {searchTerm && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center"
              >
                <p className="text-gray-600">
                  Found <span className="font-semibold text-blue-600">{filteredPosts.length}</span> article{filteredPosts.length !== 1 ? 's' : ''} 
                  {searchTerm && ` matching "${searchTerm}"`}
                </p>
              </motion.div>
            )}
          </div>
        </motion.section>

        {/* Featured Articles */}
        {!searchTerm && (
          <section>
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-gray-900">
              Featured Articles
            </h2>
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {featuredPosts.slice(0, 2).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:shadow-2xl hover:bg-white transition-all duration-500 hover-glow overflow-hidden relative"
                >
                  {/* Floating particles */}
                  <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 animate-float-particle-0 transition-opacity duration-300"></div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-blue-700">Featured</span>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} className="group-hover:text-blue-600 transition-colors duration-300" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} className="group-hover:text-blue-600 transition-colors duration-300" />
                      <span>{post.readTime}</span>
                    </div>
                    <span className="px-2 py-1 bg-gray-100/80 backdrop-blur-sm text-gray-600 text-xs rounded font-medium border border-gray-200/50">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {post.content}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100/80 backdrop-blur-sm text-gray-700 text-xs rounded-lg font-medium border border-gray-200/50 hover-scale transition-all duration-200 group-hover:bg-blue-50/80 group-hover:text-blue-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={post.href}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium group/link"
                  >
                    Read Full Article
                    <ArrowUpRight size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </Link>
                </motion.article>
              ))}
            </div>
          </section>
        )}

        {/* All Articles */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              {searchTerm ? 'Search Results' : 'All Articles'}
            </h2>
            <span className="text-gray-500">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
            </span>
          </div>

          {filteredPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-500 text-lg">No articles found matching your search.</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                  setSelectedTags([]);
                }}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-6 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-xl hover:shadow-lg hover:bg-white/95 transition-all duration-300 hover-scale relative overflow-hidden"
                >
                  {/* Subtle hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 to-purple-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-gray-100/80 backdrop-blur-sm text-gray-600 text-xs rounded-lg font-medium border border-gray-200/50 group-hover:bg-blue-50/80 group-hover:text-blue-600 transition-all duration-200">
                        {post.category}
                      </span>
                      {post.featured && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      )}
                    </div>

                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} className="group-hover:text-blue-600 transition-colors duration-300" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={12} className="group-hover:text-blue-600 transition-colors duration-300" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3 group-hover:text-gray-700 transition-colors duration-300">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-gray-100/80 backdrop-blur-sm text-gray-600 text-xs rounded font-medium group-hover:bg-blue-50/80 group-hover:text-blue-600 transition-all duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 2 && (
                        <span className="px-2 py-0.5 text-gray-500 text-xs">
                          +{post.tags.length - 2}
                        </span>
                      )}
                    </div>

                    <Link
                      href={post.href}
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium group/link"
                    >
                      Read More
                      <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </section>



      </div>
    </div>
  );
}
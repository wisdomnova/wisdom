'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowUpRight, Tag, Search, Filter } from "lucide-react";

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
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => post.tags.includes(tag));
    
    return matchesCategory && matchesSearch && matchesTags;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Subtle background pattern */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, #000 2px, transparent 0), radial-gradient(circle at 75px 75px, #000 2px, transparent 0)`,
          backgroundSize: '100px 100px'
        }}></div>
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
            className="inline-block px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-6"
          >
            Blog • {blogPosts.length} Articles
          </motion.div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            Thoughts &{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Insights
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            My journey in programming, building products for Africa, lessons learned, and thoughts on technology's 
            role in transforming emerging markets.
          </p>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Featured Articles */}
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
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-xs font-medium text-blue-700">Featured</span>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded font-medium">
                    {post.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {post.content}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg font-medium"
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

        {/* All Articles */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              All Articles
            </h2>
            <span className="text-gray-500">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg font-medium">
                    {post.category}
                  </span>
                  {post.featured && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  )}
                </div>

                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded font-medium"
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
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found matching your search.</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                  setSelectedTags([]);
                }}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </section>

        {/* Newsletter Signup */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-8 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get notified when I publish new articles about programming, entrepreneurship, 
            and building digital solutions for Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
            />
            <button className="px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
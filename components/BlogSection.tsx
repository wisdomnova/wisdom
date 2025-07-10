'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowUpRight, Tag } from "lucide-react";

const blogPosts = [
  {
    title: "From Curiosity to Code: My Programming Journey",
    excerpt: "The story of how I discovered programming and transformed passion into a career in tech.",
    content: "My personal journey into programming — from the first lines of code to becoming a full-stack developer. The challenges, breakthroughs, and lessons that shaped my path in technology.",
    href: "/blog/my-programming-journey",
    date: "2024-12-15",
    readTime: "8 min read",
    tags: ["Personal", "Career", "Programming"],
    featured: true
  },
  {
    title: "Digitalizing Door-to-Door Services: The BeeSeek Vision",
    excerpt: "Why Nigeria (and West Africa) needs a trusted platform for home services — and how BeeSeek aims to solve it.",
    content: "Exploring the massive opportunity in Nigeria's service economy. How digital transformation can connect skilled service providers with customers, creating jobs and improving lives across West Africa.",
    href: "/blog/beeseek-digitalizing-services-nigeria",
    date: "2024-12-10",
    readTime: "12 min read",
    tags: ["BeeSeek", "Nigeria", "Digital Transformation", "Marketplace"],
    featured: true
  },
  {
    title: "Overcoming Programming Challenges: Lessons from the Trenches",
    excerpt: "The technical roadblocks, project setbacks, and debugging nightmares — and how I learned to push through them.",
    content: "Real stories from my development journey: the bugs that took days to fix, the features that seemed impossible, and the strategies I developed to overcome technical challenges and deliver successful projects.",
    href: "/blog/overcoming-programming-challenges",
    date: "2024-12-05",
    readTime: "10 min read",
    tags: ["Programming", "Problem Solving", "Career", "Lessons"],
    featured: true
  }
];

export default function BlogSection() {
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
          Latest Writings
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Thoughts on programming, entrepreneurship, and building digital solutions for Africa
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.href}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            {/* Featured badge */}
            <div className="p-6 pb-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-xs font-medium text-blue-700 mb-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Featured
              </div>

              {/* Meta information */}
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
              </div>

              {/* Title and content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg font-medium"
                  >
                    {tag}
                  </span>
                ))}
                {post.tags.length > 3 && (
                  <span className="px-3 py-1 text-gray-500 text-xs">
                    +{post.tags.length - 3}
                  </span>
                )}
              </div>
            </div>

            {/* Read more link */}
            <div className="px-6 pb-6">
              <Link
                href={post.href}
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium group/link"
              >
                Read Full Article
                <ArrowUpRight size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Blog CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center p-8 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-2xl"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Want to Read More?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Follow my journey as I share insights on programming, building products for Africa, and lessons learned along the way.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/blog"
            className="px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Articles
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-gray-900 hover:text-gray-900 transition-all duration-300 font-semibold"
          >
            Get In Touch
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
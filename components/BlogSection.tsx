'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowUpRight, Tag } from "lucide-react";
import { useState, useEffect } from "react";
import { getBlogs } from "@/lib/blogs";
import { Blog } from "@/types/blog";

export default function BlogSection() {
  const [blogPosts, setBlogPosts] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch blogs on component mount
  useEffect(() => {
    async function fetchBlogs() {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch all published blogs, sorted by date (most recent first)
        const blogs = await getBlogs();
        
        // Take only the first 3 blogs for the homepage
        setBlogPosts(blogs.slice(0, 3));
      } catch (err) {
        console.error('Error fetching blogs for homepage:', err);
        setError('Failed to load blog posts');
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  // Loading state
  if (loading) {
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

        {/* Loading skeleton */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {[1, 2, 3].map((index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 animate-pulse">
              <div className="w-20 h-6 bg-gray-200 rounded-full mb-4"></div>
              <div className="flex gap-4 mb-4">
                <div className="w-24 h-4 bg-gray-200 rounded"></div>
                <div className="w-20 h-4 bg-gray-200 rounded"></div>
              </div>
              <div className="w-full h-6 bg-gray-200 rounded mb-4"></div>
              <div className="w-3/4 h-6 bg-gray-200 rounded mb-4"></div>
              <div className="space-y-2 mb-6">
                <div className="w-full h-4 bg-gray-200 rounded"></div>
                <div className="w-5/6 h-4 bg-gray-200 rounded"></div>
                <div className="w-4/6 h-4 bg-gray-200 rounded"></div>
              </div>
              <div className="flex gap-2 mb-6">
                <div className="w-16 h-6 bg-gray-200 rounded-lg"></div>
                <div className="w-20 h-6 bg-gray-200 rounded-lg"></div>
                <div className="w-14 h-6 bg-gray-200 rounded-lg"></div>
              </div>
              <div className="w-32 h-4 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
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

        <div className="text-center py-12">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

  // No blogs state
  if (blogPosts.length === 0) {
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

        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">No blog posts available yet.</p>
          <p className="text-gray-500 text-sm">Check back soon for new articles!</p>
        </div>
      </section>
    );
  }

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
            key={post.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover-glow"
          >
            {/* Featured badge */}
            <div className="p-6 pb-0">
              {post.featured && (
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-xs font-medium text-blue-700 mb-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  Featured
                </div>
              )}

              {/* Meta information */}
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar size={14} className="group-hover:text-blue-600 transition-colors duration-300" />
                  <span>{formatDate(post.published_at || post.created_at)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} className="group-hover:text-blue-600 transition-colors duration-300" />
                  <span>{post.read_time}</span>
                </div>
              </div>

              {/* Category */}
              <div className="mb-4">
                <span className="px-2 py-1 bg-gray-100/80 backdrop-blur-sm text-gray-600 text-xs rounded font-medium border border-gray-200/50 group-hover:bg-blue-50/80 group-hover:text-blue-600 transition-all duration-200">
                  {post.category}
                </span>
              </div>

              {/* Title and content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3 group-hover:text-gray-700 transition-colors duration-300">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100/80 backdrop-blur-sm text-gray-700 text-xs rounded-lg font-medium border border-gray-200/50 hover-scale transition-all duration-200 group-hover:bg-blue-50/80 group-hover:text-blue-700"
                  >
                    {tag}
                  </span>
                ))}
                {post.tags.length > 3 && (
                  <span className="px-2 py-1 text-gray-500 text-xs">
                    +{post.tags.length - 3}
                  </span>
                )}
              </div>
            </div>

            {/* Read more link */}
            <div className="px-6 pb-6">
              <Link
                href={`/blog/${post.slug}`}
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
        className="text-center p-8 bg-gradient-to-r from-blue-50/80 to-purple-50/80 backdrop-blur-sm border border-blue-200/50 rounded-2xl hover-glow relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 to-purple-500/3 opacity-50"></div>
        
        <div className="relative">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Want to Read More?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Follow my journey as I share insights on programming, building products for Africa, and lessons learned along the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl magnetic"
            >
              View All Articles
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-white/90 backdrop-blur-sm border border-gray-200/50 text-gray-700 rounded-xl hover:border-gray-900 hover:text-gray-900 hover:bg-white transition-all duration-300 font-semibold hover-scale"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
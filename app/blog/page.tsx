'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowUpRight, Search, X } from "lucide-react";
import { getBlogs, getBlogCategories, getBlogTags, getFeaturedBlogs } from "@/lib/blogs";
import { Blog } from "@/types/blog";

// Predefined static particle data to prevent hydration issues
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

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [featuredBlogs, setFeaturedBlogs] = useState<Blog[]>([]);
  const [categories, setCategories] = useState<string[]>(['All']);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load initial data
  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        setError(null);

        const [blogsData, categoriesData, featuredData] = await Promise.all([
          getBlogs(),
          getBlogCategories(),
          getFeaturedBlogs()
        ]);

        setBlogs(blogsData);
        setCategories(categoriesData);
        setFeaturedBlogs(featuredData);
      } catch (err) {
        console.error('Error loading blog data:', err);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  // Filter blogs based on search and category
  useEffect(() => {
    async function filterBlogs() {
      try {
        const filteredData = await getBlogs({
          category: selectedCategory,
          searchTerm: searchTerm.trim() || undefined
        });
        setBlogs(filteredData);
      } catch (err) {
        console.error('Error filtering blogs:', err);
      }
    }

    if (!loading) {
      filterBlogs();
    }
  }, [selectedCategory, searchTerm, loading]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatDateShort = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white pt-24 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white pt-24 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24 relative overflow-hidden">
      {/* Enhanced animated background */}
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
            Blog • {blogs.length} Articles
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
                  Found <span className="font-semibold text-blue-600">{blogs.length}</span> article{blogs.length !== 1 ? 's' : ''} 
                  {searchTerm && ` matching "${searchTerm}"`}
                </p>
              </motion.div>
            )}
          </div>
        </motion.section>

        {/* Featured Articles */}
        {!searchTerm && featuredBlogs.length > 0 && (
          <section>
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-gray-900">
              Featured Articles
            </h2>
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {featuredBlogs.slice(0, 2).map((post, index) => (
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
                      <span>{formatDate(post.published_at || post.created_at)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} className="group-hover:text-blue-600 transition-colors duration-300" />
                      <span>{post.read_time}</span>
                    </div>
                    <span className="px-2 py-1 bg-gray-100/80 backdrop-blur-sm text-gray-600 text-xs rounded font-medium border border-gray-200/50">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {post.excerpt}
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
                    href={`/blog/${post.slug}`}
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
              {blogs.length} article{blogs.length !== 1 ? 's' : ''}
            </span>
          </div>

          {blogs.length === 0 ? (
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
                }}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((post, index) => (
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
                        <span>{formatDateShort(post.published_at || post.created_at)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={12} className="group-hover:text-blue-600 transition-colors duration-300" />
                        <span>{post.read_time}</span>
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
                      href={`/blog/${post.slug}`}
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
'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search, FileQuestion, RefreshCw } from "lucide-react";

const suggestions = [
  { label: "Home", href: "/", icon: Home },
  { label: "About Me", href: "/about", icon: FileQuestion },
  { label: "Projects", href: "/projects", icon: Search },
  { label: "Blog", href: "/blog", icon: FileQuestion },
  { label: "Contact", href: "/contact", icon: FileQuestion }
];

export default function NotFound() {
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
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <motion.h1 
              className="text-8xl lg:text-9xl font-bold mb-6"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                404
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Page Not Found
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Oops! The page you're looking for seems to have wandered off into the digital void. 
                Don't worry, even the best developers encounter 404s.
              </p>
            </motion.div>
          </motion.div>

          {/* Error Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-2xl"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <FileQuestion size={24} className="text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">What happened?</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
              <div className="flex flex-col items-center p-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <p>The URL might be mistyped</p>
              </div>
              <div className="flex flex-col items-center p-4">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-purple-600 font-bold">2</span>
                </div>
                <p>The page might have moved</p>
              </div>
              <div className="flex flex-col items-center p-4">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-emerald-600 font-bold">3</span>
                </div>
                <p>The link might be outdated</p>
              </div>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's get you back on track</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/"
                className="group px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 justify-center"
              >
                <Home size={16} />
                Back to Home
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              </Link>
              
              <button
                onClick={() => window.history.back()}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-gray-900 hover:text-gray-900 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                <ArrowLeft size={16} />
                Go Back
              </button>

              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-gray-900 hover:text-gray-900 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                <RefreshCw size={16} />
                Refresh
              </button>
            </div>
          </motion.div>

          {/* Navigation Suggestions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mb-12"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Or explore these pages</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {suggestions.map((suggestion, index) => {
                const Icon = suggestion.icon;
                return (
                  <motion.div
                    key={suggestion.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    <Link
                      href={suggestion.href}
                      className="group p-4 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col items-center gap-2"
                    >
                      <div className="w-10 h-10 bg-gray-100 group-hover:bg-blue-50 rounded-lg flex items-center justify-center transition-colors">
                        <Icon size={18} className="text-gray-600 group-hover:text-blue-600 transition-colors" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                        {suggestion.label}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Fun Developer Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="p-6 bg-white border border-gray-200 rounded-2xl"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Developer's Note 💻
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              As a developer, I know how frustrating 404 errors can be. If you believe this page should exist 
              or if you found a broken link, please{" "}
              <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
                let me know
              </Link>
              {" "}so I can fix it. Thanks for helping make this site better!
            </p>
          </motion.div>

          {/* Subtle Animation Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-20 w-8 h-8 bg-emerald-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </div>
  );
}
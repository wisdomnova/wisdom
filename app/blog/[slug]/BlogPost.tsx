'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Share2, Tag, ExternalLink, Check } from 'lucide-react';
import { Blog } from '@/types/blog';
import { JSX, useState } from 'react';

// Static particles to prevent hydration issues
const staticParticleData = [
  { left: 15.5, top: 25.3, delay: 2.1 },
  { left: 73.2, top: 45.8, delay: 5.7 },
  { left: 32.1, top: 78.9, delay: 1.4 },
  { left: 87.6, top: 12.7, delay: 8.2 },
  { left: 9.8, top: 65.4, delay: 3.9 },
  { left: 54.3, top: 89.1, delay: 6.3 }
];

interface BlogPostProps {
  blog: Blog;
}

export default function BlogPost({ blog }: BlogPostProps) {
  const [copied, setCopied] = useState(false);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleShare = async () => {
    // Check if native sharing is available
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: blog.title,
          text: blog.excerpt,
          url: window.location.href,
        });
        return;
      } catch (error) {
        console.log('Native share failed:', error);
        // Fall through to clipboard copy
      }
    }

    // Fallback: copy to clipboard with proper error handling
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        // Fallback for older browsers or HTTP
        const textArea = document.createElement('textarea');
        textArea.value = window.location.href;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
          document.execCommand('copy');
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch (err) {
          console.error('Failed to copy URL:', err);
          // Last resort: show alert with URL
          alert(`Copy this URL: ${window.location.href}`);
        } finally {
          document.body.removeChild(textArea);
        }
      }
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
      // Last resort: show alert with URL
      alert(`Copy this URL: ${window.location.href}`);
    }
  };

  // Enhanced markdown parser
  const parseMarkdown = (text: string) => {
    let parsed = text;
    const elements: JSX.Element[] = [];
    let lastIndex = 0;
    let elementKey = 0;

    // Function to add text segment
    const addTextSegment = (content: string, startIndex: number, endIndex: number) => {
      if (startIndex < endIndex) {
        const textContent = content.substring(startIndex, endIndex);
        if (textContent) {
          elements.push(<span key={`text-${elementKey++}`}>{textContent}</span>);
        }
      }
    };

    // Parse links first [text](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let linkMatch;
    const linkMatches = [];
    
    while ((linkMatch = linkRegex.exec(parsed)) !== null) {
      linkMatches.push({
        fullMatch: linkMatch[0],
        text: linkMatch[1],
        url: linkMatch[2],
        index: linkMatch.index,
        length: linkMatch[0].length
      });
    }

    // Parse bold text **text**
    const boldRegex = /\*\*([^*]+)\*\*/g;
    let boldMatch;
    const boldMatches = [];
    
    while ((boldMatch = boldRegex.exec(parsed)) !== null) {
      boldMatches.push({
        fullMatch: boldMatch[0],
        text: boldMatch[1],
        index: boldMatch.index,
        length: boldMatch[0].length,
        type: 'bold'
      });
    }

    // Parse italic text *text*
    const italicRegex = /\*([^*]+)\*/g;
    let italicMatch;
    const italicMatches = [];
    
    while ((italicMatch = italicRegex.exec(parsed)) !== null) {
      // Skip if it's part of a bold match
      const isPartOfBold = boldMatches.some(bold => 
        italicMatch!.index >= bold.index && 
        italicMatch!.index + italicMatch![0].length <= bold.index + bold.length
      );
      
      if (!isPartOfBold) {
        italicMatches.push({
          fullMatch: italicMatch[0],
          text: italicMatch[1],
          index: italicMatch.index,
          length: italicMatch[0].length,
          type: 'italic'
        });
      }
    }

    // Combine all matches and sort by index
    const allMatches = [
      ...linkMatches.map(m => ({ ...m, type: 'link' })),
      ...boldMatches,
      ...italicMatches
    ].sort((a, b) => a.index - b.index);

    // Build the JSX elements
    allMatches.forEach((match, index) => {
      // Add text before this match
      addTextSegment(parsed, lastIndex, match.index);

      // Add the formatted element
      if (match.type === 'link' && 'url' in match) {
        const isExternal = match.url.startsWith('http');
        elements.push(
          <a
            key={`link-${elementKey++}`}
            href={match.url}
            target={isExternal ? '_blank' : '_self'}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium underline decoration-blue-300 hover:decoration-blue-500 transition-all duration-200"
          >
            {match.text}
            {isExternal && <ExternalLink size={14} />}
          </a>
        );
      } else if (match.type === 'bold') {
        elements.push(
          <strong key={`bold-${elementKey++}`} className="font-bold text-gray-900">
            {match.text}
          </strong>
        );
      } else if (match.type === 'italic') {
        elements.push(
          <em key={`italic-${elementKey++}`} className="italic text-gray-700">
            {match.text}
          </em>
        );
      }

      lastIndex = match.index + match.length;
    });

    // Add remaining text
    addTextSegment(parsed, lastIndex, parsed.length);

    return elements.length > 0 ? elements : parsed;
  };

  // Enhanced content renderer
  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => {
      // Handle headings
      if (paragraph.startsWith('## ')) {
        const headingText = paragraph.replace('## ', '');
        return (
          <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4 first:mt-0">
            {parseMarkdown(headingText)}
          </h2>
        );
      }
      
      if (paragraph.startsWith('### ')) {
        const headingText = paragraph.replace('### ', '');
        return (
          <h3 key={index} className="text-xl font-bold text-gray-900 mt-6 mb-3">
            {parseMarkdown(headingText)}
          </h3>
        );
      }

      // Handle bullet points
      if (paragraph.includes('\n- ')) {
        const lines = paragraph.split('\n');
        const listItems = lines.filter(line => line.startsWith('- ')).map((item, itemIndex) => (
          <li key={itemIndex} className="mb-2">
            {parseMarkdown(item.replace('- ', ''))}
          </li>
        ));
        
        const nonListContent = lines.filter(line => !line.startsWith('- ')).join('\n');
        
        return (
          <div key={index} className="mb-6">
            {nonListContent && (
              <p className="mb-4 leading-relaxed">
                {parseMarkdown(nonListContent)}
              </p>
            )}
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
              {listItems}
            </ul>
          </div>
        );
      }

      // Handle special CTA sections (contains emojis and multiple formatting)
      if (paragraph.includes('👉') || paragraph.includes('🚀') || paragraph.startsWith('*Together,')) {
        return (
          <div key={index} className="my-8 p-6 bg-gradient-to-r from-blue-50/80 to-green-50/80 backdrop-blur-sm border-l-4 border-blue-500 rounded-r-xl">
            <p className="text-lg leading-relaxed font-medium text-gray-800">
              {parseMarkdown(paragraph)}
            </p>
          </div>
        );
      }

      // Handle regular paragraphs
      if (paragraph.trim()) {
        return (
          <p key={index} className="mb-4 leading-relaxed">
            {parseMarkdown(paragraph)}
          </p>
        );
      }

      return null;
    }).filter(Boolean);
  };

  return (
    <div className="min-h-screen bg-white pt-24 relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-400/15 to-purple-400/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-float-delay"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-br from-emerald-400/15 to-blue-400/15 rounded-full blur-3xl animate-float-slow"></div>
        
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

      <div className="relative z-10 container mx-auto px-6 py-12">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Blog
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12 text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-50/80 backdrop-blur-sm text-blue-700 text-sm font-medium rounded-full border border-blue-200/50">
                {blog.category}
              </span>
              {blog.featured && (
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-blue-700">Featured</span>
                </div>
              )}
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{formatDate(blog.published_at || blog.created_at)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{blog.read_time}</span>
              </div>
              <span>By {blog.author}</span>
              <button
                onClick={handleShare}
                className={`flex items-center gap-2 transition-colors ${
                  copied 
                    ? 'text-green-600 hover:text-green-700' 
                    : 'text-blue-600 hover:text-blue-700'
                }`}
              >
                {copied ? <Check size={16} /> : <Share2 size={16} />}
                {copied ? 'Copied!' : 'Share'}
              </button>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {blog.excerpt}
            </p>
          </motion.header>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="prose prose-lg prose-gray max-w-none mb-12"
          >
            <div className="bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover-glow">
              <div 
                className="prose-content text-gray-700 leading-relaxed"
                style={{
                  lineHeight: '1.8',
                  fontSize: '1.1rem'
                }}
              >
                {renderContent(blog.content)}
              </div>
            </div>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 mb-4">
              <Tag size={20} className="text-gray-600" />
              <span className="text-gray-600 font-medium">Tags</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100/80 backdrop-blur-sm text-gray-700 text-sm rounded-lg font-medium border border-gray-200/50 hover-scale transition-all duration-200 hover:bg-blue-50/80 hover:text-blue-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center p-8 bg-gradient-to-r from-blue-50/80 to-purple-50/80 backdrop-blur-sm border border-blue-200/50 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Enjoyed this article?
            </h3>
            <p className="text-gray-600 mb-6">
              I'd love to hear your thoughts and discuss your project ideas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Get in Touch
              </Link>
              <Link
                href="/blog"
                className="px-6 py-3 bg-white/90 backdrop-blur-sm border border-gray-200/50 text-gray-700 rounded-lg font-semibold hover:border-gray-300 hover:text-gray-900 transition-all"
              >
                Read More Articles
              </Link>
            </div>
          </motion.div>
        </motion.article>
      </div>
    </div>
  );
}
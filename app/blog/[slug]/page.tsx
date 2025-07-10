'use client';

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Tag, Share2, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { use } from 'react';

// This would normally come from your backend/API
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

// Dummy full content for each article
const getDummyContent = (slug: string) => {
  const dummyContent = {
    "my-programming-journey": `
      <p>Looking back, I can still remember the exact moment when everything clicked. It was 2019, and I was staring at a simple "Hello, World!" program in Python. That moment of seeing code come to life sparked something that would completely transform my life.</p>
      
      <h2>The Early Days</h2>
      <p>Like many developers, my journey didn't start with formal education. I was curious about how websites worked, how apps were built, and what made technology tick. I started with basic HTML and CSS, building simple websites that looked terrible but felt like magic to me.</p>
      
      <p>The learning curve was steep. There were countless nights debugging code that should have worked, watching YouTube tutorials on repeat, and feeling like I was drowning in concepts I didn't understand. But something kept me going – the thrill of solving problems and building things from scratch.</p>
      
      <h2>The Breakthrough</h2>
      <p>My first real breakthrough came when I built a simple to-do app using JavaScript. It wasn't revolutionary, but it was mine. I could add tasks, mark them complete, and see my code working in real-time. That's when I knew I wanted to pursue programming seriously.</p>
      
      <p>I dove deeper into JavaScript, learned React, and started building more complex projects. Each project taught me something new – about code organization, user experience, and the importance of writing clean, maintainable code.</p>
      
      <h2>From Hobby to Career</h2>
      <p>The transition from hobby programmer to professional developer wasn't smooth. I faced imposter syndrome, technical interviews that left me feeling inadequate, and the challenge of building a portfolio that stood out.</p>
      
      <p>But persistence paid off. I started taking on small freelance projects, building websites for local businesses, and gradually working my way up to more complex applications. Each project was a learning experience, and each satisfied client was validation that I was on the right path.</p>
      
      <h2>Building for Africa</h2>
      <p>As I grew as a developer, I became increasingly interested in how technology could solve problems specific to African markets. This led to projects like BeeSeek, which aims to digitalize service delivery in Nigeria, and Kazamarka, an e-commerce platform serving Jordan and Saudi Arabia.</p>
      
      <p>These projects taught me that being a developer isn't just about writing code – it's about understanding user needs, market dynamics, and building solutions that create real value.</p>
      
      <h2>Lessons Learned</h2>
      <p>If I could go back and give advice to my younger self starting this journey, here's what I'd say:</p>
      
      <ul>
        <li><strong>Embrace the struggle:</strong> The confusion and frustration are part of the process. Every expert was once a beginner.</li>
        <li><strong>Build real projects:</strong> Tutorials are great, but nothing beats building something from scratch and deploying it.</li>
        <li><strong>Focus on problem-solving:</strong> Programming languages and frameworks change, but problem-solving skills are timeless.</li>
        <li><strong>Be patient with yourself:</strong> Learning to code is a marathon, not a sprint. Celebrate small wins along the way.</li>
        <li><strong>Connect with the community:</strong> The developer community is incredibly supportive. Don't be afraid to ask questions and share your journey.</li>
      </ul>
      
      <h2>What's Next?</h2>
      <p>Today, I'm working on multiple projects, from mobile apps to web platforms, always with an eye on how technology can drive positive change in emerging markets. The journey from that first "Hello, World!" to building production applications used by thousands has been incredible, but I know this is just the beginning.</p>
      
      <p>Programming has given me the tools to turn ideas into reality, connect with people across the globe, and build solutions to real-world problems. If you're considering starting your own programming journey, I encourage you to take that first step. The path isn't always easy, but it's absolutely worth it.</p>
    `,
    "beeseek-digitalizing-services-nigeria": `
      <p>Nigeria's service economy is massive, yet largely untapped by digital platforms. From plumbing and electrical work to cleaning and home repairs, millions of skilled service providers operate without the digital infrastructure that could dramatically expand their reach and improve their livelihoods.</p>
      
      <h2>The Problem</h2>
      <p>Having lived in Nigeria, I've experienced firsthand the challenges of finding reliable service providers. The process typically involves asking friends and family for recommendations, making calls to verify availability, and hoping the person who shows up is skilled and trustworthy.</p>
      
      <p>On the flip side, skilled service providers struggle with customer acquisition. Many talented professionals remain underemployed simply because potential customers can't find them. This inefficiency hurts both consumers and service providers.</p>
      
      <h2>The Opportunity</h2>
      <p>Nigeria has over 200 million people, with a growing middle class increasingly comfortable with digital services. The success of platforms like Uber, Jumia, and various fintech solutions proves that Nigerians are ready to embrace digital transformation in service delivery.</p>
      
      <p>But the existing solutions are either too expensive, don't cater to local needs, or lack the trust mechanisms necessary for services that require physical presence in people's homes.</p>
      
      <h2>The BeeSeek Solution</h2>
      <p>BeeSeek is designed specifically for the African market, with features that address local challenges:</p>
      
      <ul>
        <li><strong>Trust and Safety:</strong> Comprehensive verification for service providers, including background checks and skill assessments.</li>
        <li><strong>Local Payment Methods:</strong> Integration with local payment systems, including cash payment options.</li>
        <li><strong>Community-Based Reviews:</strong> Review systems that account for local context and community feedback.</li>
        <li><strong>Skills Development:</strong> Training programs to help service providers improve their skills and earn certifications.</li>
        <li><strong>Insurance Coverage:</strong> Protection for both customers and service providers against damages or issues.</li>
      </ul>
      
      <h2>Market Research Insights</h2>
      <p>Through interviews with both potential customers and service providers, several key insights emerged:</p>
      
      <p><strong>Customer Pain Points:</strong></p>
      <ul>
        <li>Difficulty finding reliable service providers</li>
        <li>No standardized pricing or quality assurance</li>
        <li>Safety concerns about letting strangers into homes</li>
        <li>Limited recourse when services don't meet expectations</li>
      </ul>
      
      <p><strong>Service Provider Challenges:</strong></p>
      <ul>
        <li>Limited customer reach and marketing capabilities</li>
        <li>Irregular income due to inconsistent demand</li>
        <li>Lack of professional development opportunities</li>
        <li>No platform to showcase skills and build reputation</li>
      </ul>
      
      <h2>Technical Architecture</h2>
      <p>BeeSeek is being built with scalability and reliability in mind:</p>
      
      <ul>
        <li><strong>Backend:</strong> Node.js with PostgreSQL for robust data management</li>
        <li><strong>Frontend:</strong> Next.js for the web platform, ensuring fast loading and SEO optimization</li>
        <li><strong>Mobile Apps:</strong> React Native for both customer and service provider apps</li>
        <li><strong>Real-time Features:</strong> Socket.io for live tracking and communication</li>
        <li><strong>Payment Integration:</strong> Multiple payment gateways supporting local and international methods</li>
      </ul>
      
      <h2>Expansion Strategy</h2>
      <p>Starting in Lagos and Abuja, BeeSeek plans to expand across Nigeria before moving to other West African markets. Each market expansion will be carefully researched to ensure local needs are met.</p>
      
      <p>The platform will start with the most in-demand services – cleaning, repairs, and maintenance – before expanding to more specialized services like tutoring, pet care, and beauty services.</p>
      
      <h2>Impact Goals</h2>
      <p>Beyond being a successful business, BeeSeek aims to:</p>
      
      <ul>
        <li>Create economic opportunities for thousands of service providers</li>
        <li>Improve service quality through standardization and training</li>
        <li>Increase convenience and safety for customers</li>
        <li>Contribute to the digital transformation of Nigeria's service economy</li>
      </ul>
      
      <h2>The Road Ahead</h2>
      <p>Building BeeSeek is a long-term commitment. The platform is currently in development, with plans for a beta launch in Lagos in Q2 2025. Early feedback from focus groups has been encouraging, and partnerships with local training institutes and insurance providers are being finalized.</p>
      
      <p>The vision is ambitious: to become the go-to platform for home services across West Africa. But with careful execution, strong local partnerships, and a deep understanding of market needs, BeeSeek has the potential to transform how services are delivered and consumed in one of the world's fastest-growing regions.</p>
    `
  };

  return dummyContent[slug as keyof typeof dummyContent] || `
    <p>This is dummy content for the blog post. In a real implementation, this content would be fetched from your backend API based on the slug parameter.</p>
    
    <h2>Introduction</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    
    <h2>Main Content</h2>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    
    <h2>Code Example</h2>
    <pre><code>
function example() {
  console.log("This would be fetched from your backend");
  return "Dynamic content based on slug";
}
    </code></pre>
    
    <h2>Conclusion</h2>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
  `;
};

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  // Unwrap the params Promise using React.use()
  const { slug } = use(params);
  
  // In a real app, you'd fetch this from your API
  const post = blogPosts.find(p => p.id === slug);

  if (!post) {
    notFound();
  }

  const fullContent = getDummyContent(slug);

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
        <div className="max-w-4xl mx-auto">
          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            {/* Meta Information */}
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{post.readTime}</span>
              </div>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg font-medium">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-lg font-medium"
                >
                  <Tag size={12} />
                  {tag}
                </span>
              ))}
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
              <span className="text-sm font-medium text-gray-600">Share:</span>
              <div className="flex gap-2">
                <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  <Twitter size={16} />
                </button>
                <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  <Linkedin size={16} />
                </button>
                <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-700 transition-colors">
                  <Share2 size={16} />
                </button>
              </div>
            </div>
          </motion.header>

          {/* Article Content */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-strong:text-gray-900 prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:text-gray-700"
          >
            <div 
              dangerouslySetInnerHTML={{ __html: fullContent }} 
              className="text-gray-700"
            />
          </motion.article>

          {/* Author Bio */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-2xl"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-white flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="Wisdom Divine Logo" 
                  className="w-14 h-14 object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Wisdom Divine</h3>
                <p className="text-gray-600 mb-4">
                  Full-stack developer building digital solutions for Africa. Currently working on BeeSeek and 
                  helping businesses across Nigeria, Jordan, and Sierra Leone leverage technology for growth.
                </p>
                <div className="flex gap-2">
                  <Link href="https://github.com/wisdomnova" className="p-2 bg-white text-gray-600 rounded-lg hover:text-gray-900 transition-colors">
                    <Github size={16} />
                  </Link>
                  <Link href="https://linkedin.com/in/wisdomdivine" className="p-2 bg-white text-gray-600 rounded-lg hover:text-blue-600 transition-colors">
                    <Linkedin size={16} />
                  </Link>
                  <Link href="https://twitter.com/wisdomdivine" className="p-2 bg-white text-gray-600 rounded-lg hover:text-blue-400 transition-colors">
                    <Twitter size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center p-8 bg-white border border-gray-200 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Enjoyed this article?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'd love to hear your thoughts and discuss how we can work together on your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get in Touch
              </Link>
              <Link
                href="/blog"
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-gray-900 hover:text-gray-900 transition-all duration-300"
              >
                Read More Articles
              </Link>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Eye, Lock, UserCheck, Database, Globe, Calendar, Mail } from "lucide-react";

const sections = [
  {
    id: "information-collection",
    title: "Information We Collect",
    icon: Database,
    content: [
      {
        subtitle: "Personal Information",
        text: "When you contact me through forms or email, I collect information such as your name, email address, company name, and project details you voluntarily provide."
      },
      {
        subtitle: "Usage Data",
        text: "I collect information about how you interact with my website, including pages visited, time spent, and referring sites through analytics tools."
      },
      {
        subtitle: "Technical Information",
        text: "Your IP address, browser type, device information, and other technical data may be automatically collected when you visit my website."
      }
    ]
  },
  {
    id: "information-use",
    title: "How I Use Your Information",
    icon: UserCheck,
    content: [
      {
        subtitle: "Communication",
        text: "To respond to your inquiries, discuss potential projects, and provide updates on our collaboration."
      },
      {
        subtitle: "Service Improvement",
        text: "To understand how visitors use my website and improve the user experience and content quality."
      },
      {
        subtitle: "Legal Compliance",
        text: "To comply with applicable laws, regulations, and legitimate business purposes."
      }
    ]
  },
  {
    id: "information-sharing",
    title: "Information Sharing",
    icon: Globe,
    content: [
      {
        subtitle: "No Sale of Data",
        text: "I do not sell, rent, or trade your personal information to third parties for marketing purposes."
      },
      {
        subtitle: "Service Providers",
        text: "I may share information with trusted service providers (like email services, analytics tools) who help operate my website and business."
      },
      {
        subtitle: "Legal Requirements",
        text: "I may disclose information when required by law or to protect the rights, property, or safety of my business or others."
      }
    ]
  },
  {
    id: "data-security",
    title: "Data Security",
    icon: Lock,
    content: [
      {
        subtitle: "Security Measures",
        text: "I implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
      },
      {
        subtitle: "Data Transmission",
        text: "All data transmission between your browser and my website is encrypted using SSL/TLS protocols."
      },
      {
        subtitle: "Access Controls",
        text: "Access to personal information is restricted to authorized personnel who need it for legitimate business purposes."
      }
    ]
  },
  {
    id: "cookies",
    title: "Cookies and Tracking",
    icon: Eye,
    content: [
      {
        subtitle: "Essential Cookies",
        text: "I use essential cookies necessary for website functionality, including session management and security features."
      },
      {
        subtitle: "Analytics Cookies",
        text: "Analytics tools like Google Analytics help me understand website usage patterns to improve user experience."
      },
      {
        subtitle: "Cookie Control",
        text: "You can control cookie settings through your browser preferences, though this may affect website functionality."
      }
    ]
  },
  {
    id: "your-rights",
    title: "Your Rights",
    icon: Shield,
    content: [
      {
        subtitle: "Access and Correction",
        text: "You have the right to access, update, or correct your personal information. Contact me to request changes."
      },
      {
        subtitle: "Data Deletion",
        text: "You can request deletion of your personal information, subject to legal and legitimate business requirements."
      },
      {
        subtitle: "Communication Preferences",
        text: "You can opt out of promotional communications at any time by contacting me directly."
      }
    ]
  }
];

const thirdPartyServices = [
  {
    name: "Google Analytics",
    purpose: "Website analytics and user behavior tracking",
    dataTypes: "Usage data, device information, location data",
    privacy: "https://policies.google.com/privacy"
  },
  {
    name: "Vercel",
    purpose: "Website hosting and performance optimization",
    dataTypes: "Technical logs, performance data",
    privacy: "https://vercel.com/legal/privacy-policy"
  },
  {
    name: "Email Service Providers",
    purpose: "Contact form submissions and communication",
    dataTypes: "Contact information, message content",
    privacy: "Varies by provider"
  }
];

export default function PrivacyPage() {
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
          {/* Header */}
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-6"
            >
              <Shield size={16} />
              Privacy Policy
            </motion.div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              Your Privacy{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Matters
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              This privacy policy explains how I collect, use, and protect your personal information 
              when you visit my website or use my services.
            </p>

            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <span>Last updated: December 15, 2024</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail size={16} />
                <span>Questions? Contact me</span>
              </div>
            </div>
          </motion.section>

          {/* Quick Summary */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-2xl"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Summary</h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">What I Collect</h3>
                <p className="text-sm">Contact information you provide, website usage data, and basic technical information.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">How I Use It</h3>
                <p className="text-sm">To respond to inquiries, improve my website, and provide better services to clients.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Your Control</h3>
                <p className="text-sm">You can access, update, or delete your information at any time by contacting me.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Data Protection</h3>
                <p className="text-sm">I use industry-standard security measures to protect your personal information.</p>
              </div>
            </div>
          </motion.section>

          {/* Main Content Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.section
                  key={section.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 rounded-2xl p-8"
                  id={section.id}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                      <Icon size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                  </div>

                  <div className="space-y-6">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.subtitle}</h3>
                        <p className="text-gray-700 leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </motion.section>
              );
            })}
          </div>

          {/* Third-Party Services */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-white border border-gray-200 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Third-Party Services</h2>
            <p className="text-gray-700 mb-8">
              I use the following third-party services that may collect and process your information:
            </p>

            <div className="space-y-6">
              {thirdPartyServices.map((service, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-xl">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                    <Link
                      href={service.privacy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      Privacy Policy
                    </Link>
                  </div>
                  <p className="text-gray-700 text-sm mb-2">{service.purpose}</p>
                  <p className="text-gray-600 text-xs">
                    <strong>Data collected:</strong> {service.dataTypes}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Data Retention */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-white border border-gray-200 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Retention</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                I retain personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Contact inquiries:</strong> Retained for 2 years or until the inquiry is resolved</li>
                <li><strong>Project communications:</strong> Retained for the duration of the project plus 3 years for records</li>
                <li><strong>Analytics data:</strong> Retained according to service provider policies (typically 26 months for Google Analytics)</li>
                <li><strong>Technical logs:</strong> Retained for 90 days for security and troubleshooting purposes</li>
              </ul>
            </div>
          </motion.section>

          {/* International Transfers */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-white border border-gray-200 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">International Data Transfers</h2>
            <div className="text-gray-700">
              <p className="mb-4">
                As I work with clients globally and use international service providers, your personal information may be transferred to and processed in countries other than your own. When this occurs, I ensure appropriate safeguards are in place to protect your information, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Using service providers that comply with international data protection standards</li>
                <li>Implementing appropriate technical and organizational measures</li>
                <li>Ensuring adequate levels of protection through privacy frameworks and agreements</li>
              </ul>
            </div>
          </motion.section>

          {/* Contact and Updates */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-2xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions or Concerns?</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              If you have any questions about this privacy policy, want to exercise your rights, 
              or have concerns about how your information is handled, please don't hesitate to contact me.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Me
              </Link>
              <Link
                href="mailto:wisdom@example.com"
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-gray-900 hover:text-gray-900 transition-all duration-300"
              >
                Email Directly
              </Link>
            </div>

            <div className="mt-8 pt-6 border-t border-blue-200">
              <p className="text-sm text-gray-600">
                This privacy policy may be updated from time to time. I'll notify you of any significant changes 
                by posting the new policy on this page with an updated "last modified" date.
              </p>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
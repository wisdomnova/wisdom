'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, Gavel, Users, CreditCard, Shield, AlertTriangle, Calendar, Mail } from "lucide-react";

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    icon: FileText,
    content: [
      {
        subtitle: "Agreement to Terms",
        text: "By accessing or using my website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site."
      },
      {
        subtitle: "Changes to Terms",
        text: "I reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on this website. Your continued use of the service after any such changes constitutes your acceptance of the new terms."
      }
    ]
  },
  {
    id: "services",
    title: "Services Offered",
    icon: Users,
    content: [
      {
        subtitle: "Development Services",
        text: "I provide web development, mobile app development, backend development, and related technical consulting services. All services are provided on a project basis or through ongoing contracts as agreed upon."
      },
      {
        subtitle: "Service Scope",
        text: "The specific scope, timeline, and deliverables for each project will be defined in a separate project agreement or statement of work. These terms govern the general relationship and supplement any project-specific agreements."
      },
      {
        subtitle: "Quality Standards",
        text: "I strive to deliver high-quality work that meets industry standards and your specified requirements. All code will be tested and functional according to the agreed specifications."
      }
    ]
  },
  {
    id: "client-responsibilities",
    title: "Client Responsibilities",
    icon: Users,
    content: [
      {
        subtitle: "Information Provision",
        text: "You agree to provide accurate, complete, and timely information necessary for project completion. This includes content, assets, credentials, and feedback required for the development process."
      },
      {
        subtitle: "Communication",
        text: "You agree to maintain reasonable communication throughout the project, respond to requests for feedback within agreed timeframes, and participate in scheduled meetings and reviews."
      },
      {
        subtitle: "Payment Obligations",
        text: "You agree to pay all fees according to the agreed payment schedule. Late payments may result in project delays or suspension of services."
      }
    ]
  },
  {
    id: "payment-terms",
    title: "Payment and Billing",
    icon: CreditCard,
    content: [
      {
        subtitle: "Payment Schedule",
        text: "Payment terms are specified in individual project agreements. Typically, projects require a deposit before work begins, with remaining payments tied to project milestones or completion."
      },
      {
        subtitle: "Late Payments",
        text: "Late payments may incur interest charges and may result in suspension of work. Projects will not be delivered or deployed until all outstanding payments are received."
      },
      {
        subtitle: "Refund Policy",
        text: "Refunds are handled on a case-by-case basis. Work completed to date is generally non-refundable. Specific refund terms will be outlined in project agreements."
      },
      {
        subtitle: "Expenses",
        text: "Unless otherwise agreed, you are responsible for third-party costs such as hosting, domain registration, software licenses, and other project-related expenses."
      }
    ]
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    icon: Shield,
    content: [
      {
        subtitle: "Ownership of Deliverables",
        text: "Upon full payment, you will own the custom code and deliverables created specifically for your project. This includes designs, code, and other work products developed exclusively for you."
      },
      {
        subtitle: "Pre-existing Materials",
        text: "I retain ownership of pre-existing tools, frameworks, libraries, and general methodologies used in your project. You receive a license to use these materials as part of your project."
      },
      {
        subtitle: "Third-party Components",
        text: "Projects may include third-party libraries, frameworks, or components subject to their own licenses. You are responsible for compliance with these licenses."
      },
      {
        subtitle: "Portfolio Rights",
        text: "I reserve the right to showcase your project in my portfolio and marketing materials unless specifically agreed otherwise. Confidential or sensitive information will not be disclosed."
      }
    ]
  },
  {
    id: "warranties",
    title: "Warranties and Disclaimers",
    icon: AlertTriangle,
    content: [
      {
        subtitle: "Limited Warranty",
        text: "I warrant that services will be performed in a professional manner consistent with industry standards. I will correct any defects in the deliverables for a period of 30 days after project completion at no additional cost."
      },
      {
        subtitle: "Disclaimer of Warranties",
        text: "Except as expressly stated, all services are provided 'as is' without warranty of any kind. I disclaim all other warranties, express or implied, including but not limited to warranties of merchantability and fitness for a particular purpose."
      },
      {
        subtitle: "Third-party Services",
        text: "I am not responsible for the performance, availability, or security of third-party services, hosting providers, or other external dependencies unless specifically agreed upon."
      }
    ]
  },
  {
    id: "limitation-liability",
    title: "Limitation of Liability",
    icon: Gavel,
    content: [
      {
        subtitle: "Limitation of Damages",
        text: "In no event shall I be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities."
      },
      {
        subtitle: "Maximum Liability",
        text: "My total liability for any claims arising from or related to services provided shall not exceed the total amount paid by you for the specific project giving rise to the claim."
      },
      {
        subtitle: "Force Majeure",
        text: "I am not liable for delays or failures in performance due to circumstances beyond my reasonable control, including but not limited to natural disasters, government actions, or technical infrastructure failures."
      }
    ]
  }
];

const additionalTerms = [
  {
    title: "Confidentiality",
    content: "I will maintain the confidentiality of your proprietary information and will not disclose it to third parties without your consent, except as required by law."
  },
  {
    title: "Termination",
    content: "Either party may terminate a project with written notice. You will be responsible for payment for all work completed up to the termination date."
  },
  {
    title: "Governing Law",
    content: "These terms are governed by the laws of Nigeria and any disputes will be resolved through binding arbitration or in the courts of Nigeria."
  },
  {
    title: "Independent Contractor",
    content: "I am an independent contractor and not an employee. This agreement does not create a partnership, joint venture, or agency relationship."
  }
];

export default function TermsPage() {
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
              <Gavel size={16} />
              Terms of Service
            </motion.div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              Terms of{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              These terms govern the use of my website and the development services I provide. 
              Please read them carefully before engaging my services.
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

          {/* Quick Overview */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-2xl"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Overview</h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Services</h3>
                <p className="text-sm">Web development, mobile apps, backend systems, and technical consulting.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Payment</h3>
                <p className="text-sm">Project-based pricing with deposits and milestone payments as agreed.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Ownership</h3>
                <p className="text-sm">You own custom work created for your project upon full payment.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Support</h3>
                <p className="text-sm">30-day warranty on deliverables with ongoing support options available.</p>
              </div>
            </div>
          </motion.section>

          {/* Main Terms Sections */}
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

          {/* Additional Terms */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-white border border-gray-200 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Additional Terms</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {additionalTerms.map((term, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{term.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{term.content}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Project Process */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-white border border-gray-200 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Typical Project Process</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Initial Consultation</h3>
                  <p className="text-gray-700 text-sm">We discuss your requirements, timeline, and budget to ensure alignment.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Project Agreement</h3>
                  <p className="text-gray-700 text-sm">Detailed scope, timeline, and payment terms are documented and agreed upon.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Development & Updates</h3>
                  <p className="text-gray-700 text-sm">Regular progress updates and milestone reviews throughout development.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Delivery & Support</h3>
                  <p className="text-gray-700 text-sm">Project delivery with 30-day warranty and ongoing support options.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Dispute Resolution */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-white border border-gray-200 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Dispute Resolution</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                I believe in maintaining positive client relationships and resolving any issues through open communication. 
                If disputes arise, I encourage the following approach:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li><strong>Direct Communication:</strong> Contact me directly to discuss the issue and work toward a resolution.</li>
                <li><strong>Mediation:</strong> If direct communication doesn't resolve the issue, we can engage a neutral mediator.</li>
                <li><strong>Arbitration:</strong> As a last resort, disputes will be resolved through binding arbitration in Nigeria.</li>
              </ol>
              <p className="text-sm text-gray-600 mt-4">
                Most issues can be resolved through clear communication and a commitment to finding mutually beneficial solutions.
              </p>
            </div>
          </motion.section>

          {/* Contact Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-2xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About These Terms?</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              If you have any questions about these terms of service or need clarification about any aspect 
              of working together, please don't hesitate to reach out.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Discuss Your Project
              </Link>
              <Link
                href="mailto:wisdom@example.com"
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-gray-900 hover:text-gray-900 transition-all duration-300"
              >
                Ask Questions
              </Link>
            </div>

            <div className="mt-8 pt-6 border-t border-blue-200">
              <p className="text-sm text-gray-600">
                These terms may be updated periodically. Significant changes will be communicated to active clients. 
                Continued use of services after changes constitutes acceptance of new terms.
              </p>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
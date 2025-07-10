'use client';

import { motion } from "framer-motion";
import { 
  Code, 
  Smartphone, 
  Server, 
  Database, 
  Cloud, 
  Palette,
  Brain,
  Globe
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    skills: ["React", "Next.js", "React Native", "Remix", "TypeScript", "JavaScript"]
  },
  {
    title: "Styling & Design",
    icon: Palette,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    skills: ["Tailwind CSS", "Uno CSS", "UI/UX Design", "Responsive Design"]
  },
  {
    title: "Backend Development",
    icon: Server,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    skills: ["Node.js", "Django", "PHP", "Python", "RESTful APIs"]
  },
  {
    title: "Database & Cloud",
    icon: Database,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    skills: ["PostgreSQL", "MongoDB", "SQL", "Vercel", "Docker", "Render"]
  },
  {
    title: "CMS & Platforms",
    icon: Globe,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    skills: ["WordPress", "Headless CMS", "E-commerce", "Content Management"]
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    skills: ["ML Design", "Python ML", "AI Integration", "Data Analysis"]
  }
];

const expertise = [
  { name: "Frontend Development", level: 92 }, 
  { name: "React/Next.js", level: 95 },
  { name: "Mobile Development", level: 90 },
  { name: "Backend Systems", level: 88 },
  { name: "Database Design", level: 85 },
  { name: "API Development", level: 87 }
];

export default function SkillsSection() {
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
          Skills & Expertise
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          A comprehensive toolkit for building modern digital solutions
        </p>
      </motion.div>
 
      {/* Skills Categories */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                <Icon size={24} className={category.color} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Expertise Levels */}
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Proficiency Levels</h3>
        <div className="space-y-6">
          {expertise.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-900 font-semibold text-lg">{skill.name}</span>
                <span className="text-gray-600 font-medium">{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
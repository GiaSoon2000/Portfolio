'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => { 
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'Java', 'SQL']
    },
    {
      title: 'Frontend Development',
      skills: ['React', 'Next.js', 'Angular', 'TailwindCSS', 'HTML5', 'CSS3', 'JavaFX']
    },
    {
      title: 'Backend Development',
      skills: ['Flask', 'FastAPI', 'REST APIs', 'Node.js (basic)']
    },
    {
      title: 'Databases & Data',
      skills: ['MySQL', 'Azure SQL', 'XAMPP', 'Time-Series Data Processing']
    },
    {
      title: 'DevOps & Cloud',
      skills: ['Docker', 'Vercel', 'Render', 'GitHub Actions', 'CI/CD', 'Azure']
    },
    {
      title: 'AI / Optimization',
      skills: ['Scikit-learn', 'Optimization Logic', 'Data Preprocessing', 'Model Deployment (basic)']
    },
    {
      title: 'Tools & Collaboration',
      skills: ['Git/GitHub', 'Postman', 'Figma', 'Jira']
    }
  ];


  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl float-animation" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here are the technologies and tools I've been working with during my studies and internship. 
            I'm constantly learning and expanding my skill set to stay current with industry trends.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-modern p-8 group hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full"></div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden bg-gradient-to-r from-primary-50 to-primary-100 text-primary-800 px-4 py-2 rounded-2xl text-sm font-semibold border border-primary-200 hover:border-primary-300 transition-all duration-300 hover:shadow-md hover:scale-105"
                  >
                    <span className="relative z-10">{skill}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-primary-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="card-modern p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Learning & Growth</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm passionate about continuous learning and staying up-to-date with the latest technologies. 
              Currently exploring advanced React patterns, cloud computing with Azure, and AI/ML integration 
              in web applications. I believe in the power of technology to solve real-world problems and 
              make a positive impact.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

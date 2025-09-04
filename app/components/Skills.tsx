'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'Java', 'JavaScript', 'SQL']
    },
    {
      title: 'Frontend Development',
      skills: ['React', 'Angular', 'JavaFX', 'HTML5', 'CSS3', 'TailwindCSS']
    },
    {
      title: 'Backend Development',
      skills: ['Flask', 'REST APIs', 'Node.js (basic)']
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'Azure SQL', 'XAMPP']
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git/GitHub', 'Postman', 'Figma', 'Azure']
    }
  ]

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I've been working with during my studies and internship.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

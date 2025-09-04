'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: 'Software Development Intern',
      company: 'ER Group Technology Sdn Bhd, Johor',
      period: 'June 2025 - August 2025',
      description: [
        'Contributed to frontend development and UI enhancements of a corporate web portal using Angular framework',
        'Designed and implemented responsive user interfaces, ensuring mobile compatibility and improved user experience',
        'Collaborated with design team using Figma to translate mockups into functional UI components',
        'Developed interactive features such as registration workflows, navigation menus, and real-time validation logic',
        'Assisted in integrating frontend features with backend APIs in a modular and maintainable manner',
        'Participated in team meetings and task planning sessions to align development with client requirements',
        'Explored cross-platform social media sharing integration for dynamic content'
      ],
      technologies: ['Angular', 'Figma', 'REST APIs', 'Git']
    },
    {
      title: 'Robotics Trainer',
      company: 'U1 Robotics Centre, Johor',
      period: 'June 2023 - Present',
      description: [
        'Proficient in guiding students through the process of designing, building, and programming robots using LEGO Mindstorms',
        'Committed to fostering a love for Science, Technology, Engineering, and Mathematics (STEM) through engaging workshops',
        'Created an environment that encourages creativity, critical thinking, and problem-solving skills',
        'Provided age-appropriate challenges to cater to diverse learning needs'
      ],
      technologies: ['LEGO Mindstorms', 'STEM Education', 'Robotics Programming']
    },
    {
      title: 'Marketing Leader',
      company: 'RAA Realty, Johor',
      period: 'February 2019 - January 2021',
      description: [
        'Generated appointments for property viewings, mortgage advisors, and valuations',
        'Handled property inquiries from potential buyers and conducted viewings',
        'Highlighted key property features, answered buyer questions, and provided value comparisons',
        'Negotiated property sales and followed up on business leads'
      ],
      technologies: ['Sales', 'Marketing', 'Property Management', 'Customer Service']
    }
  ]

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My professional journey and academic projects that have shaped my development skills.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{experience.title}</h3>
                  <p className="text-lg text-primary-600 font-medium">{experience.company}</p>
                </div>
                <span className="text-gray-600 mt-2 lg:mt-0">{experience.period}</span>
              </div>
              
              <ul className="space-y-2 mb-6">
                {experience.description.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
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

export default Experience

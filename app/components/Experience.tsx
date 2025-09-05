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
        'Built responsive UI components in Angular, improving mobile accessibility for >1,000 users',
        'Developed interactive features including registration workflows, validation logic, and navigation menus',
        'Integrated frontend with backend APIs to ensure modular and maintainable architecture',
        'Collaborated with design team using Figma, translating mockups into functional code',
        'Participated in Agile sprints, aligning tasks with client requirements'
      ],
      technologies: ['Angular', 'Figma', 'REST APIs', 'Git', 'Agile']
    },
    {
      title: 'Robotics Trainer',
      company: 'U1 Robotics Centre, Johor',
      period: 'June 2023 - Present',
      description: [
        'Guide students through designing, building, and programming robots using LEGO Mindstorms and other robotics platforms',
        'Foster love for Science, Technology, Engineering, and Mathematics (STEM) through engaging workshops',
        'Create environment that encourages creativity, critical thinking, and problem-solving skills',
        'Provide age-appropriate challenges to cater to diverse learning needs'
      ],
      technologies: ['LEGO Mindstorms', 'STEM Education', 'Robotics Programming', 'Teaching']
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
    },
    {
      title: 'Sales Executive',
      company: 'Melium Group Sdn. Bhd. (Aigner), Johor Premium Outlets',
      period: 'February 2018 - February 2019',
      description: [
        'Managed stock systems and product display, gaining experience with data organization and system optimization',
        'Resolved customer inquiries and complaints, developing strong problem-solving and communication skills',
        'Streamlined cashiering operations, demonstrating ability to identify and implement efficiency improvements',
        'Assisted customers and resolved inquiries, building essential customer service skills for software development'
      ],
      technologies: ['Customer Service', 'Inventory Management', 'Problem Solving', 'Communication']
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

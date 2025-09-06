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
    <section id="experience" className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl float-animation" style={{animationDelay: '5s'}}></div>
      </div>

      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My professional journey and academic projects that have shaped my development skills. 
            From software development to teaching robotics, each experience has contributed to my growth as a developer.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-modern p-8 group hover:scale-[1.02]"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full"></div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                      {experience.title}
                    </h3>
                  </div>
                  <p className="text-lg text-primary-600 font-semibold mb-2">{experience.company}</p>
                </div>
                <div className="lg:ml-6 lg:text-right">
                  <span className="inline-block bg-gradient-to-r from-primary-100 to-primary-200 text-primary-800 px-4 py-2 rounded-2xl text-sm font-semibold">
                    {experience.period}
                  </span>
                </div>
              </div>
              
              <div className="mb-6">
                <ul className="space-y-3">
                  {experience.description.map((item, idx) => (
                    <motion.li 
                      key={idx} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (idx * 0.05) }}
                      viewport={{ once: true }}
                      className="flex items-start group/item"
                    >
                      <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full mt-2 mr-3 group-hover/item:scale-125 transition-transform duration-300"></div>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {experience.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (techIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary-50 to-primary-100 text-primary-800 px-4 py-2 rounded-2xl text-sm font-semibold border border-primary-200 hover:border-primary-300 transition-all duration-300 hover:shadow-md hover:scale-105"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Career Timeline Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="card-modern p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Career Journey</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              From retail sales to software development, my career path reflects a journey of continuous learning and adaptation. 
              Each role has equipped me with valuable skills that contribute to my success as a software engineer, 
              from customer service and problem-solving to technical implementation and team collaboration.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

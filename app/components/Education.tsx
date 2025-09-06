'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar } from 'lucide-react'

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Software Engineering',
      institution: 'Southern University College',
      period: '2022 - 2025',
      location: 'Malaysia',
      description: 'Currently pursuing my degree with focus on software development, AI integration, and modern web technologies.',
      achievements: [
        'Gold Award at JIIICaS 2025 for AI-powered property system',
        'Gold Award at i-RICE\'25 for innovative project',
        'Bronze Medal at Virtual Innovation Competition 2025',
        'Copyright registration for MYPropertyWise project'
      ]
    }
  ]

  return (
    <section id="education" className="section-padding bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-full blur-3xl float-animation" style={{animationDelay: '7s'}}></div>
      </div>

      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
            <span className="gradient-text">Education</span> & Learning
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            My academic journey in Software Engineering, where I've combined theoretical knowledge 
            with practical applications to create innovative solutions and achieve recognition in competitions.
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-modern p-4 sm:p-6 lg:p-8 group hover:scale-[1.02]"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-8">
                <motion.div 
                  className="bg-gradient-to-r from-primary-100 to-primary-200 p-3 sm:p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                  whileHover={{ rotate: 5 }}
                >
                  <GraduationCap className="text-primary-600" size={32} />
                </motion.div>
                <div className="flex-1 w-full">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {edu.degree}
                  </h3>
                  <p className="text-lg sm:text-xl text-primary-600 font-semibold mb-4">{edu.institution}</p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 text-gray-600">
                    <motion.div 
                      className="flex items-center gap-2 bg-gray-100 px-3 sm:px-4 py-2 rounded-2xl"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Calendar size={16} />
                      <span className="font-medium text-sm sm:text-base">{edu.period}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-2 bg-gray-100 px-3 sm:px-4 py-2 rounded-2xl"
                      whileHover={{ scale: 1.05 }}
                    >
                      <MapPin size={16} />
                      <span className="font-medium text-sm sm:text-base">{edu.location}</span>
                    </motion.div>
                  </div>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <p className="text-lg text-gray-700 leading-relaxed text-justify">{edu.description}</p>
              </motion.div>
              
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full"></div>
                  Key Achievements
                </h4>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  {edu.achievements.map((achievement, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (idx * 0.1) }}
                      viewport={{ once: true }}
                      className="flex items-start group/achievement"
                    >
                      <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full mt-2 mr-3 group-hover/achievement:scale-125 transition-transform duration-300"></div>
                      <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic Focus Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="card-modern p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Academic Focus</h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
              My studies focus on modern software development practices, AI integration, and user-centered design. 
              Through hands-on projects and competitions, I've developed expertise in full-stack development, 
              machine learning applications, and creating solutions that address real-world problems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education

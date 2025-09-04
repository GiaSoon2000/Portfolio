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
    <section id="education" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My academic journey and achievements in Software Engineering.
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <GraduationCap className="text-primary-600" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                  <p className="text-lg text-primary-600 font-medium mb-2">{edu.institution}</p>
                  <div className="flex items-center gap-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">{edu.description}</p>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

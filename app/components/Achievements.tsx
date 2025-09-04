'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Award, Trophy, Medal } from 'lucide-react'

const Achievements = () => {
  const achievements = [
    {
      title: 'Gold Award Certificate - JIIICaS 2025',
      organization: 'Faculty of Computer and Mathematical Sciences, Universiti Teknologi MARA',
      project: 'Decision-Making System for Property Buying',
      icon: <Trophy className="text-yellow-500" size={24} />
    },
    {
      title: 'Gold Award Certificate - i-RICE\'25',
      organization: 'Institution of Engineers, Malaysia IEM - SUC Student Section',
      project: 'AI-Powered Decision-Making System for Property Buying',
      icon: <Trophy className="text-yellow-500" size={24} />
    },
    {
      title: 'Bronze Medal - Virtual Innovation Competition 2025',
      organization: 'DIGIT360 & Universiti Teknologi MARA (UiTM) Kelantan Branch',
      project: 'Decision-Making System for Property Buying',
      icon: <Medal className="text-orange-500" size={24} />
    },
    {
      title: 'Copyright Notification - January 2025',
      organization: 'Intellectual Property Corporation of Malaysia',
      project: 'Source Code for AI-Powered Decision-Making System for Property Buying (MYPropertyWise)',
      icon: <Award className="text-blue-500" size={24} />
    }
  ]

  return (
    <section id="achievements" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Awards & Achievements</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Recognition for my innovative projects and contributions to technology innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  {achievement.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 mb-2">{achievement.organization}</p>
                  <p className="text-primary-600 font-medium">{achievement.project}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements

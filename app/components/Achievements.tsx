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
    <section id="achievements" className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl float-animation" style={{animationDelay: '8s'}}></div>
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
            Awards & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Recognition for my innovative projects and contributions to technology innovation. 
            These awards reflect my commitment to excellence and my ability to create solutions 
            that make a real impact in the field of software engineering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-modern p-8 group hover:scale-[1.02]"
            >
              <div className="flex items-start gap-6">
                <motion.div 
                  className="flex-shrink-0 p-4 rounded-2xl bg-gradient-to-r from-gray-100 to-gray-200 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  {achievement.icon}
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300 leading-tight">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 mb-3 leading-relaxed">{achievement.organization}</p>
                  <div className="inline-block bg-gradient-to-r from-primary-50 to-primary-100 px-4 py-2 rounded-2xl border border-primary-200">
                    <p className="text-primary-700 font-semibold text-sm">{achievement.project}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="card-modern p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Achievement Highlights</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">2</div>
                <div className="text-gray-600 font-semibold">Gold Awards</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">1</div>
                <div className="text-gray-600 font-semibold">Bronze Medal</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">1</div>
                <div className="text-gray-600 font-semibold">Copyright Registration</div>
              </div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mt-6">
              These achievements demonstrate my ability to create innovative solutions that are recognized 
              by industry professionals and academic institutions. Each award represents a milestone in my 
              journey as a software engineer and validates my commitment to excellence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements

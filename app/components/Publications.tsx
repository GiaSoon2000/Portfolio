'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Calendar, Users } from 'lucide-react'

const Publications = () => {
  const publications = [
    {
      title: 'Extended Abstract: Decision-Making System for Property Buying',
      journal: 'The JIIICaS 2025 e-Proceedings',
      type: 'Peer-reviewed, non-indexed conference publication',
      date: '02 September 2025',
      authors: ['Chang Gia Soon', 'Tan Yan Jie', 'Noor Fatihah bt Mazlam', 'Asst. Prof. Dr. Masitah Binti Zulkepli'],
      description: 'Published research on the AI-powered decision-making system for property buying, presented at the Johor International Innovation, Invention Competition and Symposium 2025.'
    }
  ]

  return (
    <section id="publications" className="section-padding bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl float-animation" style={{animationDelay: '9s'}}></div>
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
            Research <span className="gradient-text">Publications</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My research contributions and academic publications in the field of software engineering and AI. 
            These publications represent my commitment to advancing knowledge and sharing innovative solutions 
            with the academic and professional community.
          </p>
        </motion.div>

        <div className="space-y-8">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-modern p-8 group hover:scale-[1.02]"
            >
              <div className="flex items-start gap-6 mb-8">
                <motion.div 
                  className="bg-gradient-to-r from-primary-100 to-primary-200 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <BookOpen className="text-primary-600" size={40} />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300 leading-tight">
                    {pub.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                    <motion.div 
                      className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-2xl"
                      whileHover={{ scale: 1.05 }}
                    >
                      <BookOpen size={18} />
                      <span className="font-medium">{pub.journal}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-2xl"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Calendar size={18} />
                      <span className="font-medium">{pub.date}</span>
                    </motion.div>
                  </div>
                  <div className="inline-block bg-gradient-to-r from-primary-50 to-primary-100 px-4 py-2 rounded-2xl border border-primary-200">
                    <p className="text-primary-700 font-semibold text-sm">{pub.type}</p>
                  </div>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full"></div>
                  <Users size={20} />
                  Authors
                </h4>
                <div className="inline-block bg-gray-50 p-4 rounded-2xl">
                  <p className="text-gray-700 leading-relaxed">{pub.authors.join(', ')}</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full"></div>
                  Abstract
                </h4>
                <p className="text-gray-700 leading-relaxed text-justify">{pub.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Research Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="card-modern p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Research Impact</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              My research focuses on practical applications of AI and machine learning in real-world scenarios. 
              The published work on the AI-powered property decision-making system demonstrates how academic research 
              can be translated into innovative solutions that address genuine market needs and provide value to users.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Publications

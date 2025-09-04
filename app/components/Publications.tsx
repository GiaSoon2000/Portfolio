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
    <section id="publications" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Publications</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My research contributions and academic publications in the field of software engineering and AI.
          </p>
        </motion.div>

        <div className="space-y-8">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <BookOpen className="text-primary-600" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{pub.title}</h3>
                  <div className="flex items-center gap-4 text-gray-600 mb-3">
                    <div className="flex items-center gap-2">
                      <BookOpen size={16} />
                      <span className="font-medium">{pub.journal}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{pub.date}</span>
                    </div>
                  </div>
                  <p className="text-primary-600 font-medium mb-3">{pub.type}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Users size={20} />
                  Authors:
                </h4>
                <p className="text-gray-700">{pub.authors.join(', ')}</p>
              </div>
              
              <p className="text-gray-700 leading-relaxed">{pub.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Publications

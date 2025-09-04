'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, ChevronLeft, ChevronRight } from 'lucide-react'

// Photo Carousel Component
const PhotoCarousel = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0)
  
  const photos = [
    {
      src: '/photo1.jpeg',
      alt: 'Chang Gia Soon - Software Engineering Student'
    },
    {
      src: '/photo2.jpeg',
      alt: 'Chang Gia Soon - Outdoor Photo'
    }
  ]

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length)
  }

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length)
  }

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextPhoto, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl relative group">
      {/* Main Photo */}
      <motion.img
        key={currentPhoto}
        src={photos[currentPhoto].src}
        alt={photos[currentPhoto].alt}
        className="w-full h-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Navigation Arrows */}
      <button
        onClick={prevPhoto}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Previous photo"
      >
        <ChevronLeft size={20} />
      </button>
      
      <button
        onClick={nextPhoto}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Next photo"
      >
        <ChevronRight size={20} />
      </button>
      
      {/* Photo Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPhoto(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentPhoto ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to photo ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

const About = () => {
  return (
    <section id="about" className="section-padding min-h-screen flex items-center">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Hi, I'm{' '}
              <span className="text-primary-600">Chang Gia Soon</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl lg:text-3xl text-gray-600 mb-8"
            >
              Bachelor of Software Engineering Student
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-700 mb-8 leading-relaxed"
            >
              I'm a passionate Software Engineering student at Southern University College (2022-2025) 
              with a strong foundation in frontend development and AI integration. Currently completing 
              my internship at ER Group Technology, I'm excited to contribute to innovative projects 
              that make a difference in people's lives. I'm Malaysian and willing to relocate for 
              exciting opportunities in software engineering.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Mail size={20} />
                Get In Touch
              </a>
              
              <a
                href="https://docs.google.com/document/d/1-GSCpJqYhVOteV3M4Ung7sOlxxxcvW0gEkwSFcXTzTI/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Download size={20} />
                View CV
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex gap-4 mt-8"
            >
              <a
                href="https://github.com/GiaSoon2000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/ricky-chang-80728628b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <PhotoCarousel />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
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
    ,
    {
      src: '/photo3.jpeg',
      alt: 'Chang Gia Soon - Casual Photo'
    }
  ]

  const timerRef = React.useRef<number | null>(null)

  const nextPhoto = React.useCallback(() => {
    setCurrentPhoto((prev) => {
      const next = (prev + 1) % photos.length
      return next
    })
  }, [photos])

  const prevPhoto = React.useCallback(() => {
    setCurrentPhoto((prev) => {
      const next = (prev - 1 + photos.length) % photos.length
      return next
    })
  }, [photos])

  // Auto-advance every 5 seconds - uses timerRef so we can reset on manual navigation
  useEffect(() => {
    const start = () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
      timerRef.current = window.setInterval(() => {
        nextPhoto()
      }, 5000)
    }

    start()

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [nextPhoto])

  // Reset timer when user manually navigates (so auto timing restarts)
  const handleNext = () => {
    nextPhoto()
    if (timerRef.current) {
      window.clearInterval(timerRef.current)
      timerRef.current = window.setInterval(nextPhoto, 5000)
    }
  }

  const handlePrev = () => {
    prevPhoto()
    if (timerRef.current) {
      window.clearInterval(timerRef.current)
      timerRef.current = window.setInterval(nextPhoto, 5000)
    }
  }

  // Preload images so auto-advance doesn't hit a race with loading
  useEffect(() => {
    const imgs: HTMLImageElement[] = []
    photos.forEach((p) => {
      const img = document.createElement('img') as HTMLImageElement
      img.src = p.src
      imgs.push(img)
    })

    return () => {
      imgs.forEach((i) => {
        i.onload = null
        i.onerror = null
      })
    }
  }, [photos])

  return (
    <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl relative group">
      {/* Main Photo (Next.js Image for optimization) */}
      <motion.div
        key={currentPhoto}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full relative"
      >
        <Image
          src={photos[currentPhoto].src}
          alt={photos[currentPhoto].alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority={false}
        />
      </motion.div>
      
      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Previous photo"
      >
        <ChevronLeft size={20} />
      </button>
      
      <button
        onClick={handleNext}
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
    <section id="about" className="section-padding pt-20 sm:pt-24 lg:pt-32 min-h-screen flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary-400/20 to-primary-600/20 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl float-animation" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-5 gap-16 items-start"
        >
          <div className="space-y-8 lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text">Chang Gia Soon</span>
              </h1>
              
              <h2 className="text-2xl lg:text-3xl text-gray-600 font-medium">
                Bachelor of Software Engineering Student
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card-modern p-8"
            >
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                I'm a passionate Software Engineering student at Southern University College (2022-2025) 
                with a strong foundation in frontend development and AI integration. Currently completing 
                my internship at ER Group Technology, I'm excited to contribute to innovative projects 
                that make a difference in people's lives. I'm Malaysian and willing to relocate for 
                exciting opportunities in software engineering.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="btn-primary inline-flex items-center gap-3"
              >
                <Mail size={20} />
                Get In Touch
              </a>
              
              <a
                href="https://docs.google.com/document/d/1-GSCpJqYhVOteV3M4Ung7sOlxxxcvW0gEkwSFcXTzTI/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-3"
              >
                <Download size={20} />
                View CV
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex gap-6"
            >
              <a
                href="https://github.com/GiaSoon2000"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-white/50 hover:bg-white transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <Github size={28} className="text-gray-700 hover:text-primary-600 transition-colors duration-200" />
              </a>
              <a
                href="https://linkedin.com/in/ricky-chang-80728628b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-white/50 hover:bg-white transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <Linkedin size={28} className="text-gray-700 hover:text-primary-600 transition-colors duration-200" />
              </a>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative lg:mt-0 mt-8 lg:col-span-2"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-400/20 to-purple-400/20 rounded-3xl blur-2xl"></div>
            <div className="relative">
              <PhotoCarousel />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

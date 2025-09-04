'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download } from 'lucide-react'
import Header from './components/Header'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Publications from './components/Publications'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Publications />
      <Contact />
    </main>
  )
}

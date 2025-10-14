'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Decision-Making System for Property Buying (MYPropertyWise)',
      description: 'Developed MYPropertyWise, an AI-enhanced real estate platform that streamlines property searches and comparisons. Features AI-powered property comparison, interactive AI chatbox, session-based authentication, and role-based access control. Successfully registered copyright for the project.',
      image: '/project1.jpg',
      technologies: ['React', 'Flask', 'MySQL', 'Azure', 'AI Integration'],
      github: 'https://github.com/GiaSoon2000/Decision-making-system-for-property-buying',
      live: 'https://youtu.be/1zi79Vxg4nU',
      featured: true
    },
    {
      title: 'MLOps Demo – End-to-End Machine Learning Deployment Pipeline',
      description: 'Built and deployed a complete MLOps pipeline for a regression model using Flask, Docker, GitHub Actions, and Render. Features include automated retraining, CI/CD testing, and dashboard-based model monitoring.',
      image: '/project2.jpg',
      technologies: ['Flask', 'Docker', 'GitHub Actions', 'Render', 'CI/CD'],
      github: 'https://github.com/GiaSoon2000/mlops-demo',
      live: 'https://mlops-demo-im8g.onrender.com',
      featured: true
    },
    {
      title: 'Timber Man Game',
      description: 'Developed a classic arcade-style tree-chopping game using JavaFX, integrating MySQL via XAMPP for data management. Implemented high-score tracking with JDBC connection.',
      image: '/project3.jpg',
      technologies: ['Java', 'JavaFX', 'MySQL', 'XAMPP', 'JDBC'],
      github: 'https://github.com/GiaSoon2000/Timber-Man_Java2_Project',
      live: 'https://drive.google.com/file/d/14m5SLMobEh8MG4r8gN43-_Lw38EqWRXK/view?usp=sharing',
      featured: false
    },
    {
      title: 'Analysis of Student Mental Health',
      description: 'Analyzed student mental health data from Kaggle by preparing, cleaning, and visualizing the dataset. Visualized trends and patterns using Matplotlib and Seaborn.',
      image: '/project4.jpg',
      technologies: ['Python', 'Data Analysis', 'Matplotlib', 'Seaborn', 'Pandas'],
      github: 'https://github.com/GiaSoon2000/Python-Project',
      live: 'https://github.com/GiaSoon2000/Python-Project/blob/main/analysis-of-student-mental-health.ipynb',
      featured: true
    }
  ]

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl float-animation" style={{animationDelay: '4s'}}></div>
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here are some of the projects I've worked on during my studies, including award-winning AI-powered applications and academic projects that showcase my technical skills and creativity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-modern overflow-hidden group hover:scale-105 flex flex-col"
            >
              <div className="relative h-56 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                <div className="text-white text-center relative z-10">
                  <motion.div 
                    className="text-5xl mb-3"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {index === 0 && "🏠"} {/* AI Property System */}
                    {index === 1 && "🤖"} {/* MLOps Demo */}
                    {index === 2 && "📊"} {/* Data Analysis */}
                    {index === 3 && "🎮"} {/* Game */}
                  </motion.div>
                  <p className="text-lg font-semibold opacity-90">{project.title}</p>
                </div>
                
                {/* Floating particles effect */}
                <div className="absolute inset-0">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
                  <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{project.description}</p>
                
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, techIndex) => (
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
                  
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-primary-600 transition-all duration-300 rounded-2xl font-medium hover:scale-105 hover:shadow-md"
                    >
                      <Github size={20} />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-6 py-3 bg-primary-100 hover:bg-primary-200 text-primary-700 hover:text-primary-800 transition-all duration-300 rounded-2xl font-medium hover:scale-105 hover:shadow-md"
                    >
                      <ExternalLink size={20} />
                      {index === 1 ? 'Demo' : 'Live Demo'}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

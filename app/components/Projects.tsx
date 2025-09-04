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
      title: 'Analysis of Student Mental Health',
      description: 'Analyzed student mental health data from Kaggle by preparing, cleaning, and visualizing the dataset. Visualized trends and patterns using Matplotlib and Seaborn.',
      image: '/project2.jpg',
      technologies: ['Python', 'Data Analysis', 'Matplotlib', 'Seaborn', 'Pandas'],
      github: 'https://github.com/GiaSoon2000/Python-Project',
      live: 'https://github.com/GiaSoon2000/Python-Project/blob/main/analysis-of-student-mental-health.ipynb',
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
    }
  ]

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on during my studies, including award-winning AI-powered applications and academic projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">📱</div>
                  <p className="text-lg font-medium">{project.title}</p>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors duration-200"
                  >
                    <Github size={20} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors duration-200"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
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

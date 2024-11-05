'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code2, Database, Globe, GraduationCap, Laptop, Server, Moon, Sun, Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react"



export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const handleDownloadResume = () => {
    // The PDF file should be placed in the public folder of your Next.js project
    const resumeUrl = 'https://drive.google.com/file/d/1xaBGXuFc4ozs1NTGSGvnp-Hwr1kWPc5f/view?usp=sharing'
    
    // Create a temporary anchor element
    const link = document.createElement('a')
    link.href = resumeUrl
    link.target = '_blank'
    link.download = 'S_Jagadesh_Resume.pdf'

    // Programmatically click the link to trigger the download
    document.body.appendChild(link)
    link.click()

    // Clean up the temporary link
    document.body.removeChild(link)
  }

  

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12 relative">
            <motion.h1 
              className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-2"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              S Jagadesh
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Full Stack Web Developer
            </motion.p>
            <div className="absolute right-0 top-0 flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick= {handleDownloadResume}
              >
                <Download className="h-[1.2rem] w-[1.2rem]" />
              </Button>
            </div>
          </header>

          <motion.section className="mb-12" {...fadeInUp}>
            <Card className="overflow-hidden">
              <CardHeader className="bg-primary text-primary-foreground">
                <CardTitle className="text-2xl flex items-center">
                  <Globe className="mr-2" /> About Me
                </CardTitle>
              </CardHeader>
              <CardContent className="mt-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Hello! My name is S Jagadesh, and I am a passionate Full Stack Web Developer. I specialize in creating beautiful, responsive websites using modern technologies. With practical experience from my internship at Internzy and ongoing studies in B.Tech IT at Jeppiaar Institute of Technology, I'm constantly enhancing my web development skills to create innovative digital solutions.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section className="mb-12" {...fadeInUp}>
            <Card>
              <CardHeader className="bg-primary text-primary-foreground">
                <CardTitle className="text-2xl flex items-center">
                  <Code2 className="mr-2" /> Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center text-gray-800 dark:text-gray-200">
                      <Laptop className="mr-2" /> Frontend
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {['React.js', 'Redux', 'Redux Tool Kit', 'Axios', 'Tailwind CSS'].map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-sm py-1 px-2">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center text-gray-800 dark:text-gray-200">
                      <Server className="mr-2" /> Backend
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {['Node.js', 'Express.js', 'MongoDB', 'Mongoose','Json Web Token'].map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-sm py-1 px-2">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section className="mb-12" {...fadeInUp}>
            <Card>
              <CardHeader className="bg-primary text-primary-foreground">
                <CardTitle className="text-2xl flex items-center">
                  <Database className="mr-2" /> Projects
                </CardTitle>
              </CardHeader>
              <CardContent className="mt-4">
                <ul className="space-y-6">
                <li>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Book-Store-Application</h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">Developed a full-featured MERN stack book-store application with a user-friendly interface for browsing, purchasing, and managing books across multiple genres.</p>
                    <div className="mt-2">
                      <Badge variant="outline" className="mr-2">React</Badge>
                      <Badge variant="outline" className="mr-2">Node.js</Badge>
                      <Badge variant="outline" className="mr-2">Express</Badge>
                      <Badge variant="outline" className="mr-2">Json Web token</Badge>
                      <Badge variant="outline">MongoDB</Badge>
                    </div>
                    <div className="mt-4 flex space-x-4">
                      <a href="https://book-store-frontend-mernstack.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">
                        <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
                      </a>
                      <a href="https://github.com/Jagadesh897/Book-Store-Mern" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">
                        <Github className="w-4 h-4 mr-1" /> GitHub Repo
                      </a>
                    </div>
                  </li>
                  <li>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">User Movie Recommendation Application</h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">A MERN stack application that provides personalized movie recommendations to users based on their viewing history and preferences.</p>
                    <div className="mt-2">
                      <Badge variant="outline" className="mr-2">React</Badge>
                      <Badge variant="outline" className="mr-2">Node.js</Badge>
                      <Badge variant="outline">MongoDB</Badge>
                    </div>
                    <div className="mt-4 flex space-x-4">
                      <a href="https://movie-recommendation-app.example.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">
                        <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
                      </a>
                      <a href="https://github.com/Jagadesh897/Netflix-Gpt" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">
                        <Github className="w-4 h-4 mr-1" /> GitHub Repo
                      </a>
                    </div>
                  </li>
                  <li>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Payment Application</h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">A secure payment application built using the MERN stack, facilitating online transactions with robust security measures and an intuitive user interface.</p>
                    <div className="mt-2">
                      <Badge variant="outline" className="mr-2">Express.js</Badge>
                      <Badge variant="outline" className="mr-2">Redux</Badge>
                      <Badge variant="outline">Mongoose</Badge>
                    </div>
                    <div className="mt-4 flex space-x-4">
                      <a href="https://paybyday-frontend.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">
                        <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
                      </a>
                      <a href="https://github.com/Jagadesh897/PaybyDay" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">
                        <Github className="w-4 h-4 mr-1" /> GitHub Repo
                      </a>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section {...fadeInUp}>
            <Card>
              <CardHeader className="bg-primary text-primary-foreground">
                <CardTitle className="text-2xl flex items-center">
                  <GraduationCap className="mr-2" /> Education
                </CardTitle>
              </CardHeader>
              <CardContent className="mt-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">B.Tech in Information Technology</h3>
                <p className="text-gray-600 dark:text-gray-400">Jeppiaar Institute of Technology</p>
                <p className="text-gray-500 dark:text-gray-500 mt-1">Currently Pursuing</p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.footer 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex justify-center space-x-4">
              <a href='https://github.com/Jagadesh897'><Button variant="ghost" size="icon" >
                <Github className="h-5 w-5" />
              </Button></a>
              <a href='https://www.linkedin.com/in/jagadesh-subramani/'>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button></a>
              <a href="mailto:jagadeshsubramani707@gmail.com"><Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
              </Button></a>
            </div>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              © 2024 S Jagadesh. All rights reserved.
            </p>
          </motion.footer>
        </div>
      </div>
    </div>
  )
}
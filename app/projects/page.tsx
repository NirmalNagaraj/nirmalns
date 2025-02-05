"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Footer } from "@/components/footer"
import { MousePointerAnimation } from "@/components/mouse-pointer-animation"
import { Navbar } from "@/components/navbar"

const projects = [
  {
    title: "Placement Portal",
    description:
      "An automated system for hirers to pick students from their particular college according to their requirements.",
    image: "/projects/placement-portal.png",
    sourceCode: "https://admin-placement.vercel.app/",
    techStack: ["reactjs", "firebase", "nodejs", "expressjs", "aws"],
  },
  {
    title: "DocGpt",
    description: "AI document chatbot for intelligent document interaction and analysis.",
    image: "/projects/docgpt.png",
    sourceCode: "https://github.com/NirmalNagaraj/DocGPT",
    techStack: ["python", "streamlit"],
  },
  {
    title: "SQL Visualizer",
    description: "Interactive platform for visualizing how SQL queries work in real-time.",
    image: "/projects/sql-visualizer.png",
    sourceCode: "https://github.com/NirmalNagaraj/sql-visualizer",
    techStack: ["reactjs", "tailwindcss"],
  },
  {
    title: "Competitive Testing Platform",
    description: "Designed specifically to conduct tests with proctoring capabilities.",
    image: "/projects/testing-platform.png",
    sourceCode: "https://github.com/NirmalNagaraj/kite-compiler",
    techStack: ["nextjs", "firebase", "nodejs"],
  },
]

export default function ProjectsPage() {
  const [typedText, setTypedText] = useState("")
  const fullText = "A small selection of recent projects"

  useEffect(() => {
    let currentIndex = 0
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(intervalId)
      }
    }, 50)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a14] relative overflow-hidden">
      <Navbar />
      {/* Background Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob glassmorphism"></div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 glassmorphism"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 glassmorphism"></div>

      <main className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Projects Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white via-purple-400 to-purple-600 bg-clip-text text-transparent">
            {typedText}
            <span className="typing-cursor"></span>
          </h1>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, rotateX: 2, rotateY: 2 }}
                className="group relative bg-gradient-to-br from-[#1a2942] to-[#1a1f35] rounded-2xl overflow-hidden"
              >
                <div className="aspect-[16/9] relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a2942] to-transparent opacity-60"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-6">{project.description}</p>

                  <div className="flex justify-between items-end">
                    <div className="flex gap-3">
                      {project.techStack.map((tech) => (
                        <div
                          key={tech}
                          className="w-8 h-8 rounded-full bg-[#2a3a5a] p-1.5 transition-transform hover:scale-110"
                        >
                          <Image
                            src={`/icons/${tech}.svg`}
                            alt={tech}
                            width={20}
                            height={20}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ))}
                    </div>

                    <Link
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      Source Code
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <MousePointerAnimation />
    </div>
  )
}


"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import { Footer } from "@/components/footer"
import { MousePointerAnimation } from "@/components/mouse-pointer-animation"
import { Navbar } from "@/components/navbar"

export default function ContactPage() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Ready to take your digital presence to the next level?"

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

      <main className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              {typedText}
              <span className="typing-cursor"></span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a
                href="mailto:nirmal070308@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-white rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 transition-all duration-200 shadow-lg"
              >
                Let&apos;s get in touch
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
      <MousePointerAnimation />
    </div>
  )
}


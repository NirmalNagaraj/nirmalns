
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, ArrowRight } from "lucide-react"
import { Footer } from "@/components/footer"
import { MousePointerAnimation } from "@/components/mouse-pointer-animation"
import { Navbar } from "@/components/navbar"

const blogPosts = [
  {
    title: "Optimizing React Performance: Best Practices for Faster Apps",
    description:
      "Learn how to enhance the performance of your React applications by using techniques like memoization, lazy loading, virtual DOM optimization, and efficient state management.",
    date: "March 1, 2024",
    readTime: "8 min read",
    image: "/blog/react-performance.jpg",
    link: "https://medium.com/@_beelzebub_/optimizing-react-performance-best-practices-for-faster-apps-15364e4d0f4f",
  },
  {
    title: "GraphQL vs REST: Choosing the Right API for Your Project",
    description:
      "A detailed comparison of GraphQL and REST APIs, highlighting their pros and cons, use cases, and performance differences to help developers make an informed decision.",
    date: "February 25, 2024",
    readTime: "10 min read",
    image: "/blog/graphql-vs-rest.jpg",
    link: "https://medium.com/@_beelzebub_/graphql-vs-rest-choosing-the-right-api-for-your-project-e813f53ff3b2",
  },
  {
    title: "Building a Secure Authentication System with Node.js and JWT",
    description:
      "A step-by-step guide on implementing authentication in a Node.js application using JSON Web Tokens (JWT), covering token generation, verification, and security best practices.",
    date: "February 20, 2024",
    readTime: "12 min read",
    image: "/blog/nodejs-auth.jpg",
    link: "https://medium.com/@_beelzebub_/building-a-secure-authentication-system-with-node-js-and-jwt-1a902f5b49dd",
  },
]

export default function BlogPage() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Blog recommendations"

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
          {/* Blog Header */}
          <div className="flex justify-between items-center mb-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {typedText}
                <span className="typing-cursor"></span>
              </h1>
              <p className="text-gray-400 text-lg">Prepared especially for you.</p>
            </div>
            <a
              href="https://medium.com/@_beelzebub_"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors group"
            >
              See the full blog
              <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group"
              >
                <a href={post.link} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-4">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-4 right-4 text-white">
                        <ExternalLink className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <time>{post.date}</time>
                      <span>—</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 line-clamp-2">{post.description}</p>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <MousePointerAnimation />
    </div>
  )
}


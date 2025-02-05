
"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar } from "lucide-react"
import { Footer } from "@/components/footer"
import { MousePointerAnimation } from "@/components/mouse-pointer-animation"
import { Navbar } from "@/components/navbar"

export default function AboutPage() {
  const [typedText, setTypedText] = useState("")
  const fullText =
    "I'm an experienced front-end developer with a passion for design and a knack for tinkering. Web development is my playground, where I push boundaries and chase new horizons."

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
        {/* About Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">About Me</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              {typedText}
              <span className="typing-cursor"></span>
            </p>
          </div>
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <Image src="/profile-3d.png" alt="Profile 3D" fill className="object-contain animate-float" />
          </div>
        </div>

        {/* Cards Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Here&apos;s what sets me apart and makes me unique
          </h2>

          <div className="grid gap-6 max-w-6xl mx-auto">
            {/* First Row */}
            <div className="grid md:grid-cols-5 gap-6">
              {/* Larger Card */}
              <div className="md:col-span-3">
                <div className="card-zoom">
                  <Link href="/" className="block relative aspect-[16/9] overflow-hidden rounded-2xl">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lofzfiZJNfqQxwTWEZiuhmQWOkYFwy.png"
                      alt="Profile"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                      <h3 className="text-2xl font-bold text-white">Learn more about me</h3>
                    </div>
                  </Link>
                </div>
              </div>
              {/* Smaller Card */}
              <div className="md:col-span-2">
                <div className="card-zoom h-full">
                  <Link href="/contact" className="block relative h-full bg-[#1a2942] rounded-2xl p-6">
                    <div className="h-full flex flex-col">
                      <h3 className="text-2xl font-bold text-white mb-3">Book a call with me</h3>
                      <p className="text-gray-400 mb-6">I&apos;d love to chat even if there&apos;s no agenda!</p>
                      <Calendar className="w-10 h-10 text-white mb-4" />
                      <div className="mt-auto">
                        <span className="text-sm text-gray-500">powered by Cal.com</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid md:grid-cols-5 gap-6">
              {/* Smaller Card */}
              <div className="md:col-span-2">
                <div className="card-zoom h-full">
                  <div className="relative h-full bg-[#1a2942] rounded-2xl p-6 flex flex-col items-center justify-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                      <Image src="/profile.jpg" alt="Profile" width={80} height={80} className="object-cover" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">@NirmalNS</h3>
                    <button className="bg-white text-black px-6 py-2 rounded-full font-medium">Follow</button>
                  </div>
                </div>
              </div>
              {/* Larger Card */}
              <div className="md:col-span-3">
                <div className="card-zoom h-full">
                  <div className="relative h-full bg-[#1a2942] rounded-2xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Toolbox</h3>
                    <p className="text-gray-400 mb-4">Check out my favorite tools and spots around the web.</p>
                    <div className="relative h-[200px]">
                      <div className="absolute inset-0 flex items-center justify-center">
                        {[1, 2, 3].map((orbit, i) => (
                          <div
                            key={orbit}
                            className="absolute rounded-full border border-blue-500/20"
                            style={{
                              width: `${(i + 1) * 100}px`,
                              height: `${(i + 1) * 100}px`,
                              animation: `orbit ${10 + i * 5}s linear infinite`,
                            }}
                          />
                        ))}
                        <div className="absolute w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                          <Image src="/logo.svg" alt="Logo" width={24} height={24} className="text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MousePointerAnimation />
    </div>
  )
}


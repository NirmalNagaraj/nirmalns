/*eslint-disable */ 
"use client"

import { useEffect } from "react"
import Image from "next/image"
import { CubePattern } from "@/components/cube-pattern"
import { SocialLinks } from "@/components/social-links"
import { HireMeButton } from "@/components/hire-me-button"
import { ExperienceCard } from "@/components/experience-card"
import { SkillBadge } from "@/components/skill-badge"
import { Footer } from "@/components/footer"
import { Terminal } from "lucide-react"
import { HomeNavbar } from "@/components/home-navbar"

const skills = [
  { name: "HTML5", icon: "/icons/html5.svg", color: "#E34F26" },
  { name: "CSS3", icon: "/icons/css3.svg", color: "#1572B6" },
  { name: "JavaScript", icon: "/icons/javascript.svg", color: "#F7DF1E" },
  { name: "TypeScript", icon: "/icons/typescript.svg", color: "#3178C6" },
  { name: "React", icon: "/icons/react.svg", color: "#61DAFB" },
  { name: "Next.js", icon: "/icons/nextjs.svg", color: "#000000" },
  { name: "Node.js", icon: "/icons/nodejs.svg", color: "#339933" },
  { name: "MongoDB", icon: "/icons/mongodb.svg", color: "#47A248" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg", color: "#336791" },
  { name: "Docker", icon: "/icons/docker.svg", color: "#2496ED" },
  { name: "AWS", icon: "/icons/aws.svg", color: "#FF9900" },
  { name: "Git", icon: "/icons/git.svg", color: "#F05032" },
]

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const sections = document.querySelectorAll("section")

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight

        if (
          scrollPosition > sectionTop - windowHeight / 2 &&
          scrollPosition < sectionTop + sectionHeight - windowHeight / 2
        ) {
          section.classList.add("animate-fadeIn")
        } else {
          section.classList.remove("animate-fadeIn")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#121212] flex flex-col">
      <HomeNavbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-24 relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-4 slide-in-left">
                <Terminal className="w-4 h-4" />
                <span>Welcome to my portfolio</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-medium text-white mb-6 leading-tight slide-in-left">
                Software engineer, technical writer &amp; cloud architect
              </h1>

              <p className="text-lg text-gray-300 mb-8 slide-in-left">
                <span className="dev-gradient font-semibold">I&apos;m Nirmal NS</span>
                <span className="typing-cursor"></span>, an experienced software engineer passionate about cloud
                architecture, technical writing, and building innovative solutions.
              </p>

              <div className="flex items-center gap-6 slide-in-left" style={{ animationDelay: "0.8s" }}>
                <SocialLinks />
                <HireMeButton />
              </div>
            </div>

            <div className="relative w-full h-[600px]">
              <Image
                src="/profile-3d.png"
                alt="3D Developer Illustration"
                fill
                className="animate-float object-contain"
                priority
              />
            </div>
          </div>
          <CubePattern />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob glassmorphism"></div>
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 glassmorphism"></div>
          <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 glassmorphism"></div>
        </section>

        {/* Animated line */}
        <div className="w-1/2 h-0.5 mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 animate-flow-x"></div>

        {/* Experience Section */}
        <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl font-bold mb-12 text-white text-center">Work Experience</h2>
            <div className="space-y-6">
              <ExperienceCard
                company="Coyotech"
                role="Full Stack Developer"
                period="2025 - Present"
                description="Working on full-stack development projects using modern technologies and best practices."
                logo="/company-logos/coyotech.png"
              />
              <ExperienceCard
                company="Steam A"
                role="Graduate Developer Intern"
                period="2024 - 2025"
                description="Contributed to various development projects while learning and implementing new technologies."
                logo="/company-logos/steam-a.png"
              />
              <ExperienceCard
                company="Altruisty"
                role="Developer Intern"
                period="2023 - 2024"
                description="Gained hands-on experience in software development and collaborated with senior developers."
                logo="/company-logos/altruisty.png"
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 bg-[#121212] relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl font-bold mb-12 text-white text-center">Skills &amp; Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
              {skills.map((skill) => (
                <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} color={skill.color} />
              ))}
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, Text3D } from "@react-three/drei"
import { Suspense } from "react"

const skills = [
  { name: "Next.js", color: "#000000" },
  { name: "React", color: "#61DAFB" },
  { name: "Node.js", color: "#339933" },
  { name: "Docker", color: "#2496ED" },
  { name: "AWS", color: "#FF9900" },
  { name: "MongoDB", color: "#47A248" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Python", color: "#3776AB" },
  { name: "Java", color: "#007396" },
  { name: "WordPress", color: "#21759B" },
  { name: "Figma", color: "#F24E1E" },
]

function SkillText({ name, color, position }: { name: string; color: string; position: [number, number, number] }) {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Text3D font="/fonts/Inter_Bold.json" size={0.5} height={0.1} position={position} rotation={[0, 0, 0]}>
        {name}
        <meshStandardMaterial color={color} />
      </Text3D>
    </Float>
  )
}

export function SkillsSection() {
  return (
    <section className="py-20" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
        <div className="h-[600px] w-full">
          <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
              {skills.map((skill, i) => {
                const angle = (i / skills.length) * Math.PI * 2
                const radius = 4
                const x = Math.cos(angle) * radius
                const z = Math.sin(angle) * radius
                return <SkillText key={skill.name} name={skill.name} color={skill.color} position={[x, 0, z]} />
              })}
            </Suspense>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  )
}


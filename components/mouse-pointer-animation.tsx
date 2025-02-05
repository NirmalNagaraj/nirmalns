"use client"

import { useEffect, useState } from "react"

export function MousePointerAnimation() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:block hidden"
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    >
      <div
        className="absolute bg-indigo-500 rounded-full opacity-50 animate-blob"
        style={{
          left: position.x - 4,
          top: position.y - 4,
          width: 8,
          height: 8,
        }}
      ></div>
    </div>
  )
}


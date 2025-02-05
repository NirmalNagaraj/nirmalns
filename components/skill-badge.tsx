/*eslint-disable */ 
import Image from "next/image"

interface SkillBadgeProps {
  name: string
  icon: string
  color: string
}

export function SkillBadge({ name, icon, color }: SkillBadgeProps) {
  return (
    <div className="group relative">
      <div
        className="w-24 h-24 flex items-center justify-center transform rotate-45 bg-[#1a1a1a] hover:scale-110 transition-all duration-300"
        style={{
          clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
        }}
      >
        <div className="transform -rotate-45">
          <div className="relative w-10 h-10">
            <Image
              src={icon || "/placeholder.svg"}
              alt={name}
              fill
              className="transition-transform duration-300 group-hover:scale-110 object-contain"
            />
          </div>
        </div>
      </div>
      <p className="text-center mt-4 text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
        {name}
      </p>
    </div>
  )
}


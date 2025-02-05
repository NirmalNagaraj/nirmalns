import Image from "next/image"

interface ExperienceCardProps {
  company: string
  role: string
  period: string
  description: string
  logo?: string
}

export function ExperienceCard({ company, role, period, description, logo }: ExperienceCardProps) {
  return (
    <div className="group relative p-6 rounded-lg bg-[#1a1a1a] hover:bg-[#222] transition-all duration-300 overflow-hidden">
      <div className="flex gap-6">
        <div className="flex-shrink-0 relative w-[50px] h-[50px]">
          {logo ? (
            <Image
              src={logo || "/placeholder.svg"}
              alt={`${company} logo`}
              fill
              className="rounded-lg object-contain"
            />
          ) : (
            <div className="w-full h-full bg-gray-800 rounded-lg" />
          )}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-1">{company}</h3>
          <div className="text-purple-400 font-medium mb-2">{role}</div>
          <div className="text-sm text-gray-400 mb-4">{period}</div>
          <p className="text-gray-300 leading-relaxed">{description}</p>
        </div>
      </div>
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500 rounded-lg transition-all duration-300">
        <div
          className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ clipPath: "inset(0 100% 0 0)" }}
        >
          <div className="w-full h-full animate-gradient-x"></div>
        </div>
      </div>
    </div>
  )
}


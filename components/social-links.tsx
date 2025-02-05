import { Github, Globe, Linkedin } from "lucide-react"
import { Button } from "./ui/button"

const socialLinks = [
  { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
  { icon: Globe, href: "https://yourwebsite.com", label: "Website" },
]

export function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <Button
          key={label}
          variant="ghost"
          size="icon"
          className="text-white hover:text-purple-400 transition-colors duration-300"
          asChild
        >
          <a href={href} target="_blank" rel="noopener noreferrer">
            <Icon className="h-5 w-5" />
            <span className="sr-only">{label}</span>
          </a>
        </Button>
      ))}
    </div>
  )
}


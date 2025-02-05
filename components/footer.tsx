import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { MousePointerAnimation } from "./mouse-pointer-animation"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

const socialLinks = [
  { icon: Github, href: "https://github.com/NirmalNagaraj", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/nirmal-n/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:nirmal070308@gmail.com", label: "Email" },
]

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Nirmal NS</h3>
            <p className="text-gray-300">Crafting digital experiences with code and creativity.</p>
          </div>
          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="block text-gray-300 transition-colors duration-300">
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 transition-colors duration-300"
                >
                  <Icon className="h-6 w-6" />
                  <span className="sr-only">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center text-gray-400 text-sm border-t border-gray-700 pt-8">
          © {new Date().getFullYear()} Nirmal NS. All rights reserved.
        </div>
      </div>
      <div className="absolute inset-0 blur-3xl opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-pulse"></div>
      </div>
      <MousePointerAnimation />
    </footer>
  )
}


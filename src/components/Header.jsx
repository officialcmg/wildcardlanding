import React, { useState } from 'react'
import { MenuIcon, XIcon } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-green-900/30 border-b border-green-500/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="https://uploadthingy.s3.us-west-1.amazonaws.com/j4FVK3j9QEcrWDx8AtMsLM/pasted-image.png"
            alt="Wildcard Labs Logo"
            className="h-10 w-auto"
          />
          <span className="text-white font-bold text-xl">Wildcard Labs</span>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-green-100 hover:text-white transition-colors">
            About Us
          </a>
          <a href="#projects" className="text-green-100 hover:text-white transition-colors">
            Projects
          </a>
          <a
            href="#contact"
            className="bg-green-500 hover:bg-green-400 text-green-900 font-medium px-4 py-2 rounded-lg transition-colors"
          >
            Contact Us
          </a>
        </nav>
        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-green-900/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#about"
              className="text-green-100 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="#projects"
              className="text-green-100 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="bg-green-500 hover:bg-green-400 text-green-900 font-medium px-4 py-2 rounded-lg transition-colors inline-block text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

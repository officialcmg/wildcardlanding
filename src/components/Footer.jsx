import React from 'react'
import { TwitterIcon, GithubIcon, MailIcon } from 'lucide-react'

export function Footer() {
  return (
    <footer id="contact" className="py-12 border-t border-green-500/20 backdrop-blur-md bg-green-900/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center gap-3 mb-6 md:mb-0">
              <img
                src="https://uploadthingy.s3.us-west-1.amazonaws.com/j4FVK3j9QEcrWDx8AtMsLM/pasted-image.png"
                alt="Wildcard Labs Logo"
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-white font-bold text-xl">Wildcard Labs</h3>
                <p className="text-green-300">Nairobi, Kenya 🇰🇪</p>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
              >
                <TwitterIcon size={20} className="text-white" />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
              >
                <GithubIcon size={20} className="text-white" />
              </a>
              <a
                href="mailto:steve@records.xyz"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
              >
                <MailIcon size={20} className="text-white" />
              </a>
            </div>
          </div>
          <div className="flex justify-center text-green-200 text-sm">
            <p>© {new Date().getFullYear()} Wildcard Labs. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

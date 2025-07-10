import React from 'react'
import { GlobeIcon, CodeIcon, UsersIcon } from 'lucide-react'

export function AboutUs() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
              About Us
            </h2>
            <div className="h-px bg-gradient-to-r from-green-500/50 to-transparent flex-grow" />
          </div>
          <div className="backdrop-blur-lg bg-white/5 rounded-2xl border border-white/10 p-8 mb-12 shadow-xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              We're wildcard labs, your go-to dev crew from Nairobi, Kenya 🇰🇪 🌍
            </h3>
            <p className="text-xl text-green-100 mb-8">
              💻 Our team is on it full-time, crafting tools and platforms that make ENS names & records a breeze for everyone, not just tech wizards.
            </p>
            <p className="text-xl text-green-100">
              👀 Curious minds, explore the projects we've cooked up so far 👇🏽👇🏽
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="backdrop-blur-lg bg-white/5 rounded-xl border border-white/10 p-6 transition-all hover:transform hover:scale-105 hover:bg-white/10">
              <div className="bg-green-500/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <GlobeIcon size={24} className="text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Web3 Focused</h3>
              <p className="text-green-100">
                Dedicated to building the future of the decentralized web through ENS innovation.
              </p>
            </div>
            <div className="backdrop-blur-lg bg-white/5 rounded-xl border border-white/10 p-6 transition-all hover:transform hover:scale-105 hover:bg-white/10">
              <div className="bg-green-500/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <CodeIcon size={24} className="text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Technical Excellence</h3>
              <p className="text-green-100">
                Building robust, user-friendly tools that solve real problems in the ENS ecosystem.
              </p>
            </div>
            <div className="backdrop-blur-lg bg-white/5 rounded-xl border border-white/10 p-6 transition-all hover:transform hover:scale-105 hover:bg-white/10">
              <div className="bg-green-500/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <UsersIcon size={24} className="text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Community Driven</h3>
              <p className="text-green-100">
                Creating tools that empower users and strengthen the ENS community worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

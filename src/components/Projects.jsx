import React from 'react'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
              Our Projects
            </h2>
            <div className="h-px bg-gradient-to-r from-green-500/50 to-transparent flex-grow" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <ProjectCard
              title="Records.xyz"
              description="Empowering ENS users with seamless records management across a diverse range of OP-chains"
              site="records.xyz"
              lead="stevegachau.eth"
              isHighlighted
              isLive
            />
            <ProjectCard
              title="ENS Registry"
              description="Posts real-time updates on all ENS names registrations"
              site="ensregistry.xyz"
              lead="chrismg.eth"
              isLive
            />
            <ProjectCard
              title="Avatar Sync 👥"
              description="Enables users to sync their social media profiles with their ENS avatars, ensuring automatic updates whenever their profile pictures change on platforms like X, Lens Protocol, and Farcaster."
              site="avatarsync.io"
              twitter="@syncavatar"
              lead="stevegachau.eth"
              isLive
            />
            <ProjectCard
              title="Wildcards Protocol 🐰"
              description="Links ENS to NFT collections on any EVM chain, providing instant subdomains to NFT holders without the need for individual claiming or registration."
              site="wildcards.wtf"
              twitter="@wildcardswtf"
              lead="davidwachira.eth"
              isLive
            />
            <ProjectCard
              title="ENS Redirect 🌐"
              description="Allows users to point their ENS domains to traditional Web2 URLs, bridging the gap between decentralized and centralized web experiences."
              site="ensredirect.xyz"
              twitter="@ensredirect"
              lead="davidwachira.eth"
              isLive
            />
            <ProjectCard
              title="OptiNames 🔴"
              description="Introduces ENS subdomains on the Optimism network, claim free ecc.eth subdomains"
              site="optinames.xyz"
              twitter="@optinames"
              lead="stevegachau.eth"
              isLive
            />
          </div>
        </div>
      </div>
    </section>
  )
}

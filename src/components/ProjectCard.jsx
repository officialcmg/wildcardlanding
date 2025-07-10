import React from 'react'
import { ExternalLinkIcon, TwitterIcon } from 'lucide-react'

export function ProjectCard({
  title,
  description,
  site,
  twitter,
  lead,
  isLive = false,
  isHighlighted = false,
}) {
  const leadLinks = {
    'stevegachau.eth': 'https://x.com/stevegachau',
    'chrismg.eth': 'https://x.com/chrismgtweets_',
    'davidwachira.eth': 'https://x.com/davyvete',
  };
  const leadLink = leadLinks[lead];

  return (
    <div
      className={`backdrop-blur-lg ${isHighlighted ? 'bg-green-500/15' : 'bg-white/5'} rounded-xl border ${isHighlighted ? 'border-green-400/30' : 'border-white/10'} p-6 transition-all hover:transform hover:scale-105 hover:bg-white/10 relative`}
    >
      {isHighlighted && (
        <div className="absolute -top-3 -right-3 bg-green-500 text-green-900 font-bold px-3 py-1 rounded-full text-sm">
          Featured
        </div>
      )}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        {isLive && (
          <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" /> LIVE
          </span>
        )}
      </div>
      <p className="text-green-100 mb-6">{description}</p>
      <div className="space-y-2">
        {site && (
          <div className="flex items-center gap-2">
            <span className="text-green-300 text-sm">Site:</span>
            <a
              href={`https://${site}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-400 transition-colors flex items-center gap-1"
            >
              {site} <ExternalLinkIcon size={14} />
            </a>
          </div>
        )}
        {twitter && (
          <div className="flex items-center gap-2">
            <span className="text-green-300 text-sm">Twitter:</span>
            <a
              href={`https://twitter.com/${twitter.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-400 transition-colors flex items-center gap-1"
            >
              {twitter} <TwitterIcon size={14} />
            </a>
          </div>
        )}
        {lead && (
          <div className="flex items-center gap-2">
            <span className="text-green-300 text-sm">Project Lead:</span>
            {leadLink ? (
              <a
                href={leadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-400 transition-colors flex items-center gap-1"
              >
                {lead} <ExternalLinkIcon size={14} />
              </a>
            ) : (
              <span className="text-white">{lead}</span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

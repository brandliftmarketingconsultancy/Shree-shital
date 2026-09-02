import { useState } from 'react'
import { aboutPage } from '../data/siteData.js'

export default function AboutHero() {
  const [activeTab, setActiveTab] = useState('About Us')

  return (
    <div className="relative h-[56svh] min-h-[380px] w-full overflow-hidden sm:h-[64svh]">
      <img
        src={aboutPage.hero.image}
        alt="Shree Shetal Properties corporate office"
        className="h-full w-full object-cover"
        loading="eager"
      />
      {/* Light gradient top so sub-nav text is legible */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-transparent" />

      {/* Sub-navigation bar — mirrors the "Know Us" sub-menu in the reference */}
      <div className="absolute inset-x-0 top-0 flex items-center gap-6 px-5 py-5 sm:px-8 lg:px-12">
        <span className="text-sm font-medium text-white/60">About Us</span>
        {/* <span className="text-white/40">/</span> */}
        {/* <nav className="flex items-center gap-5 sm:gap-8">
          {aboutPage.hero.subNav.map((item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item)}
              className={`text-sm font-medium transition-colors duration-200 ${
                activeTab === item
                  ? 'text-white underline underline-offset-4 decoration-brass'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {item}
            </button>
          ))}
        </nav> */}
      </div>
    </div>
  )
}

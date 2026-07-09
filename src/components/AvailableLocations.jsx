import { useEffect, useRef, useState } from 'react'
import SectionHeading from './SectionHeading.jsx'
import { locations } from '../data/siteData.js'
import { Link } from 'react-router-dom'

export default function AvailableLocations() {
  const [active, setActive] = useState(0)
  const trackRef = useRef(null)

  // Auto-advance every 2 seconds
  useEffect(() => {
    const id = setInterval(
      () => setActive((v) => (v + 1) % locations.length),
      2000
    )
    return () => clearInterval(id)
  }, [])

  // Scroll the mobile track so the active slide is centered
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const activeEl = track.children[active]
    if (!activeEl) return
    const trackCenter = track.offsetWidth / 2
    const elCenter = activeEl.offsetLeft + activeEl.offsetWidth / 2
    track.scrollTo({ left: elCenter - trackCenter, behavior: 'smooth' })
  }, [active])

  return (
    <section id="locations" className="bg-sand py-16 sm:py-20">
      <div className="mx-auto max-w-site text-center px-5 sm:px-8 lg:px-12">
        <SectionHeading>Explore projects in your desired locations</SectionHeading>
      </div>

      {/* ── MOBILE / TABLET: single-city carousel ── */}
      <div className="mt-10 lg:hidden">
        <div
          ref={trackRef}
          className="no-scrollbar flex overflow-x-auto scroll-smooth px-[40%]"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {locations.map((city, i) => (
            <div
              key={city}
              onClick={() => setActive(i)}
              style={{ scrollSnapAlign: 'center' }}
              className="shrink-0 px-6 cursor-pointer"
            >
              <span
                className={`block whitespace-nowrap font-display transition-all duration-500 ${
                  i === active
                    ? 'text-3xl font-semibold text-ink sm:text-4xl'
                    : 'text-xl text-brass-400 sm:text-2xl opacity-50'
                }`}
              >
                {city}
              </span>
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="mt-6 flex justify-center gap-2">
          {locations.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to ${locations[i]}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? 'w-8 bg-brass' : 'w-4 bg-ink/20'
              }`}
            />
          ))}
        </div>
      </div>

      {/* ── DESKTOP: all cities visible with highlight ── */}
      <div className="mt-10 hidden lg:flex lg:flex-wrap lg:justify-center lg:gap-10 px-12">
        {locations.map((city, i) => (
          <span
            key={city}
            className={`font-display transition-all duration-500 ${
              i === active
                ? 'text-3xl font-semibold text-ink'
                : 'text-2xl text-brass-400'
            }`}
          >
            {city}
          </span>
        ))}
      </div>

      <div className="mt-10 flex justify-center px-5">
        <Link to="/projects" className="btn-outline">
          Explore Projects
        </Link>
      </div>
    </section>
  )
}
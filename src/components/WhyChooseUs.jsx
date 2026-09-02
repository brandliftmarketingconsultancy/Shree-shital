import {Award, ShieldCheck,Handshake,Home,TrendingUp,MapPin,Building2,}from 'lucide-react'
import { useRef, useEffect } from 'react'
import SectionHeading from './SectionHeading.jsx'
import { trustPillars } from '../data/siteData.js'

const ICONS = {
  planning: Building2,
  quality: ShieldCheck,
  customer: Handshake,
  lifestyle: Home,
  investment: TrendingUp,
  location: MapPin,
}

export default function WhyChooseUs() {
  const trackRef = useRef(null)
  const wrapperRef = useRef(null)
  const animationId = useRef(null)
  const startTime = useRef(null)
  const pausedAt = useRef(0)
  const isPaused = useRef(false)

  useEffect(() => {
    const track = trackRef.current
    const wrapper = wrapperRef.current
    if (!track || !wrapper) return

    function step(timestamp) {
      if (isPaused.current) return
      if (!startTime.current) startTime.current = timestamp - (pausedAt.current / 0.4)

      const elapsed = timestamp - startTime.current
      const totalWidth = track.scrollWidth / 2
      const offset = (elapsed * 0.05) % totalWidth

      pausedAt.current = offset
      track.style.transform = `translateX(-${offset}px)`
      animationId.current = requestAnimationFrame(step)
    }

    const pause = () => {
      isPaused.current = true
      cancelAnimationFrame(animationId.current)
    }

    const resume = () => {
      isPaused.current = false
      startTime.current = null
      animationId.current = requestAnimationFrame(step)
    }

    animationId.current = requestAnimationFrame(step)

    wrapper.addEventListener('mouseenter', pause)
    wrapper.addEventListener('mouseleave', resume)

    return () => {
      cancelAnimationFrame(animationId.current)
      wrapper.removeEventListener('mouseenter', pause)
      wrapper.removeEventListener('mouseleave', resume)
    }
  }, [])

  const allPillars = [...trustPillars, ...trustPillars]

  return (
    <section id="why-choose-us" className="bg-sand px-5 py-16 sm:px-8 sm:py-20 lg:px-12 overflow-hidden">
      <div className="mx-auto max-w-site">
        <SectionHeading>Why Choose Us</SectionHeading>

        <h2 className="mx-auto mt-6 max-w-2xl text-center font-display text-2xl font-light leading-snug text-ink sm:text-3xl lg:text-4xl">
          Built on Local Understanding, Delivered With Care
        </h2>
      </div>

      <div className="mt-12 overflow-hidden" ref={wrapperRef}>
        <div
          ref={trackRef}
          className="flex gap-5 will-change-transform"
          style={{ width: 'max-content' }}
        >
          {allPillars.map((p, i) => {
            const Icon = ICONS[p.icon]
            return (
              <div
                key={`${p.title}-${i}`}
                className="w-64 flex-shrink-0 bg-white p-7 text-center shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brass-50 text-brass-600">
                  <Icon size={26} strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-lg text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{p.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
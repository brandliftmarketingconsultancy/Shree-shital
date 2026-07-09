import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import { pressReleases } from '../data/siteData.js'

const PER_PAGE_DESKTOP = 3

export default function PressReleases() {
  const [start, setStart] = useState(0)
  const maxStart = Math.max(pressReleases.length - PER_PAGE_DESKTOP, 0)

  const go = (dir) =>
    setStart((v) => Math.min(Math.max(v + dir, 0), maxStart))

  const visible = pressReleases.slice(start, start + PER_PAGE_DESKTOP)

  return (
    <section id="press" className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-site">
        <SectionHeading>Amenities Overview</SectionHeading>

        <div className="relative mt-10">
          <button
            aria-label="Previous Amenities Overview"
            onClick={() => go(-1)}
            disabled={start === 0}
            className="icon-circle absolute -left-2 top-1/3 hidden -translate-y-1/2 disabled:opacity-30 lg:flex"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:px-14">
            {visible.map((p) => (
              <article key={p.id} className="group">
                <div className="aspect-[4/3] overflow-hidden bg-sand">
                  <img
                    src={p.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink/80">
                  <span className="font-semibold text-ink">Amenities Overview:</span>{' '}
                  {p.title}, {p.date}
                </p>
              </article>
            ))}
          </div>

          <button
            aria-label="Next Amenities Overview"
            onClick={() => go(1)}
            disabled={start === maxStart}
            className="icon-circle absolute -right-2 top-1/3 hidden -translate-y-1/2 disabled:opacity-30 lg:flex"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Mobile controls */}
        <div className="mt-6 flex items-center justify-center gap-4 lg:hidden">
          <button
            aria-label="Previous Amenities Overview"
            onClick={() => go(-1)}
            disabled={start === 0}
            className="icon-circle disabled:opacity-30"
          >
            <ChevronLeft size={17} />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: maxStart + 1 }).map((_, i) => (
              <button
                key={i}
                aria-label={`Go to Amenities Overview group ${i + 1}`}
                onClick={() => setStart(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === start ? 'w-8 bg-brass' : 'w-4 bg-ink/20'
                }`}
              />
            ))}
          </div>
          <button
            aria-label="Next Amenities Overview"
            onClick={() => go(1)}
            disabled={start === maxStart}
            className="icon-circle disabled:opacity-30"
          >
            <ChevronRight size={17} />
          </button>
        </div>

        <div className="mt-10 flex justify-center">
          <a href="#footer" className="btn-outline">
            Explore
          </a>
        </div>
      </div>
    </section>
  )
}

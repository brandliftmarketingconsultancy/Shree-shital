import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import { featuredProjects } from '../data/siteData.js'
import { Link } from 'react-router-dom'

export default function FeaturedProjects() {
  const [active, setActive] = useState(0)
  const count = featuredProjects.length

  const go = (dir) => setActive((v) => (v + dir + count) % count)

  useEffect(() => {
    const id = setInterval(() => {
      setActive((v) => (v + 1) % count)
    }, 4000)
    return () => clearInterval(id)
  }, [count])

  return (
    <section id="featured-projects" className="bg-white py-16 sm:py-20">
      <div className="px-5 sm:px-8 lg:px-12">
        <SectionHeading>Featured Projects</SectionHeading>
      </div>

      <div className="relative mt-8 sm:mt-10">
        <div className="relative h-[420px] w-full overflow-hidden sm:h-[520px] lg:h-[620px]">
          {/* Sliding track: all slides sit side by side, we translate the whole strip */}
          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{
              width: `${count * 100}%`,
              transform: `translateX(-${(100 / count) * active}%)`,
            }}
          >
            {featuredProjects.map((project, i) => (
              <div
                key={project.id}
                className="relative h-full w-full flex-shrink-0"
                style={{ width: `${100 / count}%` }}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover"
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />

                <div className="absolute inset-x-5 bottom-6 flex flex-col items-start gap-5 sm:inset-x-8 sm:bottom-10 sm:flex-row sm:items-end sm:justify-between lg:inset-x-12">
                  <div className="max-w-md bg-ink/60 px-5 py-4 backdrop-blur-sm sm:bg-transparent sm:px-0 sm:py-0 sm:backdrop-blur-0">
                    <h3 className="font-display text-2xl text-white sm:text-3xl">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-sm text-white/85">{project.location}</p>
                    <p className="mt-3 text-sm text-white/90">{project.price}</p>
                    <p className="text-sm text-white/90">{project.possession}</p>
                    <p className="text-sm text-white/90">{project.config}</p>
                  </div>
                  <Link to="/projects" className="btn-solid">
              Know More
            </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          aria-label="Previous project"
          onClick={() => go(-1)}
          className="absolute left-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink shadow-md transition-colors hover:bg-brass hover:text-white sm:flex sm:left-6"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          aria-label="Next project"
          onClick={() => go(1)}
          className="absolute right-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink shadow-md transition-colors hover:bg-brass hover:text-white sm:flex sm:right-6"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dots + mobile arrows */}
      <div className="mt-5 flex items-center justify-center gap-4 px-5">
        <button
          aria-label="Previous project"
          onClick={() => go(-1)}
          className="icon-circle sm:hidden"
        >
          <ChevronLeft size={17} />
        </button>
        <div className="flex gap-2">
          {featuredProjects.map((p, i) => (
            <button
              key={p.id}
              aria-label={`Show ${p.name}`}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? 'w-8 bg-brass' : 'w-4 bg-ink/20 hover:bg-ink/40'
              }`}
            />
          ))}
        </div>
        <button
          aria-label="Next project"
          onClick={() => go(1)}
          className="icon-circle sm:hidden"
        >
          <ChevronRight size={17} />
        </button>
      </div>
    </section>
  )
}

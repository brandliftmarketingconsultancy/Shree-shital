import { useEffect, useState } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import {
  ArrowLeft, ChevronLeft, ChevronRight,
  Waves, Dumbbell, Coffee, Sparkles, HeartPulse, Gamepad2,
  Trophy, Cake, Scissors, Activity,
} from 'lucide-react'
import { findProject } from '../data/siteData.js'
import SectionHeading from '../components/SectionHeading.jsx'

const ICONS = {
  waves: Waves,
  dumbbell: Dumbbell,
  coffee: Coffee,
  sparkles: Sparkles,
  'heart-pulse': HeartPulse,
  'gamepad-2': Gamepad2,
  trophy: Trophy,
  cake: Cake,
  scissors: Scissors,
  activity: Activity,
}

export default function PropertyAmenitiesPage() {
  const { slug } = useParams()
  const project = findProject(slug)
  const navigate = useNavigate()
  const [active, setActive] = useState(0)

  useEffect(() => {
    window.scrollTo({ top: 0 })
    setActive(0)
  }, [slug])

  if (!project) return <Navigate to="/projects" replace />

  // Old numeric link like /projects/1/amenities -> /projects/sheetal-vatika/amenities
  if (slug !== project.slug) {
    return <Navigate to={`/projects/${project.slug}/amenities`} replace />
  }

  const items = (project.amenities?.items || []).filter((a) => a.label)

  // Slides: use the full gallery if the project has one, otherwise each item's cover photo
  const slides = (
    project.amenities?.gallery?.length
      ? project.amenities.gallery.map((g) => ({ src: g.image, category: g.category }))
      : items.map((a) => ({ src: a.image, category: a.label }))
  ).filter((s) => s.src)

  const go = (dir) =>
    setActive((v) => (v + dir + slides.length) % slides.length)

  // Clicking an amenity card jumps the carousel to that amenity's first photo
  const showAmenity = (label) => {
    const i = slides.findIndex((s) => s.category === label)
    if (i !== -1) {
      setActive(i)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const current = slides[active]

  return (
    <main className="min-h-screen bg-ivory">
      {/* Top bar */}
      <div className="sticky top-0 z-40 border-b border-ink/10 bg-white px-5 py-4 sm:px-8 lg:px-12">
        <button
          onClick={() => navigate(`/projects/${project.slug}`)}
          className="flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-brass"
        >
          <ArrowLeft size={16} />
          {project.name}
        </button>
      </div>

      <div className="mx-auto max-w-site px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <h2 className="font-display text-3xl font-light text-ink sm:text-4xl">
          Amenities
        </h2>

        {/* Image carousel (only shown if there are slides) */}
        {slides.length > 0 && (
          <>
            <div className="relative mt-8 overflow-hidden">
              <div className="aspect-[16/7] w-full overflow-hidden bg-sand">
                <img
                  key={current.src}
                  src={current.src}
                  alt={`${project.name} ${current.category}`}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Category caption */}
              <span className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 text-xs font-medium text-ink">
                {current.category}
              </span>

              {slides.length > 1 && (
                <>
                  <button
                    onClick={() => go(-1)}
                    aria-label="Previous image"
                    className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-ink/20 bg-white/90 text-ink shadow hover:border-brass hover:text-brass"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() => go(1)}
                    aria-label="Next image"
                    className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-ink/20 bg-white/90 text-ink shadow hover:border-brass hover:text-brass"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>

            {/* Dot indicators */}
            {slides.length > 1 && (
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Go to image ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === active ? 'w-8 bg-brass' : 'w-4 bg-ink/20'
                    }`}
                  />
                ))}
              </div>
            )}
          </>
        )}

        {/* Amenity icon list */}
        <div className="mt-16">
          <SectionHeading>Lifestyle Amenities</SectionHeading>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {items.map((a) => {
              const Icon = ICONS[a.icon] || Sparkles
              const hasPhoto = slides.some((s) => s.category === a.label)

              return (
                <button
                  key={a.label}
                  onClick={() => showAmenity(a.label)}
                  disabled={!hasPhoto}
                  className={`flex flex-col items-center gap-3 rounded border bg-white p-6 text-center transition-colors ${
                    slides[active]?.category === a.label
                      ? 'border-brass'
                      : 'border-ink/10'
                  } ${hasPhoto ? 'hover:border-brass/60' : 'cursor-default'}`}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-brass text-brass">
                    <Icon size={26} strokeWidth={1.25} />
                  </div>
                  <span className="text-sm text-ink/70">{a.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}
import { useEffect, useState } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react'
import { allProjects } from '../data/siteData.js'
import SectionHeading from '../components/SectionHeading.jsx'

export default function PropertyAmenitiesPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = allProjects.find((p) => p.id === Number(id))
  const [active, setActive] = useState(0)

  useEffect(() => { window.scrollTo({ top: 0 }) }, [id])

  if (!project) return <Navigate to="/projects" replace />

  const images = project.amenities?.items?.map((_, i) =>
    project.amenities.image
  ) || []

  // Use gallery images as amenity slides since each amenity has its own vibe
  const slides = project.amenities?.items?.map((item) => item.image).filter(Boolean) || []
  const go = (dir) => setActive((v) => (v + dir + slides.length) % slides.length)

  return (
    <main className="bg-ivory min-h-screen">
      {/* Top bar */}
      <div className="sticky top-0 z-40 border-b border-ink/10 bg-white px-5 py-4 sm:px-8 lg:px-12">
        <button
          onClick={() => navigate(`/projects/${id}`)}
          className="flex items-center gap-2 text-sm font-medium text-ink hover:text-brass transition-colors"
        >
          <ArrowLeft size={16} />
          {project.name}
        </button>
      </div>

      <div className="mx-auto max-w-site px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <h2 className="font-display text-3xl font-light text-ink sm:text-4xl">
          Amenities
        </h2>

        {/* Full-width image carousel */}
        <div className="relative mt-8 overflow-hidden">
          <div className="aspect-[16/7] w-full overflow-hidden bg-sand">
            <img
              src={slides[active]}
              alt={`Amenity ${active + 1}`}
              className="h-full w-full object-cover transition-opacity duration-500"
            />
          </div>

          {/* Arrows */}
          <button
            onClick={() => go(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 bg-white/90 text-ink shadow hover:border-brass hover:text-brass"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => go(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 bg-white/90 text-ink shadow hover:border-brass hover:text-brass"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="mt-4 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? 'w-8 bg-brass' : 'w-4 bg-ink/20'
                }`}
            />
          ))}
        </div>

        {/* Amenity icon list */}
        <div className="mt-16">
          <SectionHeading>Lifestyle Amenities</SectionHeading>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {(project.amenities?.items || []).map((a) => (
              <div key={a.label} className="flex flex-col items-center gap-3 rounded border border-ink/10 bg-white p-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-brass text-brass">
                  <span className="text-2xl">✦</span>
                </div>
                <span className="text-sm text-ink/70">{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
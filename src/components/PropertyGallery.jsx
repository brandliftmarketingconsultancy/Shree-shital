import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SectionHeading from './SectionHeading.jsx'

export default function PropertyGallery({ project }) {
  const { id } = useParams()
  const navigate = useNavigate()

  const { gallery } = project
  const [active, setActive] = useState(0)

  const perPage = 3
  const totalPages = Math.ceil(gallery.length / perPage)
  const visible = gallery.slice(
    active * perPage,
    active * perPage + perPage
  )

  return (
    <section id="gallery" className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-site">
        <SectionHeading>Gallery</SectionHeading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {visible.map((img, i) => (
            <div key={i} className="aspect-[4/3] overflow-hidden bg-sand">
              <img
                src={img}
                alt={`${project.name} gallery ${active * perPage + i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Dots */}
        {totalPages > 1 && (
          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? 'w-8 bg-ink' : 'w-5 bg-ink/25'
                }`}
              />
            ))}
          </div>
        )}

        <div className="mt-10 flex justify-center">
          <button
            onClick={() => navigate(`/projects/${id}/gallery`)}
            className="btn-outline"
          >
            View Gallery
          </button>
        </div>
      </div>
    </section>
  )
}
import { useEffect, useState } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { allProjects } from '../data/siteData.js'
import SectionHeading from '../components/SectionHeading.jsx'

const TABS = ['Videos', 'Images']

export default function PropertyGalleryPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = allProjects.find((p) => p.id === Number(id))
  const [tab, setTab] = useState('Videos')

  useEffect(() => { window.scrollTo({ top: 0 }) }, [id])

  if (!project) return <Navigate to="/projects" replace />

  const images = project.gallery || []
  const videos = project.videos || []
  const items = tab === 'Images' ? images : videos

  return (
    <main className="min-h-screen bg-white">
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
        <SectionHeading>Gallery</SectionHeading>

        {/* Videos / Images tab switcher */}
        <div className="mt-6 flex justify-center gap-8">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`pb-2 text-sm font-medium transition-colors ${
                tab === t
                  ? 'border-b-2 border-ink text-ink'
                  : 'text-ink/40 hover:text-ink/70'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Masonry-style 2-col grid — first image is large, rest smaller */}
        <div className="mt-10 columns-1 gap-4 sm:columns-2">
        {items.map((item, i) => (
  <div key={i} className="mb-4 overflow-hidden bg-sand break-inside-avoid">
    {tab === 'Videos' ? (
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative group"
      >
        <img
          src={item.thumbnail}
          alt={item.title}
          loading="lazy"
          className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-2xl">
            ▶
          </div>
        </div>
      </a>
    ) : (
      <img
        src={item}
        alt={`${project.name} Image ${i + 1}`}
        loading="lazy"
        className="w-full object-cover transition-transform duration-700 hover:scale-105"
      />
    )}
  </div>
))}
        </div>
      </div>
    </main>
  )
}
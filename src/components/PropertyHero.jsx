import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const SUB_NAV = ['Overview', 'Location', 'Price', 'Amenities', 'Gallery', 'Download']

export default function PropertyHero({ project }) {
  const navigate = useNavigate()

  return (
    <div className="relative h-[56svh] min-h-[380px] w-full overflow-hidden sm:h-[65svh]">
      <img
        src={project.image}
        alt={project.name}
        className="h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-ink/50" />

      {/* Sub-nav bar */}
      <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm font-medium text-white hover:text-brass-400 transition-colors"
        >
          <ArrowLeft size={16} /> Back
        </button>

        <nav className="hidden items-center gap-6 sm:flex">
          {SUB_NAV.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* Project info overlay — bottom left */}
      <div className="absolute bottom-6 left-5 sm:bottom-10 sm:left-8 lg:left-12">
        <h1 className="font-display text-2xl font-medium text-white sm:text-3xl lg:text-4xl">
          {project.name}
        </h1>
        <p className="mt-1 text-sm text-white/80">{project.location}</p>
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-white/90">
          <span>{project.price}</span>
          <span className="text-white/40">|</span>
          <span>Possession {project.possession}</span>
          <span className="text-white/40">|</span>
          <span>{project.config}</span>
        </div>
      </div>
    </div>
  )
}
import { PlusCircle, Building2, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const STATUS_STYLES = {
  'New Launch': 'bg-brass-50 text-brass-600 border border-brass/30',
  'Under Construction': 'bg-blue-50 text-blue-700 border border-blue-200',
  'Ready to Move': 'bg-green-50 text-green-700 border border-green-200',
}

const STATUS_ICONS = {
  'New Launch': Star,
  'Under Construction': Building2,
  'Ready to Move': Building2,
}

export default function ProjectCard({ project }) {
  const Icon = STATUS_ICONS[project.status] || Building2

  return (
    <Link to={`/projects/${project.id}`} className="block">
    <article className="group cursor-pointer">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-sand">
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Meta below image */}
      <div className="mt-3">
        <div className="flex items-center justify-between">
          <p className="text-sm text-ink/55">{project.location}</p>
          <button
            aria-label={`More about ${project.name}`}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/20 text-ink/50 transition-colors hover:border-brass hover:text-brass"
          >
            <PlusCircle size={18} />
          </button>
        </div>

        <h3 className="mt-1 font-display text-xl text-ink">{project.name}</h3>

        {/* Status badge */}
        <span className={`mt-2 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${STATUS_STYLES[project.status]}`}>
          <Icon size={12} />
          {project.status}
        </span>

        {/* Price + possession */}
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink/70">
          <span className="font-medium text-ink">{project.price}</span>
          <span className="text-ink/30">|</span>
          <span><span className="font-medium text-ink">Possession Date</span> {project.possession}</span>
        </div>
        <p className="mt-1 text-sm text-ink/60">{project.config}</p>
      </div>
    </article>
    </Link>
  )
}   
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Car, Coffee, Dumbbell, Gamepad2, ShieldCheck, Sparkles, TreePine, Users, Waves, Zap, Activity } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import { allProjects } from '../data/siteData.js'

const ICONS = {
  waves: Waves, dumbbell: Dumbbell, coffee: Coffee,
  sparkles: Sparkles, activity: Activity, trees: TreePine,
  car: Car, shield: ShieldCheck, users: Users,
  zap: Zap, gamepad: Gamepad2,
}

export default function AmenitiesPage() {
  useEffect(() => { window.scrollTo({ top: 0 }) }, [])

  return (
    <main className="min-h-screen bg-ivory">
      {/* Page hero */}
      {/* <div className="bg-ink px-5 py-16 text-center sm:px-8 sm:py-20 lg:px-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-brass-400">
          Sheetal Group
        </p>
        <h1 className="mt-3 font-display text-3xl font-light text-white sm:text-4xl lg:text-5xl">
          Amenities Across All Properties
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm text-white/60">
          Every Sheetal Group property is built around the lifestyle of its residents. Explore what each community has to offer.
        </p>
      </div> */}

      {/* Properties list */}
      <div className="mx-auto max-w-site px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="space-y-10">
          {allProjects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden border border-ink/10 bg-white"
            >
              <div className="grid lg:grid-cols-[280px_1fr]">
                {/* Left — project image + info */}
                <div className="relative min-h-[200px] bg-sand lg:min-h-full">
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                      project.status === 'Ready to Move'
                        ? 'bg-green-100 text-green-700'
                        : project.status === 'New Launch'
                        ? 'bg-brass-50 text-brass-600'
                        : 'bg-blue-50 text-blue-700'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Right — amenities */}
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h2 className="font-display text-2xl text-ink">{project.name}</h2>
                      <p className="mt-1 text-sm text-ink/55">{project.location}</p>
                      <p className="mt-1 text-xs text-ink/40">{project.config} </p>
                    </div>
                    <Link
                      to={`/projects/${project.id}`}
                      className="mt-4 inline-flex shrink-0 items-center gap-2 border border-ink/20 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-brass hover:bg-brass hover:text-white sm:mt-0"
                    >
                      View Property <ArrowRight size={15} />
                    </Link>
                  </div>

                  {/* Divider */}
                  <div className="my-5 h-px bg-ink/8" />

                  {/* Amenity icons */}
                  {project.amenities?.items?.length > 0 ? (
                    <div className="flex flex-wrap gap-4">
                      {project.amenities.items.map((a) => {
                        const Icon = ICONS[a.icon] || Sparkles
                        return (
                          <div
                            key={a.label}
                            className="flex items-center gap-2 rounded-full border border-brass/30 bg-brass-50 px-4 py-2"
                          >
                            <Icon size={15} className="text-brass-600" strokeWidth={1.75} />
                            <span className="text-xs font-medium text-brass-600">{a.label}</span>
                          </div>
                        )
                      })}
                    </div>
                  ) : (
                    <p className="text-sm text-ink/40">Amenities coming soon</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
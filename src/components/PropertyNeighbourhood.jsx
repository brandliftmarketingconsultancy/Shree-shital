import { Train, Navigation, Plane, School,Bus,MapPinned, MapPin,GraduationCap,Hospital,Route,Fuel,Pill, } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'

const ICONS = {
  road: Navigation,
  plane: Plane,
  School: School,
  Bus: Bus,
  MapPinned: MapPinned,
  MapPin: MapPin,
  GraduationCap: GraduationCap,
  Hospital: Hospital,
  Route: Route,
  Fuel: Fuel,
  Train: Train,
  Pill: Pill,
}

export default function PropertyNeighbourhood({ project }) {
  return (
    <section id="location" className="bg-ivory px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-site">
        <SectionHeading>Neighbourhood</SectionHeading>

        <div className="mt-10 grid gap-6 lg:grid-cols-[320px_1fr]">
          {/* Distance list */}
          <div className="space-y-6 rounded border border-ink/10 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">Address</p>
            {project.neighbourhood.map((item) => {
              const Icon = ICONS[item.icon] || Navigation
              return (
                <div key={item.label} className="flex items-center gap-4 border-b border-ink/8 pb-5 last:border-0 last:pb-0">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink/60">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs text-ink/50">{item.distance}</p>
                    <p className="text-sm font-medium text-ink">{item.label}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Map embed */}
          <div className="min-h-[400px] overflow-hidden bg-sand">
            <iframe
              title={`Map of ${project.name}`}
              src={project.mapEmbedUrl}
              className="h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
import { useNavigate, useParams } from 'react-router-dom'
import { Activity, Coffee, Dumbbell, Gamepad2, ShieldCheck, Sparkles, TreePine, Users, Waves, Zap, Car } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'

const ICONS = {
  waves: Waves, dumbbell: Dumbbell, coffee: Coffee,
  sparkles: Sparkles, activity: Activity, trees: TreePine,
  car: Car, shield: ShieldCheck, users: Users,
  zap: Zap, gamepad: Gamepad2,
}

export default function PropertyAmenities({ project }) {
  const { amenities, name } = project

  const navigate = useNavigate()
  const { id } = useParams()

  return (
    <section id="amenities" className="bg-ivory px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-site">
        <SectionHeading>Introducing {name}</SectionHeading>

        {/* Icon circles row */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 sm:gap-12 lg:gap-16">
          {amenities.items.map((a) => {
            const Icon = ICONS[a.icon] || Waves
            return (
              <div key={a.label} className="flex flex-col items-center gap-3">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-brass text-brass sm:h-24 sm:w-24">
                  <Icon size={32} strokeWidth={1.25} />
                </div>
                <span className="text-xs italic text-ink/70 sm:text-sm">{a.label}</span>
              </div>
            )
          })}
        </div>

        {/* Amenity banner image with CTA */}
        <div className="relative mt-12 aspect-[16/5] overflow-hidden">
          <img
            src={amenities.image}
            alt={`${name} amenities`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-ink/30">
            <button
              onClick={() => navigate(`/projects/${id}/amenities`)}
              className="border border-white bg-white/90 px-8 py-3 text-sm font-medium text-ink backdrop-blur-sm transition-colors hover:bg-white"
            >
              Experience all lifestyle amenities
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
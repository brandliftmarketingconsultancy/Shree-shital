import { Car, Dumbbell, Gamepad2, ShieldCheck, TreePine, Users, Waves, Zap } from 'lucide-react'
import { townshipAmenities } from '../data/siteData.js'

const ICONS = {
  waves: Waves,
  dumbbell: Dumbbell,
  trees: TreePine,
  shield: ShieldCheck,
  car: Car,
  gamepad: Gamepad2,
  users: Users,
  zap: Zap,
}

export default function TownshipAmenities() {
  return (
    <section id="amenities" className="bg-ink px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-site">
        <p className="flex items-center justify-center gap-4 text-xs font-semibold uppercase tracking-widest2 text-brass-400 sm:text-sm">
          <span className="h-px max-w-[100px] flex-1 bg-white/15 sm:max-w-[200px]" />
          Township Amenities
          <span className="h-px max-w-[100px] flex-1 bg-white/15 sm:max-w-[200px]" />
        </p>

        <h2 className="mx-auto mt-6 max-w-2xl text-center font-display text-2xl font-light leading-snug sm:text-3xl lg:text-4xl">
          Lifestyle, thoughtfully amenitised.
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          {townshipAmenities.map((a) => {
            const Icon = ICONS[a.icon]
            return (
              <div key={a.label} className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 text-brass-400 transition-colors duration-300 hover:border-brass hover:text-brass">
                  <Icon size={24} strokeWidth={1.75} />
                </div>
                <span className="text-sm text-white/80">{a.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { Link } from 'react-router-dom'
import SectionHeading from './SectionHeading.jsx'
import { values } from '../data/siteData.js'

export default function OurValues() {
  return (
    <section id="our-values" className="bg-ivory px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-site">
        <SectionHeading>Our Values</SectionHeading>

        <h2 className="mt-6 max-w-3xl font-display text-2xl font-light leading-snug text-ink sm:text-3xl lg:text-4xl">
          Crafting spaces that spark joy &mdash; one community, one family, one
          home at a time.
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {values.map((v) => (
            <div
              key={v.id}
              className="group relative aspect-[3/4] overflow-hidden bg-sand"
            >
              <img
                src={v.image}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 right-3 font-display text-base font-medium text-white sm:bottom-4 sm:left-4 sm:text-lg">
                {v.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link to="/about" className="btn-outline">
            Our Brand Story
          </Link>
        </div>
      </div>
    </section>
  )
}

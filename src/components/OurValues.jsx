import { Link } from 'react-router-dom'
import SectionHeading from './SectionHeading.jsx'
import { values } from '../data/siteData.js'

export default function OurValues() {
  return (
    <section id="our-values" className="bg-ivory px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-site">
        <SectionHeading>Our Values</SectionHeading>

        <h2 className="mx-auto mt-8 max-w-5xl text-center font-display text-3xl font-extralight leading-[1.15] tracking-[-0.02em] text-ink sm:text-4xl lg:text-[3.25rem]">
  Spaces that are planned with care—
  <span className="mt-2 block text-brass-600">
    for the people who will actually live in them.
  </span>
</h2>

<p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-ink/70">
  Every residential township we build in Balaghat begins with one simple belief:
  exceptional communities are created for the families who call them home, not
  just for the pages of a sales brochure.
</p>

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

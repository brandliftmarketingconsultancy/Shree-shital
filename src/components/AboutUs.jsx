import SectionHeading from './SectionHeading.jsx'
import { aboutUs } from '../data/siteData.js'
import { Link } from 'react-router-dom'

export default function AboutUs() {
  return (
    <section id="about" className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-site">
        <SectionHeading>About Us</SectionHeading>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="aspect-[4/3] overflow-hidden bg-sand">
            <img
              src={aboutUs.image}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <h2 className="font-display text-2xl font-light leading-snug text-ink sm:text-3xl lg:text-4xl">
              {aboutUs.heading}
            </h2>
            <p className="mt-5 leading-relaxed text-ink/70">{aboutUs.body}</p>

            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {aboutUs.stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl text-brass-600 sm:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-ink/55">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <Link to="/about" className="btn-outline mt-10 inline-flex">
              Know More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

import SectionHeading from './SectionHeading.jsx'
import { aboutPage } from '../data/siteData.js'
import { Link } from "react-router-dom";

export default function OurPurpose() {
  const { heading, image, tagline, body } = aboutPage.purpose

  return (
    <section className="bg-ivory px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-site">
        <SectionHeading>{heading}</SectionHeading>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Image — left side, same aspect as reference */}
          <div className="overflow-hidden">
            <img
              src={image}
              alt="A family enjoying their Aurelia home"
              loading="lazy"
              className="h-full w-full object-cover aspect-[3/4] sm:aspect-[4/4]"
            />
          </div>

          {/* Text — right side */}
          <div>
            <p className="font-display text-xl font-light leading-snug text-ink sm:text-2xl lg:text-3xl">
              {tagline}
            </p>
            <div className="mt-6 h-px w-12 bg-brass" />
            <p className="mt-6 leading-relaxed text-ink/70">{body}</p>

            <Link to="/#contact" className="btn-outline mt-10 inline-flex">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useEffect, useState } from 'react'
import { heroSlides } from '../data/siteData.js'
import { Link } from 'react-router-dom'

export default function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(
      () => setActive((v) => (v + 1) % heroSlides.length),
      4000
    )
    return () => clearInterval(id)
  }, [])

  const slide = heroSlides[active]

  return (
    <section className="relative h-[88svh] min-h-[480px] w-full overflow-hidden bg-ink">
      {heroSlides.map((s, i) => (
  <div
    key={s.id}
    className={`absolute inset-0 transition-opacity duration-1000 ${
      i === active ? 'opacity-100' : 'opacity-0'
    }`}
  >
    {/* Property Image */}
    <img
      src={s.image}
      alt=""
      className="h-full w-full object-cover object-center"
      loading={i === 0 ? 'eager' : 'lazy'}
    />

    {/* Property Logo */}
    <img
      src={s.logo}
      alt=""
      className="
        absolute
        left-5
        top-5
        z-10
        w-28
        object-contain
        sm:left-8
        sm:top-8
        sm:w-36
        lg:left-12
        lg:top-10
        lg:w-44
      "
    />
  </div>
))}

      {/* Gradient for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/40" />

      {/* Signature blueprint-grid motif, anchored bottom-right, architecture-coded */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-2/3 w-2/3 bg-blueprint bg-blueprint opacity-30 [mask-image:linear-gradient(to_top_left,black,transparent_70%)]" />

      {/* Location */}
{/* Location */}
{slide.location && (
  <div
    className="
      absolute
      bottom-[66px]
      right-5
      z-20
      w-[190px]
      text-right

      sm:bottom-[72px]
      sm:right-8
      sm:w-[220px]

      lg:bottom-10
      lg:right-12
      lg:w-auto
    "
  >
    <div className="flex items-start justify-end gap-2 text-white/90">
      <span className="mt-[6px] h-px w-5 shrink-0 bg-brass sm:w-7" />

      <span
        className="
          text-[10px]
          font-medium
          uppercase
          leading-[1.25]
          tracking-[0.14em]

          sm:text-xs

          lg:text-sm
          lg:leading-normal
          lg:tracking-[0.18em]
        "
      >
        {slide.location}
      </span>
    </div>
  </div>
)}

      <div className="relative z-10 mx-auto flex h-full max-w-site flex-col justify-end px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
        {/* <p className="mb-3 text-xs uppercase tracking-widest2 text-brass-400 sm:text-sm">
          {slide.eyebrow}
        </p> */}
        <h1 className="max-w-2xl whitespace-pre-line font-display text-4xl font-light leading-[1.08] text-white sm:text-5xl lg:text-6xl">
          {slide.headline}
        </h1>
        <p className="mt-5 max-w-md text-base text-white/80 sm:text-lg">
          {slide.subcopy}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
  <Link
    to="/projects"
    className="btn-solid px-4 py-2.5 text-xs sm:px-7 sm:py-4 sm:text-base"
  >
    Explore Property
  </Link>
</div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2 sm:bottom-8">
        {heroSlides.map((s, i) => (
          <button
            key={s.id}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? 'w-8 bg-brass' : 'w-4 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

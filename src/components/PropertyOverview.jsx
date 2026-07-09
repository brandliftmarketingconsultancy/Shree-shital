import SectionHeading from './SectionHeading.jsx'

export default function PropertyOverview({ project }) {
  return (
    <section id="overview" className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-site">
        <SectionHeading>Overview</SectionHeading>
        <p className="mx-auto mt-6 max-w-3xl text-center leading-relaxed text-ink/70 sm:text-lg">
          {project.overviewTagline}
        </p>
        <div className="mt-10 aspect-[16/7] overflow-hidden">
          <img
            src={project.overviewImage}
            alt={`${project.name} overview`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
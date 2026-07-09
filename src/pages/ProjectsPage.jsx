import { useEffect, useState } from 'react'
import SectionHeading from '../components/SectionHeading.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { allProjects } from '../data/siteData.js'

const PER_PAGE = 6

export default function ProjectsPage() {
  const [page, setPage] = useState(1)

  useEffect(() => { window.scrollTo({ top: 0 }) }, [page])

  const totalPages = Math.ceil(allProjects.length / PER_PAGE)
  const visible = allProjects.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  return (
    <main className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-site">
        <SectionHeading>Explore Homes</SectionHeading>

        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-14 flex items-center justify-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="btn-outline px-4 py-2 text-sm disabled:opacity-30"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`h-9 w-9 text-sm font-medium transition-colors ${
                  page === i + 1
                    ? 'bg-brass text-white'
                    : 'border border-ink/20 text-ink hover:border-brass hover:text-brass'
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}
              className="btn-outline px-4 py-2 text-sm disabled:opacity-30"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </main>
  )
}
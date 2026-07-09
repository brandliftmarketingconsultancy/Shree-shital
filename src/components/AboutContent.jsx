import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from './SectionHeading.jsx'
import { aboutPage } from '../data/siteData.js'

export default function AboutContent() {
  const { heading, paragraphs } = aboutPage.about

  return (
    <section className="bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
      <div className="mx-auto max-w-site">
        {/* Breadcrumb */}
        <nav className="mb-10 flex items-center gap-1.5 text-xs text-ink/50">
          <Link to="/" className="hover:text-brass-600 transition-colors">Home</Link>
          <ChevronRight size={12} />
          <span>Know Us</span>
          <ChevronRight size={12} />
          <span className="text-brass-600 font-medium">About Us</span>
        </nav>

        <SectionHeading as="h1">{heading}</SectionHeading>

        <div className="mx-auto mt-10 max-w-4xl space-y-5">
          {paragraphs.map((para, i) => (
            <p key={i} className="leading-relaxed text-ink/75">
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

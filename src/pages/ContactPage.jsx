import { useEffect } from 'react'
import ContactForm from '../components/ContactForm.jsx'
import { brand, contactInfo, allProjects } from '../data/siteData.js'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  useEffect(() => { window.scrollTo({ top: 0 }) }, [])

  return (
    <main className="min-h-screen bg-ivory">

      <div className="mx-auto max-w-site px-5 py-8 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[220px_1fr] lg:gap-16 lg:items-start">

          {/* LEFT — contact info */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:gap-6">

            <a href={`tel:${brand.phone}`}
              className="flex items-center gap-3 rounded border border-ink/10 bg-white px-4 py-3 transition-colors hover:border-brass">
              <Phone size={15} className="shrink-0 text-brass" />
              <div>
                <p className="text-[10px] text-ink/40 uppercase tracking-wide">Call</p>
                <p className="text-sm font-medium text-ink">{brand.phone}</p>
              </div>
            </a>

            <a href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-3 rounded border border-ink/10 bg-white px-4 py-3 transition-colors hover:border-brass">
              <Mail size={15} className="shrink-0 text-brass" />
              <div>
                <p className="text-[10px] text-ink/40 uppercase tracking-wide">Email</p>
                <p className="text-sm font-medium text-ink break-all">{contactInfo.email}</p>
              </div>
            </a>

            <div className="flex items-center gap-3 rounded border border-ink/10 bg-white px-4 py-3 sm:col-span-2 lg:col-span-1">
              <MapPin size={15} className="shrink-0 text-brass" />
              <div>
                <p className="text-[10px] text-ink/40 uppercase tracking-wide">Office</p>
                <p className="text-sm font-medium text-ink">{contactInfo.address}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded border border-ink/10 bg-white px-4 py-3 sm:col-span-2 lg:col-span-1">
              <Clock size={15} className="shrink-0 text-brass" />
              <div>
                <p className="text-[10px] text-ink/40 uppercase tracking-wide">Hours</p>
                <p className="text-sm font-medium text-ink">Mon – Sat, 10 AM – 7 PM</p>
              </div>
            </div>

            {/* Projects — desktop only */}
            <div className="hidden lg:block border-t border-ink/10 pt-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/40 mb-3">
                Our projects
              </p>
              <ul className="space-y-2">
                {allProjects.map((p) => (
                  <li key={p.id}>
                    <a href={`/projects/${p.id}`}
                      className="text-sm text-ink/60 hover:text-brass transition-colors">
                      {p.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT — form only, no wrapper heading */}
          <div className="bg-white border border-ink/10 p-5 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-ink/50 mb-6">
              Send an enquiry
            </p>
            <ContactForm embedded />
          </div>

        </div>
      </div>
    </main>
  )
}
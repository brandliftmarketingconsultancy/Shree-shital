import { useState } from 'react'
import { CheckCircle2, Mail, MapPin, Phone } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import { brand, contactInfo, featuredProjects } from '../data/siteData.js'

const inputClass =
  'mt-2 w-full border border-ink/20 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-brass focus:outline-none'
const labelClass = 'text-xs font-semibold uppercase tracking-wide text-ink/60'

const initialForm = { name: '', phone: '', email: '', project: 'General Enquiry', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // No backend wired up yet — replace this with an API call / form
    // service (e.g. fetch to your CRM, Formspree, etc.) when ready.
    console.log('Quick Inquiry submitted:', form)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-ivory px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-site">
        <SectionHeading>Contact Us</SectionHeading>

        <div className="mt-10 grid gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-light leading-snug text-ink sm:text-3xl">
              Plan a visit. We&rsquo;ll take it from there.
            </h2>
            <p className="mt-4 leading-relaxed text-ink/70">
              Share your details and our sales team will reach out with
              project info, pricing, and a site-visit slot that works for
              you.
            </p>

            <ul className="mt-8 space-y-4 text-sm text-ink/75">
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-brass" />
                <a href={`tel:${brand.phone}`} className="hover:text-brass">
                  {brand.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-brass" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-brass">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-brass" />
                <span>{contactInfo.address}</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center gap-3 border border-brass/30 bg-brass-50 px-6 py-16 text-center">
                <CheckCircle2 className="text-brass-600" size={34} />
                <p className="font-display text-xl text-ink">Thank you!</p>
                <p className="max-w-xs text-sm text-ink/70">
                  Your enquiry has been received. Our team will get back to
                  you shortly.
                </p>
                <button
                  onClick={() => {
                    setForm(initialForm)
                    setSubmitted(false)
                  }}
                  className="btn-outline mt-4"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2" noValidate>
                <label className="block">
                  <span className={labelClass}>Full Name</span>
                  <input
                    required
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </label>

                <label className="block">
                  <span className={labelClass}>Phone Number</span>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className={inputClass}
                  />
                </label>

                <label className="block sm:col-span-2">
                  <span className={labelClass}>Email Address</span>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </label>

                <label className="block sm:col-span-2">
                  <span className={labelClass}>Project of Interest</span>
                  <select
                    name="project"
                    value={form.project}
                    onChange={handleChange}
                    className={`${inputClass} appearance-none`}
                  >
                    <option>General Enquiry</option>
                    {featuredProjects.map((p) => (
                      <option key={p.id}>{p.name}</option>
                    ))}
                  </select>
                </label>

                <label className="block sm:col-span-2">
                  <span className={labelClass}>Message</span>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us what you're looking for"
                    className={`${inputClass} resize-none`}
                  />
                </label>

                <div className="sm:col-span-2">
                  <button type="submit" className="btn-solid w-full sm:w-auto">
                    Send Enquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

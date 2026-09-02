import { useState } from 'react'
import { CheckCircle2, Mail, MapPin, Phone } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import { brand, contactInfo, featuredProjects } from '../data/siteData.js'

const inputClass =
  'mt-2 w-full border bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:outline-none'
const labelClass = 'text-xs font-semibold uppercase tracking-wide text-ink/60'
// Fixed height so an error message appearing/disappearing never shifts the layout
const errorClass = 'mt-1 min-h-[1.1rem] text-xs text-red-600'

const initialForm = { name: '', phone: '', email: '', project: 'General Enquiry', message: '' }

// Replace with the "Web app URL" you get from Apps Script → Deploy → New deployment
const GOOGLE_SHEET_ENDPOINT = 'https://script.google.com/macros/s/AKfycbwJHAgxi4gBZd5jXPAHtAQto8byyoUublXrJMbFjCs2o7YYmAWhYHh5F32L8bns_9Cd/exec'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// Accepts +91 98765 43210, 9876543210, (987) 654-3210, etc. — at least 7 digits
const PHONE_MAX = 20 // character limit on the input, includes spaces/symbols

function getPhoneDigits(phone) {
  // Strip everything except digits
  let digits = phone.replace(/\D/g, '')
  // Strip a leading "91" country code if present, so "+91 98765 43210" -> 10 digits
  if (digits.length === 12 && digits.startsWith('91')) {
    digits = digits.slice(2)
  }
  return digits
}
// Letters, spaces, apostrophes, hyphens — covers most real names, blocks digits/symbols
const NAME_RE = /^[A-Za-z][A-Za-z\s'-]*$/

const NAME_MAX = 60
// const PHONE_MAX = 20
const EMAIL_MAX = 100
const MESSAGE_MAX = 800
const MESSAGE_MIN = 10

function validateForm(form) {
  const errors = {}
  const name = form.name.trim()
  const phone = form.phone.trim()
  const email = form.email.trim()
  const message = form.message.trim()

  if (!name) {
    errors.name = 'Please enter your name.'
  } else if (name.length < 2) {
    errors.name = 'Name looks too short.'
  } else if (name.length > NAME_MAX) {
    errors.name = `Name must be under ${NAME_MAX} characters.`
  } else if (!NAME_RE.test(name)) {
    errors.name = 'Name can only contain letters, spaces, and hyphens.'
  }

if (!phone) {
    errors.phone = 'Please enter a phone number.'
  } else if (phone.length > PHONE_MAX) {
    errors.phone = 'Phone number is too long.'
  } else {
    const digits = getPhoneDigits(phone)
    if (digits.length !== 10) {
      errors.phone = 'Phone number must be exactly 10 digits.'
    } else if (!/^[+()\d\s-]+$/.test(phone)) {
      errors.phone = 'Phone number contains invalid characters.'
    }
  }

  if (!email) {
    errors.email = 'Please enter your email.'
  } else if (email.length > EMAIL_MAX) {
    errors.email = 'Email is too long.'
  } else if (!EMAIL_RE.test(email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!message) {
    errors.message = 'Please add a short message.'
  } else if (message.length < MESSAGE_MIN) {
    errors.message = `Message is too short — add a bit more detail (min ${MESSAGE_MIN} characters).`
  } else if (message.length > MESSAGE_MAX) {
    errors.message = `Message must be under ${MESSAGE_MAX} characters.`
  }

  return errors
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    const nextForm = { ...form, [name]: value }
    setForm(nextForm)

    // Live-validate a field once the user has already interacted with it,
    // so error messages update as they type instead of only on submit.
    if (touched[name]) {
      setErrors(validateForm(nextForm))
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors(validateForm(form))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError('')

    const validationErrors = validateForm(form)
    setErrors(validationErrors)
    setTouched({ name: true, phone: true, email: true, message: true })

    if (Object.keys(validationErrors).length > 0) {
      return
    }

    // Trim before sending so the sheet doesn't collect stray whitespace
    const cleanForm = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      project: form.project,
      message: form.message.trim(),
    }

    setSubmitting(true)
    try {
      // Apps Script web apps don't send CORS headers back for simple requests,
      // so we use 'no-cors' — the request still goes through and the row
      // still gets written, we just can't read the response body.
      await fetch(GOOGLE_SHEET_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(cleanForm),
      })

      setSubmitted(true)
    } catch (err) {
      console.error('Failed to submit enquiry:', err)
      setSubmitError('Something went wrong. Please try again or call us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  const fieldBorder = (field) =>
    errors[field] && touched[field] ? 'border-red-400 focus:border-red-500' : 'border-ink/20 focus:border-brass'

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
                    setErrors({})
                    setTouched({})
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
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your name"
                    maxLength={NAME_MAX}
                    aria-invalid={Boolean(errors.name && touched.name)}
                    className={`${inputClass} ${fieldBorder('name')}`}
                  />
                  <p className={errorClass}>{touched.name && errors.name}</p>
                </label>

                <label className="block">
                  <span className={labelClass}>Phone Number</span>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="+91 98765 43210"
                    maxLength={PHONE_MAX}
                    aria-invalid={Boolean(errors.phone && touched.phone)}
                    className={`${inputClass} ${fieldBorder('phone')}`}
                  />
                  <p className={errorClass}>{touched.phone && errors.phone}</p>
                </label>

                <label className="block sm:col-span-2">
                  <span className={labelClass}>Email Address</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="you@example.com"
                    maxLength={EMAIL_MAX}
                    aria-invalid={Boolean(errors.email && touched.email)}
                    className={`${inputClass} ${fieldBorder('email')}`}
                  />
                  <p className={errorClass}>{touched.email && errors.email}</p>
                </label>

                <label className="block sm:col-span-2">
                  <span className={labelClass}>Project of Interest</span>
                  <select
                    name="project"
                    value={form.project}
                    onChange={handleChange}
                    className={`${inputClass} ${fieldBorder('project')} appearance-none`}
                  >
                    <option>General Enquiry</option>
                    {featuredProjects.map((p) => (
                      <option key={p.id}>{p.name}</option>
                    ))}
                  </select>
                  <p className={errorClass} />
                </label>

                <label className="block sm:col-span-2">
                  <span className={labelClass}>Message</span>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Tell us what you're looking for"
                    maxLength={MESSAGE_MAX}
                    aria-invalid={Boolean(errors.message && touched.message)}
                    className={`${inputClass} ${fieldBorder('message')} resize-none`}
                  />
                  <p className={errorClass}>{touched.message && errors.message}</p>
                </label>

                <div className="sm:col-span-2">
                  <p className="min-h-[1.25rem] text-sm text-red-600">{submitError}</p>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-solid w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                  >
                    <span className="inline-block w-[6.5rem] text-center">
                      {submitting ? 'Sending…' : 'Send Enquiry'}
                    </span>
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
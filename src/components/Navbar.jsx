import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, Phone, Search, X } from 'lucide-react'
import { brand, navLinks } from '../data/siteData.js'

// lucide-react doesn't include brand logos, so WhatsApp is a small inline SVG
function WhatsAppIcon({ size = 17 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.933.552 3.833 1.598 5.478L2 22l4.646-1.573A9.953 9.953 0 0 0 12.001 22C17.523 22 22 17.523 22 12S17.523 2 12.001 2zm0 18.06a8.03 8.03 0 0 1-4.096-1.121l-.294-.174-2.756.933.926-2.686-.19-.276A8.026 8.026 0 0 1 3.94 12c0-4.444 3.617-8.06 8.061-8.06 4.444 0 8.06 3.616 8.06 8.06 0 4.444-3.616 8.06-8.06 8.06z" />
    </svg>
  )
}

// Strip non-digits and ensure a full international number for the wa.me link
function getWhatsAppNumber(phone) {
  let digits = phone.replace(/\D/g, '')
  if (digits.length === 10) digits = `91${digits}` // add country code if missing
  return digits
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isAbout = location.pathname === '/about'
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Close mobile menu on route change
  useEffect(() => { setOpen(false) }, [location.pathname])

  const handleSectionNavigation = (id) => {
  setOpen(false)

  if (location.pathname === '/') {
    const section = document.getElementById(id)

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }

    return
  }

  navigate(`/#${id}`)
}

  return (
    <header
      id="top"
      className={`sticky top-0 z-50 border-b border-ink/10 bg-ivory transition-shadow duration-300 ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="mx-auto flex max-w-site items-center justify-between px-5 py-1 sm:px-8 lg:px-12">
        {/* Brand / logo → always goes home */}
        <Link to="/" className="flex items-center">
          <img
            src={brand.src}
            className="h-[50px] w-auto "
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            if (link.type === 'page') {
              return (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`text-sm font-medium tracking-wide transition-colors hover:text-brass ${
                    location.pathname === link.to ? 'text-brass' : 'text-ink/80'
                  }`}
                >
                  {link.label}
                </Link>
              )
            }

            return (
              <button
                key={link.label}
                onClick={() => handleSectionNavigation(link.id)}
                className="text-sm font-medium tracking-wide text-ink/80 transition-colors hover:text-brass"
              >
                {link.label}
              </button>
            )
          })}
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`tel:${brand.phone}`}
            aria-label="Call us"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:border-brass hover:text-brass sm:flex"
          >
            <Phone size={17} />
          </a>
          <a
            href={`https://wa.me/${getWhatsAppNumber(brand.phone)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:border-brass hover:text-brass sm:flex"
          >
            <WhatsAppIcon size={17} />
          </a>
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:border-brass hover:text-brass lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {/* <div
        className={`grid overflow-hidden bg-ivory transition-[grid-template-rows] duration-300 lg:hidden ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <nav className="flex flex-col gap-1 border-t border-ink/10 px-5 py-4 sm:px-8">
            {navLinks.map((link) =>
              link.label === 'Know Us' ? (
                <Link
                  key={link.label}
                  to="/about"
                  className="rounded px-2 py-3 text-base font-medium text-ink/80 hover:bg-sand hover:text-brass"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded px-2 py-3 text-base font-medium text-ink/80 hover:bg-sand hover:text-brass"
                >
                  {link.label}
                </a>
              )
            )}
            <a
              href={`tel:${brand.phone}`}
              className="mt-2 flex items-center gap-2 rounded px-2 py-3 text-base font-medium text-ink/80 hover:bg-sand hover:text-brass"
            >
              <Phone size={16} /> {brand.phone}
            </a>
          </nav>
        </div>
      </div> */}

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-ink/40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Right-to-left drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-72 bg-ivory shadow-xl transition-transform duration-300 ease-in-out lg:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4">
          <span className="font-display text-lg text-ink">
            {brand.fullName}
          </span>

          <button
            onClick={() => setOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/20 text-ink"
          >
            <X size={18} />
          </button>
        </div>

        {/* Drawer links */}
<nav className="flex flex-col gap-1 px-4 py-6">
  {navLinks.map((link) => {
    if (link.type === 'page') {
      return (
        <Link
          key={link.label}
          to={link.to}
          onClick={() => setOpen(false)}
          className={`rounded px-3 py-3 text-base font-medium transition-colors hover:bg-sand hover:text-brass ${
            location.pathname === link.to
              ? 'text-brass'
              : 'text-ink/80'
          }`}
        >
          {link.label}
        </Link>
      )
    }

    return (
      <button
        key={link.label}
        onClick={() => {
          setOpen(false)
          handleSectionNavigation(link.id)
        }}
        className="w-full rounded px-3 py-3 text-left text-base font-medium text-ink/80 transition-colors hover:bg-sand hover:text-brass"
      >
        {link.label}
      </button>
    )
  })}
</nav>

        {/* Phone number + WhatsApp at bottom */}
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-ink/10 px-5 py-5">
          <a
            href={`tel:${brand.phone}`}
            className="flex items-center gap-2 text-sm font-medium text-ink/70 hover:text-brass"
          >
            <Phone size={16} />
            {brand.phone}
          </a>
          <a
            href={`https://wa.me/${getWhatsAppNumber(brand.phone)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/20 text-ink/70 hover:border-brass hover:text-brass"
          >
            <WhatsAppIcon size={16} />
          </a>
        </div>
      </div>
    </header>
  )
}
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Phone, Search, X } from 'lucide-react'
import { brand, navLinks } from '../data/siteData.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isAbout = location.pathname === '/about'

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

  return (
    <header
      id="top"
      className={`sticky top-0 z-50 border-b border-ink/10 bg-ivory transition-shadow duration-300 ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="mx-auto flex max-w-site items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        {/* Brand / logo → always goes home */}
        <Link to="/" className="font-display text-xl tracking-wide text-ink sm:text-2xl">
          {brand.fullName}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) =>
            link.label === 'Know Us' ? (
              <Link
                key={link.label}
                to="/about"
                className={`text-sm font-medium tracking-wide transition-colors hover:text-brass ${
                  isAbout ? 'text-brass' : 'text-ink/80'
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={isAbout ? `/${link.href}` : link.href}
                onClick={() => {
                  if (isAbout) {
                    // If on About page, go home first then scroll
                    setTimeout(() => {
                      const el = document.querySelector(link.href)
                      if (el) el.scrollIntoView({ behavior: 'smooth' })
                    }, 100)
                  }
                }}
                className="text-sm font-medium tracking-wide text-ink/80 transition-colors hover:text-brass"
              >
                {link.label}
              </a>
            )
          )}
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
          <button
            aria-label="Search"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:border-brass hover:text-brass sm:flex"
          >
            <Search size={17} />
          </button>
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
    {navLinks.map((link) =>
      link.label === 'Know Us' ? (
        <Link
          key={link.label}
          to="/about"
          className="rounded px-3 py-3 text-base font-medium text-ink/80 hover:bg-sand hover:text-brass"
        >
          {link.label}
        </Link>
      ) : link.label === 'Projects' ? (
        <Link
          key={link.label}
          to="/projects"
          className="rounded px-3 py-3 text-base font-medium text-ink/80 hover:bg-sand hover:text-brass"
        >
          {link.label}
        </Link>
      ) : (
        <a
          key={link.label}
          href={link.href}
          onClick={() => setOpen(false)}
          className="rounded px-3 py-3 text-base font-medium text-ink/80 hover:bg-sand hover:text-brass"
        >
          {link.label}
        </a>
      )
    )}
  </nav>

  {/* Phone number at bottom */}
  <div className="absolute inset-x-0 bottom-0 border-t border-ink/10 px-5 py-5">
    <a
      href={`tel:${brand.phone}`}
      className="flex items-center gap-2 text-sm font-medium text-ink/70 hover:text-brass"
    >
      <Phone size={16} />
      {brand.phone}
    </a>
  </div>
</div>
    </header>
  )
}

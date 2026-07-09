import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import { brand, footerColumns } from '../data/siteData.js'

const socials = [
  { Icon: Facebook, label: 'Facebook' },
  { Icon: Twitter, label: 'Twitter' },
  { Icon: Instagram, label: 'Instagram' },
  { Icon: Youtube, label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer id="footer" className="bg-ink text-white/80">
      <div className="mx-auto max-w-site px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-display text-lg text-white">
              About {brand.fullName}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Established with a commitment to quality and design, Aurelia
              Properties is currently developing landmark residential and
              commercial projects across India&rsquo;s major cities.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg text-white">Work With Us</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#contact" className="font-semibold text-white hover:text-brass-400">
                  Enquire
                </a>
              </li>
              <li>
                <a href="#contact" className="font-semibold text-white hover:text-brass-400">
                  Schedule A Site Visit
                </a>
              </li>
            </ul>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-lg text-white">{col.title}</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#footer" className="hover:text-brass-400">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="text-sm text-white/60">Follow us on</span>
            <div className="flex items-center gap-3">
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#footer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-brass hover:text-brass-400"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#footer"
              className="rounded border border-white/20 px-4 py-2 text-xs font-medium text-white/80 hover:border-brass hover:text-brass-400"
            >
              App Store
            </a>
            <a
              href="#footer"
              className="rounded border border-white/20 px-4 py-2 text-xs font-medium text-white/80 hover:border-brass hover:text-brass-400"
            >
              Google Play
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-site flex-col items-center justify-between gap-3 text-xs text-white/50 sm:flex-row">
          <p>Copyright &copy; {new Date().getFullYear()}. {brand.fullName}</p>
          <div className="flex gap-5">
            <a href="#footer" className="hover:text-brass-400">
              Disclaimer
            </a>
            <a href="#footer" className="hover:text-brass-400">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

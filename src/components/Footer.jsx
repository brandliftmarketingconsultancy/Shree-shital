import { Link } from 'react-router-dom'
import { brand, footerColumns } from '../data/siteData.js'

export default function Footer() {
  return (
    <footer id="footer" className="bg-ink text-white/80">
      <div className="mx-auto max-w-site px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Logo column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" aria-label={brand.fullName}>
              <img
                src="/assets/sheetal_group_logo.png"
                alt={brand.fullName}
                className="h-20 w-auto"
              />
            </Link>
          </div>

          <div>
            <h3 className="font-display text-lg text-white">About {brand.fullName}</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Shree Sheetal is a real estate developer in Balaghat building residential townships, premium plots, and luxury villas designed for lasting value.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg text-white">Work With Us</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link to="/contact" className="font-semibold text-white hover:text-brass-400">
                  Enquire
                </Link>
              </li>
              <li>
                <Link to="/contact" className="font-semibold text-white hover:text-brass-400">
                  Schedule A Site Visit
                </Link>
              </li>
            </ul>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-lg text-white">{col.title}</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="hover:text-brass-400">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-site flex-col items-center justify-between gap-3 text-xs text-white/50 sm:flex-row">
          <p>Copyright &copy; {new Date().getFullYear()}. {brand.fullName}</p>
          <div className="flex gap-5">
            <a href="#footer" className="hover:text-brass-400">Disclaimer</a>
            <a href="#footer" className="hover:text-brass-400">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
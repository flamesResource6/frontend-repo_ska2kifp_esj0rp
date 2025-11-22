import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const brandGreen = '#00C96B'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-[--brand-green]/10 border border-[--brand-green]/30 flex items-center justify-center shadow-[0_0_25px_rgba(0,201,107,0.4)]">
            <div className="w-4 h-4 rounded-sm bg-[--brand-green] shadow-[0_0_20px_rgba(0,201,107,0.9)]" />
          </div>
          <span className="font-bold text-white text-lg tracking-tight group-hover:text-[--brand-green] transition-colors">FoundersROI</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/contact"
            className="ml-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[--brand-green] text-black font-semibold shadow-[0_0_25px_rgba(0,201,107,0.65)] hover:shadow-[0_0_35px_rgba(0,201,107,0.95)] transition-shadow"
          >
            Book a Strategy Call
          </a>
        </nav>

        <button
          className="md:hidden text-white p-2 rounded-lg border border-white/10"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/90 py-2"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[--brand-green] text-black font-semibold shadow-[0_0_25px_rgba(0,201,107,0.65)]"
              onClick={() => setOpen(false)}
            >
              Book a Strategy Call
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

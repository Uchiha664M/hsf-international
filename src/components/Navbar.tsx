'use client'
import { useEffect, useState } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Clients', href: '#clients' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(8,8,5,0.94)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div
            className="w-9 h-9 flex items-center justify-center text-[10px] font-bold tracking-widest"
            style={{ background: 'var(--accent)', color: '#fff' }}
          >
            HSF
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-white/90 leading-none">International</span>
            <span className="text-[9px] tracking-[0.15em] uppercase leading-none mt-0.5" style={{ color: 'var(--muted)' }}>Est. 2009</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-xs tracking-[0.18em] uppercase transition-colors duration-200"
              style={{ color: 'var(--muted)' }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--text)')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--muted)')}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:flex items-center text-xs tracking-[0.15em] uppercase px-5 py-2.5 font-semibold transition-all duration-300 hover:opacity-80"
          style={{ background: 'var(--accent)', color: '#fff' }}
        >
          Engage
        </a>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          <div className="flex flex-col gap-1.5 w-6">
            <span className="h-px w-full transition-all duration-300" style={{ background: open ? 'var(--accent)' : 'var(--text)' }} />
            <span className="h-px transition-all duration-300" style={{ width: open ? '100%' : '66%', background: open ? 'var(--accent)' : 'var(--text)' }} />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-8 pt-4 flex flex-col gap-6" style={{ background: 'rgba(8,8,5,0.98)' }}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm tracking-[0.18em] uppercase"
              style={{ color: 'var(--muted)' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="text-sm tracking-[0.15em] uppercase px-5 py-3 text-center font-semibold mt-2"
            style={{ background: 'var(--accent)', color: '#fff' }}
          >
            Engage
          </a>
        </div>
      )}
    </header>
  )
}

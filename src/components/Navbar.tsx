'use client'
import { useEffect, useState } from 'react'

const links = ['About', 'Focus', 'Portfolio', 'Insights', 'Contact']

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
        background: scrolled ? 'rgba(8,10,14,0.92)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div
            className="w-8 h-8 rounded-sm flex items-center justify-center text-xs font-bold tracking-widest"
            style={{ background: 'var(--gold)', color: '#080A0E' }}
          >
            HSF
          </div>
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-white/80 group-hover:text-white transition-colors">
            International
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-xs tracking-[0.18em] uppercase transition-colors duration-200"
              style={{ color: 'var(--muted)' }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--text)')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--muted)')}
            >
              {l}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-5 py-2.5 transition-all duration-300 hover:opacity-80"
          style={{ border: '1px solid var(--gold)', color: 'var(--gold)' }}
        >
          Engage
        </a>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          <div className="flex flex-col gap-1.5 w-6">
            <span className="h-px w-full" style={{ background: open ? 'var(--gold)' : 'var(--text)' }} />
            <span className="h-px w-4" style={{ background: open ? 'var(--gold)' : 'var(--text)' }} />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-8 pt-4 flex flex-col gap-6" style={{ background: 'rgba(8,10,14,0.98)' }}>
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-sm tracking-[0.18em] uppercase"
              style={{ color: 'var(--muted)' }}
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

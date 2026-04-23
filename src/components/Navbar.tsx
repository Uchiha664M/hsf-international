'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(10,8,6,0.92)' : 'transparent',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
        }}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group flex-shrink-0">
            <div
              className="w-8 h-8 flex items-center justify-center text-[9px] font-bold tracking-[0.15em]"
              style={{ background: 'var(--accent)', color: '#fff' }}
            >
              HSF
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-white/90">International</span>
              <span className="text-[9px] tracking-[0.18em] uppercase mt-0.5" style={{ color: 'var(--muted)' }}>Est. 2009</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="relative text-[11px] tracking-[0.2em] uppercase group transition-colors duration-300"
                style={{ color: 'var(--muted)' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--muted)')}
              >
                {l.label}
                <span
                  className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-400"
                  style={{ background: 'var(--accent)', transitionDuration: '400ms' }}
                />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase px-5 py-2.5 transition-all duration-300 group"
            style={{ border: '1px solid var(--border-c)', color: 'var(--accent)' }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'var(--accent)'
              el.style.color = '#fff'
              el.style.borderColor = 'var(--accent)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'transparent'
              el.style.color = 'var(--accent)'
              el.style.borderColor = 'var(--border-c)'
            }}
          >
            Engage
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] w-6 py-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }}
              transition={{ duration: 0.3 }}
              className="block h-px w-full"
              style={{ background: 'var(--text)', transformOrigin: 'center' }}
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }}
              transition={{ duration: 0.2 }}
              className="block h-px"
              style={{ width: '66%', background: 'var(--text)' }}
            />
            <motion.span
              animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }}
              transition={{ duration: 0.3 }}
              className="block h-px w-full"
              style={{ background: 'var(--text)', transformOrigin: 'center' }}
            />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-end pb-16 px-8"
            style={{ background: 'var(--bg)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="flex flex-col gap-2">
              {links.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-4 flex items-end justify-between group"
                  style={{ borderBottom: '1px solid var(--border)' }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span
                    className="text-3xl font-medium tracking-tight transition-colors duration-300"
                    style={{ color: 'var(--text)' }}
                  >
                    {l.label}
                  </span>
                  <span className="text-[10px] tracking-[0.25em] uppercase mb-2" style={{ color: 'var(--muted)' }}>
                    0{i + 1}
                  </span>
                </motion.a>
              ))}
            </nav>
            <motion.a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-8 py-4 text-center text-sm tracking-[0.2em] uppercase font-semibold"
              style={{ background: 'var(--accent)', color: '#fff' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.45 }}
            >
              Engage
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

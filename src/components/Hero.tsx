'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const lineRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const line = lineRef.current
    if (line) {
      line.style.transition = 'transform 2s cubic-bezier(0.16, 1, 0.3, 1)'
      line.style.transform = 'scaleX(1)'
    }
    const text = textRef.current
    if (text) {
      text.style.transition = 'opacity 1s ease, transform 1s cubic-bezier(0.16, 1, 0.3, 1)'
      text.style.opacity = '1'
      text.style.transform = 'translateY(0)'
    }
  }, [])

  return (
    <section
      className="relative min-h-screen flex flex-col justify-end pb-28 grid-bg overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Crimson radial glow */}
      <div
        className="absolute top-0 right-0 w-[900px] h-[900px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 75% 15%, rgba(185,28,28,0.08) 0%, transparent 60%)' }}
      />
      <div
        className="absolute bottom-0 left-1/3 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 80%, rgba(185,28,28,0.04) 0%, transparent 65%)' }}
      />

      {/* Hexagon decorative geometry */}
      <svg
        className="absolute right-[-80px] top-1/2 -translate-y-1/2 pointer-events-none"
        width="640"
        height="640"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path d="M100 8L192 55V145L100 192L8 145V55Z" stroke="#B91C1C" strokeWidth="0.4" opacity="0.12"/>
        <path d="M100 28L172 67.5V132.5L100 172L28 132.5V67.5Z" stroke="#B91C1C" strokeWidth="0.3" opacity="0.08"/>
        <path d="M100 48L152 80V120L100 152L48 120V80Z" stroke="#B91C1C" strokeWidth="0.25" opacity="0.06"/>
      </svg>

      {/* Second hex — top left, faint */}
      <svg
        className="absolute left-[-120px] top-[-60px] pointer-events-none"
        width="420"
        height="420"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path d="M100 8L192 55V145L100 192L8 145V55Z" stroke="#B91C1C" strokeWidth="0.4" opacity="0.06"/>
      </svg>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-12" style={{ animation: 'fadeUp 0.8s ease both 0.1s' }}>
          <div className="w-8 h-px" style={{ background: 'var(--accent)' }} />
          <span className="text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--accent)' }}>
            HSF International Ltd · Kampala, Uganda
          </span>
        </div>

        {/* Main headline */}
        <h1
          className="font-semibold leading-none tracking-tight mb-10"
          style={{
            fontSize: 'clamp(3rem, 8vw, 8rem)',
            color: 'var(--text)',
            animation: 'fadeUp 0.9s ease both 0.2s',
          }}
        >
          Delivering
          <br />
          <span className="accent-text">Excellence.</span>
          <br />
          Driving Growth.
        </h1>

        {/* Animated rule */}
        <div className="mb-12 overflow-hidden" style={{ animation: 'fadeUp 0.9s ease both 0.35s' }}>
          <div
            ref={lineRef}
            style={{
              height: '1px',
              background: 'linear-gradient(90deg, var(--accent) 0%, rgba(185,28,28,0.2) 60%, transparent 100%)',
              transform: 'scaleX(0)',
              transformOrigin: 'left',
            }}
          />
        </div>

        {/* Sub-copy + CTAs */}
        <div
          ref={textRef}
          className="flex flex-col md:flex-row md:items-end justify-between gap-10"
          style={{ opacity: 0, transform: 'translateY(20px)' }}
        >
          <p
            className="max-w-lg text-base leading-relaxed"
            style={{ color: 'var(--muted)', letterSpacing: '0.02em' }}
          >
            Uganda's leading multi-sector business solutions firm. Fifteen years of building
            real partnerships with over 1,485 clients — from government institutions to
            multinational corporations — across 8 industries.
          </p>

          <div className="flex items-center gap-4 flex-shrink-0">
            <a
              href="#about"
              className="flex items-center gap-3 text-sm tracking-[0.15em] uppercase transition-all duration-300 group"
              style={{ color: 'var(--accent)' }}
            >
              <span>Our Story</span>
              <svg width="20" height="8" viewBox="0 0 20 8" fill="none" className="transition-transform duration-300 group-hover:translate-x-2">
                <path d="M0 4H18M15 1L18 4L15 7" stroke="currentColor" strokeWidth="1" />
              </svg>
            </a>
            <a
              href="#contact"
              className="text-sm tracking-[0.15em] uppercase px-6 py-3 font-semibold transition-all duration-300 hover:opacity-85"
              style={{ background: 'var(--accent)', color: '#fff' }}
            >
              Engage
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex items-center gap-3 mt-20 opacity-25" style={{ animation: 'fadeUp 1s ease both 0.8s' }}>
          <div className="w-px h-8 mx-auto animate-bounce" style={{ background: 'var(--text)' }} />
          <span className="text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--text)' }}>Scroll</span>
        </div>
      </div>
    </section>
  )
}

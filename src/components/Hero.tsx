'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = lineRef.current
    if (!el) return
    el.style.transition = 'width 1.8s cubic-bezier(0.16, 1, 0.3, 1)'
    el.style.width = '100%'
  }, [])

  return (
    <section
      className="relative min-h-screen flex flex-col justify-end pb-24 grid-bg overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Radial glow */}
      <div
        className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 70% 20%, rgba(201,168,76,0.07) 0%, transparent 65%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 30% 80%, rgba(201,168,76,0.04) 0%, transparent 65%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-8 h-px" style={{ background: 'var(--gold)' }} />
          <span className="text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--gold)' }}>
            Global Investment & Resource Management
          </span>
        </div>

        {/* Main headline */}
        <h1
          className="font-semibold leading-none tracking-tight mb-10"
          style={{ fontSize: 'clamp(3rem, 8vw, 7.5rem)', color: 'var(--text)' }}
        >
          Where Capital
          <br />
          <span className="gold-text">Meets Frontier.</span>
        </h1>

        {/* Animated line */}
        <div className="mb-10">
          <div
            ref={lineRef}
            style={{
              width: '0%',
              height: '1px',
              background: 'linear-gradient(90deg, var(--gold) 0%, transparent 100%)',
            }}
          />
        </div>

        {/* Sub-copy + CTA row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <p
            className="max-w-md text-base leading-relaxed"
            style={{ color: 'var(--muted)', letterSpacing: '0.02em' }}
          >
            HSF International deploys strategic capital across emerging markets,
            natural resources, and high-conviction global assets — building
            lasting enterprise value across six continents.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#about"
              className="flex items-center gap-3 text-sm tracking-[0.15em] uppercase transition-all duration-300 group"
              style={{ color: 'var(--gold)' }}
            >
              <span>Discover HSF</span>
              <svg width="20" height="8" viewBox="0 0 20 8" fill="none" className="transition-transform duration-300 group-hover:translate-x-2">
                <path d="M0 4H18M15 1L18 4L15 7" stroke="currentColor" strokeWidth="1" />
              </svg>
            </a>
            <a
              href="#contact"
              className="text-sm tracking-[0.15em] uppercase px-6 py-3 transition-all duration-300 hover:opacity-80"
              style={{ background: 'var(--gold)', color: '#080A0E', fontWeight: 600 }}
            >
              Engage
            </a>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="flex items-center gap-3 mt-20 opacity-30">
          <div className="flex flex-col gap-1">
            <div className="w-px h-8 mx-auto animate-bounce" style={{ background: 'var(--text)' }} />
          </div>
          <span className="text-xs tracking-[0.25em] uppercase" style={{ color: 'var(--text)' }}>Scroll</span>
        </div>
      </div>
    </section>
  )
}

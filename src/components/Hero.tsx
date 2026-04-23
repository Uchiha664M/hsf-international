'use client'
import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-end pb-28 grid-bg overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* VIDEO SLOT — uncomment src when media is ready */}
      {/* <video
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.18 }}
        autoPlay muted loop playsInline
        poster="/media/hsf-hero-poster.jpg"
      >
        <source src="/media/hsf-hero.mp4" type="video/mp4" />
      </video> */}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, var(--bg) 0%, rgba(10,8,6,0.6) 50%, transparent 100%)',
        }}
      />

      {/* Crimson glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 75% 15%, rgba(185,28,28,0.09) 0%, transparent 60%)' }} />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 20% 70%, rgba(185,28,28,0.04) 0%, transparent 65%)' }} />

      {/* Hex geometry */}
      <svg className="absolute right-[-60px] top-1/2 -translate-y-1/2 pointer-events-none opacity-[0.09]"
        width="700" height="700" viewBox="0 0 200 200" fill="none">
        <path d="M100 6L194 53V147L100 194L6 147V53Z" stroke="#B91C1C" strokeWidth="0.5"/>
        <path d="M100 28L172 68V132L100 172L28 132V68Z" stroke="#B91C1C" strokeWidth="0.35"/>
        <path d="M100 50L150 78.7V121.3L100 150L50 121.3V78.7Z" stroke="#B91C1C" strokeWidth="0.2"/>
      </svg>
      <svg className="absolute -left-[100px] -top-[60px] pointer-events-none opacity-[0.05]"
        width="500" height="500" viewBox="0 0 200 200" fill="none">
        <path d="M100 6L194 53V147L100 194L6 147V53Z" stroke="#B91C1C" strokeWidth="0.5"/>
      </svg>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 w-full relative z-10">
        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-4 mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
        >
          <div className="w-8 h-px" style={{ background: 'var(--accent)' }} />
          <span className="text-[10px] tracking-[0.32em] uppercase" style={{ color: 'var(--accent)' }}>
            HSF International · Kampala, Uganda · Est. 2009
          </span>
        </motion.div>

        {/* Headline */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            className="font-medium leading-none tracking-tight"
            style={{ fontSize: 'clamp(3.2rem, 9vw, 9.5rem)', color: 'var(--text)', letterSpacing: '-0.025em' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.2 }}
          >
            Delivering
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-2">
          <motion.h1
            className="font-medium leading-none tracking-tight accent-text"
            style={{ fontSize: 'clamp(3.2rem, 9vw, 9.5rem)', letterSpacing: '-0.025em' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.3 }}
          >
            Excellence.
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-14">
          <motion.h1
            className="font-medium leading-none tracking-tight"
            style={{ fontSize: 'clamp(3.2rem, 9vw, 9.5rem)', color: 'var(--text)', letterSpacing: '-0.025em' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.4 }}
          >
            Driving Growth.
          </motion.h1>
        </div>

        {/* Bottom row */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.6 }}
        >
          <p
            className="max-w-lg leading-8"
            style={{ fontSize: '15px', color: 'var(--muted)', letterSpacing: '0.01em' }}
          >
            Uganda's leading multi-sector business solutions firm — 15 years, 1,485 clients,
            eight industries. We don't just deliver results. We build lasting partnerships.
          </p>

          <div className="flex items-center gap-8 flex-shrink-0">
            <a
              href="#about"
              className="flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase transition-all duration-300 group"
              style={{ color: 'var(--accent)' }}
            >
              <span>Our Story</span>
              <svg width="20" height="8" viewBox="0 0 20 8" fill="none" className="transition-transform duration-300 group-hover:translate-x-2">
                <path d="M0 4H18M15 1L18 4L15 7" stroke="currentColor" strokeWidth="0.9"/>
              </svg>
            </a>
            <a
              href="#contact"
              className="text-[11px] tracking-[0.2em] uppercase px-7 py-3.5 font-semibold transition-all duration-300 hover:opacity-85"
              style={{ background: 'var(--accent)', color: '#fff' }}
            >
              Engage
            </a>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="flex items-center gap-3 mt-20 opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="w-px h-10 animate-bounce" style={{ background: 'var(--text)' }} />
          <span className="text-[9px] tracking-[0.35em] uppercase" style={{ color: 'var(--text)' }}>Scroll</span>
        </motion.div>
      </div>
    </section>
  )
}

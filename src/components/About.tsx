'use client'
import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
}

export default function About() {
  return (
    <section id="about" className="py-40 lg:py-56" style={{ background: 'var(--bg)' }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">

        {/* Top label */}
        <motion.div
          className="flex items-center gap-4 mb-20"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease }}
        >
          <div className="w-6 h-px" style={{ background: 'var(--accent)' }} />
          <span className="text-[10px] tracking-[0.32em] uppercase" style={{ color: 'var(--accent)' }}>
            About HSF International
          </span>
        </motion.div>

        {/* Two-column block */}
        <div className="grid md:grid-cols-2 gap-20 lg:gap-32 items-start mb-24">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              variants={item}
              className="font-medium leading-tight tracking-tight"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 5rem)', color: 'var(--text)', letterSpacing: '-0.02em' }}
            >
              Built on vision.
              <br />
              Driven by impact.
            </motion.h2>
          </motion.div>

          <motion.div
            className="flex flex-col gap-8 pt-2"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p variants={item} className="leading-8" style={{ fontSize: '15px', color: 'var(--muted)' }}>
              Founded in Kampala in 2009, HSF International was built on a singular conviction:
              that Uganda's organizations — from government agencies to international NGOs — deserve
              world-class solutions delivered by people who understand the terrain. Fifteen years later,
              that conviction remains the engine of everything we do.
            </motion.p>
            <motion.p variants={item} className="leading-8" style={{ fontSize: '15px', color: 'var(--muted)' }}>
              We operate across eight critical sectors, serving 1,485+ clients with 3,452+ completed
              projects. We do not treat every engagement as a transaction — we treat it as a
              long-term partnership built on results that speak for themselves.
            </motion.p>

            <motion.div
              variants={item}
              className="grid grid-cols-2 gap-2 mt-2"
            >
              {['Client-First Delivery', 'Operational Excellence', 'Pan-African Vision', 'Integrity'].map((p) => (
                <div
                  key={p}
                  className="flex items-center gap-3 py-3 px-4"
                  style={{ border: '1px solid var(--border)' }}
                >
                  <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'var(--accent)' }} />
                  <span className="text-[11px] tracking-[0.06em]" style={{ color: 'var(--text)' }}>{p}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* CEO block */}
        <motion.div
          className="relative overflow-hidden p-12 lg:p-20"
          style={{ border: '1px solid var(--border)', background: 'var(--bg-2)' }}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.85, ease }}
        >
          {/* bg glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 80% 10%, rgba(185,28,28,0.07) 0%, transparent 60%)' }} />

          <div className="grid md:grid-cols-3 gap-12 lg:gap-20 items-start relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-4 h-px" style={{ background: 'var(--accent)' }} />
                <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: 'var(--accent)' }}>Founder & CEO</span>
              </div>
              <h3
                className="font-medium leading-tight mb-2"
                style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', color: 'var(--text)', letterSpacing: '-0.015em' }}
              >
                Hussein Abdullah
              </h3>
              <p className="text-[10px] tracking-[0.2em] uppercase" style={{ color: 'var(--muted)' }}>Chief Executive Officer</p>

              <div className="mt-8 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
                <p className="text-[10px] tracking-[0.18em] uppercase mb-1" style={{ color: 'var(--muted)' }}>Location</p>
                <p className="text-sm" style={{ color: 'var(--text)' }}>Kampala, Uganda</p>
              </div>
            </div>

            <div className="md:col-span-2 flex flex-col gap-6">
              <blockquote
                className="text-lg leading-9 italic font-medium"
                style={{
                  color: 'var(--text)',
                  borderLeft: '2px solid var(--accent)',
                  paddingLeft: '1.75rem',
                  letterSpacing: '-0.01em',
                }}
              >
                "Our mission is to be the partner that organizations trust when it matters most —
                delivering excellence not as a promise, but as a standard."
              </blockquote>
              <p className="leading-8" style={{ fontSize: '14px', color: 'var(--muted)' }}>
                Hussein Abdullah has led HSF International from its founding in 2009 to become Uganda's
                most recognized multi-sector business solutions firm. He has represented Uganda at the
                UAE-Africa Business Summit and the World Future Energy Summit in Abu Dhabi, and secured
                a landmark recognition meeting with H.E. President Yoweri Museveni. Under his leadership,
                HSF has served clients including the World Health Organization, MTN Uganda, TotalEnergies,
                KCCA, and the Uganda Police Force.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

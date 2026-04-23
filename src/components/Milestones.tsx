'use client'
import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const

const milestones = [
  { year: '2009', title: 'Founded in Kampala', desc: 'HSF International Ltd established in Uganda with a mandate to deliver world-class business solutions.' },
  { year: '2014', title: 'Regional Expansion', desc: 'Operations extend across East Africa, building deep partnerships with government, NGOs, and private sector leaders.' },
  { year: '2018', title: 'Presidential Recognition', desc: 'A landmark meeting with H.E. President Yoweri Museveni — acknowledging HSF\'s contribution to Uganda\'s economic growth.' },
  { year: '2019', title: 'UAE-Africa Business Summit', desc: 'HSF represents Uganda in Abu Dhabi, opening direct corridors for foreign direct investment into the country.' },
  { year: '2020', title: 'World Future Energy Summit', desc: 'Presence at WFES in Abu Dhabi positions HSF at the forefront of Uganda\'s Oil, Gas & Energy sector strategy.' },
  { year: '2021', title: 'Digital Pearl Award', desc: 'Recognized for ICT excellence — confirming HSF\'s standing as a technology-forward solutions firm.' },
  { year: '2023', title: '1,000 Clients Milestone', desc: 'A defining threshold: 1,000 clients served across all eight sectors. The reputation built itself.' },
  { year: '2024', title: 'Fifteen Years of Excellence', desc: '1,485 clients. 3,452 projects. 8 industries. 15 years. The work continues.' },
]

export default function Milestones() {
  return (
    <section id="milestones" className="py-40 lg:py-56" style={{ background: 'var(--bg-2)' }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">

        <motion.div
          className="flex items-center gap-4 mb-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease }}
        >
          <div className="w-6 h-px" style={{ background: 'var(--accent)' }} />
          <span className="text-[10px] tracking-[0.32em] uppercase" style={{ color: 'var(--accent)' }}>Milestones</span>
        </motion.div>

        <motion.h2
          className="font-medium leading-tight tracking-tight mb-24"
          style={{ fontSize: 'clamp(2.2rem, 4.5vw, 5rem)', color: 'var(--text)', letterSpacing: '-0.02em' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
        >
          Fifteen years
          <br />
          of building.
        </motion.h2>

        <div className="relative">
          {/* Timeline spine (desktop only) */}
          <div
            className="absolute hidden md:block"
            style={{
              left: '88px',
              top: '8px',
              bottom: '8px',
              width: '1px',
              background: 'var(--border)',
            }}
          />

          <div className="flex flex-col">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                className="relative grid md:grid-cols-[176px_1fr] gap-6 md:gap-16 py-10"
                style={{ borderBottom: i < milestones.length - 1 ? '1px solid var(--border)' : 'none' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.65, ease, delay: 0.05 }}
              >
                {/* Year */}
                <div className="flex md:flex-row items-center md:items-start gap-5">
                  <span
                    className="text-[11px] tracking-[0.2em] font-mono flex-shrink-0"
                    style={{ color: 'var(--accent)', paddingTop: '2px' }}
                  >
                    {m.year}
                  </span>

                  {/* Dot — visible on desktop only */}
                  <div
                    className="hidden md:block w-2.5 h-2.5 rounded-full flex-shrink-0 mt-0.5 relative z-10"
                    style={{
                      background: 'var(--accent)',
                      boxShadow: '0 0 0 3px rgba(185,28,28,0.15)',
                      marginLeft: 'auto',
                    }}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <h3
                    className="font-medium"
                    style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', color: 'var(--text)', letterSpacing: '-0.01em' }}
                  >
                    {m.title}
                  </h3>
                  <p className="leading-7" style={{ fontSize: '14px', color: 'var(--muted)' }}>
                    {m.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

const ease = [0.16, 1, 0.3, 1] as const

const team = [
  {
    initials: 'HA',
    name: 'Hussein Abdullah',
    title: 'Founder & Chief Executive Officer',
    note: '15+ years leading HSF from startup to Uganda\'s premier multi-sector firm.',
  },
  {
    initials: 'OL',
    name: 'Obed Lutakome',
    title: 'Director of Operations',
    note: 'Ensures every project is delivered on time, on budget, and to standard.',
  },
  {
    initials: 'EK',
    name: 'Emran Khalis',
    title: 'Director of Finance',
    note: 'Oversees financial strategy and investment facilitation across all engagements.',
  },
  {
    initials: 'MD',
    name: 'Mutoni Dorothy',
    title: 'Head of Administration',
    note: 'The operational backbone — managing client relations and internal systems.',
  },
]

function Card({ m, i }: { m: typeof team[0]; i: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="flex flex-col gap-8 p-10 cursor-default transition-all duration-300"
      style={{
        border: '1px solid var(--border)',
        background: hovered ? 'var(--bg-2)' : 'var(--bg)',
        borderColor: hovered ? 'var(--border-c)' : 'var(--border)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease, delay: i * 0.1 }}
    >
      {/* Avatar */}
      <div
        className="w-12 h-12 flex items-center justify-center text-[11px] font-bold tracking-[0.15em] transition-all duration-300"
        style={{
          background: hovered ? 'var(--accent)' : 'var(--accent-dim)',
          color: hovered ? '#fff' : 'var(--accent-light)',
          border: `1px solid ${hovered ? 'var(--accent)' : 'var(--border-c)'}`,
        }}
      >
        {m.initials}
      </div>

      <div>
        <h3
          className="font-medium mb-1.5"
          style={{ fontSize: '1.05rem', color: 'var(--text)', letterSpacing: '-0.01em' }}
        >
          {m.name}
        </h3>
        <p className="text-[10px] tracking-[0.18em] uppercase" style={{ color: 'var(--accent)' }}>
          {m.title}
        </p>
      </div>

      <p className="leading-6" style={{ fontSize: '13px', color: 'var(--muted)' }}>
        {m.note}
      </p>
    </motion.div>
  )
}

export default function Leadership() {
  return (
    <section id="leadership" className="py-40 lg:py-56" style={{ background: 'var(--bg)' }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease }}
            >
              <div className="w-6 h-px" style={{ background: 'var(--accent)' }} />
              <span className="text-[10px] tracking-[0.32em] uppercase" style={{ color: 'var(--accent)' }}>Leadership</span>
            </motion.div>
            <motion.h2
              className="font-medium leading-tight tracking-tight"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 5rem)', color: 'var(--text)', letterSpacing: '-0.02em' }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
            >
              The team behind
              <br />
              the results.
            </motion.h2>
          </div>
          <motion.p
            className="max-w-xs leading-7"
            style={{ fontSize: '14px', color: 'var(--muted)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experienced, accountable, and invested in your outcome — not just the engagement.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {team.map((m, i) => <Card key={m.name} m={m} i={i} />)}
        </div>

      </div>
    </section>
  )
}

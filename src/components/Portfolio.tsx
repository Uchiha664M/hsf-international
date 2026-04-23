'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

const ease = [0.16, 1, 0.3, 1] as const

const clients = [
  { name: 'World Health Organization', category: 'International Health' },
  { name: 'MTN Uganda', category: 'Telecommunications' },
  { name: 'TotalEnergies', category: 'Oil & Energy' },
  { name: 'KCCA', category: 'Government' },
  { name: 'Uganda Wildlife Authority', category: 'Government' },
  { name: 'Uganda Police Force', category: 'Government' },
  { name: 'Makerere University', category: 'Education' },
  { name: 'NEMA Uganda', category: 'Environment' },
  { name: 'BBC', category: 'Media' },
  { name: 'Shell Uganda', category: 'Oil & Energy' },
  { name: 'Stanbic Bank Uganda', category: 'Finance' },
  { name: 'dfcu Bank', category: 'Finance' },
  { name: 'Vision Group', category: 'Media' },
  { name: 'Bank of Uganda', category: 'Finance' },
  { name: 'Ministry of Health', category: 'Government' },
  { name: 'Uganda Revenue Authority', category: 'Government' },
  { name: 'UNRA', category: 'Infrastructure' },
  { name: 'NBS Television', category: 'Media' },
]

function ClientCard({ c, i }: { c: typeof clients[0]; i: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="flex flex-col gap-2 px-6 py-7 cursor-default transition-all duration-250"
      style={{
        borderRight: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        borderTop: hovered ? '1px solid var(--border-c)' : '1px solid transparent',
        background: hovered ? 'rgba(185,28,28,0.04)' : 'var(--bg)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: i * 0.04 }}
    >
      <span className="text-[13px] font-medium leading-snug" style={{ color: hovered ? 'var(--text)' : 'rgba(240,236,229,0.8)' }}>
        {c.name}
      </span>
      <span className="text-[10px] tracking-[0.18em] uppercase" style={{ color: hovered ? 'var(--accent)' : 'var(--muted)' }}>
        {c.category}
      </span>
    </motion.div>
  )
}

export default function Portfolio() {
  return (
    <section id="clients" className="py-40 lg:py-56" style={{ background: 'var(--bg)' }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease }}
            >
              <div className="w-6 h-px" style={{ background: 'var(--accent)' }} />
              <span className="text-[10px] tracking-[0.32em] uppercase" style={{ color: 'var(--accent)' }}>Clients</span>
            </motion.div>
            <motion.h2
              className="font-medium leading-tight tracking-tight"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 5rem)', color: 'var(--text)', letterSpacing: '-0.02em' }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
            >
              Trusted by the
              <br />
              organizations that matter.
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
            Government institutions, global NGOs, multinational corporations — 1,485+ clients who returned
            because the work earned it.
          </motion.p>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
          style={{ border: '1px solid var(--border)' }}
        >
          {clients.map((c, i) => (
            <ClientCard key={c.name} c={c} i={i} />
          ))}
        </div>

        <motion.div
          className="mt-10 flex items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          <span className="text-[10px] tracking-[0.25em] uppercase flex-shrink-0" style={{ color: 'var(--muted)' }}>
            1,485+ clients across 8 sectors · since 2009
          </span>
          <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
        </motion.div>

      </div>
    </section>
  )
}

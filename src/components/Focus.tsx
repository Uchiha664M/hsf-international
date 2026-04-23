'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

const ease = [0.16, 1, 0.3, 1] as const

const sectors = [
  { num: '01', title: 'Information & Communication Technology', short: 'ICT infrastructure, software systems, digital transformation.' },
  { num: '02', title: 'Finance & Investment', short: 'Advisory, investment facilitation, and access-to-capital programs.' },
  { num: '03', title: 'Logistics & Transportation', short: 'Freight management, fleet operations, and last-mile delivery.' },
  { num: '04', title: 'Engineering & Construction', short: 'Civil works, infrastructure development, and project management.' },
  { num: '05', title: 'Supply Chain Management', short: 'Procurement, warehousing, inventory, and distribution.' },
  { num: '06', title: 'Agriculture & Agribusiness', short: 'Inputs, mechanization, agro-processing, and market linkages.' },
  { num: '07', title: 'Oil, Gas & Energy', short: 'Technical services and operational support for Uganda\'s energy sector.' },
  { num: '08', title: 'Tourism & Hospitality', short: 'Destination management and tourism product development.' },
]

function SectorRow({ s, i }: { s: typeof sectors[0]; i: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 py-7 cursor-default transition-all duration-300 relative"
      style={{
        borderBottom: '1px solid var(--border)',
        borderLeft: hovered ? '2px solid var(--accent)' : '2px solid transparent',
        paddingLeft: hovered ? '1.5rem' : '0',
        background: hovered ? 'rgba(185,28,28,0.03)' : 'transparent',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease, delay: i * 0.07 }}
    >
      <span
        className="text-[10px] tracking-[0.3em] font-mono flex-shrink-0 w-8"
        style={{ color: hovered ? 'var(--accent)' : 'var(--muted)' }}
      >
        {s.num}
      </span>
      <span
        className="font-medium flex-1 transition-colors duration-300"
        style={{
          fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
          color: hovered ? 'var(--text)' : 'rgba(240,236,229,0.8)',
          letterSpacing: '-0.01em',
        }}
      >
        {s.title}
      </span>
      <span
        className="text-[13px] leading-6 md:max-w-xs lg:max-w-sm transition-all duration-300"
        style={{ color: 'var(--muted)', opacity: hovered ? 1 : 0.7 }}
      >
        {s.short}
      </span>
    </motion.div>
  )
}

export default function Focus() {
  return (
    <section id="services" className="py-40 lg:py-56" style={{ background: 'var(--bg-2)' }}>
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
              <span className="text-[10px] tracking-[0.32em] uppercase" style={{ color: 'var(--accent)' }}>Services</span>
            </motion.div>
            <motion.h2
              className="font-medium leading-tight tracking-tight"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 5rem)', color: 'var(--text)', letterSpacing: '-0.02em' }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
            >
              Eight sectors.
              <br />
              One standard.
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
            Integrated solutions across Uganda's most critical industries — the same rigour, regardless of sector.
          </motion.p>
        </div>

        <div style={{ borderTop: '1px solid var(--border)' }}>
          {sectors.map((s, i) => (
            <SectorRow key={s.num} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

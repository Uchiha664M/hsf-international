'use client'
import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const

export default function Contact() {
  return (
    <section id="contact" className="py-40 lg:py-56 relative overflow-hidden" style={{ background: 'var(--bg-2)' }}>
      {/* Bg atmosphere */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(185,28,28,0.09) 0%, transparent 60%)' }} />

      {/* Hex grid */}
      <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        width="900" height="900" viewBox="0 0 200 200" fill="none" opacity="0.04">
        <path d="M100 5L195 52.5V147.5L100 195L5 147.5V52.5Z" stroke="#B91C1C" strokeWidth="0.5"/>
        <path d="M100 35L165 71.5V128.5L100 165L35 128.5V71.5Z" stroke="#B91C1C" strokeWidth="0.35"/>
        <path d="M100 60L140 83.5V116.5L100 140L60 116.5V83.5Z" stroke="#B91C1C" strokeWidth="0.2"/>
      </svg>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          <motion.div
            className="flex items-center justify-center gap-4 mb-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="w-6 h-px" style={{ background: 'var(--accent)' }} />
            <span className="text-[10px] tracking-[0.32em] uppercase" style={{ color: 'var(--accent)' }}>Contact</span>
            <div className="w-6 h-px" style={{ background: 'var(--accent)' }} />
          </motion.div>

          <motion.h2
            className="font-medium leading-tight tracking-tight mb-10"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 7rem)', color: 'var(--text)', letterSpacing: '-0.025em' }}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
          >
            Ready to move
            <br />
            <span className="accent-text">forward together?</span>
          </motion.h2>

          <motion.p
            className="mx-auto leading-8 mb-14"
            style={{ fontSize: '15px', color: 'var(--muted)', maxWidth: '500px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.25 }}
          >
            Whether you're a government agency, NGO, or private enterprise — we engage with
            organizations that are serious about results.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.35 }}
          >
            <a
              href="mailto:info@hsf-international.com"
              className="px-10 py-4 text-[11px] tracking-[0.2em] uppercase font-semibold transition-all duration-300 hover:opacity-85"
              style={{ background: 'var(--accent)', color: '#fff' }}
            >
              Send Enquiry
            </a>
            <a
              href="tel:+256393000578"
              className="px-10 py-4 text-[11px] tracking-[0.2em] uppercase transition-all duration-300"
              style={{ border: '1px solid var(--border)', color: 'var(--text)' }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'var(--border-c)'
                el.style.color = 'var(--accent-light)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'var(--border)'
                el.style.color = 'var(--text)'
              }}
            >
              Call Us Now
            </a>
          </motion.div>

          <motion.div
            className="mt-24 pt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left"
            style={{ borderTop: '1px solid var(--border)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.5 }}
          >
            {[
              { label: 'Email', value: 'info@hsf-international.com', href: 'mailto:info@hsf-international.com' },
              { label: 'Phone', value: '+256 393 000 578', href: 'tel:+256393000578' },
              { label: 'Office', value: 'Arie Towers · Kampala · Uganda', href: null },
            ].map((c) => (
              <div key={c.label} className="flex flex-col gap-2">
                <span className="text-[10px] tracking-[0.25em] uppercase" style={{ color: 'var(--muted)' }}>{c.label}</span>
                {c.href ? (
                  <a
                    href={c.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'var(--text)' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--accent-light)')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text)')}
                  >
                    {c.value}
                  </a>
                ) : (
                  <span className="text-sm" style={{ color: 'var(--text)' }}>{c.value}</span>
                )}
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

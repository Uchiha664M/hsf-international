'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const elRef = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = elRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const duration = 1800
          const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - t, 3)
            setCount(Math.floor(eased * target))
            if (t < 1) requestAnimationFrame(tick)
            else setCount(target)
          }
          requestAnimationFrame(tick)
          observer.disconnect()
        }
      },
      { threshold: 0.6 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={elRef}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

const stats = [
  { target: 15, suffix: '+', label: 'Years of Excellence' },
  { target: 1485, suffix: '', label: 'Clients Served' },
  { target: 3452, suffix: '', label: 'Projects Completed' },
  { target: 8, suffix: '', label: 'Industry Sectors' },
]

export default function Stats() {
  return (
    <section style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="py-14 px-8 flex flex-col gap-3"
              style={{ borderRight: i < stats.length - 1 ? '1px solid var(--border)' : 'none' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease, delay: i * 0.1 }}
            >
              <span
                className="font-semibold leading-none tabular-nums"
                style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', color: 'var(--text)', letterSpacing: '-0.025em' }}
              >
                <Counter target={s.target} suffix={s.suffix} />
              </span>
              <span className="text-[10px] tracking-[0.22em] uppercase" style={{ color: 'var(--muted)' }}>
                {s.label}
              </span>
              <div className="w-5 h-px mt-1" style={{ background: 'var(--accent)' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

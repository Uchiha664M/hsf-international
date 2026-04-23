const stats = [
  { value: '$2.4B+', label: 'Assets Under Management' },
  { value: '18', label: 'Countries of Operation' },
  { value: '34', label: 'Portfolio Companies' },
  { value: '2009', label: 'Established' },
]

export default function Stats() {
  return (
    <section style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="py-14 px-8 flex flex-col gap-2"
              style={{
                borderRight: i < stats.length - 1 ? '1px solid var(--border)' : 'none',
              }}
            >
              <span
                className="font-semibold leading-none tracking-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text)' }}
              >
                {s.value}
              </span>
              <span className="text-xs tracking-[0.18em] uppercase" style={{ color: 'var(--muted)' }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

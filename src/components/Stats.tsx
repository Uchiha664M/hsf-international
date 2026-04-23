const stats = [
  { value: '15+', label: 'Years of Excellence' },
  { value: '1,485', label: 'Clients Served' },
  { value: '3,452', label: 'Projects Completed' },
  { value: '8', label: 'Industry Sectors' },
]

export default function Stats() {
  return (
    <section style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="py-14 px-8 flex flex-col gap-3"
              style={{
                borderRight: i < stats.length - 1 ? '1px solid var(--border)' : 'none',
              }}
            >
              <span
                className="font-bold leading-none tracking-tight"
                style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', color: 'var(--text)' }}
              >
                {s.value}
              </span>
              <span className="text-xs tracking-[0.18em] uppercase" style={{ color: 'var(--muted)' }}>
                {s.label}
              </span>
              <div className="w-6 h-px mt-1" style={{ background: 'var(--accent)' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

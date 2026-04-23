'use client'

const clients = [
  { name: 'World Health Organization', category: 'International Health' },
  { name: 'MTN Uganda', category: 'Telecommunications' },
  { name: 'TotalEnergies', category: 'Oil & Energy' },
  { name: 'KCCA', category: 'Government' },
  { name: 'Uganda Wildlife Authority', category: 'Government' },
  { name: 'Uganda Police Force', category: 'Government' },
  { name: 'Makerere University', category: 'Education' },
  { name: 'NEMA Uganda', category: 'Government' },
  { name: 'BBC', category: 'Media' },
  { name: 'Shell Uganda', category: 'Oil & Energy' },
  { name: 'Stanbic Bank Uganda', category: 'Finance' },
  { name: 'dfcu Bank', category: 'Finance' },
  { name: 'Vision Group', category: 'Media' },
  { name: 'NBS Television', category: 'Media' },
  { name: 'Bank of Uganda', category: 'Finance' },
  { name: 'Ministry of Health', category: 'Government' },
  { name: 'Uganda Revenue Authority', category: 'Government' },
  { name: 'UNRA', category: 'Infrastructure' },
]

export default function Portfolio() {
  return (
    <section id="clients" className="py-40" style={{ background: 'var(--bg)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-6 h-px" style={{ background: 'var(--accent)' }} />
          <span className="text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--accent)' }}>Clients</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <h2
            className="font-semibold leading-tight tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--text)' }}
          >
            Trusted by the
            <br />
            organizations that matter.
          </h2>
          <p className="max-w-xs text-sm leading-7" style={{ color: 'var(--muted)' }}>
            From Uganda's top government agencies to global institutions — 1,485+ clients who
            chose HSF and kept choosing HSF.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px" style={{ background: 'var(--border)' }}>
          {clients.map((c) => (
            <div
              key={c.name}
              className="flex flex-col gap-2 px-6 py-8 cursor-default transition-all duration-200"
              style={{ background: 'var(--bg)' }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'var(--bg-2)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'var(--bg)'
              }}
            >
              <span className="text-xs font-semibold leading-snug" style={{ color: 'var(--text)' }}>{c.name}</span>
              <span className="text-[10px] tracking-[0.15em] uppercase" style={{ color: 'var(--muted)' }}>{c.category}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-4">
          <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          <span className="text-xs tracking-[0.2em] uppercase" style={{ color: 'var(--muted)' }}>
            1,485+ clients served since 2009
          </span>
          <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
        </div>
      </div>
    </section>
  )
}

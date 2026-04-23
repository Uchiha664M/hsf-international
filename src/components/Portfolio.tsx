'use client'

const holdings = [
  { name: 'Goldmining Experts', sector: 'Natural Resources', region: 'West Africa', status: 'Active' },
  { name: 'HSF Capital Partners', sector: 'Private Credit', region: 'Global', status: 'Active' },
  { name: 'Frontier Logistics Co.', sector: 'Real Assets', region: 'East Africa', status: 'Active' },
  { name: 'Meridian Trade Finance', sector: 'Trade Finance', region: 'Asia-Pacific', status: 'Active' },
  { name: 'Apex Mineral Holdings', sector: 'Natural Resources', region: 'Southern Africa', status: 'Active' },
  { name: 'Continental Growth Fund', sector: 'Emerging Markets', region: 'Pan-Africa', status: 'Active' },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-40" style={{ background: 'var(--bg)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-6 h-px" style={{ background: 'var(--gold)' }} />
          <span className="text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--gold)' }}>Portfolio</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <h2
            className="font-semibold leading-tight tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--text)' }}
          >
            Selected holdings.
          </h2>
        </div>

        <div style={{ border: '1px solid var(--border)' }}>
          {/* Header row */}
          <div
            className="grid grid-cols-4 px-8 py-4"
            style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg-2)' }}
          >
            {['Company', 'Sector', 'Region', 'Status'].map((h) => (
              <span key={h} className="text-xs tracking-[0.2em] uppercase" style={{ color: 'var(--muted)' }}>{h}</span>
            ))}
          </div>

          {holdings.map((h, i) => (
            <div
              key={h.name}
              className="grid grid-cols-4 px-8 py-6 group transition-all duration-200 cursor-default"
              style={{
                borderBottom: i < holdings.length - 1 ? '1px solid var(--border)' : 'none',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.015)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'transparent'
              }}
            >
              <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>{h.name}</span>
              <span className="text-sm" style={{ color: 'var(--muted)' }}>{h.sector}</span>
              <span className="text-sm" style={{ color: 'var(--muted)' }}>{h.region}</span>
              <span className="text-xs tracking-[0.15em] uppercase" style={{ color: 'var(--gold)' }}>{h.status}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const areas = [
  {
    num: '01',
    title: 'Natural Resources',
    desc: 'Precious metals, minerals, and energy extraction across Africa, Asia, and South America. End-to-end operational control from licensing through offtake.',
  },
  {
    num: '02',
    title: 'Emerging Markets',
    desc: 'Strategic equity positions in high-growth frontier economies. Consumer, infrastructure, and technology sectors with asymmetric return profiles.',
  },
  {
    num: '03',
    title: 'Real Assets',
    desc: 'Industrial land, logistics infrastructure, and agricultural assets. Tangible value with inflation resilience and sovereign-backed security.',
  },
  {
    num: '04',
    title: 'Private Credit',
    desc: 'Structured lending to resource-sector operators and mid-market enterprises. Risk-adjusted yield with first-lien collateral and covenant protection.',
  },
  {
    num: '05',
    title: 'Trade Finance',
    desc: 'Commodity-backed trade flows across global corridors. Short-duration, self-liquidating structures with strong counterparty profiles.',
  },
  {
    num: '06',
    title: 'Strategic Advisory',
    desc: 'Regulatory navigation, M&A structuring, and market-entry strategy for institutions seeking frontier exposure without operational overhead.',
  },
]

export default function Focus() {
  return (
    <section id="focus" className="py-40" style={{ background: 'var(--bg-2)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-6 h-px" style={{ background: 'var(--gold)' }} />
          <span className="text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--gold)' }}>Focus Areas</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <h2
            className="font-semibold leading-tight tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--text)' }}
          >
            Where we deploy<br />capital.
          </h2>
          <p className="max-w-xs text-sm leading-7" style={{ color: 'var(--muted)' }}>
            Six investment verticals. One relentless standard of conviction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ border: '1px solid var(--border)' }}>
          {areas.map((a) => (
            <div
              key={a.num}
              className="p-10 flex flex-col gap-6 group cursor-default transition-all duration-300"
              style={{ background: 'var(--bg-2)', borderBottom: '1px solid var(--border)' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.04)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'var(--bg-2)'
              }}
            >
              <span className="text-xs tracking-[0.25em]" style={{ color: 'var(--gold)', opacity: 0.6 }}>{a.num}</span>
              <h3 className="text-lg font-medium tracking-tight" style={{ color: 'var(--text)' }}>{a.title}</h3>
              <p className="text-sm leading-7" style={{ color: 'var(--muted)' }}>{a.desc}</p>
              <div
                className="w-0 h-px mt-auto transition-all duration-500 group-hover:w-full"
                style={{ background: 'var(--gold)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

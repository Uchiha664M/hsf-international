'use client'

const sectors = [
  {
    num: '01',
    title: 'Information & Communication Technology',
    desc: 'End-to-end ICT solutions — network infrastructure, software systems, digital transformation, and managed IT services for enterprise and government clients.',
  },
  {
    num: '02',
    title: 'Finance & Investment',
    desc: 'Strategic financial advisory, investment facilitation, microfinance solutions, and access-to-capital programs for businesses at every growth stage.',
  },
  {
    num: '03',
    title: 'Logistics & Transportation',
    desc: 'Comprehensive freight management, fleet operations, customs clearance, and last-mile delivery solutions across Uganda and the East African region.',
  },
  {
    num: '04',
    title: 'Engineering & Construction',
    desc: 'Civil works, structural engineering, infrastructure development, and project management services delivered to specification, on time and within budget.',
  },
  {
    num: '05',
    title: 'Supply Chain Management',
    desc: 'Procurement, warehousing, inventory management, and distribution network optimization for retail, manufacturing, and institutional clients.',
  },
  {
    num: '06',
    title: 'Agriculture & Agribusiness',
    desc: 'Agricultural inputs, mechanization services, agro-processing, market linkages, and value chain development supporting Uganda\'s food and export sectors.',
  },
  {
    num: '07',
    title: 'Oil, Gas & Energy',
    desc: 'Technical services, equipment supply, and operational support for Uganda\'s emerging oil & gas sector — with a focus on local content and safety compliance.',
  },
  {
    num: '08',
    title: 'Tourism & Hospitality',
    desc: 'Destination management, hospitality consultancy, and tourism product development amplifying Uganda\'s world-class natural and cultural assets.',
  },
]

export default function Focus() {
  return (
    <section id="services" className="py-40" style={{ background: 'var(--bg-2)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-6 h-px" style={{ background: 'var(--accent)' }} />
          <span className="text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--accent)' }}>Services</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <h2
            className="font-semibold leading-tight tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--text)' }}
          >
            Eight sectors.
            <br />
            One standard.
          </h2>
          <p className="max-w-xs text-sm leading-7" style={{ color: 'var(--muted)' }}>
            Integrated solutions across Uganda's most critical industries — delivered with the same
            rigour regardless of sector.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'var(--border)' }}>
          {sectors.map((s) => (
            <div
              key={s.num}
              className="p-8 flex flex-col gap-5 cursor-default transition-all duration-300"
              style={{ background: 'var(--bg-2)' }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'rgba(185,28,28,0.05)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'var(--bg-2)'
              }}
            >
              <span className="text-xs tracking-[0.3em] font-mono" style={{ color: 'var(--accent)', opacity: 0.7 }}>{s.num}</span>
              <h3 className="text-sm font-semibold leading-snug tracking-tight" style={{ color: 'var(--text)' }}>{s.title}</h3>
              <p className="text-xs leading-6" style={{ color: 'var(--muted)' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

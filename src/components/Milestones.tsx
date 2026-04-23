const milestones = [
  {
    year: '2009',
    title: 'Founded in Kampala',
    desc: 'HSF International Ltd is established in Kampala, Uganda — with a mandate to deliver world-class business solutions across key sectors.',
  },
  {
    year: '2014',
    title: 'Regional Expansion',
    desc: 'Operations expand across East Africa, building partnerships with government agencies, NGOs, and private sector leaders throughout the region.',
  },
  {
    year: '2018',
    title: 'State Recognition',
    desc: 'A landmark meeting with H.E. President Yoweri Museveni — recognizing HSF\'s contribution to Uganda\'s economic development and private sector growth.',
  },
  {
    year: '2019',
    title: 'UAE-Africa Business Summit',
    desc: 'HSF represents Uganda on the international stage at the UAE-Africa Business Summit in Abu Dhabi, opening corridors for foreign direct investment.',
  },
  {
    year: '2020',
    title: 'World Future Energy Summit',
    desc: 'Participation at WFES in Abu Dhabi positions HSF at the forefront of Uganda\'s emerging Oil, Gas & Energy sector strategy.',
  },
  {
    year: '2021',
    title: 'Digital Pearl Award',
    desc: 'HSF receives recognition for ICT excellence — affirming its position as a technology-forward business solutions firm in the digital transformation era.',
  },
  {
    year: '2023',
    title: '1,000 Clients Milestone',
    desc: 'A defining moment: 1,000 clients served across 8 sectors, cementing HSF\'s reputation as Uganda\'s most trusted multi-sector partner.',
  },
  {
    year: '2024',
    title: '15 Years. 1,485 Clients. 3,452 Projects.',
    desc: 'Fifteen years of unbroken excellence. HSF stands as Uganda\'s leading business solutions firm with a track record that speaks for itself.',
  },
]

export default function Milestones() {
  return (
    <section id="milestones" className="py-40" style={{ background: 'var(--bg-2)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-6 h-px" style={{ background: 'var(--accent)' }} />
          <span className="text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--accent)' }}>Milestones</span>
        </div>
        <h2
          className="font-semibold leading-tight tracking-tight mb-20"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--text)' }}
        >
          Fifteen years
          <br />
          of building.
        </h2>

        <div className="relative">
          {/* Vertical timeline line */}
          <div
            className="absolute left-[72px] top-0 bottom-0 w-px hidden md:block"
            style={{ background: 'var(--border)' }}
          />

          <div className="flex flex-col gap-0">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className="grid md:grid-cols-[144px_1fr] gap-6 md:gap-12 relative py-8"
                style={{ borderBottom: i < milestones.length - 1 ? '1px solid var(--border)' : 'none' }}
              >
                {/* Year + dot */}
                <div className="flex md:flex-col items-center md:items-end gap-4 md:gap-2">
                  <span
                    className="text-xs font-mono tracking-[0.2em] flex-shrink-0"
                    style={{ color: 'var(--accent)' }}
                  >
                    {m.year}
                  </span>
                  {/* Dot on the line */}
                  <div
                    className="hidden md:block w-2 h-2 rounded-full flex-shrink-0 relative z-10"
                    style={{
                      background: 'var(--accent)',
                      marginRight: '-4.5px',
                      boxShadow: '0 0 8px rgba(185,28,28,0.5)',
                    }}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 md:pl-12">
                  <h3 className="text-base font-semibold tracking-tight" style={{ color: 'var(--text)' }}>
                    {m.title}
                  </h3>
                  <p className="text-sm leading-7" style={{ color: 'var(--muted)' }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

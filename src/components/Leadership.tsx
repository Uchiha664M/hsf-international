'use client'

const team = [
  {
    name: 'Hussein Abdullah',
    title: 'Founder & Chief Executive Officer',
    bio: 'Visionary leader with 15+ years building HSF from a local startup into Uganda\'s leading multi-sector business solutions firm. Represented Uganda at the UAE-Africa Business Summit and WFES.',
    initial: 'HA',
  },
  {
    name: 'Obed Lutakome',
    title: 'Director of Operations',
    bio: 'Drives HSF\'s operational delivery across all eight service sectors, ensuring projects are executed on time, on budget, and to the highest standard of quality.',
    initial: 'OL',
  },
  {
    name: 'Emran Khalis',
    title: 'Director of Finance',
    bio: 'Oversees HSF\'s financial strategy, investment facilitation services, and ensures fiscal discipline across the organization\'s growing portfolio of engagements.',
    initial: 'EK',
  },
  {
    name: 'Mutoni Dorothy',
    title: 'Head of Administration',
    bio: 'The backbone of HSF\'s internal operations — managing client relations, administrative systems, and ensuring seamless coordination across all departments.',
    initial: 'MD',
  },
]

export default function Leadership() {
  return (
    <section id="leadership" className="py-40" style={{ background: 'var(--bg)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-6 h-px" style={{ background: 'var(--accent)' }} />
          <span className="text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--accent)' }}>Leadership</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <h2
            className="font-semibold leading-tight tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--text)' }}
          >
            The team behind
            <br />
            the results.
          </h2>
          <p className="max-w-xs text-sm leading-7" style={{ color: 'var(--muted)' }}>
            Experienced, committed, and accountable — every engagement backed by leadership that is
            invested in your outcome.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'var(--border)' }}>
          {team.map((member) => (
            <div
              key={member.name}
              className="p-10 flex flex-col gap-6 cursor-default transition-all duration-300"
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
              {/* Avatar */}
              <div
                className="w-12 h-12 flex items-center justify-center text-sm font-bold tracking-widest"
                style={{ background: 'var(--accent-dim)', border: '1px solid var(--border-c)', color: 'var(--accent-light)' }}
              >
                {member.initial}
              </div>

              <div>
                <h3 className="text-base font-semibold tracking-tight mb-1" style={{ color: 'var(--text)' }}>
                  {member.name}
                </h3>
                <p className="text-xs tracking-[0.12em] uppercase" style={{ color: 'var(--accent)' }}>
                  {member.title}
                </p>
              </div>

              <p className="text-xs leading-6" style={{ color: 'var(--muted)' }}>
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

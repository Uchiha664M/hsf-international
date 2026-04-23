export default function About() {
  const pillars = [
    'Client-Centered Delivery',
    'Operational Excellence',
    'Pan-African Vision',
    'Integrity & Accountability',
  ]

  return (
    <section id="about" className="py-40" style={{ background: 'var(--bg)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Top: Mission block */}
        <div className="grid md:grid-cols-2 gap-20 items-start mb-32">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-6 h-px" style={{ background: 'var(--accent)' }} />
              <span className="text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--accent)' }}>About HSF</span>
            </div>
            <h2
              className="font-semibold leading-tight tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--text)' }}
            >
              Built on vision.
              <br />
              Driven by impact.
            </h2>
          </div>

          <div className="flex flex-col gap-8 pt-2">
            <p className="text-base leading-8" style={{ color: 'var(--muted)' }}>
              HSF International Ltd was founded with a singular purpose: to bridge the gap between
              Uganda's immense potential and the world-class services its businesses and institutions
              deserve. Since 2009, we have grown from a local enterprise into a multi-sector powerhouse
              operating across government, NGOs, and private sector clients nationwide.
            </p>
            <p className="text-base leading-8" style={{ color: 'var(--muted)' }}>
              We operate across eight critical industries — delivering integrated solutions that move
              organizations forward. Whether it's deploying ICT infrastructure, structuring financing,
              managing logistics, or developing agricultural value chains, HSF brings the expertise,
              the network, and the commitment to see every engagement through.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-4">
              {pillars.map((item) => (
                <div key={item} className="flex items-center gap-3 py-3 px-4" style={{ border: '1px solid var(--border)' }}>
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--accent)' }} />
                  <span className="text-xs tracking-[0.08em]" style={{ color: 'var(--text)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CEO Bio */}
        <div
          className="p-12 md:p-16 relative overflow-hidden"
          style={{ border: '1px solid var(--border)', background: 'var(--bg-2)' }}
        >
          <div
            className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 80% 20%, rgba(185,28,28,0.06) 0%, transparent 65%)' }}
          />

          <div className="grid md:grid-cols-3 gap-12 items-start relative z-10">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-6 h-px" style={{ background: 'var(--accent)' }} />
                <span className="text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--accent)' }}>Founder & CEO</span>
              </div>
              <h3
                className="font-semibold leading-tight tracking-tight mb-2"
                style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', color: 'var(--text)' }}
              >
                Hussein Abdullah
              </h3>
              <p className="text-xs tracking-[0.15em] uppercase" style={{ color: 'var(--muted)' }}>
                Chief Executive Officer
              </p>
              <div className="mt-6 py-6" style={{ borderTop: '1px solid var(--border)' }}>
                <p className="text-xs tracking-[0.12em] uppercase mb-1" style={{ color: 'var(--muted)' }}>Location</p>
                <p className="text-sm" style={{ color: 'var(--text)' }}>Kampala, Uganda</p>
              </div>
            </div>

            <div className="md:col-span-2 flex flex-col gap-6">
              <blockquote
                className="text-base leading-8 italic"
                style={{ color: 'var(--text)', borderLeft: '2px solid var(--accent)', paddingLeft: '1.5rem' }}
              >
                "Our mission is to be the partner that organizations trust when it matters most —
                delivering excellence not as a promise, but as a standard."
              </blockquote>
              <p className="text-sm leading-8" style={{ color: 'var(--muted)' }}>
                Hussein Abdullah founded HSF International with a vision rooted in service and sustainability.
                Under his leadership, the company has grown to serve over 1,485 clients — including the World
                Health Organization, MTN Uganda, TotalEnergies, and government agencies such as KCCA and the
                Uganda Police Force. He has represented Uganda at international forums including the UAE-Africa
                Business Summit and the World Future Energy Summit in Abu Dhabi.
              </p>
              <p className="text-sm leading-8" style={{ color: 'var(--muted)' }}>
                His approach combines deep operational knowledge with a commitment to long-term relationships,
                building HSF into a firm where clients return not because they have to, but because results speak
                louder than any pitch.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

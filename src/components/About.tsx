export default function About() {
  return (
    <section id="about" className="py-40" style={{ background: 'var(--bg)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-6 h-px" style={{ background: 'var(--gold)' }} />
              <span className="text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--gold)' }}>
                About HSF
              </span>
            </div>
            <h2
              className="font-semibold leading-tight tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--text)' }}
            >
              Built for the
              <br />
              complex world.
            </h2>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-8 pt-2">
            <p className="text-base leading-8" style={{ color: 'var(--muted)' }}>
              HSF International was founded on a singular conviction: that the world's most
              transformative value lies at the intersection of underserved markets and
              disciplined capital. We operate where others do not — in frontier economies,
              natural resource corridors, and high-barrier industries that demand deep
              operational expertise.
            </p>
            <p className="text-base leading-8" style={{ color: 'var(--muted)' }}>
              Our team combines decades of global finance, on-the-ground operations,
              and regulatory navigation to unlock enterprise value for our stakeholders.
              We do not invest from the sideline. We build from within.
            </p>

            <div className="flex flex-col gap-4 pt-4">
              {['Operational Excellence', 'Long-term Value Creation', 'Global Network Access'].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-1 h-1 rounded-full" style={{ background: 'var(--gold)', flexShrink: 0 }} />
                  <span className="text-sm tracking-[0.08em]" style={{ color: 'var(--text)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

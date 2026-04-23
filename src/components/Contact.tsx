export default function Contact() {
  return (
    <section id="contact" className="py-40 relative overflow-hidden" style={{ background: 'var(--bg-2)' }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-6 h-px" style={{ background: 'var(--gold)' }} />
            <span className="text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--gold)' }}>Contact</span>
            <div className="w-6 h-px" style={{ background: 'var(--gold)' }} />
          </div>

          <h2
            className="font-semibold leading-tight tracking-tight mb-8"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', color: 'var(--text)' }}
          >
            Ready to move
            <br />
            <span className="gold-text">capital forward?</span>
          </h2>

          <p className="text-base leading-8 mb-14" style={{ color: 'var(--muted)', maxWidth: '480px', margin: '0 auto 3.5rem' }}>
            We engage selectively with sophisticated investors, strategic partners,
            and principals seeking frontier market exposure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hsfglobal32@gmail.com"
              className="px-10 py-4 text-sm tracking-[0.15em] uppercase font-semibold transition-all duration-300 hover:opacity-90"
              style={{ background: 'var(--gold)', color: '#080A0E' }}
            >
              Send Enquiry
            </a>
            <a
              href="mailto:hsfglobal32@gmail.com"
              className="px-10 py-4 text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:bg-white/5"
              style={{ border: '1px solid var(--border)', color: 'var(--text)' }}
            >
              Schedule a Call
            </a>
          </div>

          <div className="mt-20 pt-10 flex flex-col sm:flex-row gap-8 justify-center" style={{ borderTop: '1px solid var(--border)' }}>
            {[
              { label: 'Email', value: 'hsfglobal32@gmail.com' },
              { label: 'Headquarters', value: 'Global Operations' },
            ].map((c) => (
              <div key={c.label} className="flex flex-col gap-1">
                <span className="text-xs tracking-[0.2em] uppercase" style={{ color: 'var(--muted)' }}>{c.label}</span>
                <span className="text-sm" style={{ color: 'var(--text)' }}>{c.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

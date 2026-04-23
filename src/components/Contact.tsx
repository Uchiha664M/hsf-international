const contactDetails = [
  { label: 'Email', value: 'info@hsf-international.com', href: 'mailto:info@hsf-international.com' },
  { label: 'Phone', value: '+256 393 000 578', href: 'tel:+256393000578' },
  { label: 'Office', value: 'Arie Towers, Kampala, Uganda', href: null },
]

export default function Contact() {
  return (
    <section id="contact" className="py-40 relative overflow-hidden" style={{ background: 'var(--bg-2)' }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(185,28,28,0.07) 0%, transparent 65%)' }}
      />

      {/* Hex geometry */}
      <svg
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        width="800"
        height="800"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path d="M100 8L192 55V145L100 192L8 145V55Z" stroke="#B91C1C" strokeWidth="0.3" opacity="0.06"/>
        <path d="M100 38L162 74V126L100 162L38 126V74Z" stroke="#B91C1C" strokeWidth="0.3" opacity="0.04"/>
      </svg>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-6 h-px" style={{ background: 'var(--accent)' }} />
            <span className="text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--accent)' }}>Contact</span>
            <div className="w-6 h-px" style={{ background: 'var(--accent)' }} />
          </div>

          <h2
            className="font-semibold leading-tight tracking-tight mb-8"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', color: 'var(--text)' }}
          >
            Ready to move
            <br />
            <span className="accent-text">forward together?</span>
          </h2>

          <p
            className="text-base leading-8 mb-14"
            style={{ color: 'var(--muted)', maxWidth: '480px', margin: '0 auto 3.5rem' }}
          >
            Whether you're a government agency, NGO, or private enterprise — we engage with
            organizations that are serious about results. Let's talk.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@hsf-international.com"
              className="px-10 py-4 text-sm tracking-[0.15em] uppercase font-semibold transition-all duration-300 hover:opacity-85"
              style={{ background: 'var(--accent)', color: '#fff' }}
            >
              Send Enquiry
            </a>
            <a
              href="tel:+256393000578"
              className="px-10 py-4 text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:bg-white/5"
              style={{ border: '1px solid var(--border)', color: 'var(--text)' }}
            >
              Call Us Now
            </a>
          </div>

          <div
            className="mt-20 pt-10 flex flex-col sm:flex-row gap-8 justify-center"
            style={{ borderTop: '1px solid var(--border)' }}
          >
            {contactDetails.map((c) => (
              <div key={c.label} className="flex flex-col gap-1">
                <span className="text-xs tracking-[0.2em] uppercase" style={{ color: 'var(--muted)' }}>{c.label}</span>
                {c.href ? (
                  <a
                    href={c.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'var(--text)' }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--accent-light)')}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--text)')}
                  >
                    {c.value}
                  </a>
                ) : (
                  <span className="text-sm" style={{ color: 'var(--text)' }}>{c.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

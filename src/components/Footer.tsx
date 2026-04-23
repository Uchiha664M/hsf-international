export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10 pb-10" style={{ borderBottom: '1px solid var(--border)' }}>
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 flex items-center justify-center text-[10px] font-bold tracking-widest"
              style={{ background: 'var(--accent)', color: '#fff' }}
            >
              HSF
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-white/90 leading-none">HSF International Ltd</span>
              <span className="text-[9px] tracking-[0.15em] uppercase leading-none mt-0.5" style={{ color: 'var(--muted)' }}>Kampala, Uganda · Est. 2009</span>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {['About', 'Services', 'Clients', 'Milestones', 'Leadership', 'Contact'].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-xs tracking-[0.15em] uppercase"
                style={{ color: 'var(--muted)' }}
              >
                {l}
              </a>
            ))}
          </nav>

          {/* Contact */}
          <div className="flex flex-col gap-1 text-right">
            <a href="mailto:info@hsf-international.com" className="text-xs" style={{ color: 'var(--muted)' }}>
              info@hsf-international.com
            </a>
            <a href="tel:+256393000578" className="text-xs" style={{ color: 'var(--muted)' }}>
              +256 393 000 578
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs" style={{ color: 'var(--muted)' }}>
            © {year} HSF International Ltd. All rights reserved.
          </span>
          <span className="text-xs tracking-[0.15em] uppercase" style={{ color: 'var(--muted)', opacity: 0.5 }}>
            Arie Towers · Kampala · Uganda
          </span>
        </div>
      </div>
    </footer>
  )
}

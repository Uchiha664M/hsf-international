'use client'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-12">
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-12 pb-12"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          {/* Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div
              className="w-9 h-9 flex items-center justify-center text-[9px] font-bold tracking-[0.15em]"
              style={{ background: 'var(--accent)', color: '#fff' }}
            >
              HSF
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-white/90">HSF International Ltd</span>
              <span className="text-[9px] tracking-[0.18em] uppercase mt-0.5" style={{ color: 'var(--muted)' }}>
                Kampala, Uganda · Est. 2009
              </span>
            </div>
          </a>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-10 gap-y-3">
            {['About', 'Services', 'Clients', 'Milestones', 'Leadership', 'Contact'].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-[11px] tracking-[0.18em] uppercase transition-colors duration-200"
                style={{ color: 'var(--muted)' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--muted)')}
              >
                {l}
              </a>
            ))}
          </nav>

          {/* Contact block */}
          <div className="flex flex-col gap-1.5 text-right">
            <a href="mailto:info@hsf-international.com" className="text-[11px] transition-colors duration-200" style={{ color: 'var(--muted)' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--accent-light)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--muted)')}
            >
              info@hsf-international.com
            </a>
            <a href="tel:+256393000578" className="text-[11px] transition-colors duration-200" style={{ color: 'var(--muted)' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--accent-light)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--muted)')}
            >
              +256 393 000 578
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[11px]" style={{ color: 'var(--muted)' }}>
            © {new Date().getFullYear()} HSF International Ltd. All rights reserved.
          </span>
          <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: 'var(--muted)', opacity: 0.45 }}>
            Arie Towers · Kampala · Uganda
          </span>
        </div>
      </div>
    </footer>
  )
}

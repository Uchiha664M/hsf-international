export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className="w-6 h-6 rounded-sm flex items-center justify-center text-[9px] font-bold tracking-widest"
            style={{ background: 'var(--gold)', color: '#080A0E' }}
          >
            HSF
          </div>
          <span className="text-xs tracking-[0.2em] uppercase" style={{ color: 'var(--muted)' }}>
            HSF International
          </span>
        </div>
        <span className="text-xs" style={{ color: 'var(--muted)' }}>
          © {new Date().getFullYear()} HSF International. All rights reserved.
        </span>
        <div className="flex gap-6">
          {['Privacy', 'Terms', 'Disclosures'].map((l) => (
            <a key={l} href="#" className="text-xs tracking-[0.1em]" style={{ color: 'var(--muted)' }}>
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

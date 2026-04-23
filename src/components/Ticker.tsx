const words = [
  'Excellence', '·', '15 Years', '·', '1,485 Clients',
  '·', '3,452 Projects', '·', '8 Sectors', '·', 'Kampala, Uganda',
  '·', 'ICT', '·', 'Finance', '·', 'Logistics', '·', 'Engineering',
  '·', 'Agriculture', '·', 'Oil & Gas', '·', 'Tourism', '·',
]

const doubled = [...words, ...words]

export default function Ticker() {
  return (
    <div
      className="overflow-hidden py-4 select-none"
      style={{ background: 'var(--accent)', borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(0,0,0,0.2)' }}
    >
      <div
        className="flex items-center gap-8 w-max"
        style={{ animation: 'ticker 28s linear infinite' }}
      >
        {doubled.map((word, i) => (
          <span
            key={i}
            className="text-[10px] tracking-[0.3em] uppercase flex-shrink-0 font-medium"
            style={{ color: word === '·' ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.9)' }}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  )
}

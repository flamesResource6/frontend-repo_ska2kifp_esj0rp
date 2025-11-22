export default function Framework() {
  const stages = [
    { label: 'START', desc: 'Brand identity, messaging, positioning, website, launch foundation.' },
    { label: 'OPERATE', desc: 'CRM, automation, marketing engine, sales infrastructure.' },
    { label: 'SCALE', desc: 'Paid growth, outbound engines, predictable revenue systems.' },
  ]

  return (
    <section className="relative bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Start → Operate → Scale</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {stages.map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-[#00C96B] text-sm font-semibold tracking-widest">{s.label}</div>
              <p className="mt-3 text-white/80 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <a href="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#00C96B] text-black font-semibold shadow-[0_0_30px_rgba(0,201,107,0.7)] hover:shadow-[0_0_45px_rgba(0,201,107,1)] transition-shadow">
            Build Your Growth System →
          </a>
        </div>
      </div>
    </section>
  )
}

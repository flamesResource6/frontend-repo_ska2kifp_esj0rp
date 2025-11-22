export default function Trust() {
  const points = [
    'Predictable systems',
    'Reduced founder dependency',
    'Scalable growth'
  ]
  return (
    <section className="relative bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-xl sm:text-2xl font-semibold">Trusted by brands committed to long-term growth.</h3>
        <ul className="mt-4 flex flex-wrap gap-3 text-white/70">
          {points.map((p) => (
            <li key={p} className="px-3 py-1 rounded-full border border-white/10 bg-white/5">{p}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

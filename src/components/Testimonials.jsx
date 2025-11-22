export default function Testimonials() {
  const items = [
    { name: 'Ava, SaaS Founder', text: 'FoundersROI didn\'t just market us—they built our growth system. Revenue became predictable.' },
    { name: 'Noah, DTC Brand', text: 'From brand to CRM to ads—one ecosystem. Our CAC dropped 32% in 60 days.' },
    { name: 'Liam, B2B Services', text: 'Finally a partner that understands systems. Pipeline, playbooks, automation—dialed in.' },
  ]

  return (
    <section className="relative bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((t) => (
            <div key={t.name} className="rounded-2xl border border-[#00C96B]/30 bg-[#0A0A0A]/60 p-6 shadow-[0_0_40px_rgba(0,201,107,0.25)]">
              <p className="text-white/90">“{t.text}”</p>
              <div className="mt-4 text-sm text-white/60">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Megaphone, Handshake, Palette, Cpu } from 'lucide-react'

export default function ServicesGrid() {
  const items = [
    { icon: Megaphone, title: 'Marketing as a Service', desc: 'Predictable demand engines built for conversions.' },
    { icon: Handshake, title: 'Sales as a Service', desc: 'Pipelines, closers, automation & systems that close deals.' },
    { icon: Palette, title: 'Branding as a Service', desc: 'Identity, creative, storytelling & brand strategy.' },
    { icon: Cpu, title: 'Tech as a Service', desc: 'Websites, apps, CRM, automations & integrations.' },
  ]

  return (
    <section className="relative bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Everything a Business Needs to Grow — Under One Roof.</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.title} className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:border-[#00C96B]/40 transition-colors">
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_50px_rgba(0,201,107,0.3)]" />
              <item.icon className="w-8 h-8 text-[#59FF9C] drop-shadow-[0_0_10px_rgba(89,255,156,0.6)]" />
              <h3 className="mt-4 font-semibold text-lg">{item.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

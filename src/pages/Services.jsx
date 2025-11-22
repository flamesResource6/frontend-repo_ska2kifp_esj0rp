import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Services() {
  const sections = [
    { title: 'Marketing as a Service', bullets: ['Full-funnel systems', 'Content engine', 'Paid ads', 'CRM + Email', 'CRO & analytics'], outcome: 'Predictable demand.' },
    { title: 'Sales as a Service', bullets: ['Playbooks', 'Closers', 'Prospecting', 'Automation', 'Pipeline systems'], outcome: 'Consistent revenue.' },
    { title: 'Branding as a Service', bullets: ['Visual identity', 'Messaging', 'Brand guidelines', 'Creative assets', 'Storytelling'], outcome: 'Trust & recognition.' },
    { title: 'Tech as a Service', bullets: ['Websites', 'Apps', 'Integrations', 'Automations', 'Funnels'], outcome: 'Scalable tech foundation.' },
    { title: 'Business Development Consulting', bullets: ['GTM', 'Pricing & offer', 'Positioning', 'Retention strategy'], outcome: 'Clarity + direction.' },
  ]

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white" style={{ ['--brand-green']: '#00C96B' }}>
      <Navbar />
      <section className="pt-32 pb-8 max-w-7xl mx-auto px-6">
        <h1 className="text-4xl sm:text-5xl font-bold">Services built for brands that want real, sustainable growth.</h1>
      </section>
      <section className="max-w-7xl mx-auto px-6 pb-20 grid gap-6">
        {sections.map((s) => (
          <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-2xl font-semibold">{s.title}</h2>
            <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-white/80 text-sm list-disc list-inside">
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div className="mt-4 text-[#59FF9C] font-medium">Outcome: {s.outcome}</div>
          </div>
        ))}
        <div className="text-center mt-6">
          <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00C96B] text-black font-semibold shadow-[0_0_30px_rgba(0,201,107,0.7)] hover:shadow-[0_0_45px_rgba(0,201,107,1)] transition-shadow">
            Book a Strategy Call →
          </a>
        </div>
      </section>
      <Footer />
    </div>
  )
}

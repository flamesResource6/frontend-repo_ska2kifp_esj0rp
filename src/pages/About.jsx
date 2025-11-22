import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  const blocks = [
    { title: 'Mission', text: 'To empower founders with systems that make growth predictable, sustainable & scalable.' },
    { title: 'Vision', text: 'A world where every brand has access to world-class growth systems.' },
    { title: 'Philosophy', text: 'We don’t chase short-term hacks. We build long-term systems with compounding impact.' },
    { title: 'Difference', text: 'One ecosystem • No multiple agencies • No chaos • Only clarity + execution' },
  ]

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white" style={{ ['--brand-green']: '#00C96B' }}>
      <Navbar />
      <section className="pt-32 pb-10 max-w-7xl mx-auto px-6">
        <h1 className="text-4xl sm:text-5xl font-bold">We help founders build businesses that don’t fail.</h1>
      </section>
      <section className="max-w-7xl mx-auto px-6 pb-20 grid gap-6 sm:grid-cols-2">
        {blocks.map((b) => (
          <div key={b.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-2xl font-semibold">{b.title}</h2>
            <p className="mt-3 text-white/80">{b.text}</p>
          </div>
        ))}
        <div className="sm:col-span-2 text-center mt-6">
          <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00C96B] text-black font-semibold shadow-[0_0_30px_rgba(0,201,107,0.7)] hover:shadow-[0_0_45px_rgba(0,201,107,1)] transition-shadow">
            Partner With Us →
          </a>
        </div>
      </section>
      <Footer />
    </div>
  )
}

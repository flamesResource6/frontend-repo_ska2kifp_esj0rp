import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white" style={{ ['--brand-green']: '#00C96B' }}>
      <Navbar />
      <section className="pt-32 pb-10 max-w-7xl mx-auto px-6">
        <h1 className="text-4xl sm:text-5xl font-bold">Let’s Build Your Growth System.</h1>
        <p className="mt-3 text-white/70">Get a clear roadmap for your brand in 30 minutes.</p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-white/60">Name</label>
              <input className="mt-1 w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 outline-none focus:border-[#00C96B]" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="text-sm text-white/60">Email</label>
              <input type="email" className="mt-1 w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 outline-none focus:border-[#00C96B]" placeholder="jane@brand.com" />
            </div>
            <div>
              <label className="text-sm text-white/60">Phone</label>
              <input className="mt-1 w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 outline-none focus:border-[#00C96B]" placeholder="+1 555 000 1234" />
            </div>
            <div>
              <label className="text-sm text-white/60">Company</label>
              <input className="mt-1 w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 outline-none focus:border-[#00C96B]" placeholder="Acme Inc." />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-white/60">Message</label>
              <textarea rows={5} className="mt-1 w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 outline-none focus:border-[#00C96B]" placeholder="Tell us about your goals..." />
            </div>
            <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3 mt-2">
              <button className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#00C96B] text-black font-semibold shadow-[0_0_30px_rgba(0,201,107,0.7)] hover:shadow-[0_0_45px_rgba(0,201,107,1)] transition-shadow">
                Book a Strategy Call
              </button>
              <a href="https://wa.me/" target="_blank" className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors">
                Chat on WhatsApp
              </a>
            </div>
          </form>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h3 className="text-xl font-semibold">Why this call?</h3>
          <p className="mt-2 text-white/70 text-sm">We diagnose your current growth setup, identify bottlenecks, and map a systems-first plan to scale.</p>
          <ul className="mt-4 text-white/80 text-sm list-disc list-inside space-y-1">
            <li>30-minute clarity session</li>
            <li>System-first recommendations</li>
            <li>Actionable next steps</li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  )
}

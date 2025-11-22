import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ServicesGrid from '../components/ServicesGrid'
import WhyFail from '../components/WhyFail'
import Framework from '../components/Framework'
import Trust from '../components/Trust'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]" style={{ ['--brand-green']: '#00C96B' }}>
      <Navbar />
      <Hero />
      <ServicesGrid />
      <WhyFail />
      <Framework />
      <Trust />
      <Testimonials />
      <section className="bg-[#0A0A0A] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold">Ready to grow with a partner who builds systems, not guesses?</h3>
          <a href="/contact" className="mt-6 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#00C96B] text-black font-semibold shadow-[0_0_35px_rgba(0,201,107,0.8)] hover:shadow-[0_0_55px_rgba(0,201,107,1)] transition-shadow">
            Book a Strategy Call
          </a>
        </div>
      </section>
      <Footer />
    </div>
  )
}

import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0A0A0A]">
      {/* Glow grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,201,107,0.1),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:36px_36px]" />
      </div>

      {/* 3D Spline */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur text-white/70 text-xs mb-6">
            Founder-Focused • System-Led
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1] drop-shadow-[0_0_35px_rgba(0,201,107,0.25)]">
            We Build Systems That Help Brands Start, Operate & Scale.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            FoundersROI is your full-stack business development partner—Marketing, Sales, Branding, Tech & Growth under one powerful ecosystem.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#00C96B] text-black font-semibold shadow-[0_0_25px_rgba(0,201,107,0.6)] hover:shadow-[0_0_45px_rgba(0,201,107,0.95)] transition-shadow">
              Book a Strategy Call
            </a>
            <a href="/services" className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors">
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

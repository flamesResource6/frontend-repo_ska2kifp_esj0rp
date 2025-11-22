export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white/60">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <p>© {new Date().getFullYear()} FoundersROI. All rights reserved.</p>
        <p className="text-white/40">Built for founders who think in systems.</p>
      </div>
    </footer>
  )
}

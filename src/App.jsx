import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Catalog from './components/Catalog'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Features />
      <Catalog />

      <footer id="about" className="relative border-t border-cyan-400/10 bg-slate-950/80 py-12">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.06),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h4 className="text-sm font-semibold tracking-wider text-cyan-300">AutoNova Parts</h4>
              <p className="mt-2 text-sm text-slate-300">A next-gen platform for high-performance automotive components.</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-wider text-cyan-300">Catalog</h4>
              <ul className="mt-2 space-y-1 text-sm text-slate-300/90">
                <li>Engine</li>
                <li>Braking</li>
                <li>Suspension</li>
                <li>Electronics</li>
                <li>LED Lighting</li>
                <li>Bodywork</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-wider text-cyan-300">Platform</h4>
              <ul className="mt-2 space-y-1 text-sm text-slate-300/90">
                <li>Vehicle History</li>
                <li>AI Recommendations</li>
                <li>Order Monitoring</li>
                <li>Secure Profiles</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-wider text-cyan-300">Company</h4>
              <ul className="mt-2 space-y-1 text-sm text-slate-300/90">
                <li>About</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-white/5 pt-6 text-xs text-slate-400">© {new Date().getFullYear()} AutoNova Parts. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/sbnqZNZdJSLK7U2A/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,255,255,0.12),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/10 to-slate-950" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-48 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-900/60 px-3 py-1 text-xs text-cyan-300/90 backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
            Future-ready automotive components
          </div>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
            Performance meets precision. Shop parts built for tomorrow.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Explore engine systems, braking, suspension, electronics, and more—curated for enthusiasts and professionals.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button className="rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_35px_rgba(34,211,238,0.35)] transition hover:brightness-110">
              Browse Catalog
            </button>
            <button className="rounded-xl border border-cyan-400/30 bg-slate-900/60 px-6 py-3 text-sm font-semibold text-slate-100 backdrop-blur transition hover:bg-slate-800/60">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

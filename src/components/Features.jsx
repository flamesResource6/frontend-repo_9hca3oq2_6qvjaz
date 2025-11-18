import { motion } from 'framer-motion'
import { Gauge, ShieldCheck, Sparkles, Timer, Brain, PackageSearch } from 'lucide-react'

const features = [
  {
    icon: Gauge,
    title: 'Intelligent vehicle history',
    desc: 'Track maintenance and component lifecycles with precision analytics.'
  },
  {
    icon: Brain,
    title: 'AI recommendations',
    desc: 'Get the right parts for your vehicle using AI-driven compatibility matching.'
  },
  {
    icon: Timer,
    title: 'Real-time order monitoring',
    desc: 'Live order status, from warehouse to delivery door.'
  },
  {
    icon: ShieldCheck,
    title: 'Secure profiles',
    desc: 'Personalized preferences, encrypted and protected.'
  },
  {
    icon: Sparkles,
    title: 'Neon-fast UI',
    desc: 'Ultra-smooth animations and responsive interactions.'
  },
  {
    icon: PackageSearch,
    title: 'Deep catalog',
    desc: 'Engine, braking, suspension, electronics, lighting, and bodywork.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative z-10 border-t border-cyan-400/10 bg-slate-950/60 py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.1),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Built for speed, designed for trust</h2>
          <p className="mt-3 text-slate-300">Everything you need for a seamless parts-shopping experience.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.5 }} className="relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-900/60 p-6 backdrop-blur-xl">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl" />
              <f.icon className="h-6 w-6 text-cyan-300" />
              <h3 className="mt-3 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Wrench, Zap, Cpu, Disc3, Lightbulb, Cog } from 'lucide-react'

const categories = [
  { icon: Cog, name: 'Engine', color: 'from-cyan-500 to-blue-600' },
  { icon: Disc3, name: 'Braking', color: 'from-fuchsia-500 to-pink-600' },
  { icon: Wrench, name: 'Suspension', color: 'from-emerald-500 to-teal-600' },
  { icon: Cpu, name: 'Electronics', color: 'from-violet-500 to-indigo-600' },
  { icon: Lightbulb, name: 'LED Lighting', color: 'from-amber-500 to-orange-600' },
  { icon: Zap, name: 'Bodywork', color: 'from-sky-500 to-cyan-600' }
]

export default function Catalog() {
  return (
    <section id="catalog" className="relative z-10 bg-slate-950 py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(14,165,233,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Explore the catalog</h2>
            <p className="mt-2 text-slate-300">Handpicked categories for performance and reliability.</p>
          </div>
          <button className="rounded-lg border border-cyan-400/30 bg-slate-900/60 px-4 py-2 text-sm text-slate-100">View all</button>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <motion.div key={c.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.5 }} className="group relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-900/70 p-6">
              <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${c.color} opacity-20 blur-2xl`} />
              <c.icon className="h-6 w-6 text-cyan-300" />
              <h3 className="mt-3 text-lg font-semibold text-white">{c.name}</h3>
              <p className="mt-2 text-sm text-slate-300">Premium-grade components selected for durability.</p>
              <div className="mt-4">
                <button className="rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-4 py-2 text-xs font-semibold text-white opacity-0 transition group-hover:opacity-100">Browse</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

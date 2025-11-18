import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Wrench, Zap, Cpu, Disc3, Lightbulb, Cog } from 'lucide-react'

const iconMap = { Cog, Disc3, Wrench, Cpu, Lightbulb, Zap }

export default function Catalog() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${backendUrl}/api/categories`)
        const data = await res.json()
        if (!res.ok) throw new Error(data.detail || 'Failed to load categories')
        setCategories(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [backendUrl])

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

        {loading && <p className="mt-8 text-slate-400">Loading categories…</p>}
        {error && <p className="mt-8 text-rose-400">{error}</p>}

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => {
            const I = iconMap[c.icon] || Cog
            return (
              <motion.div key={c.slug || c.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.5 }} className="group relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-900/70 p-6">
                <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/20 blur-2xl`} />
                <I className="h-6 w-6 text-cyan-300" />
                <h3 className="mt-3 text-lg font-semibold text-white">{c.name}</h3>
                <p className="mt-2 text-sm text-slate-300">{c.description || 'Premium-grade components selected for durability.'}</p>
                <div className="mt-4">
                  <button className="rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-4 py-2 text-xs font-semibold text-white opacity-0 transition group-hover:opacity-100">Browse</button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

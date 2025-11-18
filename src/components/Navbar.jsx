import { useState } from 'react'
import { Menu, X, LogIn, UserPlus, Car, Search } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-cyan-400/20 bg-slate-900/50 backdrop-blur-xl shadow-[0_0_40px_rgba(34,211,238,0.15)]">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 rounded-xl blur-md bg-gradient-to-tr from-cyan-500/40 via-fuchsia-500/30 to-blue-500/40" />
                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800/80 ring-1 ring-white/10">
                  <Car className="h-6 w-6 text-cyan-300" />
                </div>
              </div>
              <div>
                <p className="text-lg font-semibold tracking-tight text-white">AutoNova Parts</p>
                <p className="text-[10px] uppercase tracking-[0.25em] text-cyan-300/70">Futuristic Components</p>
              </div>
            </div>

            <nav className="hidden items-center gap-8 md:flex">
              <a className="text-sm text-slate-200/90 hover:text-white transition" href="#catalog">Catalog</a>
              <a className="text-sm text-slate-200/90 hover:text-white transition" href="#features">Features</a>
              <a className="text-sm text-slate-200/90 hover:text-white transition" href="#about">About</a>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-cyan-300/70" />
                <input placeholder="Search parts..." className="pl-9 pr-3 py-2 rounded-lg bg-slate-800/70 text-slate-100 placeholder:text-slate-400 border border-cyan-400/20 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
              </div>
            </nav>

            <div className="hidden gap-3 md:flex">
              <button className="group relative overflow-hidden rounded-lg border border-cyan-400/30 bg-slate-800/60 px-4 py-2 text-sm text-slate-100 transition hover:brightness-110">
                <span className="relative z-10 flex items-center gap-2"><LogIn className="h-4 w-4 text-cyan-300" /> Login</span>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-blue-500/10" />
              </button>
              <button className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-4 py-2 text-sm font-medium text-white shadow-[0_0_30px_rgba(34,211,238,0.35)]">
                <span className="relative z-10 flex items-center gap-2"><UserPlus className="h-4 w-4" /> Sign Up</span>
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-white/10" />
              </button>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden rounded-lg border border-cyan-400/30 bg-slate-800/60 p-2 text-slate-100">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-cyan-400/10 px-4 pb-4">
              <nav className="flex flex-col gap-3 py-3">
                <a className="text-slate-200" href="#catalog">Catalog</a>
                <a className="text-slate-200" href="#features">Features</a>
                <a className="text-slate-200" href="#about">About</a>
                <div className="flex gap-2 pt-2">
                  <button className="flex-1 rounded-lg border border-cyan-400/30 bg-slate-800/60 px-3 py-2 text-sm text-slate-100"><LogIn className="mr-2 inline h-4 w-4 text-cyan-300" />Login</button>
                  <button className="flex-1 rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-3 py-2 text-sm font-medium text-white">Sign Up</button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

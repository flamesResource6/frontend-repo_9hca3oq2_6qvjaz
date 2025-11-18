import { useState } from 'react'

export default function AuthModals({ backendUrl, showLogin, showSignup, onCloseLogin, onCloseSignup }) {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    const form = new FormData(e.currentTarget)
    const payload = {
      email: form.get('email'),
      password: form.get('password'),
    }
    try {
      const res = await fetch(`${backendUrl}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Login failed')
      setMessage(`Welcome back, ${data.name || data.email || 'user'}!`)
      onCloseLogin?.()
    } catch (err) {
      setMessage(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleSignup = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      password: form.get('password'),
    }
    try {
      const res = await fetch(`${backendUrl}/api/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Sign up failed')
      setMessage('Account created! You can now log in.')
      onCloseSignup?.()
    } catch (err) {
      setMessage(err.message)
    } finally {
      setLoading(false)
    }
  }

  const Input = ({ label, name, type='text', placeholder }) => (
    <div>
      <label className="block text-xs text-slate-300 mb-1">{label}</label>
      <input name={name} type={type} placeholder={placeholder} required className="w-full rounded-lg bg-slate-900/60 border border-cyan-400/30 px-3 py-2 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
    </div>
  )

  const Modal = ({ title, onClose, children }) => (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-900/80 p-6 shadow-[0_0_40px_rgba(34,211,238,0.25)]">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <div className="mt-4 space-y-3">{children}</div>
      </div>
    </div>
  )

  return (
    <>
      {message && (
        <div className="fixed bottom-4 left-1/2 z-[70] -translate-x-1/2 rounded-lg border border-cyan-400/30 bg-slate-900/80 px-4 py-2 text-sm text-slate-100 shadow">{message}</div>
      )}

      {showLogin && (
        <Modal title="Login" onClose={onCloseLogin}>
          <form onSubmit={handleLogin} className="space-y-3">
            <Input label="Email" name="email" type="email" placeholder="you@example.com" />
            <Input label="Password" name="password" type="password" placeholder="••••••••" />
            <button disabled={loading} className="w-full rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white">
              {loading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>
        </Modal>
      )}

      {showSignup && (
        <Modal title="Create account" onClose={onCloseSignup}>
          <form onSubmit={handleSignup} className="space-y-3">
            <Input label="Name" name="name" placeholder="Alex Rider" />
            <Input label="Email" name="email" type="email" placeholder="you@example.com" />
            <Input label="Password" name="password" type="password" placeholder="••••••••" />
            <button disabled={loading} className="w-full rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white">
              {loading ? 'Creating…' : 'Create account'}
            </button>
          </form>
        </Modal>
      )}
    </>
  )
}

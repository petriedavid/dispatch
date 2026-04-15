import { supabase } from '@/lib/supabase'

// Forces Next.js to dynamically check the DB status on every load
export const revalidate = 0;

export default async function Home() {
  // A lightweight check just to see if the DB is reachable
  const { error } = await supabase.from('texts').select('id').limit(1);
  const isDbConnected = !error;

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-emerald-500/30">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 md:px-12 max-w-7xl mx-auto">
        <div className="font-mono text-xl font-bold tracking-tighter flex items-center gap-2">
          <div className="h-3 w-3 bg-white rounded-sm"></div>
          Dispatch
        </div>
        <div className="text-sm font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer">
          Client Login
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center pt-32 pb-24 px-4 text-center max-w-4xl mx-auto mt-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-emerald-400 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          API v1.0 Now Live
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
          Automated SMS workflows.<br className="hidden md:block" />
          <span className="text-zinc-500">Built for compliance.</span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl leading-relaxed">
          The underlying infrastructure for modern businesses. Dispatch provides a seamless, verifiable Compliance-as-a-Service layer directly through SMS.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="px-8 py-4 bg-white text-zinc-950 font-semibold rounded-lg hover:bg-zinc-200 transition-all">
            Get Started
          </button>
          <button className="px-8 py-4 bg-zinc-900 text-white border border-zinc-800 font-semibold rounded-lg hover:bg-zinc-800 transition-all">
            Read the Documentation
          </button>
        </div>
      </section>

      {/* Value Props */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 py-24 border-t border-zinc-900">
        <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50">
          <h3 className="text-lg font-semibold mb-2">Immutable Logs</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">Every message is securely recorded and timestamped in our PostgreSQL database for total audit readiness.</p>
        </div>
        <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50">
          <h3 className="text-lg font-semibold mb-2">Instant Verification</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">Handle consent, opt-ins, and regulatory checks automatically before a single message hits your CRM.</p>
        </div>
        <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50">
          <h3 className="text-lg font-semibold mb-2">Developer First</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">Integrate our webhooks into your existing stack in minutes, not months. Built on Next.js and Vercel.</p>
        </div>
      </section>

      {/* Footer / System Status */}
      <footer className="border-t border-zinc-900 mt-12 py-8 text-center flex flex-col items-center justify-center gap-4">
        <p className="text-zinc-600 text-sm">© 2026 Dispatch Systems. All rights reserved.</p>

        {/* Subtle Database Connection Check */}
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="text-zinc-500">System Status:</span>
          {isDbConnected ? (
            <span className="text-emerald-500 flex items-center gap-1">
              <div className="h-1.5 w-1.5 bg-emerald-500 rounded-full"></div> Operational
            </span>
          ) : (
            <span className="text-red-500 flex items-center gap-1">
              <div className="h-1.5 w-1.5 bg-red-500 rounded-full"></div> DB Disconnected
            </span>
          )}
        </div>
      </footer>
    </main>
  )
}
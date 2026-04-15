// app/page.tsx
import { supabase } from '@/lib/supabase'

// Forces Next.js to dynamically check the DB status on every load
export const revalidate = 0;

export default async function Home() {
  // Fetch the most recent text row from your database
  const { data, error } = await supabase
    .from('texts')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(1);

  const isDbConnected = !error;
  const dbRecord = data?.[0];

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
      <section className="flex flex-col items-center justify-center pt-24 pb-16 px-4 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
          Automated SMS workflows.<br className="hidden md:block" />
          <span className="text-zinc-500">Built for compliance.</span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl leading-relaxed">
          The underlying infrastructure for modern businesses. Dispatch provides a seamless, verifiable Compliance-as-a-Service layer directly through SMS.
        </p>

        {/* Live Database Feed Card */}
        <div className="w-full max-w-2xl mb-12 text-left bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              Live Database Feed
            </div>
            {isDbConnected ? (
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full border border-emerald-400/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Connected to Supabase
              </div>
            ) : (
              <div className="flex items-center gap-2 text-xs font-mono text-red-400 bg-red-400/10 px-2 py-1 rounded-full border border-red-400/20">
                <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                Connection Failed
              </div>
            )}
          </div>

          <div className="p-4 font-mono text-sm">
            {dbRecord ? (
              <div className="space-y-2">
                <div className="flex">
                  <span className="text-zinc-500 w-24">ID:</span>
                  <span className="text-zinc-300">{dbRecord.id.split('-')[0]}...</span>
                </div>
                <div className="flex">
                  <span className="text-zinc-500 w-24">Phone:</span>
                  <span className="text-emerald-400">{dbRecord.phone}</span>
                </div>
                <div className="flex">
                  <span className="text-zinc-500 w-24">Message:</span>
                  <span className="text-zinc-300">"{dbRecord.message}"</span>
                </div>
                <div className="flex">
                  <span className="text-zinc-500 w-24">Status:</span>
                  <span className="text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20 text-xs inline-block">
                    {dbRecord.status}
                  </span>
                </div>
              </div>
            ) : (
              <p className="text-zinc-500 italic">Database is connected, but the texts table is empty. Insert a row to see it here.</p>
            )}
          </div>
        </div>

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

      {/* Footer */}
      <footer className="border-t border-zinc-900 mt-12 py-8 text-center text-zinc-600 text-sm">
        <p>© 2026 Dispatch Systems. All rights reserved.</p>
      </footer>
    </main>
  )
}
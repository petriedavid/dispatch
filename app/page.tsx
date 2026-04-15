import { supabase } from '@/lib/supabase'
import Link from 'next/link'

export const revalidate = 0;

export default async function Home() {
  const { data, error } = await supabase
    .from('texts')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(1);

  const isDbConnected = !error;
  const dbRecord = data?.[0];

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-emerald-500/30 font-sans flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-zinc-950/80 border-b border-zinc-900">
        <div className="flex items-center justify-between px-6 py-4 md:px-12 max-w-7xl mx-auto">
          <Link href="/" className="font-mono text-xl font-bold tracking-tighter flex items-center gap-2">
            <div className="h-3 w-3 bg-white rounded-sm shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
            Dispatch
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors hidden md:block">Platform</Link>
            <Link href="/pricing" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors hidden md:block">Pricing</Link>
            <Link href="/faq" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors hidden md:block">FAQ</Link>
            <button className="text-sm font-semibold bg-white text-zinc-950 px-4 py-2 rounded-md hover:bg-zinc-200 transition-colors">
              Client Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-grow flex flex-col items-center justify-center pt-24 pb-16 px-4 text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-emerald-400 mb-8 shadow-lg">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Compliance-as-a-Service V1 Live
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
          Automated SMS workflows.<br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">Built for strict compliance.</span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl leading-relaxed">
          The underlying infrastructure for modern businesses. Stop worrying about regulations and let our API handle consent, routing, and immutable logging.
        </p>

        {/* Live Database Feed Card */}
        <div className="w-full max-w-2xl mb-12 text-left bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)]">
          <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-950/50">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="h-2 w-2 bg-zinc-500 rounded-full"></span> Live Database Feed
            </div>
            {isDbConnected ? (
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full border border-emerald-400/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Connected
              </div>
            ) : (
              <div className="flex items-center gap-2 text-xs font-mono text-red-400 bg-red-400/10 px-2 py-1 rounded-full border border-red-400/20">
                <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                Disconnected
              </div>
            )}
          </div>
          <div className="p-4 font-mono text-sm bg-zinc-900/80">
            {dbRecord ? (
              <div className="space-y-2">
                <div className="flex"><span className="text-zinc-500 w-24">Phone:</span><span className="text-emerald-400">{dbRecord.phone}</span></div>
                <div className="flex"><span className="text-zinc-500 w-24">Status:</span><span className="text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20 text-xs inline-block">{dbRecord.status}</span></div>
                <div className="flex"><span className="text-zinc-500 w-24">Message:</span><span className="text-zinc-300 truncate">"{dbRecord.message}"</span></div>
              </div>
            ) : (
              <p className="text-zinc-500 italic">Awaiting incoming webhooks...</p>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
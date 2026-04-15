// app/page.tsx
import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import Particles from '@/lib/particles'

export const revalidate = 0;

export default async function Home() {
  const { data, error } = await supabase
    .from('texts')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(1);

  const isDbConnected = !error;
  const dbRecord = data?.[0] || {
    phone: "+1 (555) 019-8372",
    status: "delivered",
    message: "Hey! We're currently on a job, but you're next in our queue. Reply with what you need fixed and we'll call you right back!"
  };

  return (
    <main className="min-h-screen bg-transparent text-zinc-50 selection:bg-emerald-500/30 font-sans flex flex-col relative overflow-hidden">
      {/* Floating Particles Background */}
      <Particles />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-zinc-950/70 border-b border-zinc-900/50">
        <div className="flex items-center justify-between px-6 py-4 md:px-12 max-w-7xl mx-auto">
          <Link href="/" className="font-mono text-xl font-bold tracking-tighter flex items-center gap-2 group">
            <div className="h-3 w-3 bg-white rounded-sm shadow-[0_0_15px_rgba(255,255,255,0.6)] group-hover:shadow-[0_0_25px_rgba(255,255,255,0.9)] transition-all duration-300"></div>
            Dispatch
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-white transition-colors hidden md:block">Platform</Link>
            <Link href="/pricing" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors hidden md:block">Pricing</Link>
            <Link href="/faq" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors hidden md:block">FAQ</Link>
            <button className="text-sm font-semibold bg-white text-zinc-950 px-4 py-2 rounded-md hover:bg-zinc-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              Client Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-grow flex flex-col items-center justify-center pt-24 pb-16 px-4 text-center max-w-5xl mx-auto z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 text-xs font-medium text-emerald-400 mb-8 shadow-lg">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          The Ultimate Revenue Safety Net
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
          Miss a call.<br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Keep the job.</span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl leading-relaxed">
          When your crew is busy, missed calls mean lost money as clients call the next guy on Google. Dispatch detects missed calls and instantly texts them to lock in the lead for just 5 cents.
        </p>

        {/* Live Database Feed Card */}
        <div className="w-full max-w-2xl mb-12 text-left bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-all hover:border-zinc-700">
          <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-950/50">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="h-2 w-2 bg-zinc-500 rounded-full"></span> Live Action Feed
            </div>
            {isDbConnected ? (
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full border border-emerald-400/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Intercepting Calls
              </div>
            ) : (
              <div className="flex items-center gap-2 text-xs font-mono text-red-400 bg-red-400/10 px-2 py-1 rounded-full border border-red-400/20">
                <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                System Offline
              </div>
            )}
          </div>
          <div className="p-4 font-mono text-sm">
            <div className="space-y-3">
              <div className="flex items-center text-zinc-500 text-xs mb-2">
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                Missed call detected at 10:42 AM
              </div>
              <div className="flex"><span className="text-zinc-500 w-24">To:</span><span className="text-emerald-400">{dbRecord.phone}</span></div>
              <div className="flex"><span className="text-zinc-500 w-24">Status:</span><span className="text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20 text-xs inline-block">{dbRecord.status}</span></div>
              <div className="flex items-start"><span className="text-zinc-500 w-24 flex-shrink-0">Auto-Reply:</span><span className="text-zinc-300">"{dbRecord.message}"</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* The Workflow Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto border-t border-zinc-900/50 z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How it saves you money.</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Stop bleeding revenue every time your team is too busy to answer the phone.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* The Old Way */}
          <div className="bg-zinc-950/80 backdrop-blur-sm border border-red-900/30 rounded-2xl p-8 relative">
            <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2">
              <div className="h-2 w-2 bg-red-500 rounded-full"></div> The Old Way
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4 opacity-70">
                <div className="text-zinc-600 font-mono text-sm mt-0.5">01</div>
                <div>
                  <h4 className="text-zinc-300 font-semibold mb-1">Client calls your business</h4>
                  <p className="text-zinc-500 text-sm">They have an emergency and need someone right now.</p>
                </div>
              </li>
              <li className="flex gap-4 opacity-70">
                <div className="text-zinc-600 font-mono text-sm mt-0.5">02</div>
                <div>
                  <h4 className="text-zinc-300 font-semibold mb-1">Nobody answers</h4>
                  <p className="text-zinc-500 text-sm">Your crew is on a job, under a sink, or talking to another customer.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="text-red-500 font-mono text-sm mt-0.5 font-bold">03</div>
                <div>
                  <h4 className="text-red-400 font-bold mb-1">Client calls the next guy</h4>
                  <p className="text-zinc-400 text-sm">They hang up and call the next business on Google. You just lost a $2,000 job.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* The Dispatch Way */}
          <div className="bg-zinc-900/80 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-8 shadow-[0_0_30px_rgba(16,185,129,0.05)] relative hover:border-emerald-500/50 transition-colors">
            <h3 className="text-xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              With Dispatch
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="text-emerald-600 font-mono text-sm mt-0.5">01</div>
                <div>
                  <h4 className="text-zinc-100 font-semibold mb-1">Client calls your business</h4>
                  <p className="text-zinc-400 text-sm">They have an emergency and need someone right now.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="text-emerald-600 font-mono text-sm mt-0.5">02</div>
                <div>
                  <h4 className="text-zinc-100 font-semibold mb-1">Nobody answers</h4>
                  <p className="text-zinc-400 text-sm">But this time, Dispatch's system recognizes the missed call instantly.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="text-emerald-400 font-mono text-sm mt-0.5 font-bold">03</div>
                <div>
                  <h4 className="text-emerald-400 font-bold mb-1">Automated text secures the lead</h4>
                  <p className="text-zinc-300 text-sm">Dispatch immediately texts: "Hey, we're on a job! You are in our queue, we'll call you right back." The client stops searching and waits for you.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Trust & Value Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto border-t border-zinc-900/50 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 hover:bg-zinc-900/80 transition-colors">
            <h3 className="text-lg font-semibold mb-2 text-zinc-100">Pays for Itself</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">At $45/month and 5 cents a text, the system literally pays for itself the very first time it saves a missed call from going to a competitor.</p>
          </div>
          <div className="p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 hover:bg-zinc-900/80 transition-colors">
            <h3 className="text-lg font-semibold mb-2 text-zinc-100">100% Legal Protection</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">Predatory lawyers sue small businesses for texting without consent. Our system handles opt-outs and compliance automatically, acting as a legal shield.</p>
          </div>
          <div className="p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 hover:bg-zinc-900/80 transition-colors">
            <h3 className="text-lg font-semibold mb-2 text-zinc-100">Zero Maintenance</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">You don't need to be an IT guy. We handle the carrier registrations, the routing, and the database logging entirely in the background.</p>
          </div>
        </div>
      </section>

      {/* Business Info / Footer */}
      <footer className="border-t border-zinc-900/80 pt-16 pb-8 bg-zinc-950/80 backdrop-blur-md mt-auto z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 border-b border-zinc-900 pb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="font-mono text-xl font-bold tracking-tighter flex items-center gap-2 mb-4">
              <div className="h-3 w-3 bg-white rounded-sm"></div>
              Dispatch
            </div>
            <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
              Secure, compliant SMS infrastructure designed to eliminate liability and automate operational workflows.
            </p>
          </div>
          <div>
            <h5 className="font-semibold mb-4 text-zinc-200">Platform</h5>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><Link href="/pricing" className="hover:text-emerald-400 transition-colors">Pricing</Link></li>
              <li><Link href="/faq" className="hover:text-emerald-400 transition-colors">FAQ</Link></li>
              <li><Link href="#" className="hover:text-emerald-400 transition-colors">API Reference</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4 text-zinc-200">Company</h5>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><a href="mailto:support@dispatch.dev" className="hover:text-white transition-colors">support@dispatch.dev</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-zinc-600 text-xs font-mono">
          © 2026 Dispatch. Designed with precision.
        </div>
      </footer>
    </main>
  )
}
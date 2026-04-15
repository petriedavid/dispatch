import Link from 'next/link'

export default function Pricing() {
    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-emerald-500/30 font-sans flex flex-col">
            {/* Navigation (Matches Home Page) */}
            <nav className="sticky top-0 z-50 backdrop-blur-md bg-zinc-950/80 border-b border-zinc-900">
                <div className="flex items-center justify-between px-6 py-4 md:px-12 max-w-7xl mx-auto">
                    <Link href="/" className="font-mono text-xl font-bold tracking-tighter flex items-center gap-2">
                        <div className="h-3 w-3 bg-white rounded-sm shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                        Dispatch
                    </Link>
                    <div className="flex items-center gap-6">
                        <Link href="/" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors hidden md:block">Platform</Link>
                        <Link href="/pricing" className="text-sm font-medium text-white transition-colors hidden md:block">Pricing</Link>
                        <Link href="/faq" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors hidden md:block">FAQ</Link>
                        <button className="text-sm font-semibold bg-white text-zinc-950 px-4 py-2 rounded-md hover:bg-zinc-200 transition-colors">
                            Client Login
                        </button>
                    </div>
                </div>
            </nav>

            {/* Pricing Section */}
            <section className="flex-grow py-24 px-6 max-w-6xl mx-auto w-full">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Transparent Pricing</h1>
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto">Pay for the infrastructure you use. No hidden carrier fees.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Sandbox */}
                    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 shadow-xl flex flex-col">
                        <h3 className="text-xl font-bold text-zinc-300 mb-2">Sandbox</h3>
                        <div className="text-4xl font-extrabold mb-2">$0<span className="text-lg text-zinc-500 font-medium">/mo</span></div>
                        <p className="text-sm text-zinc-400 mb-6">Perfect for testing the API.</p>
                        <ul className="space-y-3 mb-8 text-sm text-zinc-300 flex-grow">
                            <li className="flex items-center gap-2"><div className="h-1 w-1 bg-zinc-600 rounded-full"></div> 100 SMS per month</li>
                            <li className="flex items-center gap-2"><div className="h-1 w-1 bg-zinc-600 rounded-full"></div> Standard Support</li>
                        </ul>
                        <button className="w-full py-3 bg-zinc-900 border border-zinc-800 rounded-lg font-semibold text-zinc-300 hover:bg-zinc-800 transition-colors">Start Building</button>
                    </div>

                    {/* Production */}
                    <div className="bg-zinc-900 border border-emerald-500/30 rounded-2xl p-8 relative shadow-[0_0_30px_rgba(16,185,129,0.1)] transform md:-translate-y-4 flex flex-col">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-zinc-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            Most Popular
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Production</h3>
                        <div className="text-4xl font-extrabold mb-2">$49<span className="text-lg text-zinc-500 font-medium">/mo</span></div>
                        <p className="text-sm text-emerald-400/80 mb-6">For live business operations.</p>
                        <ul className="space-y-3 mb-8 text-sm text-zinc-200 flex-grow">
                            <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 bg-emerald-500 rounded-full"></div> Base platform fee</li>
                            <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 bg-emerald-500 rounded-full"></div> $0.015 per SMS segment</li>
                            <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 bg-emerald-500 rounded-full"></div> Immutable ledger access</li>
                        </ul>
                        <button className="w-full py-3 bg-white text-zinc-950 rounded-lg font-bold hover:bg-zinc-200 transition-colors">Deploy Now</button>
                    </div>

                    {/* Enterprise */}
                    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 shadow-xl flex flex-col">
                        <h3 className="text-xl font-bold text-zinc-300 mb-2">Volume</h3>
                        <div className="text-4xl font-extrabold mb-2">Custom</div>
                        <p className="text-sm text-zinc-400 mb-6">For high-throughput systems.</p>
                        <ul className="space-y-3 mb-8 text-sm text-zinc-300 flex-grow">
                            <li className="flex items-center gap-2"><div className="h-1 w-1 bg-zinc-600 rounded-full"></div> Volume SMS discounts</li>
                            <li className="flex items-center gap-2"><div className="h-1 w-1 bg-zinc-600 rounded-full"></div> Dedicated support channel</li>
                        </ul>
                        <button className="w-full py-3 bg-zinc-900 border border-zinc-800 rounded-lg font-semibold text-zinc-300 hover:bg-zinc-800 transition-colors">Contact Sales</button>
                    </div>
                </div>
            </section>
        </main>
    )
}
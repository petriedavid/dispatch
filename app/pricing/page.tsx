import Link from 'next/link'

export default function Pricing() {
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
                    {/* Basic Plan */}
                    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 shadow-xl flex flex-col">
                        <h3 className="text-xl font-bold text-zinc-300 mb-2">Basic</h3>
                        <div className="text-4xl font-extrabold mb-2">$5<span className="text-lg text-zinc-500 font-medium">/mo</span></div>
                        <p className="text-sm text-zinc-400 mb-6">Perfect for testing the API and early integration.</p>
                        <ul className="space-y-3 mb-8 text-sm text-zinc-300 flex-grow">
                            <li className="flex items-center gap-2"><div className="h-1 w-1 bg-zinc-600 rounded-full"></div> 100 SMS per month included</li>
                            <li className="flex items-center gap-2"><div className="h-1 w-1 bg-zinc-600 rounded-full"></div> Full API & Webhook access</li>
                            <li className="flex items-center gap-2"><div className="h-1 w-1 bg-zinc-600 rounded-full"></div> Standard Support</li>
                        </ul>
                        <button className="w-full py-3 bg-zinc-900 border border-zinc-800 rounded-lg font-semibold text-zinc-300 hover:bg-zinc-800 transition-colors">Start Building</button>
                    </div>

                    {/* Production Plan */}
                    <div className="bg-zinc-900 border border-emerald-500/30 rounded-2xl p-8 relative shadow-[0_0_30px_rgba(16,185,129,0.1)] transform md:-translate-y-4 flex flex-col">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-zinc-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            Most Popular
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Production</h3>
                        <div className="text-4xl font-extrabold mb-2">$45<span className="text-lg text-zinc-500 font-medium">/mo</span></div>
                        <p className="text-sm text-emerald-400/80 mb-6">The ultimate revenue safety net.</p>
                        <ul className="space-y-3 mb-8 text-sm text-zinc-200 flex-grow">
                            <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 bg-emerald-500 rounded-full"></div> Base platform fee</li>
                            <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 bg-emerald-500 rounded-full"></div> $0.05 per SMS segment</li>
                            <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 bg-emerald-500 rounded-full"></div> Missed-call lead reactivator</li>
                            <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 bg-emerald-500 rounded-full"></div> Immutable ledger access</li>
                        </ul>
                        <button className="w-full py-3 bg-white text-zinc-950 rounded-lg font-bold hover:bg-zinc-200 transition-colors">Deploy Now</button>
                    </div>

                    {/* Volume Plan */}
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

            {/* Business Info / Footer */}
            <footer className="border-t border-zinc-900 pt-16 pb-8 bg-zinc-950 mt-auto">
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
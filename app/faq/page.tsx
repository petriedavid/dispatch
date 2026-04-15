import Link from 'next/link'

export default function FAQ() {
    const faqs = [
        {
            question: "How much does it actually cost?",
            answer: "Our Production plan is a flat $45/month plus $0.05 per text message. Think of it this way: losing a missed call to the next guy on Google costs you anywhere from $500 to $5,000. The automated text message that saves that job costs you exactly five cents."
        },
        {
            question: "What exactly is the 'Missed-Call Reactivator'?",
            answer: "If you or your crew miss a call while on a job, our system detects it and instantly fires a compliant SMS (e.g., 'Hey, we are currently on a job but you are next in our queue. What do you need fixed?'). It turns dead air into booked appointments without you having to touch your phone."
        },
        {
            question: "I run a local service business. Why do I need 'compliance' just to text my customers?",
            answer: "Because predatory lawyers are actively targeting small businesses for TCPA (Telephone Consumer Protection Act) violations. A single non-compliant text message can carry a fine of $500 to $1,500. Dispatch acts as your automated legal shield, ensuring every text has documented consent before it leaves your system."
        },
        {
            question: "What is A2P 10DLC, and do I have to deal with it?",
            answer: "A2P 10DLC is a strict new regulation from mobile carriers (AT&T, Verizon, T-Mobile) that blocks unverified business texts as spam. It is a massive paperwork headache. If you use Dispatch, you don't have to worry about it—we handle the carrier registration and trust-scoring for you behind the scenes."
        },
        {
            question: "I'm not a tech company. Is this going to be a nightmare to set up?",
            answer: "Not at all. While we offer a robust API for developers, our core platform is designed to be 'set-and-forget' for business owners. You can plug us directly into your existing CRM or use our dashboard, and we handle the heavy lifting of routing, logging, and compliance in the background."
        },
        {
            question: "What happens if a customer replies 'STOP'?",
            answer: "Our infrastructure intercepts opt-out keywords instantly. We automatically block any future messages to that number at the network level, ensuring you can't accidentally break the law even if an employee tries to text them manually."
        }
    ];

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
                        <Link href="/faq" className="text-sm font-medium text-white transition-colors hidden md:block">FAQ</Link>
                        <button className="text-sm font-semibold bg-white text-zinc-950 px-4 py-2 rounded-md hover:bg-zinc-200 transition-colors">
                            Client Login
                        </button>
                    </div>
                </div>
            </nav>

            {/* FAQ Header */}
            <section className="pt-24 pb-12 px-6 max-w-3xl mx-auto w-full text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Protect Your Business</h1>
                <p className="text-lg text-zinc-400">Everything you need to know about automated compliance, liability protection, and recovering lost leads.</p>
            </section>

            {/* FAQ Accordion List */}
            <section className="flex-grow pb-24 px-6 max-w-3xl mx-auto w-full">
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors shadow-lg"
                        >
                            <h3 className="text-lg font-semibold mb-3 text-zinc-100 flex items-start gap-3">
                                <span className="text-emerald-500 mt-1 flex-shrink-0">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                                </span>
                                {faq.question}
                            </h3>
                            <p className="text-zinc-400 text-sm leading-relaxed pl-8">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Support CTA */}
                <div className="mt-16 text-center p-8 bg-zinc-950 border border-zinc-800 rounded-2xl shadow-xl">
                    <h4 className="text-xl font-bold mb-2">Still have questions?</h4>
                    <p className="text-zinc-400 text-sm mb-6">Our compliance team is ready to review your current setup.</p>
                    <button className="px-6 py-3 bg-white text-zinc-950 font-bold rounded-lg hover:bg-zinc-200 transition-colors">
                        Contact Support
                    </button>
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
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import * as motion from "framer-motion/client";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About — Yash Gandhi | Full-Stack Engineer",
    description: "Senior Full-Stack Engineer with enterprise experience from Barclays and a track record of ground-up product builds. Available for startup projects.",
};

const stack = [
    { category: "Frontend", items: ["React", "Next.js", "React Native", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Java 21 / Spring Boot", "Go", "REST & GraphQL", "WebSockets"] },
    { category: "Data", items: ["PostgreSQL", "PostGIS", "Redis", "RabbitMQ"] },
    { category: "Infrastructure", items: ["AWS (EC2, S3, RDS, SQS)", "Terraform", "Docker", "CI/CD (GitHub Actions)"] },
    { category: "Payments", items: ["Stripe Connect", "LND / Lightning Network"] },
];

const timeline = [
    {
        year: "2023 – Present",
        role: "Freelance Systems Architect",
        company: "Independent",
        description: "Designing and building full-stack products for early-stage and growth-stage startups. Key projects: Sipstr (4-sided alcohol delivery marketplace), KAPS Admin (multi-city logistics control plane), BitMeet (Bitcoin-native events platform).",
        highlight: true,
    },
    {
        year: "2022 – 2023",
        role: "Software Engineer",
        company: "Barclays",
        description: "Developed and maintained internal tooling and consumer-facing services within enterprise engineering teams. Gained deep exposure to large-scale distributed systems, security standards, and production reliability practices.",
        highlight: false,
    },
];

export default function About() {
    return (
        <div className="min-h-screen bg-background overflow-x-hidden selection:bg-primary/30">
            <Nav />
            <div className="fixed inset-0 canvas-grid opacity-20 pointer-events-none"></div>

            <main className="relative z-20 w-full max-w-5xl mx-auto px-6 md:px-12 pt-32 pb-24">

                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-24"
                >
                    <span className="font-mono text-xs text-[#F7931A] uppercase tracking-[0.3em] font-bold block mb-4">[ Engineer_Profile ]</span>
                    <h1 className="font-syne text-5xl md:text-7xl font-extrabold tracking-tighter uppercase text-white mb-8">
                        About Me
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <div className="space-y-6">
                            <p className="font-mono text-base text-on-surface-variant leading-relaxed border-l-2 border-[#F7931A] pl-6">
                                I&apos;m a Senior Full-Stack Engineer who specialises in building the infrastructure that lets startups scale without breaking.
                            </p>
                            <p className="font-mono text-sm text-on-surface-variant leading-relaxed">
                                My background straddles two worlds: enterprise-grade engineering discipline from Barclays, and the scrappy, ship-fast velocity required to build products from zero. That combination means I can architect systems that are both reliable and fast to build.
                            </p>
                            <p className="font-mono text-sm text-on-surface-variant leading-relaxed">
                                I&apos;ve built 4-sided marketplaces, real-time queue systems, multi-city logistics dashboards, and payment automation pipelines — each one designed to be maintainable and extensible, not just demo-ready.
                            </p>
                            <p className="font-mono text-sm text-on-surface-variant leading-relaxed">
                                If you&apos;re a founder who needs someone who can own the technical side end-to-end — from architecture decisions to deployment — I&apos;m the right person.
                            </p>
                        </div>
                        <div className="glass p-8 space-y-6">
                            <div>
                                <span className="font-mono text-[10px] uppercase tracking-widest text-[#F7931A] font-bold block mb-2">Status</span>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse"></span>
                                    <span className="font-mono text-sm text-white">Available Now</span>
                                </div>
                            </div>
                            <div>
                                <span className="font-mono text-[10px] uppercase tracking-widest text-[#F7931A] font-bold block mb-2">Location</span>
                                <span className="font-mono text-sm text-on-surface-variant">Remote — Worldwide</span>
                            </div>
                            <div>
                                <span className="font-mono text-[10px] uppercase tracking-widest text-[#F7931A] font-bold block mb-2">Timezone</span>
                                <span className="font-mono text-sm text-on-surface-variant">IST (UTC +5:30) — flexible for UK/EU/US overlap</span>
                            </div>
                            <div>
                                <span className="font-mono text-[10px] uppercase tracking-widest text-[#F7931A] font-bold block mb-2">Engagement Types</span>
                                <span className="font-mono text-sm text-on-surface-variant">Fixed-scope projects, monthly retainers, fractional CTO</span>
                            </div>
                            <div className="pt-4 border-t border-white/5 flex gap-6">
                                <a href="https://linkedin.com/in/gandhiyash24" target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] uppercase tracking-widest text-white/50 hover:text-[#F7931A] transition-colors">LinkedIn</a>
                                <a href="https://github.com/gandhiyaash" target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] uppercase tracking-widest text-white/50 hover:text-[#F7931A] transition-colors">GitHub</a>
                                <a href="https://x.com/__yashgandhi__" target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] uppercase tracking-widest text-white/50 hover:text-[#F7931A] transition-colors">X</a>
                            </div>
                        </div>
                    </div>
                </motion.header>

                {/* Experience Timeline */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#F7931A] mb-4 block font-bold">Career Path</span>
                    <h2 className="font-syne text-3xl md:text-4xl font-extrabold uppercase text-white mb-12">Experience</h2>

                    <div className="space-y-6">
                        {timeline.map((item) => (
                            <div key={item.role} className={`glass p-8 border-l-2 ${item.highlight ? 'border-[#F7931A]' : 'border-white/10'}`}>
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="font-syne text-xl font-bold uppercase text-white">{item.role}</h3>
                                        <span className="font-mono text-sm text-[#F7931A]">{item.company}</span>
                                    </div>
                                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/40 whitespace-nowrap">{item.year}</span>
                                </div>
                                <p className="font-mono text-sm text-on-surface-variant leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Tech Stack */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#F7931A] mb-4 block font-bold">Tools of Trade</span>
                    <h2 className="font-syne text-3xl md:text-4xl font-extrabold uppercase text-white mb-12">Tech Stack</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {stack.map((group) => (
                            <div key={group.category} className="glass p-6">
                                <span className="font-mono text-[10px] uppercase tracking-widest text-[#F7931A] font-bold block mb-4">{group.category}</span>
                                <div className="flex flex-wrap gap-2">
                                    {group.items.map(item => (
                                        <span key={item} className="font-mono text-[11px] px-3 py-1.5 bg-surface-variant text-white/80 uppercase tracking-wide">{item}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Contact Form */}
                <motion.section
                    id="contact"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="scroll-mt-24"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-px w-12 bg-[#F7931A]/50"></div>
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#F7931A] font-bold">Start a Conversation</span>
                        <div className="h-px w-12 bg-[#F7931A]/50"></div>
                    </div>
                    <h2 className="font-syne text-4xl md:text-5xl font-extrabold uppercase text-white mb-4">
                        Let&apos;s fix your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7931A] to-[#FFB874]">next big problem</span>
                    </h2>
                    <p className="font-mono text-sm text-on-surface-variant mb-12 max-w-xl leading-relaxed">
                        Describe what you&apos;re building and I&apos;ll get back within 24 hours. No sales call, no fluff — just a straight answer on whether and how I can help.
                    </p>

                    <div className="glass p-5 sm:p-8 md:p-12">
                        <ContactForm />
                    </div>

                    <p className="font-mono text-[10px] text-white/30 mt-6 text-center uppercase tracking-widest">
                        Or email directly:{" "}
                        <a href="mailto:yashbtc@proton.me" className="hover:text-[#F7931A] transition-colors">yashbtc@proton.me</a>
                    </p>
                </motion.section>
            </main>

            <Footer />
        </div>
    );
}

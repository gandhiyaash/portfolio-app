import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import * as motion from "framer-motion/client";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services — Yash Gandhi | Full-Stack Engineer",
    description: "MVP development, dashboards, web & mobile apps, real-time systems, and fractional CTO. Enterprise-grade reliability at startup speed.",
};

const services = [
    {
        icon: "rocket_launch",
        title: "MVP Development",
        description: "From idea → production-ready in 6–12 weeks. Built to scale from day one, not something you'll need to rebuild in 3 months.",
        items: ["Scoping & architecture planning", "React / Next.js frontend", "Node.js backend & APIs", "AWS deployment & CI/CD"],
        tag: "6–12 WEEKS"
    },
    {
        icon: "grid_view",
        title: "Dashboards & Internal Tools",
        description: "Replace spreadsheets and manual chaos with a dashboard your team actually uses. Cut hours of weekly admin without adding headcount.",
        items: ["Data visualisation & reporting", "Role-based access & permissions", "Real-time data updates", "Integrations with existing tools"],
        tag: "2–6 WEEKS"
    },
    {
        icon: "developer_board",
        title: "Web & Mobile Apps (React + React Native)",
        description: "Fast, responsive, and cross-platform. Web apps and native mobile experiences built on the same codebase. Clean code, real Core Web Vitals scores, and a codebase your team can maintain.",
        items: ["React / Next.js development", "React Native (Expo)", "Cross-platform mobile apps", "TypeScript & modern stack", "Performance optimisation", "SEO & Core Web Vitals"],
        tag: "FLEXIBLE"
    },
    {
        icon: "sync",
        title: "Real-Time Systems",
        description: "WebSocket queues, live feeds, real-time notifications. Built for traffic spikes, load-tested before launch, not just in local dev.",
        items: ["WebSocket & Socket.io", "Redis pub/sub & queues", "Scalable event-driven design", "Load-tested before launch"],
        tag: "SPECIALITY"
    },
    {
        icon: "build_circle",
        title: "Fixing Existing Products",
        description: "Most clients come to me when things are already breaking. Slow load times. Broken features. Growing tech debt. I get up to speed fast and fix what's blocking your growth.",
        items: ["Performance audit & fixes", "Bug fixing & refactoring", "Scalability improvements", "Code quality uplift"],
        tag: "FLEXIBLE"
    },
    {
        icon: "account_tree",
        title: "Fractional CTO / Tech Lead",
        description: "Senior technical ownership without the full-time cost. Architecture decisions, code reviews, and a clear path forward.",
        items: ["Architecture & stack decisions", "Engineering team mentorship", "Vendor & tech evaluation", "Monthly retainer available"],
        tag: "ONGOING"
    }
];

export default function Services() {
    return (
        <div className="min-h-screen bg-background overflow-x-hidden selection:bg-primary/30">
            <Nav />
            <div className="fixed inset-0 canvas-grid opacity-20 pointer-events-none"></div>

            <main className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24">

                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-20"
                >
                    <h1 className="font-syne text-5xl md:text-7xl font-extrabold tracking-tighter uppercase text-white mb-6">
                        What I Can Help<br className="hidden md:block" /> You With
                    </h1>
                    <p className="font-mono text-sm text-on-surface-variant max-w-xl leading-relaxed">
                        End-to-end engineering for startups and scale-ups. From idea to production-ready, or fixing what&apos;s already breaking.
                    </p>
                </motion.header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="glass p-8 flex flex-col gap-6 hover:border-[#22C55E]/40 hover:shadow-[0_8px_40px_rgba(34,197,94,0.1)] transition-all duration-300 group"
                        >
                            <div className="flex items-start justify-between">
                                <span className="material-symbols-outlined text-[#F7931A] text-3xl">{service.icon}</span>
                                <span className="font-mono text-[9px] tracking-widest text-white/40 border border-white/10 px-2 py-1 uppercase">{service.tag}</span>
                            </div>
                            <div>
                                <h3 className="font-syne text-2xl font-bold uppercase text-white mb-3">{service.title}</h3>
                                <p className="font-mono text-sm text-on-surface-variant leading-relaxed">{service.description}</p>
                            </div>
                            <ul className="space-y-2 mt-auto">
                                {service.items.map(item => (
                                    <li key={item} className="font-mono text-[11px] text-white/60 flex items-center gap-2">
                                        <span className="w-1 h-1 rounded-full bg-[#F7931A] flex-shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 glass p-6"
                >
                    <p className="font-mono text-sm text-on-surface-variant">
                        Not sure what you need? <span className="text-white">Let&apos;s talk through your project</span>. No commitment, 30 minutes.
                    </p>
                    <a
                        href="https://calendly.com/letyashknow"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs font-bold uppercase tracking-widest text-[#F7931A] border border-[#F7931A]/30 px-6 py-3 hover:bg-[#F7931A]/10 transition-all duration-200 whitespace-nowrap flex items-center gap-2"
                    >
                        Book a Discovery Call
                        <span className="material-symbols-outlined text-sm">calendar_month</span>
                    </a>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
}

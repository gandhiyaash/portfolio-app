import Link from "next/link";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SchematicSVG } from "@/components/SchematicSVG";
import { RotatingText, RotatingWord } from "@/components/RotatingText";
import { AiWorkflowSection } from "@/components/AiWorkflowSection";
import { InteractivePrompt } from "@/components/InteractivePrompt";
import { ProjectCard } from "@/components/ProjectCard";
import * as motion from "framer-motion/client";

export const metadata: Metadata = {
    title: "Yash Gandhi — Freelance Full-Stack Engineer for Hire | React, Node.js, React Native",
    description: "Hire a senior full-stack engineer to build your MVP, dashboard, or real-time system. Enterprise-grade reliability, startup speed. Available for client projects now.",
    keywords: [
        "hire freelance full-stack engineer",
        "freelance React developer UK",
        "hire React Native developer",
        "MVP development freelancer",
        "Node.js freelance engineer",
        "Next.js developer for hire",
        "freelance startup engineer London",
        "Yash Gandhi engineer",
    ],
    openGraph: {
        title: "Yash Gandhi — Freelance Full-Stack Engineer for Hire",
        description: "MVP to production in 6–12 weeks. Real-time systems, dashboards, mobile apps. Available for client projects now.",
        url: "https://buildwithyash.vercel.app",
        siteName: "Yash Gandhi",
        type: "website",
    },
    alternates: {
        canonical: "https://buildwithyash.vercel.app",
    },
};

export default function Home() {
    return (
        <div className="min-h-screen bg-background selection:bg-primary/30">
            <Nav />
            <main>
                {/* HERO */}
                <section className="relative min-h-screen flex items-center pt-32 md:pt-24 px-6 md:px-8 lg:px-20 overflow-hidden hero-gradient">
                    <div className="absolute inset-0 canvas-grid opacity-20 pointer-events-none"></div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full items-center relative z-10 max-w-7xl mx-auto">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="text-left"
                        >
                            {/* Availability badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.05 }}
                                className="mb-5 inline-flex items-center gap-2 border border-emerald-400/25 bg-emerald-400/[0.06] px-3 py-1.5"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400">Project slots open · June 2026</span>
                            </motion.div>

                            {/* Rotating role label */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.55, delay: 0.1 }}
                                className="mb-5 min-h-[1.5rem] flex items-center"
                            >
                                <RotatingText className="font-body text-sm md:text-base font-semibold tracking-wider uppercase" />
                            </motion.div>
                            <h1 className="font-syne text-5xl md:text-6xl lg:text-7xl font-extrabold tight-tracked text-white leading-[1.05] mb-8 uppercase">
                                <motion.span
                                    className="block text-white/90"
                                    initial={{ opacity: 0, y: 32 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.65, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    Building
                                </motion.span>
                                <motion.span
                                    className="block text-white/90"
                                    initial={{ opacity: 0, y: 32 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.65, delay: 0.30, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    systems
                                </motion.span>
                                <motion.span
                                    className="block"
                                    initial={{ opacity: 0, y: 32 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.65, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    that <RotatingWord />
                                </motion.span>
                            </h1>
                            <p className="font-mono text-sm md:text-base text-on-surface-variant max-w-xl mb-4 border-l-2 border-[#F7931A] pl-6 leading-relaxed">
                                Full-Stack Engineer focused on React, React Native (Expo), Node.js, and production systems that scale under real-world load. Built for real users from day one, not just a demo.
                            </p>
                            <p className="font-mono text-sm md:text-base text-white/50 max-w-xl mb-4 pl-6 leading-relaxed">
                                Built and deployed systems handling real users, real transactions, and real operational workflows.
                            </p>
                            <p className="font-mono text-sm md:text-base text-on-surface-variant max-w-xl mb-4 pl-6 leading-relaxed">
                                <span className="text-white/80">Enterprise rigour from Barclays. Startup speed from ground-up builds.</span>
                            </p>
                            <p className="font-mono text-sm md:text-base text-on-surface-variant max-w-xl mb-2 pl-6 leading-relaxed">
                                Most clients come to me after something breaks. I help you build it right the first time.
                            </p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.62, ease: [0.22, 1, 0.36, 1] }}
                                className="flex flex-col sm:flex-row flex-wrap gap-4"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(247,147,26,0.5)" }}
                                    whileTap={{ scale: 0.97 }}
                                    transition={{ duration: 0.18 }}
                                >
                                    <Link href="/experience" className="bg-gradient-to-br from-[#F7931A] to-[#FFB874] text-[#4b2800] px-8 py-4 font-mono font-bold uppercase tracking-widest flex items-center justify-center gap-3 group">
                                        View Work
                                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </Link>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.04, backgroundColor: "rgba(247,147,26,0.06)" }}
                                    whileTap={{ scale: 0.97 }}
                                    transition={{ duration: 0.18 }}
                                >
                                    <a
                                        href="https://calendly.com/letyashknow"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border border-[#F7931A]/50 text-[#F7931A] px-8 py-4 font-mono font-bold uppercase tracking-widest text-center flex items-center justify-center gap-2 hover:bg-[#F7931A]/10 transition-all"
                                    >
                                        <span className="material-symbols-outlined text-sm">calendar_month</span>
                                        Book a 30-min Call
                                    </a>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="perspective-text hidden lg:block"
                        >
                            <SchematicSVG />
                        </motion.div>
                    </div>
                </section>

                {/* SERVICES */}
                <section id="services" className="py-32 px-6 md:px-8 lg:px-20 bg-background relative z-10 border-b border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-20"
                        >
                            <h2 className="font-syne text-4xl md:text-6xl font-extrabold tight-tracked text-white uppercase">What I Can Help<br className="hidden md:block"/> You With</h2>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
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
                            ].map((service, i) => (
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
                                className="font-mono text-xs font-bold uppercase tracking-widest text-[#F7931A] border border-[#F7931A]/30 px-6 py-3 hover:bg-[#22C55E]/10 transition-all duration-200 whitespace-nowrap flex items-center gap-2"
                            >
                                Book a Discovery Call
                                <span className="material-symbols-outlined text-sm">calendar_month</span>
                            </a>
                        </motion.div>
                    </div>
                </section>

                {/* TESTIMONIALS */}
                <section className="py-32 px-6 md:px-8 lg:px-20 bg-surface-container-lowest border-y border-white/5 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
                        >
                            <div>
                                <h2 className="font-syne text-4xl md:text-6xl font-extrabold tight-tracked text-white uppercase">What Clients Say</h2>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    quote: "Platform was live in 10 weeks. Ordering, queue management, payouts, all working day one. Didn't have to chase him once. Things just got done.",
                                    name: "A.K., Founder @ Sipstr",
                                    role: ""
                                },
                                {
                                    quote: "5 service types, multiple cities, pricing that changed by the hour. Yash built something that handled all of it and set it up so our team could keep going without him.",
                                    name: "T.M., Operations Director @ KAPS",
                                    role: ""
                                },
                                {
                                    quote: "Most engineers ask what to build. Yash asked why. That difference meant the final product was better than what we spec'd.",
                                    name: "J.R., Engineering Lead",
                                    role: "Engineering Lead"
                                }
                            ].map((t, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass p-8 flex flex-col gap-6 relative hover:border-[#22C55E]/20 transition-all duration-300"
                                >
                                    <span className="font-syne text-5xl text-[#F7931A]/20 leading-none select-none absolute top-4 left-6">&ldquo;</span>
                                    <p className="font-mono text-sm text-on-surface-variant leading-relaxed pt-6 italic">{t.quote}</p>
                                    <div className="mt-auto pt-4 border-t border-white/5">
                                        <div className="font-syne text-sm font-bold text-white uppercase">{t.name}</div>
                                        {t.role && <div className="font-mono text-[10px] text-[#F7931A] uppercase tracking-widest mt-1">{t.role}</div>}
                                    </div>
                                </motion.div>
                            ))}
                        </div>


                    </div>
                </section>

                {/* WHO I WORK BEST WITH */}
                <section className="py-32 px-6 md:px-8 lg:px-20 bg-surface-container-lowest border-b border-white/5 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-20"
                        >
                            <h2 className="font-syne text-4xl md:text-6xl font-extrabold tight-tracked text-white uppercase">Who I Work<br className="hidden md:block"/> Best With</h2>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    icon: "rocket_launch",
                                    title: "Startup Founders",
                                    description: "You have an idea or early traction and need someone who can own the technical side end-to-end: architecture, development, and deployment. No hand-holding."
                                },
                                {
                                    icon: "trending_up",
                                    title: "Teams Scaling Beyond MVP",
                                    description: "Your MVP worked. Now it's struggling under real load. I help you fix what breaks, rebuild what doesn't scale, and add what's next without starting from scratch."
                                },
                                {
                                    icon: "swap_horiz",
                                    title: "Businesses Replacing Manual Processes",
                                    description: "You're running operations on spreadsheets or manual workflows. I build the dashboards and internal tools that replace the chaos, saving hours every week and eliminating human error."
                                },
                                {
                                    icon: "workspace_premium",
                                    title: "Clients Who Value Quality",
                                    description: "You treat engineering as an investment, not an expense. You care about maintainability, reliability, and shipping something your team can build on after handoff."
                                },
                                {
                                    icon: "warning",
                                    title: "Founders Who've Been Burned Before",
                                    description: "You've worked with developers who over-promised, went quiet, or left you with a codebase no one can maintain. I'm not that."
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass p-8 flex gap-6 hover:border-[#22C55E]/20 transition-all duration-300"
                                >
                                    <span className="material-symbols-outlined text-[#F7931A] text-3xl flex-shrink-0 mt-1">{item.icon}</span>
                                    <div>
                                        <h3 className="font-syne text-xl font-bold uppercase text-white mb-3">{item.title}</h3>
                                        <p className="font-mono text-sm text-on-surface-variant leading-relaxed">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* HOW I WORK */}
                <section className="py-32 px-6 md:px-8 lg:px-20 bg-background border-b border-white/5 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <h2 className="font-syne text-4xl md:text-6xl font-extrabold tight-tracked text-white uppercase">How I Work</h2>
                        </motion.div>
                        {/* Animated connecting timeline line */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                            className="hidden md:block h-px bg-gradient-to-r from-[#F7931A] via-[#F7931A]/25 to-transparent origin-left mb-8"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {[
                                {
                                    step: "01",
                                    title: "Understand the Problem",
                                    description: "I learn your business, your users, and your constraints before writing a line of code. Most problems are half-solved by asking the right questions."
                                },
                                {
                                    step: "02",
                                    title: "Propose a Solution",
                                    description: "Clear scope. Realistic timeline. Tech that fits your stage, not the most impressive stack, the most appropriate one."
                                },
                                {
                                    step: "03",
                                    title: "Build With Updates",
                                    description: "You see real progress every week. No black boxes. If something changes, we adapt early, not after six weeks of wasted work."
                                },
                                {
                                    step: "04",
                                    title: "Deliver Production-Ready",
                                    description: "Deployed, tested, and documented. Built so your team can own it after handoff, not dependent on me to keep the lights on."
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={item.step}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -6, borderColor: "rgba(247,147,26,0.3)" }}
                                    className="glass p-8 flex flex-col gap-4 transition-colors duration-300 relative overflow-hidden cursor-default"
                                >
                                    <span className="font-syne text-6xl font-extrabold text-white/5 absolute top-4 right-4 select-none leading-none">{item.step}</span>
                                    <span className="font-mono text-[10px] text-[#F7931A] uppercase tracking-widest font-bold">{item.step}</span>
                                    <h3 className="font-syne text-xl font-bold uppercase text-white">{item.title}</h3>
                                    <p className="font-mono text-sm text-on-surface-variant leading-relaxed">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHY WORK WITH ME */}
                <section className="py-32 px-6 md:px-8 lg:px-20 bg-surface-container-lowest border-b border-white/5 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-20"
                        >
                            <h2 className="font-syne text-4xl md:text-6xl font-extrabold tight-tracked text-white uppercase">Why Work<br className="hidden md:block"/> With Me</h2>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    icon: "verified",
                                    title: "Enterprise + Startup Experience",
                                    description: "I've worked inside Barclays where reliability isn't optional, and I've built products from scratch for startups. That combination means you get systems that are both solid and fast to ship."
                                },
                                {
                                    icon: "deployed_code",
                                    title: "Production Systems, Not Prototypes",
                                    description: "Every project I've worked on is live and handling real users. I don't build demos. I build things that have to work: under load, under pressure, on day one."
                                },
                                {
                                    icon: "trending_up",
                                    title: "Built to Scale From Day One",
                                    description: "I design for where you're going, not just where you are today. The architecture decisions I make now won't force a painful rewrite in six months when your users double."
                                },
                                {
                                    icon: "manage_accounts",
                                    title: "End-to-End Ownership",
                                    description: "I take full ownership from architecture and development through to deployment and documentation. You get one person who understands the whole system, not a contractor who ships code and disappears."
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass p-8 flex gap-6 hover:border-[#22C55E]/20 transition-all duration-300"
                                >
                                    <span className="material-symbols-outlined text-[#F7931A] text-3xl flex-shrink-0 mt-1">{item.icon}</span>
                                    <div>
                                        <h3 className="font-syne text-xl font-bold uppercase text-white mb-3">{item.title}</h3>
                                        <p className="font-mono text-sm text-on-surface-variant leading-relaxed">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="font-mono text-sm text-on-surface-variant mt-10 border-l-2 border-[#F7931A] pl-6"
                        >
                            I build both web and mobile apps, so your product works everywhere your users are.
                        </motion.p>
                    </div>
                </section>

                <InteractivePrompt />

                <AiWorkflowSection />

                {/* SELECTED WORK */}
                <section className="py-32 px-6 md:px-8 lg:px-20 bg-[#0A0A0A] relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6"
                        >
                            <div>
                                <h2 className="font-syne text-4xl md:text-6xl font-extrabold tight-tracked text-white uppercase">Selected Work</h2>
                            </div>
                            <div className="h-px bg-outline-variant/20 flex-grow mx-4 md:mx-12 hidden sm:block"></div>
                            <div className="font-mono text-xs md:text-sm opacity-50 uppercase tracking-widest">02 Projects</div>
                        </motion.div>
                        
                        <div className="flex flex-col gap-6">
                            <ProjectCard
                                title="Sipstr"
                                summary="Real-time bar ordering platform — customers order from their phone, staff manage the queue live on a shared dashboard."
                                category="Consumer App · Real-Time Systems"
                                status="LIVE"
                                statusVariant="live"
                                tags={["React Native", "Socket.io", "Redis", "AWS", "Node.js"]}
                                problem="Bars were losing revenue to long wait times and overwhelmed staff during peak hours. Manual ordering created race conditions at the bar counter."
                                solution="Built a real-time ordering and queue management app with Socket.io for concurrent event handling and Redis to de-duplicate requests. Staff manage a live shared dashboard with zero page reloads."
                                impact="~40% faster peak service — more throughput during the highest-margin hours. Zero operational failures on launch day. Payout reconciliation fully automated post-build."
                                impactMetric="~40% faster peak service"
                                techDecision="Chose Socket.io + Redis over polling to handle concurrent order bursts without race conditions or duplicate entries under load."
                                href="/sipstr"
                                accentColor="green"
                            />
                            <ProjectCard
                                title="KAPS Admin"
                                summary="Enterprise logistics dashboard — replaced spreadsheet-driven operations with live vehicle tracking, pricing, and order management across 5 cities."
                                category="Enterprise Dashboard · Internal Tool"
                                status="ENTERPRISE"
                                statusVariant="enterprise"
                                tags={["Next.js", "TypeScript", "PostgreSQL", "Node.js"]}
                                problem="A logistics company was managing deliveries across multiple cities using spreadsheets. Pricing changed by the hour, and operations had no single source of truth."
                                solution="Built a full enterprise dashboard: live order tracking, dynamic pricing engine, role-based access, and a normalised PostgreSQL schema designed to expand to new cities without refactoring."
                                impact="~3 hrs/day of manual ops eliminated — $30,000+ in annual labour savings. Scaled from 2 → 5 cities without a single additional ops hire."
                                impactMetric="$30K+ annual labour saved"
                                techDecision="PostgreSQL schema was designed multi-tenancy-first so each new city was a config change, not a migration."
                                href="/kaps"
                                accentColor="orange"
                            />
                        </div>
                    </div>
                </section>

                {/* FRACTIONAL CTO SPOTLIGHT */}
                <section className="py-32 px-6 md:px-8 lg:px-20 bg-background relative z-10 border-t border-white/5 overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#F7931A]/[0.04] rounded-full blur-3xl" />
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F7931A]/20 to-transparent" />
                    </div>
                    <div className="max-w-7xl mx-auto relative">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            {/* Left: Pitch */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center gap-2 border border-[#F7931A]/25 bg-[#F7931A]/[0.06] px-3 py-1.5 mb-8">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#F7931A]" />
                                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#F7931A]">Retainer · Ongoing</span>
                                </div>
                                <h2 className="font-syne text-4xl md:text-6xl font-extrabold tight-tracked text-white uppercase mb-6 leading-[1.05]">
                                    Your<br />Fractional<br />CTO
                                </h2>
                                <p className="font-mono text-sm text-on-surface-variant leading-relaxed max-w-md mb-4 border-l-2 border-[#F7931A] pl-6">
                                    Senior technical ownership without the £150K+/yr full-time cost. Architecture decisions, engineering standards, and strategic clarity — from day one.
                                </p>
                                <p className="font-mono text-sm text-on-surface-variant leading-relaxed max-w-md pl-6">
                                    Built for founders scaling their first engineering team, and growing companies that need a senior technical voice without a full headcount slot.
                                </p>
                            </motion.div>

                            {/* Right: What&apos;s included + CTA */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="glass p-8 md:p-10"
                            >
                                <h3 className="font-syne text-xl font-bold uppercase text-white mb-6">What&apos;s Included</h3>
                                <ul className="space-y-4 mb-10">
                                    {[
                                        { icon: "event", text: "Weekly 60-min strategy call" },
                                        { icon: "account_tree", text: "Architecture & stack decisions" },
                                        { icon: "rate_review", text: "Unlimited async code reviews" },
                                        { icon: "group", text: "Engineering hiring & interview support" },
                                        { icon: "checklist", text: "Sprint planning & road map review" },
                                        { icon: "emergency", text: "Emergency support included" },
                                    ].map(item => (
                                        <li key={item.text} className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-[#F7931A] text-base flex-shrink-0 mt-0.5">{item.icon}</span>
                                            <span className="font-mono text-sm text-on-surface-variant">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-6 border-t border-white/5">
                                    <Link
                                        href="/about#contact"
                                        className="inline-flex items-center gap-3 bg-gradient-to-br from-[#F7931A] to-[#FFB874] text-[#4b2800] px-6 py-3 font-mono font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_20px_rgba(247,147,26,0.4)] transition-all duration-300 active:scale-95 group"
                                    >
                                        Discuss Retainer
                                        <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="py-32 px-6 md:px-8 lg:px-20 bg-surface-container-lowest relative z-10 border-t border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="font-syne text-4xl md:text-6xl font-extrabold tight-tracked text-white uppercase mb-4">
                                Ready to Build?
                            </h2>
                            <p className="font-mono text-sm text-on-surface-variant max-w-xl mx-auto">
                                Tell me what you&apos;re working on. I&apos;ll tell you exactly how I can help — no commitment.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass p-10 md:p-16 flex flex-col md:flex-row gap-10 md:items-center hover:border-[#F7931A]/35 transition-all duration-300"
                        >
                            <div className="flex-1 flex flex-col gap-6">
                                <div className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#F7931A] animate-pulse" />
                                    <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#F7931A] font-bold">Currently Available</span>
                                </div>
                                <h3 className="font-syne text-2xl md:text-4xl font-extrabold uppercase tight-tracked text-white leading-snug">
                                    Let&apos;s build your<br /> scalable product
                                </h3>
                                <p className="font-mono text-sm text-on-surface-variant leading-relaxed max-w-lg">
                                    MVP to production in 6–12 weeks. Real-time systems, dashboards, mobile apps. Built to scale from day one — not rebuilt in six months when users arrive.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {["MVP Build", "Real-time Systems", "Dashboards", "Fractional CTO"].map(s => (
                                        <span key={s} className="font-mono text-[10px] px-3 py-1 bg-surface-variant text-white uppercase tracking-wide">{s}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 md:items-start">
                                <a
                                    href="https://calendly.com/letyashknow"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 bg-gradient-to-br from-[#F7931A] to-[#FFB874] text-[#4b2800] px-8 py-4 font-mono font-bold uppercase tracking-widest hover:shadow-[0_0_24px_rgba(247,147,26,0.4)] transition-all duration-300 active:scale-95 group/link w-fit"
                                >
                                    Book a 30-min Call
                                    <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">calendar_month</span>
                                </a>
                                <Link
                                    href="/about#contact"
                                    className="inline-flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-widest text-[#F7931A] border border-[#F7931A]/30 px-8 py-4 hover:bg-[#F7931A]/10 transition-all duration-200 w-fit"
                                >
                                    Send a Message
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

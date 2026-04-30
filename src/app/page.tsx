import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SchematicSVG } from "@/components/SchematicSVG";
import * as motion from "framer-motion/client";

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
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-left"
                        >
                            <h1 className="font-syne text-5xl md:text-7xl font-extrabold tight-tracked text-white leading-[1.1] mb-8 uppercase">
                                I build scalable React apps<br className="hidden md:block"/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7931A] to-[#FFB874]">&amp; dashboards that don&apos;t break as you grow.</span>
                            </h1>
                            <p className="font-mono text-base md:text-lg text-on-surface-variant max-w-xl mb-4 border-l-2 border-[#F7931A] pl-6 leading-relaxed">
                                Full-Stack Engineer focused on React, React Native (Expo), Node.js, and production systems that scale under real-world load — built for real users from day one, not just a demo.
                            </p>
                            <p className="font-mono text-sm text-white/50 max-w-xl mb-4 pl-6 leading-relaxed">
                                Built and deployed systems handling real users, real transactions, and real operational workflows.
                            </p>
                            <p className="font-mono text-sm text-on-surface-variant max-w-xl mb-4 pl-6 leading-relaxed">
                                <span className="text-white opacity-80">Enterprise rigour from Barclays. Startup speed from ground-up builds.</span>
                            </p>
                            <p className="font-mono text-sm max-w-xl mb-4 pl-6 leading-relaxed">
                                <span className="text-[#F7931A]/70">Typical projects: $1k–$5k+ depending on scope. Fixed pricing available after a quick call.</span>
                            </p>
                            <p className="font-mono text-sm text-on-surface-variant max-w-xl mb-2 pl-6 leading-relaxed">
                                Most clients come to me after something breaks. I help you build it right the first time.
                            </p>
                            <p className="font-mono text-xs text-white/40 max-w-xl mb-12 pl-6 leading-relaxed">
                                Most of my work comes from referrals — I only take on a few new projects each month.
                            </p>
                            <div className="flex flex-col sm:flex-row flex-wrap gap-6">
                                <Link href="/experience" className="bg-gradient-to-br from-[#F7931A] to-[#FFB874] text-[#4b2800] px-8 py-4 font-mono font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:shadow-[0_0_20px_rgba(247,147,26,0.4)] transition-all duration-300 active:scale-95 group">
                                    View Work
                                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </Link>
                                <Link href="/about#contact" className="border border-[#F7931A]/50 text-[#F7931A] px-8 py-4 font-mono font-bold uppercase tracking-widest hover:bg-[#F7931A]/10 transition-all duration-300 active:scale-95 text-center flex items-center justify-center gap-2">
                                    Start a Project
                                </Link>
                            </div>
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

                {/* TRUST TICKER */}
                <section className="py-24 bg-surface-container-lowest border-y border-white/5 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-20 mb-12">
                        <div className="md:w-1/2">
                            <h2 className="font-syne text-3xl font-bold uppercase tracking-wide text-white mb-4">Built on a Solid Foundation</h2>
                            <p className="font-mono text-sm text-on-surface-variant leading-relaxed">Enterprise-grade reliability from Barclays — applied to every project I take on.</p>
                        </div>
                    </div>

                    <div 
                        className="relative flex overflow-x-hidden w-full opacity-50 mt-16"
                        style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
                    >
                        <motion.div 
                            className="flex whitespace-nowrap items-center w-max"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
                        >
                            {[...Array(2)].map((_, i) => (
                                <div key={i} className="flex whitespace-nowrap items-center">
                                    {["Barclays", "AWS", "TypeScript", "Go", "React", "React Native", "Next.js", "PostgreSQL", "Node.js", "Redis"].map((tech, j) => (
                                        <div key={`${i}-${j}`} className="flex items-center">
                                            <span className="font-syne text-3xl font-bold text-white uppercase tracking-widest mx-10 hover:text-[#F7931A] transition-colors">{tech}</span>
                                            <span className="w-2 h-2 bg-[#F7931A] rounded-full opacity-50 shadow-[0_0_10px_#F7931A]"></span>
                                        </div>
                                    ))}
                                </div>
                            ))}
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
                            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#F7931A] mb-4 block font-bold">Services</span>
                            <h2 className="font-syne text-4xl md:text-6xl font-extrabold tight-tracked text-white uppercase">What I Can Help<br className="hidden md:block"/> You With</h2>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: "rocket_launch",
                                    title: "MVP Development",
                                    description: "From idea → production-ready in 6–12 weeks. Built to scale from day one — not something you'll need to rebuild in 3 months.",
                                    items: ["Scoping & architecture planning", "React / Next.js frontend", "Node.js backend & APIs", "AWS deployment & CI/CD"],
                                    tag: "6–12 WEEKS"
                                },
                                {
                                    icon: "grid_view",
                                    title: "Dashboards & Internal Tools",
                                    description: "Replace spreadsheets and manual chaos with a dashboard your team actually uses. Cut hours of weekly admin — without adding headcount.",
                                    items: ["Data visualisation & reporting", "Role-based access & permissions", "Real-time data updates", "Integrations with existing tools"],
                                    tag: "2–6 WEEKS"
                                },
                                {
                                    icon: "developer_board",
                                    title: "Web & Mobile Apps (React + React Native)",
                                    description: "Fast, responsive, and cross-platform. Web apps and native mobile experiences built on the same codebase — clean code, real Core Web Vitals scores, and a codebase your team can maintain.",
                                    items: ["React / Next.js development", "React Native (Expo)", "Cross-platform mobile apps", "TypeScript & modern stack", "Performance optimisation", "SEO & Core Web Vitals"],
                                    tag: "FLEXIBLE"
                                },
                                {
                                    icon: "sync",
                                    title: "Real-Time Systems",
                                    description: "WebSocket queues, live feeds, real-time notifications. Built for traffic spikes, load-tested before launch — not just in local dev.",
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
                                    className="glass p-8 flex flex-col gap-6 hover:border-[#F7931A]/40 hover:shadow-[0_8px_40px_rgba(247,147,26,0.1)] transition-all duration-300 group"
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
                                Not sure what you need? <span className="text-white">Let&apos;s talk through your project</span> — no commitment, 30 minutes.
                            </p>
                            <Link href="/about#contact" className="font-mono text-xs font-bold uppercase tracking-widest text-[#F7931A] border border-[#F7931A]/30 px-6 py-3 hover:bg-[#F7931A]/10 transition-all duration-200 whitespace-nowrap flex items-center gap-2">
                                Book a Discovery Call
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </Link>
                        </motion.div>
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
                            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#F7931A] mb-4 block font-bold">Who This Is For</span>
                            <h2 className="font-syne text-4xl md:text-6xl font-extrabold tight-tracked text-white uppercase">Who I Work<br className="hidden md:block"/> Best With</h2>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    icon: "rocket_launch",
                                    title: "Startup Founders",
                                    description: "You have an idea or early traction and need someone who can own the technical side end-to-end — architecture, development, and deployment — without hand-holding."
                                },
                                {
                                    icon: "trending_up",
                                    title: "Teams Scaling Beyond MVP",
                                    description: "Your MVP worked. Now it's struggling under real load. I help you fix what breaks, rebuild what doesn't scale, and add what's next — without starting from scratch."
                                },
                                {
                                    icon: "swap_horiz",
                                    title: "Businesses Replacing Manual Processes",
                                    description: "You're running operations on spreadsheets or manual workflows. I build the dashboards and internal tools that replace the chaos — saving hours every week and eliminating human error."
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
                                    className="glass p-8 flex gap-6 hover:border-[#F7931A]/20 transition-all duration-300"
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
                            className="mb-20"
                        >
                            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#F7931A] mb-4 block font-bold">Process</span>
                            <h2 className="font-syne text-4xl md:text-6xl font-extrabold tight-tracked text-white uppercase">How I Work</h2>
                        </motion.div>
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
                                    description: "Clear scope. Realistic timeline. Tech that fits your stage — not the most impressive stack, the most appropriate one."
                                },
                                {
                                    step: "03",
                                    title: "Build With Updates",
                                    description: "You see real progress every week. No black boxes. If something changes, we adapt early — not after six weeks of wasted work."
                                },
                                {
                                    step: "04",
                                    title: "Deliver Production-Ready",
                                    description: "Deployed, tested, and documented. Built so your team can own it after handoff — not dependent on me to keep the lights on."
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={item.step}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass p-8 flex flex-col gap-4 hover:border-[#F7931A]/20 transition-all duration-300 relative overflow-hidden"
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
                            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#F7931A] mb-4 block font-bold">Why Me</span>
                            <h2 className="font-syne text-4xl md:text-6xl font-extrabold tight-tracked text-white uppercase">Why Work<br className="hidden md:block"/> With Me</h2>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    icon: "verified",
                                    title: "Enterprise + Startup Experience",
                                    description: "I've worked inside Barclays where reliability isn't optional — and I've built products from scratch for startups. That combination means you get systems that are both solid and fast to ship."
                                },
                                {
                                    icon: "deployed_code",
                                    title: "Production Systems, Not Prototypes",
                                    description: "Every project I've worked on is live and handling real users. I don't build demos. I build things that have to work — under load, under pressure, on day one."
                                },
                                {
                                    icon: "trending_up",
                                    title: "Built to Scale From Day One",
                                    description: "I design for where you're going, not just where you are today. The architecture decisions I make now won't force a painful rewrite in six months when your users double."
                                },
                                {
                                    icon: "manage_accounts",
                                    title: "End-to-End Ownership",
                                    description: "I take full ownership from architecture and development through to deployment and documentation. You get one person who understands the whole system — not a contractor who ships code and disappears."
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass p-8 flex gap-6 hover:border-[#F7931A]/20 transition-all duration-300"
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
                            I build both web and mobile apps — so your product works everywhere your users are.
                        </motion.p>
                    </div>
                </section>

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
                                <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#F7931A] mb-4 block font-bold">Case Studies</span>
                                <h2 className="font-syne text-4xl md:text-6xl font-extrabold tight-tracked text-white uppercase">Selected Work</h2>
                            </div>
                            <div className="h-px bg-outline-variant/20 flex-grow mx-4 md:mx-12 hidden sm:block"></div>
                            <div className="font-mono text-xs md:text-sm opacity-50 uppercase tracking-widest">03 Projects</div>
                        </motion.div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                            {/* Sipstr */}
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="md:col-span-7 group glass transition-all duration-500 hover:border-[#F7931A]/40 hover:shadow-[0_8px_48px_rgba(247,147,26,0.09)] relative overflow-hidden"
                            >
                                <div className="p-8 md:p-12 flex flex-col h-full min-h-[500px] justify-between relative z-10">
                                    <div>
                                        <div className="flex justify-between items-start mb-6">
                                            <h3 className="font-syne text-4xl font-bold tight-tracked uppercase">Sipstr</h3>
                                            <span className="font-mono text-[10px] bg-surface-container-highest px-3 py-1 text-[#F7931A] border border-[#F7931A]/20 font-bold tracking-widest">LIVE</span>
                                        </div>
                                        <div className="space-y-5 mb-8 max-w-md">
                                            <div>
                                                <span className="font-mono text-[10px] uppercase tracking-widest text-[#F7931A] font-bold block mb-1">Problem</span>
                                                <p className="font-mono text-sm text-on-surface-variant leading-relaxed">Bars were losing revenue to long wait times and overwhelmed staff during peak hours.</p>
                                            </div>
                                            <div>
                                                <span className="font-mono text-[10px] uppercase tracking-widest text-[#F7931A] font-bold block mb-1">Solution</span>
                                                <p className="font-mono text-sm text-on-surface-variant leading-relaxed">Built a real-time ordering and queue management app — customers order from their phone, staff manage the queue live on a shared dashboard.</p>
                                            </div>
                                            <div>
                                                <span className="font-mono text-[10px] uppercase tracking-widest text-[#F7931A] font-bold block mb-1">Outcome</span>
                                                <p className="font-mono text-sm text-on-surface-variant leading-relaxed"><strong className="text-white">~40% reduction in peak wait times.</strong> Staff-to-table ratio improved. <strong className="text-white">Zero operational failures on launch day.</strong> Handled peak-hour traffic without performance degradation.</p>
                                                <p className="font-mono text-xs text-white/40 leading-relaxed mt-2">Designed to handle concurrent real-time updates across devices without race conditions.</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-3 mb-10">
                                            <span className="font-mono text-[10px] px-3 py-1.5 bg-surface-variant text-white uppercase tracking-wider">React Native</span>
                                            <span className="font-mono text-[10px] px-3 py-1.5 bg-surface-variant text-white uppercase tracking-wider">Socket.io</span>
                                            <span className="font-mono text-[10px] px-3 py-1.5 bg-surface-variant text-white uppercase tracking-wider">Redis</span>
                                        </div>
                                    </div>
                                    <Link href="/sipstr" className="inline-flex items-center gap-4 font-mono font-bold uppercase text-sm group-hover:text-[#F7931A] transition-colors w-max">
                                        [ View Case Study ]
                                        <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </Link>
                                </div>
                                <div className="absolute -right-10 -bottom-10 w-80 h-80 opacity-5 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img alt="Dark bar interior" className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkUxA3FoDyc6ELxZ0j1M0Ig3BifJnK7vuG3bT6EHI1hyqVhb3D-T_g3LloQajdooLgRZ6nxKIO96woucmIsGBqb8WsAjwUbPpkEs0jKlqN51VCkbWaPeRX2tlP5P-ssaRPrj2hU9t6ZoxAas2EgLTzdVtSsQwhrIongHLgZUwy6Vra9BCmP3ULlvJTohIIA-e7F0zk7mFaha0UF1mqEdGM-RqdohbYeExuRCdac9QJSzO8NQYlFZyEo82lAAyzYCkqOa0gfSMDwGI"/>
                                </div>
                            </motion.div>
                            
                            {/* KAPS Admin */}
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="md:col-span-5 group glass transition-all duration-500 hover:border-white/25 hover:shadow-[0_8px_48px_rgba(0,0,0,0.4)] relative overflow-hidden"
                            >
                                <div className="p-8 md:p-12 flex flex-col h-full min-h-[500px] justify-between">
                                    <div>
                                        <div className="flex justify-between items-start mb-6">
                                            <h3 className="font-syne text-4xl font-bold tight-tracked uppercase">KAPS Admin</h3>
                                            <span className="font-mono text-[10px] bg-surface-container-highest px-3 py-1 text-white/50 border border-white/10 uppercase tracking-widest">ENTERPRISE</span>
                                        </div>
                                        <div className="space-y-5 mb-8">
                                            <div>
                                                <span className="font-mono text-[10px] uppercase tracking-widest text-[#F7931A] font-bold block mb-1">Problem</span>
                                                <p className="font-mono text-sm text-on-surface-variant leading-relaxed">A logistics company was managing deliveries across multiple cities using spreadsheets.</p>
                                            </div>
                                            <div>
                                                <span className="font-mono text-[10px] uppercase tracking-widest text-[#F7931A] font-bold block mb-1">Solution</span>
                                                <p className="font-mono text-sm text-on-surface-variant leading-relaxed">Built a full enterprise dashboard to track vehicles, orders, and live pricing in real time.</p>
                                            </div>
                                            <div>
                                                <span className="font-mono text-[10px] uppercase tracking-widest text-[#F7931A] font-bold block mb-1">Outcome</span>
                                                <p className="font-mono text-sm text-on-surface-variant leading-relaxed"><strong className="text-white">~3 hours of daily manual admin eliminated.</strong> <strong className="text-white">Scaled from 2 to 5 cities without a single additional ops hire.</strong> Enabled operations to scale without increasing headcount.</p>
                                                <p className="font-mono text-xs text-white/40 leading-relaxed mt-2">Built with a schema that supported rapid expansion across cities without refactoring.</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-3 mb-10">
                                            <span className="font-mono text-[10px] px-3 py-1.5 bg-surface-variant text-white uppercase tracking-wider">TypeScript</span>
                                            <span className="font-mono text-[10px] px-3 py-1.5 bg-surface-variant text-white uppercase tracking-wider">PostgreSQL</span>
                                        </div>
                                    </div>
                                    <Link href="/kaps" className="inline-flex items-center gap-4 font-mono font-bold uppercase text-sm hover:text-white transition-colors text-left text-white/50 group-hover:text-[#F7931A] w-max">
                                        [ View Case Study ]
                                        <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </Link>
                                </div>
                            </motion.div>

                            {/* BitMeet */}
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="md:col-span-12 group glass transition-all duration-500 hover:border-[#F7931A]/35 hover:shadow-[0_8px_48px_rgba(247,147,26,0.07)] relative overflow-hidden"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                                    <div className="p-8 md:p-16 flex flex-col justify-center order-2 md:order-1 relative z-10">
                                        <div>
                                            <h3 className="font-syne text-5xl font-bold tight-tracked mb-6 text-[#F7931A] uppercase">BitMeet</h3>
                                            <div className="space-y-5 mb-10 max-w-lg">
                                                <div>
                                                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#F7931A] font-bold block mb-1">Problem</span>
                                                    <p className="font-mono text-sm text-on-surface-variant leading-relaxed">Bitcoin meetup organisers had no reliable way to guarantee attendance — no-shows were wasting everyone&apos;s time and effort.</p>
                                                </div>
                                                <div>
                                                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#F7931A] font-bold block mb-1">Solution</span>
                                                    <p className="font-mono text-sm text-on-surface-variant leading-relaxed">Built a platform where attendees put up a small Bitcoin Lightning deposit to confirm their seat — automatically refunded when they show up.</p>
                                                </div>
                                                <div>
                                                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#F7931A] font-bold block mb-1">Outcome</span>
                                                    <p className="font-mono text-sm text-on-surface-variant leading-relaxed"><strong className="text-white">No-show rate dropped by ~70%.</strong> Organisers reported <strong className="text-white">2x better attendance reliability</strong> from the first event. Created a reliable commitment mechanism for event attendance.</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap gap-3 mb-12">
                                                <span className="font-mono text-[10px] px-3 py-1.5 bg-surface-variant text-white uppercase tracking-wider">LND Node</span>
                                                <span className="font-mono text-[10px] px-3 py-1.5 bg-surface-variant text-white uppercase tracking-wider">Go</span>
                                                <span className="font-mono text-[10px] px-3 py-1.5 bg-surface-variant text-white uppercase tracking-wider">Web3.js</span>
                                            </div>
                                        </div>
                                        <button className="inline-flex items-center gap-4 font-mono font-bold uppercase text-sm group-hover:text-[#F7931A] transition-colors text-left w-max opacity-50 cursor-default">
                                            [ Case Study Coming Soon ]
                                            <span className="material-symbols-outlined">hourglass_empty</span>
                                        </button>
                                    </div>
                                    <div className="h-64 md:h-full overflow-hidden order-1 md:order-2">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img alt="Blockchain visualization" className="w-full h-full object-cover opacity-40 group-hover:opacity-80 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvx1NL_v5sWl3kRv4wXwsYdr7tiRUl_jKRWBgsyOkJt3Kv_2tvssNaovD4cOiP743i-pXn15P6dMaYwOSsJ6AgznKxOYJ74Nnfmyvti7Kf322i9-kaHIayZnFayw4OH2dmwEeOgNbTZ6pOJxz-IdlswNd5numAEYaV7ljf3nNYzL7haRtyoNH13lcV-Z50frAYz85ycJVvEOUPoVciiDU4IBMUiwZqgCfMKW19GBK5ci42kQ6go41g7a5h6z-6TrsAazZD3-KCdo0"/>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
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
                                <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#F7931A] mb-4 block font-bold">Client Signal</span>
                                <h2 className="font-syne text-4xl md:text-6xl font-extrabold tight-tracked text-white uppercase">What Clients Say</h2>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    quote: "Platform was live in 10 weeks. Ordering, queue management, payouts — all working day one. Didn't have to chase him once. Things just got done.",
                                    name: "Founder, Sipstr",
                                    role: "",
                                    placeholder: true
                                },
                                {
                                    quote: "5 service types, multiple cities, pricing that changed by the hour. Yash built something that handled all of it — and set it up so our team could keep going without him.",
                                    name: "Founder, KAPS",
                                    role: "",
                                    placeholder: true
                                },
                                {
                                    quote: "Most engineers ask what to build. Yash asked why. That difference meant the final product was better than what we spec'd.",
                                    name: "Client",
                                    role: "Engineering Lead",
                                    placeholder: true
                                }
                            ].map((t, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass p-8 flex flex-col gap-6 relative"
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

                {/* WHAT HAPPENS NEXT */}
                <section className="py-32 px-6 md:px-8 lg:px-20 bg-surface-container-lowest border-b border-white/5 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-20"
                        >
                            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#F7931A] mb-4 block font-bold">Next Steps</span>
                            <h2 className="font-syne text-4xl md:text-6xl font-extrabold tight-tracked text-white uppercase">What Happens Next</h2>
                        </motion.div>
                        <div className="relative">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                {[
                                    { step: "01", title: "You Reach Out", description: "Share your idea or problem — no need to have it perfectly scoped." },
                                    { step: "02", title: "30-Minute Call", description: "A quick call to understand what you're building and what's blocking you." },
                                    { step: "03", title: "Clear Plan + Timeline", description: "I give you a concrete scope and honest feedback — before any commitment." },
                                    { step: "04", title: "We Start Building", description: "Once we're aligned, we move fast. No delays, no hand-holding required." }
                                ].map((item, i) => (
                                    <motion.div
                                        key={item.step}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex flex-col"
                                    >
                                        {/* Circle + connector row */}
                                        <div className="flex items-center mb-8">
                                            <div className="w-14 h-14 rounded-full border border-[#F7931A]/50 bg-[#131313] flex items-center justify-center flex-shrink-0 relative z-10 shadow-[0_0_16px_rgba(247,147,26,0.1)]">
                                                <span className="font-mono text-[#F7931A] font-bold text-xs tracking-widest">{item.step}</span>
                                            </div>
                                            {i < 3 && (
                                                <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-[#F7931A]/30 to-transparent ml-3" />
                                            )}
                                        </div>
                                        <h3 className="font-syne text-xl font-bold uppercase text-white mb-3">{item.title}</h3>
                                        <p className="font-mono text-sm text-on-surface-variant leading-relaxed">{item.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="font-mono text-xs text-white/40 mt-10 text-center"
                        >
                            If it&apos;s a good fit, I&apos;ll outline next steps immediately after the call.
                        </motion.p>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="py-40 px-6 md:px-8 lg:px-20 bg-background relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="font-syne text-4xl md:text-6xl font-extrabold tight-tracked text-white uppercase mb-8">
                                Got a problem worth solving<br className="hidden md:block"/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7931A] to-[#FFB874]"> — or something that&apos;s already breaking?</span>
                            </h2>
                            <p className="font-mono text-base text-on-surface-variant max-w-2xl mx-auto mb-4 leading-relaxed">
                                Tell me what you&apos;re building — and where it&apos;s breaking. I&apos;ll tell you exactly how I can help.
                            </p>
                            <p className="font-mono text-sm text-on-surface-variant/60 max-w-xl mx-auto mb-4 leading-relaxed">
                                No agency markup. No disappearing after delivery. Just a senior engineer who owns the result.
                            </p>
                            <p className="font-mono text-sm text-white/50 max-w-xl mx-auto mb-12 leading-relaxed">
                                You&apos;ll always know what&apos;s happening — no black box, no surprises.
                            </p>
                            <Link href="/about#contact" className="inline-flex items-center gap-4 bg-gradient-to-br from-[#F7931A] to-[#FFB874] text-[#4b2800] px-10 py-5 font-mono font-bold uppercase tracking-widest hover:shadow-[0_0_30px_rgba(247,147,26,0.5)] transition-all duration-300 active:scale-95 group text-base">
                                Start a Project
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </Link>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

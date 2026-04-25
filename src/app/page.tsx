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
                                I architect systems <br className="hidden md:block"/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7931A] to-[#FFB874]">& build products.</span>
                            </h1>
                            <p className="font-mono text-base md:text-lg text-on-surface-variant max-w-xl mb-12 border-l-2 border-[#F7931A] pl-6 leading-relaxed">
                                Senior Full-Stack Product Engineer. I design resilient architectures and build end-to-end systems for ambitious startups and global enterprises. <br/><br/>
                                <span className="text-white opacity-80">Enterprise experience from Barclays, startup agility from ground-up builds.</span>
                            </p>
                            <div className="flex flex-col sm:flex-row flex-wrap gap-6">
                                <Link href="/experience" className="bg-gradient-to-br from-[#F7931A] to-[#FFB874] text-[#4b2800] px-8 py-4 font-mono font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:shadow-[0_0_20px_rgba(247,147,26,0.4)] transition-all duration-300 active:scale-95 group">
                                    View Case Studies
                                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </Link>
                                <a href="mailto:yashbtc@proton.me?subject=Project%20Inquiry" className="border border-outline-variant/30 text-on-surface px-8 py-4 font-mono font-bold uppercase tracking-widest hover:bg-white/5 transition-all duration-300 active:scale-95 text-center flex items-center justify-center gap-2">
                                    Discuss Project
                                </a>
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

                <section className="py-24 bg-surface-container-lowest border-y border-white/5 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-20 mb-12">
                        <div className="md:w-1/2">
                            <h2 className="font-syne text-3xl font-bold uppercase tracking-wide text-white mb-4">Engineering Standards</h2>
                            <p className="font-mono text-sm text-on-surface-variant leading-relaxed">Bringing enterprise-grade reliability and security standards honed at Barclays to agile, high-growth startup environments.</p>
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

                <section className="py-32 px-6 md:px-8 lg:px-20 bg-[#0A0A0A] relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6"
                        >
                            <div>
                                <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#F7931A] mb-4 block font-bold">Architecture Archive</span>
                                <h2 className="font-syne text-4xl md:text-6xl font-extrabold tight-tracked text-white uppercase">Selected Work</h2>
                            </div>
                            <div className="h-px bg-outline-variant/20 flex-grow mx-4 md:mx-12 hidden sm:block"></div>
                            <div className="font-mono text-xs md:text-sm opacity-50 uppercase tracking-widest">03 Entries Total</div>
                        </motion.div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="md:col-span-7 group glass transition-all duration-500 hover:border-[#F7931A]/30 relative overflow-hidden"
                            >
                                <div className="p-8 md:p-12 flex flex-col h-full min-h-[450px] justify-between relative z-10">
                                    <div>
                                        <div className="flex justify-between items-start mb-8">
                                            <h3 className="font-syne text-4xl font-bold tight-tracked uppercase">Sipstr</h3>
                                            <span className="font-mono text-[10px] bg-surface-container-highest px-3 py-1 text-[#F7931A] border border-[#F7931A]/20 font-bold tracking-widest">LIVE CASE</span>
                                        </div>
                                        <p className="text-on-surface-variant text-lg mb-8 max-w-md leading-relaxed">Real-time bar ordering and dynamic queue management system for high-volume hospitality venues.</p>
                                        <div className="flex flex-wrap gap-3 mb-10">
                                            <span className="font-mono text-[10px] px-3 py-1.5 bg-surface-variant text-white uppercase tracking-wider">+ Socket.io</span>
                                            <span className="font-mono text-[10px] px-3 py-1.5 bg-surface-variant text-white uppercase tracking-wider">+ React Native</span>
                                            <span className="font-mono text-[10px] px-3 py-1.5 bg-surface-variant text-white uppercase tracking-wider">+ Redis</span>
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
                            
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="md:col-span-5 group glass transition-all duration-500 hover:border-white/20 relative overflow-hidden"
                            >
                                <div className="p-8 md:p-12 flex flex-col h-full min-h-[450px] justify-between">
                                    <div>
                                        <div className="flex justify-between items-start mb-8">
                                            <h3 className="font-syne text-4xl font-bold tight-tracked uppercase">KAPS Admin</h3>
                                            <span className="font-mono text-[10px] bg-surface-container-highest px-3 py-1 text-white/50 border border-white/10 uppercase tracking-widest">ENTERPRISE</span>
                                        </div>
                                        <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">Enterprise-grade dashboard for logistics tracking and fleet orchestration.</p>
                                        <div className="flex flex-wrap gap-3 mb-10">
                                            <span className="font-mono text-[10px] px-3 py-1.5 bg-surface-variant text-white uppercase tracking-wider">+ TypeScript</span>
                                            <span className="font-mono text-[10px] px-3 py-1.5 bg-surface-variant text-white uppercase tracking-wider">+ PostgreSQL</span>
                                        </div>
                                    </div>
                                    <Link href="/kaps" className="inline-flex items-center gap-4 font-mono font-bold uppercase text-sm hover:text-white transition-colors text-left text-white/50 group-hover:text-[#F7931A] w-max">
                                        [ View Case Study ]
                                        <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </Link>
                                </div>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="md:col-span-12 group glass transition-all duration-500 hover:border-[#F7931A]/30 relative overflow-hidden"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                                    <div className="p-8 md:p-16 flex flex-col justify-center order-2 md:order-1 relative z-10">
                                        <div>
                                            <h3 className="font-syne text-5xl font-bold tight-tracked mb-6 text-[#F7931A] uppercase">BitMeet</h3>
                                            <p className="text-on-surface-variant text-xl mb-10 max-w-lg leading-relaxed">A Bitcoin-native meetup platform utilizing Lightning Network for micro-staking event attendance.</p>
                                            <div className="flex flex-wrap gap-3 mb-12">
                                                <span className="font-mono text-[10px] px-3 py-1.5 bg-surface-variant text-white uppercase tracking-wider">+ LND Node</span>
                                                <span className="font-mono text-[10px] px-3 py-1.5 bg-surface-variant text-white uppercase tracking-wider">+ Go</span>
                                                <span className="font-mono text-[10px] px-3 py-1.5 bg-surface-variant text-white uppercase tracking-wider">+ Web3.js</span>
                                            </div>
                                        </div>
                                        <button className="inline-flex items-center gap-4 font-mono font-bold uppercase text-sm group-hover:text-[#F7931A] transition-colors text-left w-max">
                                            [ Launch Project ]
                                            <span className="material-symbols-outlined">bolt</span>
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
            </main>
            <Footer />
        </div>
    );
}

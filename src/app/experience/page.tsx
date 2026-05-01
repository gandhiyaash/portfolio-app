import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import * as motion from "framer-motion/client";

export default function Experience() {
    const projects = [
        { id: '01', type: 'NODE', title: 'Sipstr', icon: 'local_bar', desc: 'Real-time bar ordering platform optimized for high-concurrency environments.', tags: ['React Native', 'AWS', 'Socket.io'], path: '/sipstr', status: 'LIVE CASE' },
        { id: '02', type: 'FLOW', title: 'KAPS Admin', icon: 'analytics', desc: 'Enterprise-grade dashboard for logistics tracking and fleet orchestration.', tags: ['Next.js', 'PostgreSQL', 'TypeScript'], path: '/kaps', status: 'ENTERPRISE' },
        { id: '03', type: 'SYNC', title: 'BitMeet', icon: 'video_call', desc: 'Bitcoin-native meetup platform using Lightning Network for micro-staking event attendance. Built with Go backend, LND node integration, and WebRTC for P2P conferencing.', tags: ['WebRTC', 'LND Node', 'Go'] }
    ];

    return (
        <div className="min-h-screen bg-background overflow-x-hidden selection:bg-primary/30">
            <Nav />
            <div className="fixed inset-0 canvas-grid opacity-20 pointer-events-none"></div>
            
            <main className="relative z-20 w-full max-w-5xl mx-auto px-6 md:px-12 pt-32 pb-48 flex flex-col gap-16">
                <motion.header 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4 mb-16 text-center"
                >
                    <h1 className="font-syne text-4xl md:text-7xl font-extrabold tracking-tighter uppercase text-white">Experience</h1>
                    <p className="text-on-surface-variant text-sm md:text-base font-mono opacity-80 uppercase tracking-widest">Architectural timeline</p>
                </motion.header>

                <div className="relative">
                    {/* The Central Circuit Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2"></div>
                    <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute left-4 md:left-1/2 top-0 w-px bg-gradient-to-b from-[#F7931A] to-transparent md:-translate-x-1/2 origin-top"
                    ></motion.div>

                    <div className="space-y-24 relative">
                        {projects.map((proj, idx) => (
                            <div key={proj.title} className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                
                                {/* Timeline Node */}
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-[#F7931A] -translate-x-[7.5px] md:-translate-x-1/2 mt-6 md:mt-0 z-10 shadow-[0_0_10px_#F7931A]"></div>
                                
                                <div className="md:w-1/2 hidden md:block"></div>
                                
                                <motion.div 
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className={`w-full md:w-1/2 pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:text-left md:pr-16' : 'md:text-right md:pl-16'}`}
                                >
                                    <div className="group relative glass p-8 hover:bg-surface-container-high/80 transition-all duration-300 hover:border-[#22C55E]/30">
                                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                            <div className={`flex flex-col ${idx % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                                                <h2 className="font-syne text-3xl font-bold uppercase tracking-tight text-white">{proj.title}</h2>
                                            </div>
                                            <span className="material-symbols-outlined text-white/20 group-hover:text-[#22C55E] transition-colors text-3xl hidden md:block">{proj.icon}</span>
                                        </div>
                                        <p className="text-on-surface-variant text-base mb-8 leading-relaxed">
                                            {proj.desc}
                                        </p>
                                        <div className={`flex flex-wrap gap-2 mb-8 ${idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                                            {proj.tags.map(t => <span key={t} className="glass px-3 py-1 font-mono text-[10px] uppercase text-white/80">{t}</span>)}
                                        </div>
                                        {proj.path ? (
                                            <Link href={proj.path} className="inline-flex items-center gap-3 group/link w-max">
                                                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#F7931A]">View Case Study</span>
                                                <span className="material-symbols-outlined text-sm text-[#F7931A] transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                                            </Link>
                                        ) : (
                                            <span className="inline-flex items-center gap-3 opacity-50 cursor-not-allowed">
                                                <span className="font-mono text-xs font-bold uppercase tracking-widest text-white">Case Study Pending</span>
                                            </span>
                                        )}
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 text-center space-y-8 glass p-8 md:p-16 overflow-hidden"
                >

                    <h3 className="font-syne text-3xl md:text-6xl font-extrabold uppercase tracking-tighter text-white max-w-2xl mx-auto leading-[1.1]">
                        Let's architect your next <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7931A] to-[#FFB874]">product</span>
                    </h3>
                    <Link href="/about#contact" className="inline-block bg-gradient-to-r from-[#F7931A] to-[#FFB874] text-[#4b2800] font-mono font-bold px-12 py-5 uppercase text-sm tracking-widest hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all active:scale-95 mt-4">
                        Discuss Project
                    </Link>
                </motion.div>
            </main>
            <Footer />
        </div>
    );
}

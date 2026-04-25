"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { ReactNode } from "react";

interface CaseStudyProps {
    title: string;
    subtitle: string;
    tags: string[];
    role: string;
    problem: string;
    constraints: string[];
    architecture: ReactNode;
    tradeoffs: { title: string; desc: string }[];
    impact: string;
}

export const CaseStudyLayout = (props: CaseStudyProps) => {
    return (
        <div className="min-h-screen bg-background text-on-background">
            <Nav />
            <main className="pt-32 pb-24 px-6 md:px-8 lg:px-20 max-w-6xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-20">
                    <Link href="/experience" className="inline-flex items-center gap-2 font-mono text-xs text-[#F7931A] mb-8 hover:opacity-80 transition-opacity">
                        <span className="material-symbols-outlined text-sm">arrow_back</span>
                        Back to Systems
                    </Link>
                    <h1 className="font-syne text-5xl md:text-7xl font-extrabold tight-tracked mb-6 uppercase">{props.title}</h1>
                    <p className="text-xl md:text-2xl text-on-surface-variant max-w-3xl mb-8 leading-relaxed">{props.subtitle}</p>
                    <div className="flex flex-wrap gap-4 mb-8">
                        {props.tags.map(tag => (
                            <span key={tag} className="font-mono text-xs px-3 py-1 bg-surface-variant text-on-surface border border-outline-variant/30 rounded-sm">{tag}</span>
                        ))}
                    </div>
                    <div className="font-mono text-sm border-l-2 border-[#F7931A] pl-4 text-on-surface-variant">
                        ROLE // <span className="text-white font-bold">{props.role}</span>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-8 space-y-24">
                        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}>
                            <h2 className="font-syne text-3xl font-bold mb-6 text-[#F7931A] uppercase tracking-wide">The Problem</h2>
                            <p className="text-on-surface-variant leading-relaxed text-lg whitespace-pre-wrap">{props.problem}</p>
                        </motion.section>

                        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}>
                            <h2 className="font-syne text-3xl font-bold mb-6 text-[#F7931A] uppercase tracking-wide">Architecture</h2>
                            {props.architecture}
                        </motion.section>

                        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}>
                            <h2 className="font-syne text-3xl font-bold mb-6 text-[#F7931A] uppercase tracking-wide">Key Decisions</h2>
                            <div className="space-y-6">
                                {props.tradeoffs.map((t, i) => (
                                    <div key={i} className="glass p-8 border-l-4 border-l-[#F7931A] hover:bg-surface-container-high transition-colors">
                                        <h3 className="font-bold text-xl mb-3 text-white">{t.title}</h3>
                                        <p className="text-on-surface-variant leading-relaxed">{t.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.section>

                        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}>
                            <h2 className="font-syne text-3xl font-bold mb-6 text-[#F7931A] uppercase tracking-wide">Impact</h2>
                            <div className="bg-gradient-to-br from-surface-container-high to-surface-container p-8 border border-outline-variant/30 text-center flex flex-col items-center justify-center min-h-[160px]">
                                <span className="font-mono text-xl md:text-2xl text-white block uppercase tracking-widest leading-relaxed">
                                    {props.impact}
                                </span>
                            </div>
                        </motion.section>
                    </div>

                    <div className="lg:col-span-4">
                        <div className="sticky top-32 glass-dark p-8 border border-white/5 shadow-2xl">
                            <h3 className="font-syne text-xl font-bold mb-6 uppercase tracking-wider text-white">Constraints</h3>
                            <ul className="space-y-4 font-mono text-sm text-on-surface-variant">
                                {props.constraints.map((c, i) => (
                                    <li key={i} className="flex gap-4 items-start">
                                        <span className="text-[#F7931A] mt-0.5 leading-none">▹</span> 
                                        <span className="leading-snug">{c}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-12 pt-8 border-t border-outline-variant/20">
                                <h4 className="font-syne text-lg font-bold mb-4 text-white">Need a scalable system?</h4>
                                <a href="mailto:yashbtc@proton.me?subject=Project%20Inquiry" className="block text-center w-full bg-gradient-to-r from-[#F7931A] to-[#FFB874] text-[#4b2800] font-mono font-bold py-4 uppercase text-sm tracking-wider hover:shadow-[0_0_20px_rgba(247,147,26,0.4)] transition-all active:scale-95">
                                    Discuss Project
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

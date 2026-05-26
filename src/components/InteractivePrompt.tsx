"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const prompts = [
    {
        label: "Tell me about Sipstr",
        response:
            "Sipstr is a real-time bar ordering platform I built for a hospitality client. The core challenge was handling concurrent orders across multiple bar stations without race conditions. I used Socket.io with Redis pub/sub for queue deduplication and a React Native app for customers paired with a shared staff dashboard. It shipped live handling peak-hour traffic with zero operational failures and reduced wait times by ~40%.",
    },
    {
        label: "What do you specialise in?",
        response:
            "Frontend-heavy full-stack engineering — React, TypeScript, Node.js. My edge is owning the full system: architecture decisions, real-time infrastructure, and polished user interfaces. I've shipped production systems at Barclays (enterprise scale) and as a freelance engineer (startup speed). Most of my work involves systems that need to be reliable under real load, not just in local dev.",
    },
    {
        label: "How do you handle scale?",
        response:
            "Scale is an architecture decision made upfront, not a retrofit. Database schemas designed for multi-tenancy, Redis for queue management under burst load, WebSocket event handling that avoids race conditions. On the KAPS project, the PostgreSQL schema was designed so each new city was a config change — that's how we went from 2 to 5 cities without a single refactor.",
    },
    {
        label: "Enterprise vs startup experience?",
        response:
            "Both, genuinely. At Barclays I learned what reliability means when downtime has real consequences — structured review processes, observability, zero-tolerance for data inconsistency. From freelance work I learned to move fast with full ownership and ship things that work on day one. That combination means I move quickly without compromising on the decisions that actually matter.",
    },
];

export const InteractivePrompt = () => {
    const [activeIdx, setActiveIdx] = useState<number | null>(null);

    return (
        <section
            className="py-32 px-6 md:px-8 lg:px-20 bg-surface-container-lowest border-b border-white/5 relative z-10"
            id="ask"
        >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#F7931A] font-bold mb-4 block">
                        Interactive
                    </span>
                    <h2 className="font-syne text-4xl md:text-5xl font-extrabold tight-tracked text-white uppercase">
                        Ask me about
                        <br className="hidden md:block" /> my work
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Prompt chips */}
                    <div className="flex flex-col gap-3">
                        {prompts.map((p, i) => (
                            <motion.button
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                whileHover={{ x: 6 }}
                                onClick={() => setActiveIdx(activeIdx === i ? null : i)}
                                className={`text-left glass p-5 flex items-center justify-between gap-4 group transition-colors duration-200 ${
                                    activeIdx === i
                                        ? "border-[#F7931A]/50"
                                        : "hover:border-[#F7931A]/25"
                                }`}
                            >
                                <span
                                    className={`font-mono text-sm font-bold uppercase tracking-wide transition-colors ${
                                        activeIdx === i
                                            ? "text-[#F7931A]"
                                            : "text-white/65 group-hover:text-white"
                                    }`}
                                >
                                    {p.label}
                                </span>
                                <motion.span
                                    animate={{ rotate: activeIdx === i ? 90 : 0 }}
                                    transition={{ duration: 0.22 }}
                                    className="material-symbols-outlined text-sm flex-shrink-0"
                                    style={{
                                        color:
                                            activeIdx === i
                                                ? "#F7931A"
                                                : "rgba(255,255,255,0.25)",
                                    }}
                                >
                                    arrow_forward
                                </motion.span>
                            </motion.button>
                        ))}
                    </div>

                    {/* Response panel */}
                    <div className="min-h-[220px]">
                        <AnimatePresence mode="wait">
                            {activeIdx !== null ? (
                                <motion.div
                                    key={activeIdx}
                                    initial={{ opacity: 0, y: 18 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                    className="glass p-8 border-[#F7931A]/20"
                                >
                                    <div className="flex items-center gap-2 mb-5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#F7931A] animate-pulse" />
                                        <span className="font-mono text-[9px] uppercase tracking-widest text-[#F7931A] font-bold">
                                            Response
                                        </span>
                                    </div>
                                    <p className="font-mono text-sm text-on-surface-variant leading-[1.85]">
                                        {prompts[activeIdx].response}
                                    </p>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="placeholder"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="glass p-8 flex items-center justify-center min-h-[220px]"
                                >
                                    <p className="font-mono text-sm text-white/20 text-center">
                                        Select a prompt above
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

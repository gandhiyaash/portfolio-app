"use client";

import { motion } from "framer-motion";

const tools = [
    {
        name: "GitHub Copilot",
        category: "Code Generation",
        description:
            "AI pair programming to accelerate boilerplate, unit tests, and refactoring without sacrificing code ownership or review discipline.",
        icon: "auto_awesome",
        status: "DAILY USE",
    },
    {
        name: "Claude / ChatGPT",
        category: "Architecture & Review",
        description:
            "System design reviews, edge case exploration, and codebase audits. Treating AI as a senior-level sparring partner, not an answer machine.",
        icon: "psychology",
        status: "WEEKLY USE",
    },
    {
        name: "Agentic Pipelines",
        category: "Automation",
        description:
            "CI/CD automation, code generation scripts, and test coverage tooling that eliminate repetitive engineering overhead at the workflow level.",
        icon: "account_tree",
        status: "PRODUCTION",
    },
    {
        name: "AI-native IDEs",
        category: "Development Environment",
        description:
            "Context-aware development with multi-file refactoring, codebase Q&A, and intelligent completions that scale with project complexity.",
        icon: "terminal",
        status: "DAILY USE",
    },
];

const principles = [
    "AI accelerates execution — it never replaces engineering judgment",
    "Every AI-assisted decision is reviewed before it ships to production",
    "Automation targets repetition, not problem-solving or architecture",
    "Prompt engineering is a skill — vague inputs produce vague outputs",
];

export const AiWorkflowSection = () => {
    return (
        <section
            className="py-32 px-6 md:px-8 lg:px-20 bg-background border-b border-white/5 relative z-10 overflow-hidden"
            id="ai-workflow"
        >
            {/* Background glow */}
            <div
                className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle, rgba(247,147,26,0.04) 0%, transparent 70%)",
                    transform: "translate(20%, -50%)",
                }}
            />

            <div className="max-w-7xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
                >
                    <div>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#F7931A] font-bold mb-4 block">
                            Modern Engineering Edge
                        </span>
                        <h2 className="font-syne text-4xl md:text-6xl font-extrabold tight-tracked text-white uppercase">
                            AI &amp; Developer
                            <br className="hidden md:block" /> Workflow
                        </h2>
                    </div>
                    <p className="font-mono text-sm text-on-surface-variant max-w-sm leading-relaxed">
                        Engineering output is about leverage. AI tools — used with
                        discipline — compress weeks of work into days without cutting
                        corners on quality or ownership.
                    </p>
                </motion.div>

                {/* Tool cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {tools.map((tool, i) => (
                        <motion.div
                            key={tool.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            whileHover={{ y: -3, borderColor: "rgba(247,147,26,0.25)" }}
                            className="glass p-8 flex gap-6 group"
                        >
                            <div className="flex-shrink-0 mt-0.5">
                                <span className="material-symbols-outlined text-[#F7931A] text-2xl">
                                    {tool.icon}
                                </span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-3 mb-1">
                                    <h3 className="font-syne text-lg font-bold uppercase text-white leading-snug">
                                        {tool.name}
                                    </h3>
                                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#F7931A] border border-[#F7931A]/20 px-2 py-0.5 whitespace-nowrap flex-shrink-0">
                                        {tool.status}
                                    </span>
                                </div>
                                <div className="font-mono text-[10px] uppercase tracking-wider text-on-surface-variant mb-3">
                                    {tool.category}
                                </div>
                                <p className="font-mono text-sm text-on-surface-variant leading-relaxed">
                                    {tool.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Principles panel */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass p-8 md:p-12"
                >
                    <h3 className="font-mono text-[10px] uppercase tracking-widest text-[#F7931A] font-bold mb-8">
                        Principles for AI-assisted engineering
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {principles.map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07 }}
                                className="flex items-start gap-3"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#F7931A] mt-[7px] flex-shrink-0" />
                                <p className="font-mono text-sm text-on-surface-variant leading-relaxed">
                                    {p}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

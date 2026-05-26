"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

interface ProjectCardProps {
    title: string;
    summary: string;
    category: string;
    status: string;
    statusVariant?: "live" | "enterprise" | "wip";
    tags: string[];
    problem: string;
    solution: string;
    impact: string;
    impactMetric?: string;
    techDecision?: string;
    href?: string;
    accentColor?: "orange" | "green";
}

const statusStyles = {
    live: "text-[#22C55E] border-[#22C55E]/30 bg-[#22C55E]/5",
    enterprise: "text-white/50 border-white/15 bg-white/3",
    wip: "text-[#F7931A]/70 border-[#F7931A]/20 bg-[#F7931A]/5",
};

export const ProjectCard = ({
    title,
    summary,
    category,
    status,
    statusVariant = "live",
    tags,
    problem,
    solution,
    impact,
    impactMetric,
    techDecision,
    href,
    accentColor = "orange",
}: ProjectCardProps) => {
    const [expanded, setExpanded] = useState(false);
    const accent = accentColor === "green" ? "#22C55E" : "#F7931A";

    return (
        <motion.article
            layout
            className="glass relative overflow-hidden cursor-pointer select-none"
            onHoverStart={() => setExpanded(true)}
            onHoverEnd={() => setExpanded(false)}
            onClick={() => setExpanded(v => !v)}
            whileHover={{ borderColor: `${accent}33` }}
            transition={{ duration: 0.25 }}
            style={{ willChange: "transform" }}
        >
            {/* Card header — always visible */}
            <div className="p-8 md:p-10 relative z-10">
                <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-on-surface-variant mb-2 block">
                            {category}
                        </span>
                        <h3 className="font-syne text-3xl md:text-4xl font-extrabold uppercase tight-tracked text-white leading-none">
                            {title}
                        </h3>
                    </div>
                    <span
                        className={`font-mono text-[9px] uppercase tracking-widest border px-3 py-1 font-bold whitespace-nowrap flex-shrink-0 ${statusStyles[statusVariant]}`}
                    >
                        {status}
                    </span>
                </div>

                <p className="font-mono text-sm text-on-surface-variant leading-relaxed mb-6 max-w-lg">
                    {summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map(tag => (
                        <span
                            key={tag}
                            className="font-mono text-[10px] px-3 py-1 bg-surface-variant text-white uppercase tracking-wide"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-2">
                    <motion.span
                        animate={{ rotate: expanded ? 90 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="material-symbols-outlined text-sm"
                        style={{ color: accent }}
                    >
                        arrow_forward
                    </motion.span>
                    <span
                        className="font-mono text-xs uppercase tracking-widest"
                        style={{ color: accent }}
                    >
                        {expanded ? "Collapse" : "Deep Dive"}
                    </span>
                </div>
            </div>

            {/* Expandable detail panel */}
            <AnimatePresence initial={false}>
                {expanded && (
                    <motion.div
                        key="details"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden border-t border-white/8 relative z-10"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <span className="font-mono text-[9px] uppercase tracking-widest font-bold block mb-3" style={{ color: accent }}>
                                    Problem
                                </span>
                                <p className="font-mono text-sm text-on-surface-variant leading-relaxed">
                                    {problem}
                                </p>
                            </div>
                            <div>
                                <span className="font-mono text-[9px] uppercase tracking-widest font-bold block mb-3" style={{ color: accent }}>
                                    Solution
                                </span>
                                <p className="font-mono text-sm text-on-surface-variant leading-relaxed">
                                    {solution}
                                </p>
                            </div>
                            <div>
                                <span className="font-mono text-[9px] uppercase tracking-widest text-[#22C55E] font-bold block mb-3">
                                    Impact
                                </span>
                                {impactMetric && (
                                    <p className="font-syne text-xl font-bold text-white mb-2">
                                        {impactMetric}
                                    </p>
                                )}
                                <p className="font-mono text-sm text-on-surface-variant leading-relaxed">
                                    {impact}
                                </p>
                                {techDecision && (
                                    <p className="font-mono text-xs text-white/35 leading-relaxed mt-3 pt-3 border-t border-white/8">
                                        {techDecision}
                                    </p>
                                )}
                            </div>
                        </div>

                        {href && (
                            <div className="px-8 md:px-10 pb-8 pt-0">
                                <Link
                                    href={href}
                                    className="inline-flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-widest hover:text-white transition-colors group/link"
                                    style={{ color: accent }}
                                >
                                    View Full Case Study
                                    <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
                                        arrow_forward
                                    </span>
                                </Link>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Ambient glow */}
            <motion.div
                animate={{ opacity: expanded ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `radial-gradient(circle at 0% 0%, ${accent}07 0%, transparent 60%)`,
                }}
            />
        </motion.article>
    );
};

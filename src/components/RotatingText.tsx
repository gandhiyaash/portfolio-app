"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
    "Frontend-heavy Full Stack Engineer",
    "Real-time Systems Architect",
    "React & Node.js Specialist",
    "Product-minded Engineer",
];

export const RotatingText = ({ className }: { className?: string }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => setIndex(i => (i + 1) % roles.length), 3400);
        return () => clearInterval(id);
    }, []);

    return (
        <span className={`relative inline-flex overflow-hidden align-bottom leading-none ${className ?? ""}`}>
            <AnimatePresence mode="wait">
                <motion.span
                    key={roles[index]}
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-110%", opacity: 0 }}
                    transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#F7931A] to-[#FFB874]"
                >
                    {roles[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
};

// Single-keyword variant — used inline inside h1
const keywords = ["scale.", "ship.", "handle load.", "last."];

export const RotatingWord = ({ className }: { className?: string }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => setIndex(i => (i + 1) % keywords.length), 2600);
        return () => clearInterval(id);
    }, []);

    return (
        <span
            className={`inline-flex overflow-hidden ${className ?? ""}`}
            style={{ verticalAlign: "bottom", height: "1.05em" }}
        >
            <AnimatePresence mode="wait">
                <motion.span
                    key={keywords[index]}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#F7931A] to-[#FFB874]"
                >
                    {keywords[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
};


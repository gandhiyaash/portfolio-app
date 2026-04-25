"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const PROJECTS = [
    {
        id: "sipstr",
        title: "Sipstr",
        desc: "Real-time bar ordering platform optimized for high-concurrency environments.",
        tags: ["React Native", "Node.js", "AWS"],
        icon: "terminal",
        link: "/sipstr"
    },
    {
        id: "kaps",
        title: "KAPS Admin",
        desc: "Enterprise-grade dashboard for logistics tracking and fleet orchestration.",
        tags: ["TypeScript", "PostgreSQL", "Next.js"],
        icon: "analytics",
        link: "#"
    },
    {
        id: "bitmeet",
        title: "BitMeet",
        desc: "A Bitcoin-native meetup platform utilizing Lightning Network for micro-staking event attendance.",
        tags: ["LND Node", "Go", "Web3.js"],
        icon: "bolt",
        link: "#"
    },
    {
        id: "satmatch",
        title: "Satmatch",
        desc: "Spatial data analysis engine for satellite imagery matching and tracking.",
        tags: ["TensorFlow", "PostGIS", "Python"],
        icon: "satellite_alt",
        link: "#"
    }
];

export default function Work() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === "Space") {
                e.preventDefault();
                setActiveIndex((prev) => (prev + 1) % PROJECTS.length);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const activeProject = PROJECTS[activeIndex];

    return (
        <div className="min-h-screen bg-surface-container-lowest">
            <Nav />
            <main className="relative w-screen h-screen overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 canvas-grid opacity-20 pointer-events-none"></div>
                <div className="absolute inset-0 gradient-glow pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col items-center select-none">
                    <h1 className="perspective-text font-syne text-[12vw] md:text-[8vw] font-extrabold tracking-tighter leading-none text-transparent stroke-primary transition-all duration-1000" style={{WebkitTextStroke: '1px rgba(247, 147, 26, 0.4)'}}>
                        YASH GANDHI
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[80vw] h-[204px] bg-primary/10 blur-[120px] rounded-full transition-all duration-1000"></div>
                    </div>
                </div>

                <div className="absolute right-[10%] top-[40%] z-20 md:w-80 w-64 animate-fadeInUp" key={activeProject.id}>
                    <div className="absolute -left-12 top-1/2 w-12 h-[1px] bg-primary/40 hidden md:block"></div>
                    <div className="bg-surface-container-low/80 backdrop-blur-md p-6 border-l-2 border-primary">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <span className="font-mono text-[10px] text-primary block mb-1 uppercase tracking-widest">
                                    [ Active_Node: 0{activeIndex + 1} ]
                                </span>
                                <h2 className="font-syne text-2xl font-bold uppercase tracking-tight text-on-surface">{activeProject.title}</h2>
                            </div>
                            <span className="material-symbols-outlined text-primary text-lg">{activeProject.icon}</span>
                        </div>
                        <p className="text-on-surface-variant text-sm mb-6 leading-relaxed font-body">
                            {activeProject.desc}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {activeProject.tags.map(tag => (
                                <span key={tag} className="bg-surface-container-high px-2 py-1 font-mono text-[9px] uppercase text-on-surface-variant">
                                    + {tag}
                                </span>
                            ))}
                        </div>
                        {activeProject.link !== "#" ? (
                            <Link href={activeProject.link} className="inline-flex items-center gap-2 group">
                                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">View Case Study</span>
                                <span className="material-symbols-outlined text-sm text-primary transition-transform group-hover:translate-x-1">arrow_forward</span>
                            </Link>
                        ) : (
                            <button className="inline-flex items-center gap-2 group opacity-50 cursor-not-allowed">
                                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">View Case Study</span>
                                <span className="material-symbols-outlined text-sm text-primary transition-transform group-hover:translate-x-1">lock</span>
                            </button>
                        )}
                    </div>
                </div>

                <div className="absolute bottom-24 left-8 z-20 font-mono text-[10px] text-on-surface-variant/40 space-y-1 hidden md:block">
                    <div>LOC_X: {(42.182 + (activeIndex * 12.5)).toFixed(3)}</div>
                    <div>LOC_Y: {(-12.004 - (activeIndex * 5.2)).toFixed(3)}</div>
                    <div>ROT_Z: {((180.00 + (activeIndex * 90)) % 360).toFixed(2)}</div>
                </div>

                <div 
                    className="absolute bottom-24 right-8 z-20 flex gap-4 items-center bg-surface-container-low px-4 py-2 rounded-sm border border-outline-variant/15 cursor-pointer hover:bg-surface-container-high transition-colors"
                    onClick={() => setActiveIndex((prev) => (prev + 1) % PROJECTS.length)}
                    role="button"
                    tabIndex={0}
                >
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-on-surface">Space to orbit</span>
                    </div>
                    <div className="w-[1px] h-3 bg-outline-variant/30"></div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">Scroll to zoom</div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

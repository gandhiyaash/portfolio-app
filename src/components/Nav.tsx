"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const Nav = () => {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close menu on route change
    useEffect(() => { setMenuOpen(false); }, [pathname]);

    return (
        <>
        <motion.nav 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-8 max-w-full border-b transition-all duration-300 ${scrolled ? "bg-[#0A0A0A]/95 backdrop-blur-2xl border-white/8 py-3 shadow-[0_1px_20px_rgba(0,0,0,0.5)]" : "glass-dark border-white/5 py-4"}`}
        >
            <Link href="/" className="flex items-center gap-3 group">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_#34d399]"></span>
                <div className="flex flex-col">
                    <span className="text-xl font-bold tracking-tighter text-white font-syne uppercase leading-none group-hover:text-[#22C55E] transition-colors">Yash Gandhi</span>
                    <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-[0.2em] leading-tight opacity-80">Full-Stack Engineer</span>
                </div>
            </Link>
            <div className="hidden md:flex items-center gap-8">
                <Link href="/" className={`font-mono text-xs uppercase tracking-widest transition-all ${isActive('/') ? 'text-[#F7931A] border-b-2 border-[#F7931A] pb-1' : 'text-[#E5E2E1] opacity-70 hover:opacity-100 hover:text-[#22C55E]'}`}>Home</Link>
                <Link href="/#services" className="font-mono text-xs uppercase tracking-widest transition-all text-[#E5E2E1] opacity-70 hover:opacity-100 hover:text-[#22C55E]">Services</Link>
                <Link href="/experience" className={`font-mono text-xs uppercase tracking-widest transition-all ${isActive('/experience') || pathname.includes('/sipstr') || pathname.includes('/kaps') ? 'text-[#F7931A] border-b-2 border-[#F7931A] pb-1' : 'text-[#E5E2E1] opacity-70 hover:opacity-100 hover:text-[#22C55E]'}`}>Case Studies</Link>
                <Link href="/about" className={`font-mono text-xs uppercase tracking-widest transition-all ${isActive('/about') ? 'text-[#F7931A] border-b-2 border-[#F7931A] pb-1' : 'text-[#E5E2E1] opacity-70 hover:opacity-100 hover:text-[#22C55E]'}`}>About</Link>
            </div>
            <div className="flex items-center gap-3">
                <Link href="/about#contact" className="hidden md:block bg-gradient-to-r from-[#F7931A] to-[#FFB874] text-[#4b2800] font-mono font-bold px-6 py-2 uppercase text-xs tracking-tighter active:scale-95 transition-all duration-150 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]">
                    Start a Project
                </Link>
                {/* Burger button — mobile only */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] group"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    onClick={() => setMenuOpen(v => !v)}
                >
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
                </button>
            </div>
        </motion.nav>

        {/* Mobile drawer */}
        <motion.div
            initial={false}
            animate={menuOpen ? { x: 0, opacity: 1 } : { x: "100%", opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#0A0A0A]/97 backdrop-blur-2xl flex flex-col pt-24 px-8 pb-12 md:hidden"
        >
            <nav className="flex flex-col gap-8 flex-1">
                <Link href="/" onClick={() => setMenuOpen(false)} className={`font-syne text-3xl font-extrabold uppercase tracking-tight transition-all ${isActive('/') ? 'text-[#F7931A]' : 'text-white hover:text-[#F7931A]'}`}>Home</Link>
                <Link href="/#services" onClick={() => setMenuOpen(false)} className="font-syne text-3xl font-extrabold uppercase tracking-tight text-white hover:text-[#F7931A] transition-all">Services</Link>
                <Link href="/experience" onClick={() => setMenuOpen(false)} className={`font-syne text-3xl font-extrabold uppercase tracking-tight transition-all ${isActive('/experience') || pathname.includes('/sipstr') || pathname.includes('/kaps') ? 'text-[#F7931A]' : 'text-white hover:text-[#F7931A]'}`}>Case Studies</Link>
                <Link href="/about" onClick={() => setMenuOpen(false)} className={`font-syne text-3xl font-extrabold uppercase tracking-tight transition-all ${isActive('/about') ? 'text-[#F7931A]' : 'text-white hover:text-[#F7931A]'}`}>About</Link>
            </nav>
            <Link href="/about#contact-form" onClick={() => setMenuOpen(false)} className="mt-auto bg-gradient-to-r from-[#F7931A] to-[#FFB874] text-[#4b2800] font-mono font-bold px-8 py-4 uppercase text-sm tracking-tighter text-center active:scale-95 transition-all duration-150">
                Start a Project
            </Link>
        </motion.div>
        </>
    );
};

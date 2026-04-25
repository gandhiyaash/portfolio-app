"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export const Nav = () => {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;
    
    return (
        <motion.nav 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 w-full z-50 glass-dark flex justify-between items-center px-6 md:px-8 py-4 max-w-full border-b border-white/5"
        >
            <Link href="/" className="flex items-center gap-3 group">
                <span className="w-2 h-2 bg-[#F7931A] rounded-full animate-pulse shadow-[0_0_8px_#F7931A]"></span>
                <div className="flex flex-col">
                    <span className="text-xl font-bold tracking-tighter text-white font-syne uppercase leading-none group-hover:text-[#F7931A] transition-colors">Yash Gandhi</span>
                    <span className="text-[9px] font-mono text-[#F7931A] uppercase tracking-[0.2em] leading-tight opacity-80">Systems_Architect</span>
                </div>
            </Link>
            <div className="hidden md:flex items-center gap-8">
                <Link href="/" className={`font-mono text-xs uppercase tracking-widest transition-all ${isActive('/') ? 'text-[#F7931A] border-b-2 border-[#F7931A] pb-1' : 'text-[#E5E2E1] opacity-70 hover:opacity-100 hover:text-[#F7931A]'}`}>Home</Link>
                <Link href="/experience" className={`font-mono text-xs uppercase tracking-widest transition-all ${isActive('/experience') || pathname.includes('/sipstr') ? 'text-[#F7931A] border-b-2 border-[#F7931A] pb-1' : 'text-[#E5E2E1] opacity-70 hover:opacity-100 hover:text-[#F7931A]'}`}>Case Studies</Link>
            </div>
            <a href="mailto:yashbtc@proton.me?subject=Project%20Inquiry" className="bg-gradient-to-r from-[#F7931A] to-[#FFB874] text-[#4b2800] font-mono font-bold px-6 py-2 uppercase text-xs tracking-tighter active:scale-95 transition-all duration-150 hover:shadow-[0_0_15px_rgba(247,147,26,0.4)]">
                Discuss Project
            </a>
        </motion.nav>
    );
};

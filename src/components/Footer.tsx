export const Footer = () => (
    <footer className="w-full bg-[#0A0A0A] py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-outline-variant/10">
        <div className="font-mono text-[10px] uppercase tracking-widest text-[#E5E2E1]/50">
            ©2026 YASH GANDHI
        </div>
        <div className="flex gap-8">
            <a className="font-mono text-[10px] uppercase tracking-widest text-[#E5E2E1]/50 hover:text-[#F7931A] transition-colors" href="mailto:yashbtc@proton.me">Email</a>
            <a className="font-mono text-[10px] uppercase tracking-widest text-[#E5E2E1]/50 hover:text-[#F7931A] transition-colors" href="https://github.com/gandhiyaash" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="font-mono text-[10px] uppercase tracking-widest text-[#E5E2E1]/50 hover:text-[#F7931A] transition-colors" href="https://x.com/__yashgandhi__" target="_blank" rel="noopener noreferrer">X</a>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-[#F7931A]">
            LATENCY: 14MS // BUILT TO LAST
        </div>
    </footer>
);

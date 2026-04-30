export const Footer = () => (
    <footer className="w-full bg-[#0A0A0A] relative">
        <div className="section-divider" />
        <div className="py-16 px-8 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-1.5">
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#E5E2E1]/50">
                    ©2026 YASH GANDHI
                </div>
                <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#F7931A]/40">
                    Built to scale. Designed to last.
                </div>
            </div>
            <div className="flex gap-8">
                <a className="font-mono text-[10px] uppercase tracking-widest text-[#E5E2E1]/50 hover:text-[#F7931A] transition-colors" href="mailto:yashbtc@proton.me">Email</a>
                <a className="font-mono text-[10px] uppercase tracking-widest text-[#E5E2E1]/50 hover:text-[#F7931A] transition-colors" href="https://linkedin.com/in/gandhiyash24" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a className="font-mono text-[10px] uppercase tracking-widest text-[#E5E2E1]/50 hover:text-[#F7931A] transition-colors" href="https://github.com/gandhiyaash" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a className="font-mono text-[10px] uppercase tracking-widest text-[#E5E2E1]/50 hover:text-[#F7931A] transition-colors" href="https://x.com/__yashgandhi__" target="_blank" rel="noopener noreferrer">X</a>
            </div>

        </div>
    </footer>
);

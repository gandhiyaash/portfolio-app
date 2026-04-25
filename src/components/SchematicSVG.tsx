export const SchematicSVG = () => (
    <div className="relative w-full max-w-2xl mx-auto lg:max-w-none">
        <div className="absolute inset-0 bg-primary/5 blur-[80px] md:blur-[120px] rounded-full"></div>
        <svg className="w-full h-auto opacity-80" preserveAspectRatio="xMidYMid meet" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
            <path d="M400 100 L700 250 L400 400 L100 250 Z" fill="none" stroke="#2A2A2A" strokeWidth="1"></path>
            <g transform="translate(150, 280)">
                <path d="M0 0 L60 -30 L120 0 L60 30 Z" fill="#1C1B1B" stroke="#F7931A" strokeWidth="2"></path>
                <path d="M0 0 L0 40 L60 70 L60 30 Z" fill="#131313" stroke="#F7931A" strokeWidth="1"></path>
                <path d="M60 30 L60 70 L120 40 L120 0 Z" fill="#1C1B1B" stroke="#F7931A" strokeWidth="1"></path>
                <text className="uppercase" fill="#F7931A" fontFamily="var(--font-mono)" fontSize="10" x="35" y="5">Frontend</text>
            </g>
            <g transform="translate(340, 200)">
                <path d="M0 0 L60 -30 L120 0 L60 30 Z" fill="#1C1B1B" stroke="#E5E2E1" strokeOpacity="0.5" strokeWidth="2"></path>
                <path d="M0 0 L0 40 L60 70 L60 30 Z" fill="#131313" stroke="#E5E2E1" strokeOpacity="0.5" strokeWidth="1"></path>
                <path d="M60 30 L60 70 L120 40 L120 0 Z" fill="#1C1B1B" stroke="#E5E2E1" strokeOpacity="0.5" strokeWidth="1"></path>
                <text className="uppercase" fill="#E5E2E1" fontFamily="var(--font-mono)" fontSize="10" x="45" y="5">API</text>
            </g>
            <g transform="translate(530, 280)">
                <path d="M0 0 L60 -30 L120 0 L60 30 Z" fill="#1C1B1B" stroke="#E5E2E1" strokeOpacity="0.5" strokeWidth="2"></path>
                <path d="M0 0 L0 80 L60 110 L60 30 Z" fill="#131313" stroke="#E5E2E1" strokeOpacity="0.5" strokeWidth="1"></path>
                <path d="M60 30 L60 110 L120 80 L120 0 Z" fill="#1C1B1B" stroke="#E5E2E1" strokeOpacity="0.5" strokeWidth="1"></path>
                <text className="uppercase" fill="#E5E2E1" fontFamily="var(--font-mono)" fontSize="10" x="35" y="5">Persistence</text>
            </g>
            <path d="M270 310 L340 230" opacity="0.4" stroke="#F7931A" strokeDasharray="4 4" strokeWidth="1"></path>
            <path d="M460 230 L530 310" opacity="0.4" stroke="#F7931A" strokeDasharray="4 4" strokeWidth="1"></path>
            <circle cx="305" cy="270" fill="#F7931A" r="3">
                <animate attributeName="opacity" dur="2s" repeatCount="indefinite" values="0;1;0"></animate>
            </circle>
            <circle cx="495" cy="270" fill="#F7931A" r="3">
                <animate attributeName="opacity" dur="2s" repeatCount="indefinite" values="1;0;1"></animate>
            </circle>
        </svg>
    </div>
);

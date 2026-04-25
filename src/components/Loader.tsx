"use client";

import { useEffect, useState } from "react";

export const Loader = () => {
    const [active, setActive] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setActive(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    if (!active) return null;
    return (
        <div className="fixed inset-0 z-[60] bg-surface flex flex-col items-center justify-center p-6 transition-opacity duration-1000">
            <div className="w-full max-w-md space-y-6">
                <div className="flex justify-between items-end">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-primary">Entering workspace...</span>
                    <span className="font-mono text-[10px] text-on-surface-variant">v1.0.42_BOOT</span>
                </div>
                <div className="h-[2px] w-full bg-surface-container-highest relative overflow-hidden">
                    <div className="absolute left-0 top-0 h-full bg-primary loading-bar" style={{ width: '40%' }}></div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                    <div className="h-1 bg-surface-container-highest"></div>
                    <div className="h-1 bg-surface-container-highest"></div>
                    <div className="h-1 bg-surface-container-high/20"></div>
                </div>
            </div>
        </div>
    );
};

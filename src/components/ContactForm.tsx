"use client";

import { useState } from "react";

type FormState = "idle" | "sending" | "success" | "error";

export const ContactForm = () => {
    const [state, setState] = useState<FormState>("idle");
    const [form, setForm] = useState({ name: "", email: "", budget: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setState("sending");

        try {
            // Replace YOUR_FORM_ID with your Formspree form ID from https://formspree.io
            const res = await fetch("https://formspree.io/f/maqaklwz", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                setState("success");
                setForm({ name: "", email: "", budget: "", message: "" });
            } else {
                setState("error");
            }
        } catch {
            setState("error");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="font-mono text-[10px] uppercase tracking-widest text-white/50 block mb-2">Your Name</label>
                    <input
                        required
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="w-full bg-surface-container-high border border-white/10 focus:border-[#F7931A] outline-none px-4 py-3 font-mono text-sm text-white placeholder-white/20 transition-colors"
                    />
                </div>
                <div>
                    <label className="font-mono text-[10px] uppercase tracking-widest text-white/50 block mb-2">Email Address</label>
                    <input
                        required
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        className="w-full bg-surface-container-high border border-white/10 focus:border-[#F7931A] outline-none px-4 py-3 font-mono text-sm text-white placeholder-white/20 transition-colors"
                    />
                </div>
            </div>

            <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-white/50 block mb-2">Project Budget</label>
                <select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="w-full bg-surface-container-high border border-white/10 focus:border-[#F7931A] outline-none px-4 py-3 font-mono text-sm text-white transition-colors appearance-none"
                >
                    <option value="" className="bg-[#0A0A0A]">Select a range...</option>
                    <option value="under-5k" className="bg-[#0A0A0A]">Under $5,000</option>
                    <option value="5k-15k" className="bg-[#0A0A0A]">$5,000 – $15,000</option>
                    <option value="15k-30k" className="bg-[#0A0A0A]">$15,000 – $30,000</option>
                    <option value="30k-plus" className="bg-[#0A0A0A]">$30,000+</option>
                    <option value="retainer" className="bg-[#0A0A0A]">Monthly retainer</option>
                </select>
            </div>

            <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-white/50 block mb-2">Tell me about your project</label>
                <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="What are you building? What problem are you solving? What's your timeline?"
                    className="w-full bg-surface-container-high border border-white/10 focus:border-[#F7931A] outline-none px-4 py-3 font-mono text-sm text-white placeholder-white/20 transition-colors resize-none"
                />
            </div>

            {state === "success" && (
                <div className="flex items-center gap-3 font-mono text-sm text-emerald-400 border border-emerald-400/20 px-4 py-3 bg-emerald-400/5">
                    <span className="material-symbols-outlined text-base">check_circle</span>
                    Message received. I&apos;ll get back to you within 24 hours.
                </div>
            )}

            {state === "error" && (
                <div className="flex items-center gap-3 font-mono text-sm text-red-400 border border-red-400/20 px-4 py-3 bg-red-400/5">
                    <span className="material-symbols-outlined text-base">error</span>
                    Something went wrong. Email me directly at{" "}
                    <a href="mailto:yashbtc@proton.me" className="underline">yashbtc@proton.me</a>
                </div>
            )}

            <button
                type="submit"
                disabled={state === "sending" || state === "success"}
                className="w-full bg-gradient-to-br from-[#F7931A] to-[#FFB874] text-[#4b2800] px-8 py-4 font-mono font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:shadow-[0_0_20px_rgba(247,147,26,0.4)] transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {state === "sending" ? (
                    <>Sending...</>
                ) : state === "success" ? (
                    <>Sent<span className="material-symbols-outlined text-sm">check</span></>
                ) : (
                    <>Send Message<span className="material-symbols-outlined text-sm">send</span></>
                )}
            </button>
        </form>
    );
};

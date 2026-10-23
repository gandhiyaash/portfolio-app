import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import * as motion from "framer-motion/client";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About — Yash Gandhi | Full-Stack Engineer",
    description: "Senior Full-Stack Engineer with enterprise experience from Barclays and a track record of ground-up product builds. Available for startup projects.",
};

const stack = [
    { category: "Frontend", items: ["React 19", "Next.js", "TypeScript", "Redux Toolkit", "Zustand", "React Query / RTK Query", "Tailwind CSS", "MUI", "shadcn/ui"] },
    { category: "Mobile", items: ["React Native", "Expo"] },
    { category: "Backend", items: ["Java 21 / Spring Boot", "Node.js", "Socket.io", "REST APIs", "WebSockets"] },
    { category: "Data", items: ["PostgreSQL", "PostGIS", "Redis", "Supabase"] },
    { category: "Infrastructure", items: ["AWS", "Docker", "CI/CD", "Vercel"] },
    { category: "Payments & Integrations", items: ["Stripe", "Firebase", "Google Maps", "Razorpay"] },
    { category: "Automation", items: ["RPA (Automation Anywhere)", "Data pipelines"] },
];

const timeline = [
    {
        year: "",
        role: "Lead Engineer",
        company: "Client Work",
        description: "Led engineering on client platforms in on-demand delivery and logistics. Sipstr: built four production apps (customer, in-store tablet, driver, marketing site) and major vendor/admin portal features for a real-time, 4-sided alcohol delivery marketplace. KAPS Admin: designed and built the operations admin portal (30+ modules) for a multi-city on-demand platform.",
        highlight: true,
    },
    {
        year: "",
        role: "Backend / Platform Engineer",
        company: "Barclays",
        description: "Owned and contributed to data pipeline and reporting systems in a large-scale financial environment. Improved pipeline throughput and reliability by 30-50% through query optimisation, infrastructure improvements and more resilient service design. Built Dockerised services with automated CI/CD under strict security, compliance and distributed-systems standards.",
        highlight: false,
    },
    {
        year: "",
        role: "Robotic Process Automation Consultant",
        company: "Saint-Gobain INDEC",
        description: "Built bots across Web, SAP, Excel and Outlook automation, with a 50% improvement in process agility and a 40% throughput gain on invoice processing. Migrated automation workflows from Automation Anywhere v10 to v11 across production bots.",
        highlight: false,
    },
];

export default function About() {
    return (
        <div className="min-h-screen bg-background overflow-x-hidden selection:bg-primary/30">
            <Nav />
            <div className="fixed inset-0 canvas-grid opacity-20 pointer-events-none"></div>

            <main className="relative z-20 w-full max-w-5xl mx-auto px-6 md:px-12 pt-32 pb-24">

                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-24"
                >
                    <h1 className="font-syne text-5xl md:text-7xl font-extrabold tracking-tighter uppercase text-white mb-8">
                        About Me
                    </h1>
                    <div className="max-w-2xl">
                        <div className="space-y-6">
                            <p className="font-mono text-base text-on-surface-variant leading-relaxed border-l-2 border-[#F7931A] pl-6">
                                I&apos;m a Senior Full-Stack Engineer who specialises in building the infrastructure that lets startups scale without breaking.
                            </p>
                            <p className="font-mono text-sm text-on-surface-variant leading-relaxed">
                                My background straddles two worlds: enterprise-grade engineering discipline from Barclays, and the scrappy, ship-fast velocity required to build products from zero. That combination means I can architect systems that are both reliable and fast to build.
                            </p>
                            <p className="font-mono text-sm text-on-surface-variant leading-relaxed">
                                I&apos;ve built 4-sided marketplaces, real-time queue systems, multi-city logistics dashboards, and payment automation pipelines. Each one designed to be maintainable and extensible, not just demo-ready.
                            </p>
                            <p className="font-mono text-sm text-on-surface-variant leading-relaxed">
                                If you&apos;re a founder who needs someone who can own the technical side end-to-end, from architecture decisions to deployment, I&apos;m the right person.
                            </p>
                        </div>
                    </div>
                </motion.header>

                {/* Experience Timeline */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <h2 className="font-syne text-3xl md:text-4xl font-extrabold uppercase text-white mb-12">Experience</h2>

                    <div className="space-y-6">
                        {timeline.map((item) => (
                            <div key={item.role} className={`glass p-8 border-l-2 ${item.highlight ? 'border-[#F7931A]' : 'border-white/10'}`}>
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="font-syne text-xl font-bold uppercase text-white">{item.role}</h3>
                                        <span className="font-mono text-sm text-[#F7931A]">{item.company}</span>
                                    </div>
                                    {item.year && <span className="font-mono text-[10px] uppercase tracking-widest text-white/40 whitespace-nowrap">{item.year}</span>}
                                </div>
                                <p className="font-mono text-sm text-on-surface-variant leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Tech Stack */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <h2 className="font-syne text-3xl md:text-4xl font-extrabold uppercase text-white mb-12">Tech Stack</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {stack.map((group) => (
                            <div key={group.category} className="glass p-6">
                                <span className="font-mono text-[10px] uppercase tracking-widest text-[#F7931A] font-bold block mb-4">{group.category}</span>
                                <div className="flex flex-wrap gap-2">
                                    {group.items.map(item => (
                                        <span key={item} className="font-mono text-[11px] px-3 py-1.5 bg-surface-variant text-white/80 uppercase tracking-wide">{item}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Contact Form */}
                <motion.section
                    id="contact"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="scroll-mt-24"
                >
                    {/* Marketing Hero Header */}
                    <div className="text-center py-20 px-6">
                        <h2 className="font-syne text-[clamp(1.5rem,6.5vw,3rem)] md:text-7xl font-extrabold tight-tracked uppercase leading-[1.05] text-white mb-2">
                            Got a problem<br />worth solving
                        </h2>
                        <h2 className="font-syne text-[clamp(1.5rem,6.5vw,3rem)] md:text-7xl font-extrabold tight-tracked uppercase leading-[1.05] text-[#F7931A] mb-8">
                            or something<br />that&apos;s already breaking?
                        </h2>
                        <p className="font-mono text-sm md:text-base text-on-surface-variant max-w-lg mx-auto mb-6 leading-relaxed">
                            Tell me what you&apos;re building and where it&apos;s breaking. I&apos;ll tell you exactly how I can help.
                        </p>
                    </div>

                    <div id="contact-form" className="glass p-5 sm:p-8 md:p-12">
                        <ContactForm />
                    </div>
                </motion.section>
            </main>

            <Footer />
        </div>
    );
}

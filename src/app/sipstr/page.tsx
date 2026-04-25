import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { SystemDiagram } from "@/components/SystemDiagram";

export default function SipstrCaseStudy() {
    return (
        <CaseStudyLayout 
            title="Sipstr"
            subtitle="On-Demand Delivery Infrastructure. Architected a 4-sided alcohol delivery marketplace supporting complex geospatial routing and automated multi-vendor payouts."
            tags={["Java 21", "Spring Boot", "PostgreSQL", "PostGIS", "RabbitMQ", "Stripe Connect"]}
            role="Lead Product Engineer & Architect"
            problem={`Alcohol delivery is operationally volatile. It requires strict regulatory compliance, irregular delivery territories, and handling real-time inventory changes where post-payment order modifications (and subsequent partial refunds) are exceptionally common.`}
            constraints={[
                "Enforcing precise, block-by-block delivery zones instead of generic radius searches.",
                "Automating complex financial reconciliations when orders change post-checkout.",
                "Synchronizing a 17-state order lifecycle in real-time across four distinct user applications."
            ]}
            architecture={
                <SystemDiagram 
                    nodes={[
                        { id: "client", label: "Mobile Apps (RN)", x: 100, y: 200 },
                        { id: "api", label: "Spring Boot Monolith", x: 400, y: 200 },
                        { id: "redis", label: "RabbitMQ", x: 700, y: 100 },
                        { id: "db", label: "PostgreSQL/PostGIS", x: 700, y: 300 }
                    ]}
                    edges={[
                        { source: "client", target: "api" },
                        { source: "api", target: "db" },
                        { source: "api", target: "redis" }
                    ]}
                />
            }
            tradeoffs={[
                { title: "PostGIS Polygons over Radius", desc: "Implemented true geospatial boundaries, eliminating false-positive deliveries and optimizing logistics in dense urban areas." },
                { title: "Automated Financial State Machine", desc: "Built a resilient Stripe Connect abstraction that automatically calculates cart deltas and triggers partial refunds without manual vendor intervention." },
                { title: "O(1) Tax Engine", desc: "Cached complex per-state/category tax rules at startup, entirely removing database bottlenecks during high-volume checkout bursts." },
                { title: "Idempotent Webhooks", desc: "Designed a dual-layer deduplication system (in-memory + DB) to guarantee financial safety and prevent double-payouts during Stripe network retries." }
            ]}
            impact="40% reduced wait times. Zero manual overhead for payouts. Enterprise reliability at startup speed."
        />
    );
}

import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { SystemDiagram } from "@/components/SystemDiagram";

export default function KapsCaseStudy() {
    return (
        <CaseStudyLayout 
            title="KAPS Admin"
            subtitle="Enterprise-grade logistics & mobility dashboard. Architected the control plane for a multi-city, multi-service operations platform."
            tags={["React 19", "TypeScript", "RTK Query", "Spring Boot", "PostgreSQL", "PostGIS"]}
            role="Lead Frontend Engineer & Backend Contributor"
            problem={`The client needed to scale operations across multiple Indian cities with 5+ service verticals (Cabs, Goods, Cranes, Handyman). Pricing was hyper-dynamic, varying by city, vehicle, service type, time of day, and distance. The challenge was building an admin control plane that managed this exponential complexity while ensuring lower-tier admins couldn't accidentally destroy configuration data.`}
            constraints={[
                "Multi-dimensional pricing configuration without combinatorial explosion.",
                "Granular two-tier access control (Super Admin vs. Admin) to prevent accidental data loss.",
                "Parallel frontend-backend development requiring strict API contract tracking."
            ]}
            architecture={
                <SystemDiagram 
                    nodes={[
                        { id: "customer", label: "Customer App", x: 100, y: 150 },
                        { id: "admin", label: "Admin Portal (React)", x: 100, y: 250 },
                        { id: "api", label: "Spring Boot API", x: 400, y: 200 },
                        { id: "redis", label: "Redis (Push Tokens)", x: 700, y: 100 },
                        { id: "db", label: "PostgreSQL/PostGIS", x: 700, y: 300 }
                    ]}
                    edges={[
                        { source: "customer", target: "api" },
                        { source: "admin", target: "api" },
                        { source: "api", target: "redis" },
                        { source: "api", target: "db" }
                    ]}
                />
            }
            tradeoffs={[
                { title: "RTK Query over React Query", desc: "Chose RTK Query for consistency with the existing Redux auth store, utilizing tag-based invalidation to entirely eliminate stale list data bugs after complex pricing mutations." },
                { title: "JWT-Encoded Permissions", desc: "Encoded granular permissions directly into the JWT payload, decoded once into Redux to provide a single source of truth for UI visibility and route guarding without extra network calls." },
                { title: "Region-Scoped Access (Branch → City → State)", desc: "Layered Access Scopes on top of the Super Admin / Admin roles, so an admin only sees and edits data in their own branch, city or state." },
                { title: "Multi-Level Driver KYC", desc: "Modelled KYC as a review chain from Branch Head to City Admin to Super Admin, tracking document status, verifier and rejection reason at every level." },
                { title: "A Shared Design System", desc: "Created a shared component kit and design tokens, enforced by a lint rule that bans hard-coded colours, then migrated the whole portal onto it across 7 milestones." }
            ]}
            impact="~3 hrs/day of manual ops eliminated — equivalent to $30,000+ in annual labour at a single full-time hire. Scaled from 2 → 5 cities without adding headcount. Zero permission-related incidents post-launch."
        />
    );
}

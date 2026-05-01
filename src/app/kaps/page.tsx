import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { SystemDiagram } from "@/components/SystemDiagram";

export default function KapsCaseStudy() {
    return (
        <CaseStudyLayout 
            title="KAPS Admin"
            subtitle="Enterprise-grade logistics & mobility dashboard. Architected the control plane for a multi-city, multi-service operations platform."
            tags={["React 19", "TypeScript", "RTK Query", "Java 21", "PostgreSQL", "Terraform"]}
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
                        { id: "api", label: "Modular Monolith", x: 400, y: 200 },
                        { id: "redis", label: "Redis (Rate Limits)", x: 700, y: 100 },
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
                { title: "Modular Monolith architecture", desc: "Designed backend boundaries explicitly by domain rather than adopting microservices prematurely, avoiding distributed tracing overhead while maintaining a clear migration path." },
                { title: "PostGIS Distance Math", desc: "Shifted Haversine distance calculations for local vs. outstation pricing directly into PostgreSQL via PostGIS, keeping heavy math close to the data." }
            ]}
            impact="~3 hours of daily manual ops eliminated. Scaled to 5 cities without adding headcount. Zero permission-related incidents post-launch."
        />
    );
}

import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { SystemDiagram } from "@/components/SystemDiagram";

export default function SipstrCaseStudy() {
    return (
        <CaseStudyLayout 
            title="Sipstr"
            subtitle="Multi-vendor alcohol delivery marketplace. Led engineering and built four production apps for a real-time, 4-sided platform: the customer app, the in-store operations tablet app, the driver app and the marketing site, plus major features in the vendor and admin web portals."
            tags={["React Native", "Expo", "React", "Next.js", "TypeScript", "Socket.io", "Redis", "Stripe", "Spring Boot"]}
            role="Lead Engineer · Frontend & Mobile, Backend Contributor"
            problem={`Alcohol delivery is operationally volatile. It requires strict regulatory compliance, irregular delivery territories, and handling real-time inventory changes where post-payment order modifications (and subsequent partial refunds) are exceptionally common.`}
            constraints={[
                "Enforcing precise, drawn delivery zones instead of generic radius searches.",
                "Handling post-checkout order changes (substitutions, refunds) without manual vendor intervention.",
                "Keeping live order state in sync across four apps: customer, store tablet, driver and vendor/admin web."
            ]}
            architecture={
                <SystemDiagram 
                    nodes={[
                        { id: "customer", label: "Customer App", x: 100, y: 70 },
                        { id: "store", label: "Store Ops Tablet", x: 100, y: 157 },
                        { id: "driver", label: "Driver App", x: 100, y: 243 },
                        { id: "web", label: "Vendor / Admin Web", x: 100, y: 330 },
                        { id: "api", label: "Spring Boot API", x: 400, y: 200 },
                        { id: "redis", label: "Redis + Socket.io", x: 700, y: 100 },
                        { id: "db", label: "PostgreSQL", x: 700, y: 300 }
                    ]}
                    edges={[
                        { source: "customer", target: "api" },
                        { source: "store", target: "api" },
                        { source: "driver", target: "api" },
                        { source: "web", target: "api" },
                        { source: "api", target: "redis" },
                        { source: "api", target: "db" }
                    ]}
                />
            }
            tradeoffs={[
                { title: "A New-Order Alarm Staff Can't Miss", desc: "Built the Store Ops tablet app from scratch around a persistent alert that keeps ringing on the alarm audio channel until staff tap it, including for scheduled orders, backed by offline handling and crash reporting so a busy store never misses an order." },
                { title: "Role-Based Access in the Vendor Portal", desc: "Designed permission-filtered menus and role-gated components, so each staff role only sees what it can act on." },
                { title: "Optimistic Order Updates", desc: "Order status changes appear instantly in the vendor portal and reconcile with the server, with background polling as a backstop." },
                { title: "Drawn Delivery Zones over Radius", desc: "Built delivery-zone drawing on Google Maps, including freehand drawing and KML/KMZ upload in the admin app, so coverage matches real boundaries." },
                { title: "Safer Payments (Backend Contribution)", desc: "Contributed to the rebuilt Stripe payment system with saved cards and off-session payments, proof-of-delivery photos served through presigned URLs, and security fixes that restrict order access to the owning user." }
            ]}
            impact="~40% reduction in peak wait times — more throughput during the highest-margin hours. Payout reconciliation fully automated: zero manual overhead, zero disputes. Delivered in 10 weeks from first call to production."
        />
    );
}

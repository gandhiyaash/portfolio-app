import type { Metadata } from "next";
import { Inter, Syne, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const syne = Syne({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-syne", display: "swap" });
const ibmPlexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Yash Gandhi | Full-Stack Engineer & Systems Architect",
  description: "Senior Full-Stack Product Engineer for hire. I design resilient architectures and build end-to-end systems for ambitious startups. Enterprise experience from Barclays, startup agility from ground-up builds.",
  keywords: ["freelance full-stack engineer", "systems architect for hire", "React Native developer", "startup backend consultant", "Next.js developer", "Node.js engineer", "TypeScript developer", "Yash Gandhi"],
  authors: [{ name: "Yash Gandhi" }],
  openGraph: {
    title: "Yash Gandhi | Full-Stack Engineer & Systems Architect",
    description: "I build the backend infrastructure and full-stack products that let startups scale without breaking. Enterprise reliability, startup speed.",
    url: "https://buildwithyash.vercel.app",
    siteName: "Yash Gandhi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Gandhi | Full-Stack Engineer & Systems Architect",
    description: "I build the backend infrastructure and full-stack products that let startups scale without breaking.",
    creator: "@__yashgandhi__",
  },
  metadataBase: new URL("https://buildwithyash.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${inter.variable} ${syne.variable} ${ibmPlexMono.variable} antialiased font-body overflow-x-hidden bg-background text-on-background`}
      >
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}

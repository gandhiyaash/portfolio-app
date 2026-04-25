"use client";
import { motion } from "framer-motion";

interface Node {
    id: string;
    label: string;
    x: number;
    y: number;
}

interface Edge {
    source: string;
    target: string;
}

export const SystemDiagram = ({ nodes, edges }: { nodes: Node[], edges: Edge[] }) => {
    return (
        <div className="w-full h-64 md:h-96 relative bg-surface-container-low border border-outline-variant/20 overflow-hidden flex items-center justify-center rounded">
            <div className="absolute inset-0 canvas-grid opacity-30"></div>
            <svg className="w-full h-full relative z-10" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid meet">
                {/* Draw Edges */}
                {edges.map((edge, i) => {
                    const sourceNode = nodes.find(n => n.id === edge.source);
                    const targetNode = nodes.find(n => n.id === edge.target);
                    if (!sourceNode || !targetNode) return null;
                    return (
                        <g key={`edge-${i}`}>
                            <path 
                                d={`M ${sourceNode.x} ${sourceNode.y} L ${targetNode.x} ${targetNode.y}`}
                                stroke="rgba(255,255,255,0.15)"
                                strokeWidth="2"
                                strokeDasharray="4 4"
                                fill="none"
                            />
                            {/* Animated dot along the path */}
                            <motion.circle
                                r="4"
                                fill="#F7931A"
                                initial={{ cx: sourceNode.x, cy: sourceNode.y }}
                                animate={{ cx: targetNode.x, cy: targetNode.y }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                                style={{ filter: "drop-shadow(0 0 8px #F7931A)" }}
                            />
                        </g>
                    );
                })}
                {/* Draw Nodes */}
                {nodes.map(node => (
                    <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
                        <rect x="-70" y="-35" width="140" height="70" rx="4" fill="#1c1b1b" stroke="#554335" strokeWidth="1" />
                        <text x="0" y="5" textAnchor="middle" fill="#e5e2e1" className="font-mono text-sm uppercase" dominantBaseline="middle">
                            {node.label}
                        </text>
                        {/* Glow effect on hover */}
                        <motion.rect 
                            x="-70" y="-35" width="140" height="70" rx="4"
                            fill="none" stroke="#F7931A" strokeWidth="2"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1, scale: 1.05 }}
                            className="cursor-pointer"
                        />
                    </g>
                ))}
            </svg>
        </div>
    );
};

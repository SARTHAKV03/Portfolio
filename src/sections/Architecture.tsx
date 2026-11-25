import { motion } from 'framer-motion';
import { cn } from '../utils';

interface ArchitectureNode {
  id: string;
  label: string;
  description: string;
  x: number;
  y: number;
  color?: string;
}

const frontendNodes: ArchitectureNode[] = [
  { id: 'client', label: 'React + TypeScript', description: 'User interface layer', x: 20, y: 20, color: '#61dbfb' },
  { id: 'ui', label: 'Tailwind CSS', description: 'Styling & layout', x: 50, y: 20, color: '#06b7db' },
];

const backendNodes: ArchitectureNode[] = [
  { id: 'api', label: 'Node.js + Express', description: 'REST API server', x: 20, y: 70, color: '#68a063' },
  { id: 'db', label: 'PostgreSQL', description: 'Relational data store', x: 50, y: 70, color: '#336791' },
];

const blockchainNodes: ArchitectureNode[] = [
  { id: 'contracts', label: 'Solidity Contracts', description: 'On-chain business logic', x: 20, y: 120, color: '#627eec' },
  { id: 'polygon', label: 'Polygon Network', description: 'L2 blockchain for low fees', x: 50, y: 120, color: '#627eec' },
  { id: 'ipfs', label: 'IPFS', description: 'Decentralized file storage', x: 20, y: 170, color: '#7065ff' },
];

const connections = [
  ['client', 'ui'],
  ['client', 'api'],
  ['api', 'db'],
  ['api', 'contracts'],
  ['contracts', 'polygon'],
  ['contracts', 'ipfs'],
  ['client', 'ipfs'],
];

export default function ArchitectureViz() {
  return (
    <section
      id="architecture"
      className="py-20 px-6 lg:px-12 border-t border-dark-border"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="section-label text-dark-text-muted mb-4">Systems Thinking</p>
          <h2 className="section-title text-primary mb-6">AgriChain Architecture</h2>
          <p className="text-dark-text-muted max-w-2xl mx-auto text-lg">
            A layered system spanning web frontend, backend APIs, relational database,
            and blockchain — connected through contract-verified records on IPFS.
          </p>
        </motion.div>

        <div className="relative h-[520px] bg-dark-card rounded-2xl border border-dark-border p-8 overflow-hidden">
          <svg
            className="absolute inset-8 w-[calc(100%-64px)] h-[calc(100%-64px)]"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="connGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#b8783a" />
                <stop offset="100%" stopColor="#c9a962" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {connections.map(([from, to], i) => {
              const fromNode = [...frontendNodes, ...backendNodes, ...blockchainNodes].find(n => n.id === from);
              const toNode = [...frontendNodes, ...backendNodes, ...blockchainNodes].find(n => n.id === to);
              if (!fromNode || !toNode) return null;
              return (
                <motion.line
                  key={`${from}-${to}`}
                  x1={`${fromNode.x}%`}
                  y1={`${fromNode.y}%`}
                  x2={`${toNode.x}%`}
                  y2={`${toNode.y}%`}
                  stroke="url(#connGradient)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  filter="url(#glow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.4 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.15 }}
                />
              );
            })}
          </svg>

          {[...frontendNodes, ...backendNodes, ...blockchainNodes].map((node, i) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              <div
                className={cn(
                  'px-4 py-3 rounded-xl border text-center min-w-[140px] transition-all',
                  'bg-dark-card/50 hover:bg-dark-surface'
                )}
                style={{
                  borderColor: node.color ? `${node.color}40` : 'var(--color-dark-border)',
                }}
              >
                <div
                  className="w-2 h-2 rounded-full mx-auto mb-2"
                  style={{ backgroundColor: node.color || 'var(--color-accent)' }}
                />
                <h4
                  className="font-medium text-sm mb-1"
                  style={{ color: node.color || 'var(--color-accent)' }}
                >
                  {node.label}
                </h4>
                <p className="text-xs text-dark-text-muted">
                  {node.description}
                </p>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute bottom-8 left-0 right-0 text-center"
          >
            <div className="flex items-center justify-center gap-6 text-xs text-dark-text-muted">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#61dbfb]" />
                Frontend
              </span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#68a063]" />
                Backend
              </span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#627eec]" />
                Blockchain
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

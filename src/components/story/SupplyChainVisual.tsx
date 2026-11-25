import { motion } from 'framer-motion';

const stages = [
  { id: 'farm', label: 'Farm', emoji: '🌾', x: 15, y: 50 },
  { id: 'distributor', label: 'Distributor', emoji: '🚚', x: 38, y: 25 },
  { id: 'retailer', label: 'Retailer', emoji: '🏪', x: 62, y: 50 },
  { id: 'consumer', label: 'Consumer', emoji: '🛒', x: 85, y: 25 },
];

export default function SupplyChainVisual() {
  return (
    <div className="relative w-full h-72 md:h-80 mb-8">
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="chainGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c9a962" />
            <stop offset="50%" stopColor="#b8783a" />
            <stop offset="100%" stopColor="#b87333" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {stages.map((stage, i) => {
          if (i === stages.length - 1) return null;
          const next = stages[i + 1];
          return (
            <motion.line
              key={`line-${stage.id}`}
              x1={`${stage.x}%`}
              y1={`${stage.y}%`}
              x2={`${next.x}%`}
              y2={`${next.y}%`}
              stroke="url(#chainGradient)"
              strokeWidth="2"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: i * 0.3 }}
            />
          );
        })}
      </svg>

      {stages.map((stage, i) => (
        <motion.div
          key={stage.id}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${stage.x}%`, top: `${stage.y}%` }}
        >
          <div className="glass rounded-2xl p-4 md:p-6 text-center border-accent-gold/20 hover:border-accent-gold/40 transition-all min-w-[100px] md:min-w-[140px]">
            <div className="text-3xl md:text-4xl mb-2">{stage.emoji}</div>
            <p className="text-sm md:text-base font-semibold text-primary">{stage.label}</p>
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
              className="mt-2 w-2 h-2 rounded-full bg-accent-gold mx-auto"
            />
          </div>
        </motion.div>
      ))}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {stages.map((stage, i) => {
          if (i === stages.length - 1) return null;
          const next = stages[i + 1];
          return (
            <motion.div
              key={`particle-${stage.id}`}
              className="absolute w-1.5 h-1.5 rounded-full bg-accent-gold"
              style={{
                left: `${stage.x}%`,
                top: `${stage.y}%`,
                boxShadow: '0 0 8px rgba(201, 169, 98, 0.8)',
              }}
              animate={{
                left: [`${stage.x}%`, `${next.x}%`],
                top: [`${stage.y}%`, `${next.y}%`],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 1.5 + 0.5,
                ease: 'easeInOut',
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

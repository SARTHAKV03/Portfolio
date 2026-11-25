import { motion } from 'framer-motion';
import { education } from '../data/personal';

const scanItems = [
  { label: 'COMPUTER SCIENCE ENGINEER', value: 'B.Tech', sub: 'Nutan COER' },
  { label: 'FULL-STACK DEVELOPMENT', value: 'React', sub: 'TypeScript' },
  { label: 'BLOCKCHAIN EXPERIENCE', value: 'Solidity', sub: 'Polygon' },
  { label: 'DATABASES', value: 'PostgreSQL', sub: 'MongoDB' },
  { label: 'CGPA', value: education.cgpa, sub: '2022–2026' },
  { label: 'OPEN TO OPPORTUNITIES', value: '✓', sub: 'Immediate' },
];

export default function QuickScan() {
  return (
    <section id="quick-scan" className="py-12 px-6 lg:px-12 bg-dark-surface border-y border-dark-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {scanItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center"
            >
              <p className="text-xs text-dark-text-muted uppercase tracking-wider mb-1">
                {item.label}
              </p>
              <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-camel-400 to-accent-gold">
                {item.value}
              </p>
              <p className="text-xs text-dark-text-muted mt-0.5">
                {item.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

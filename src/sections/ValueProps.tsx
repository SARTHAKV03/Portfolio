import { motion } from 'framer-motion';
import { Box, Code, Zap, Target } from 'lucide-react';
import { cn } from '../utils';

const values = [
  {
    id: 'build',
    icon: Box,
    title: 'BUILD',
    description: 'Modern, responsive and scalable applications.',
  },
  {
    id: 'solve',
    icon: Target,
    title: 'SOLVE',
    description: 'Break complex problems into practical solutions.',
  },
  {
    id: 'learn',
    icon: Code,
    title: 'LEARN',
    description: 'Continuously explore modern technologies.',
  },
  {
    id: 'deliver',
    icon: Zap,
    title: 'DELIVER',
    description: 'Performance-focused, maintainable, real-world impact.',
  },
];

export default function ValueProps() {
  return (
    <section id="value-props" className="py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label text-dark-text-muted mb-4">More Than Just Code</p>
          <h2 className="section-title text-primary mb-6">I approach development from both engineering and product perspectives.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={cn(
                'relative p-6 rounded-2xl border border-dark-border',
                'bg-dark-card hover:bg-dark-surface transition-all duration-300',
                'hover:border-accent group'
              )}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center text-accent">
                  <item.icon size={20} />
                </div>
                <span className="text-xs font-mono text-dark-text-muted">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-dark-text-muted leading-relaxed">
                {item.description}
              </p>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

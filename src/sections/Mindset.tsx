import { motion } from 'framer-motion';

const steps = [
  {
    id: 'understand',
    number: '01',
    title: 'UNDERSTAND',
    description: 'Understand the problem and requirements deeply.',
  },
  {
    id: 'plan',
    number: '02',
    title: 'PLAN',
    description: 'Design architecture, data flow, and user experience.',
  },
  {
    id: 'build',
    number: '03',
    title: 'BUILD',
    description: 'Develop the frontend, backend, and integrations.',
  },
  {
    id: 'test',
    number: '04',
    title: 'TEST',
    description: 'Validate functionality, edge cases, and performance.',
  },
  {
    id: 'deploy',
    number: '05',
    title: 'DEPLOY',
    description: 'Prepare the application for real-world usage.',
  },
  {
    id: 'improve',
    number: '06',
    title: 'IMPROVE',
    description: 'Iterate based on feedback and measurable results.',
  },
];

export default function Mindset() {
  return (
    <section id="mindset" className="py-20 px-6 lg:px-12 border-t border-dark-border">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="section-label text-dark-text-muted mb-4">Engineering Mindset</p>
          <h2 className="section-title text-primary mb-6">How I Think</h2>
        </motion.div>

        <div className="space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0 flex items-center">
                <div className="w-10 h-10 rounded-full bg-dark-card border border-dark-border flex items-center justify-center">
                  <span className="text-xs font-mono text-accent">{step.number}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px h-16 ml-[5px] bg-gradient-to-b from-accent to-transparent" />
                )}
              </div>

              <div className="flex-1 pb-8">
                <h3 className="text-xl font-bold text-primary mb-1">{step.title}</h3>
                <p className="text-dark-text-muted leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

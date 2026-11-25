import { motion } from 'framer-motion';
import { cn } from '../utils';
import { certifications, education } from '../data/personal';

export default function Credentials() {
  return (
    <section
      id="certifications"
      className="py-20 px-6 lg:px-12 border-t border-dark-border"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label text-dark-text-muted mb-4">Credentials</p>
          <h2 className="section-title text-primary mb-6">Education & Certifications</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-sm font-mono text-accent uppercase tracking-wider">Education</h3>
            <div className="p-6 rounded-xl bg-dark-card border border-dark-border">
              <h4 className="text-lg font-semibold text-primary mb-1">{education.degree}</h4>
              <p className="text-dark-text-muted">{education.institution}</p>
              <p className="text-sm text-dark-text-muted mt-1">
                {education.duration} &bull; CGPA: {education.cgpa}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-sm font-mono text-accent uppercase tracking-wider">Certifications</h3>
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={cn(
                  'p-4 rounded-xl bg-dark-card border border-dark-border',
                  'hover:border-accent/30 transition-colors'
                )}
              >
                <p className="font-medium text-primary text-sm">{cert.name}</p>
                <p className="text-xs text-dark-text-muted mt-1">Issued by {cert.issuer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

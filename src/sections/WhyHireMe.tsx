import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/personal';

const valueProps = [
  {
    id: 'foundation',
    title: 'Strong Computer Science Foundation',
    description: 'B.Tech in CSE with deep knowledge of data structures, algorithms, OOP, DBMS, and operating systems.',
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Development',
    description: 'Hands-on experience building complete applications from frontend to backend to database.',
  },
  {
    id: 'react-ts',
    title: 'React + TypeScript',
    description: 'Production-style component architecture with type safety across large-scale applications.',
  },
  {
    id: 'backend-api',
    title: 'Backend & API Development',
    description: 'Built RESTful APIs with Node.js and Express, handling database integration and business logic.',
  },
  {
    id: 'databases',
    title: 'Database Experience',
    description: 'Designed relational (PostgreSQL) and document-based (MongoDB) data models with proper CRUD operations.',
  },
  {
    id: 'blockchain',
    title: 'Blockchain Interest',
    description: 'Built AgriChain using Solidity, Polygon, Ethers.js, and Hardhat — bridging web2 and web3.',
  },
  {
    id: 'problem-solving',
    title: 'Problem-Solving Mindset',
    description: 'Competitive programming with C++, algorithm design, and systematic debugging approach.',
  },
  {
    id: 'learning',
    title: 'Continuous Learning',
    description: 'Certified in AI (IBM), MongoDB, and Cyber Security — staying current with industry trends.',
  },
];

export default function WhyHireMe() {
  return (
    <section
      id="why-hire-me"
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
          <p className="section-label text-dark-text-muted mb-4">Why Hire Me</p>
          <h2 className="section-title text-primary mb-6">Evidence-Based Value</h2>
          <p className="text-dark-text-muted max-w-2xl mx-auto">
            Not just skills listed — real projects and measurable work that demonstrates
            technical capability and engineering mindset.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {valueProps.map((prop, i) => (
            <motion.div
              key={prop.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-5 rounded-xl bg-dark-card border border-dark-border hover:border-accent/30 transition-all"
            >
              <div className="flex items-start gap-3">
                <CheckCircle size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-1">{prop.title}</h3>
                  <p className="text-sm text-dark-text-muted leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-camel-500 to-accent-copper text-white rounded-lg font-medium transition-all hover:scale-105 accent-glow"
          >
            Start a Conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
}

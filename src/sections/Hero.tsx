import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { personalInfo } from '../data/personal';
import { cn, scrollToSection } from '../utils';

const HeroScene = lazy(() => import('../components/three/HeroScene'));

function SceneFallback() {
  return (
    <div className="absolute inset-0 -z-10 bg-dark-bg">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 dot-grid" />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <Suspense fallback={<SceneFallback />}>
        <HeroScene />
      </Suspense>

      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-transparent to-dark-bg/5 pointer-events-none" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-accent/5 to-transparent blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-gradient-to-br from-accent/5 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <p className="section-label text-dark-text-muted">
              Computer Science Engineer • Full-Stack Developer
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4 leading-tight"
          >
            BUILDING DIGITAL PRODUCTS THAT
          </motion.h1>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-camel-400 via-accent-copper to-accent-gold">
              SOLVE REAL PROBLEMS.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-mono text-accent">
                {personalInfo.availability}
              </span>
            </div>
          </motion.div>

          <motion.p
            className="text-lg text-dark-text-muted max-w-xl leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {personalInfo.valueProposition}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.button
              onClick={() => scrollToSection('flagship-project')}
              whileHover={{ scale: 1.03, x: 2 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                'group flex items-center gap-2 px-6 py-3',
                'bg-gradient-to-r from-camel-500 to-accent-copper text-white',
                'rounded-lg font-medium transition-all accent-glow'
              )}
            >
              View My Work
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
            </motion.button>

            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                'px-6 py-3 border border-dark-border rounded-lg text-sm font-medium',
                'text-dark-text hover:text-primary hover:border-accent transition-all'
              )}
            >
              Let's Connect
            </motion.button>

            <motion.a
              href="/resume.pdf"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                'px-6 py-3 border border-dark-border rounded-lg text-sm font-medium',
                'text-dark-text hover:text-primary hover:border-accent transition-all'
              )}
            >
              <Download size={16} className="inline mr-2" />
              Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

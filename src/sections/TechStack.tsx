import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useState } from 'react';
import { cn } from '../utils';
import { skills, skillCategories } from '../data/skills';

function TechBadge({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 300 };
  const transformX = useSpring(x, springConfig);
  const transformY = useSpring(y, springConfig);
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      style={{ x: transformX, y: transformY }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className={cn(
        'relative p-4 rounded-xl border border-dark-border',
        'bg-dark-card hover:bg-dark-surface transition-all duration-300 cursor-pointer',
        'group',
        hovered ? 'border-accent' : ''
      )}
      onMouseMove={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMoveCapture={handleMouseMove}
    >
      <div className="flex items-start gap-3">
        <span className="text-xs font-mono text-accent mt-0.5">
          {skill.id === 'react' && '⚛️'}
          {skill.id === 'typescript' && '🔷'}
          {skill.id === 'node' && '🟢'}
          {skill.id === 'postgres' && '🐘'}
          {skill.id === 'solidity' && '⟡'}
          {skill.id === 'polygon' && '🔷'}
          {skill.id === 'hardhat' && '🔨'}
          {skill.id === 'git' && '⎇'}
          {skill.id === 'css' && '🎨'}
          {skill.id === 'tailwind' && '🌀'}
          {skill.id === 'express' && '🚂'}
          {skill.id === 'python' && '🐍'}
          {skill.id === 'mongodb' && '🍃'}
          {skill.id === 'firebase' && '🔥'}
          {skill.id === 'vscode' && '💻'}
          {skill.id === 'ipfs' && '📦'}
          {skill.id === 'ethers' && '🔗'}
          {!['react', 'typescript', 'node', 'postgres', 'solidity', 'polygon', 'hardhat', 'git', 'css', 'tailwind', 'express', 'python', 'mongodb', 'firebase', 'vscode', 'ipfs', 'ethers'].includes(skill.id) && '•'}
        </span>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className={cn('font-semibold text-primary text-sm group-hover:text-accent transition-colors')}>{skill.name}</h3>
            {skill.proficiency && (
              <span className="text-xs font-mono text-dark-text-muted">{skill.proficiency}%</span>
            )}
          </div>
          <p className="text-xs text-dark-text-muted mt-1 line-clamp-2">{skill.description}</p>
          {hovered && skill.usage && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="text-xs text-dark-text-muted mt-2 pt-2 border-t border-dark-border"
            >
              Used for: {skill.usage}
            </motion.p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section id="tech-stack" className="py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label text-dark-text-muted mb-4">Technologies</p>
          <h2 className="section-title text-primary mb-6">The tools I use to build.</h2>
          <p className="text-dark-text-muted max-w-2xl text-lg">
            Organized by layer — frontend, backend, database, blockchain, and development tools.
            Technologies I&apos;ve actually used in production projects.
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center gap-3 mb-10">
          <button
            onClick={() => setActiveCategory(null)}
            className={cn(
              'px-4 py-2 rounded-lg text-sm font-medium border transition-all',
              !activeCategory
                ? 'bg-accent text-white border-accent'
                : 'text-dark-text-muted border-dark-border hover:text-primary hover:border-accent'
            )}
          >
            All
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium border transition-all',
                activeCategory === cat
                  ? 'bg-accent text-white border-accent'
                  : 'text-dark-text-muted border-dark-border hover:text-primary hover:border-accent'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills
            .filter((s) => !activeCategory || s.category === activeCategory)
            .map((skill, i) => (
              <TechBadge key={skill.id} skill={skill} index={i} />
            ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { ExternalLink, GitBranch } from 'lucide-react';
import { cn } from '../utils';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section
      id="flagship-project"
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
          <p className="section-label text-dark-text-muted mb-4">Portfolio</p>
          <h2 className="section-title text-primary mb-6">What I&apos;ve Built</h2>
          <p className="text-dark-text-muted max-w-2xl text-lg">
            Selected projects demonstrating technical depth, problem-solving, and
            full-stack engineering from concept to deployment.
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        className={cn(
          'p-8 rounded-2xl border border-dark-border bg-dark-card',
          'hover:border-accent/30 transition-all group'
        )}
      >
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-xs font-mono text-accent mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-dark-text-muted mt-1">{project.subtitle}</p>
              </div>
              {project.featured && (
                <span className="px-2.5 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium border border-accent/20">
                  Flagship
                </span>
              )}
            </div>

            <p className="text-dark-text-muted mb-6 leading-relaxed">
              {project.description}
            </p>

            {project.highlights && (
              <ul className="space-y-2 mb-6">
                {project.highlights.slice(0, 4).map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-dark-text-muted">
                    <span className="text-accent mt-0.5">▸</span>
                    {h}
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className={cn(
                    'px-2.5 py-1 rounded-md text-xs font-medium',
                    'bg-dark-surface text-dark-text border border-dark-border'
                  )}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'flex items-center gap-2 px-4 py-2 text-sm rounded-lg',
                    'text-dark-text hover:text-accent border border-dark-border hover:border-accent/30 transition-all'
                  )}
                >
                  <GitBranch size={14} />
                  GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  className={cn(
                    'flex items-center gap-2 px-4 py-2 text-sm rounded-lg',
                    'text-dark-text hover:text-accent border border-dark-border hover:border-accent/30 transition-all'
                  )}
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              )}
            </div>
          </div>

          {project.featured && (
            <div className="w-full lg:w-80 h-48 lg:h-auto rounded-xl bg-gradient-to-br from-dark-surface to-dark-card border border-dark-border flex items-center justify-center">
              <div className="text-center p-6">
                <span className="text-4xl mb-2">⛓️</span>
                <p className="text-sm text-dark-text-muted">
                  {project.category.split(' + ')[0]} project visualization
                </p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}

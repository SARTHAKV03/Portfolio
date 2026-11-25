import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ExternalLink } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/personal';
import { cn, scrollToSection } from '../utils';

const socialIcons: Record<string, React.ComponentType<{ size?: number }>> = {
  github: ExternalLink,
  linkedin: ExternalLink,
  email: Mail,
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 lg:px-12 border-t border-dark-border"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="section-label text-dark-text-muted mb-4">Contact</p>
          <h2 className="section-title text-primary mb-6">
            Have a problem worth building?
          </h2>
          <p className="text-dark-text-muted max-w-2xl mx-auto text-lg">
            I&apos;m currently open to software development opportunities where I can
            contribute, learn, and build meaningful software with a strong team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-sm font-mono text-accent uppercase tracking-wider">
              Let&apos;s Talk
            </h3>
            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className={cn(
                  'flex items-start gap-4 text-dark-text hover:text-accent transition-colors group'
                )}
              >
                <Mail className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <p className="font-medium text-primary">Email</p>
                  <p className="text-sm text-dark-text-muted mt-0.5">{personalInfo.email}</p>
                </div>
              </a>

              <a
                href="tel:+919921493403"
                className={cn(
                  'flex items-start gap-4 text-dark-text hover:text-accent transition-colors group'
                )}
              >
                <Phone className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <p className="font-medium text-primary">Phone</p>
                  <p className="text-sm text-dark-text-muted mt-0.5">+91-9921493403</p>
                </div>
              </a>

              <div className={cn('flex items-start gap-4 text-dark-text')}>
                <MapPin className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <p className="font-medium text-primary">Location</p>
                  <p className="text-sm text-dark-text-muted mt-0.5">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t border-dark-border">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.platform] || ExternalLink;
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'p-2.5 rounded-lg bg-dark-card border border-dark-border',
                      'text-dark-text-muted hover:text-accent hover:border-accent/30 transition-all'
                    )}
                    aria-label={link.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-sm font-mono text-accent uppercase tracking-wider">
              Quick Actions
            </h3>
            <div className="space-y-4">
              <motion.a
                href="/Sarthak_Satpute.pdf"
                whileHover={{ scale: 1.02 }}
                className={cn(
                  'flex items-center gap-2 px-5 py-3 rounded-lg',
                  'bg-accent/10 text-accent border border-accent/20',
                  'hover:bg-accent/20 transition-all'
                )}
              >
                <Send size={16} />
                Download Resume (PDF)
              </motion.a>
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className={cn(
                  'flex items-center gap-2 px-5 py-3 rounded-lg',
                  'bg-dark-card border border-dark-border text-dark-text hover:text-accent hover:border-accent/30',
                  'transition-all'
                )}
              >
                <ExternalLink size={16} />
                View GitHub Profile
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className={cn(
                  'flex items-center gap-2 px-5 py-3 rounded-lg',
                  'bg-dark-card border border-dark-border text-dark-text hover:text-accent hover:border-accent/30',
                  'transition-all'
                )}
              >
                <ExternalLink size={16} />
                Connect on LinkedIn
              </motion.a>
              <motion.button
                onClick={() => scrollToSection('flagship-project')}
                whileHover={{ scale: 1.02 }}
                className={cn(
                  'w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-medium',
                  'bg-dark-card border border-dark-border text-dark-text hover:text-accent hover:border-accent/30',
                  'transition-all'
                )}
              >
                View My Work
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

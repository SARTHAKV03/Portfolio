import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, GitBranch, Users } from 'lucide-react';
import { cn, scrollToSection } from '../../utils';
import { personalInfo, navItems, socialLinks } from '../../data/personal';

const socialIcons: Record<string, React.ComponentType<{ size?: number }>> = {
  github: GitBranch,
  linkedin: Users,
  email: Users,
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    scrollToSection(id);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'glass shadow-lg py-3'
          : 'bg-transparent py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <motion.button
            onClick={() => handleNavClick('hero')}
            className="text-xl font-bold tracking-tight text-primary"
            whileHover={{ scale: 1.05 }}
          >
            {personalInfo.name.split(' ').map(n => n[0]).join('')}
          </motion.button>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={cn(
                  'text-sm font-medium text-dark-text-muted hover:text-primary transition-colors relative'
                )}
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-accent-bg transition-all"
                  whileHover={{ width: '100%' }}
                />
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="/resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                'flex items-center gap-2 px-4 py-2 text-sm font-medium',
                'text-primary hover:text-accent transition-colors'
              )}
            >
              <Download size={16} />
              Resume
            </motion.a>
            <motion.button
              onClick={() => handleNavClick('contact')}
              whileHover={{ scale: 1.05 }}
              className={cn(
                'px-4 py-2 text-sm font-medium text-primary',
                'border border-accent rounded-lg hover:bg-accent/10 transition-all'
              )}
            >
              Let&apos;s Talk →
            </motion.button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-dark-text-muted hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1 border-t border-dark-border">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={cn(
                      'w-full text-left px-4 py-2.5 text-sm font-medium',
                      'text-dark-text-muted hover:text-primary hover:bg-dark-surface transition-colors'
                    )}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="flex gap-2 px-4 py-2.5">
                  {socialLinks.map((link) => {
                    const Icon = socialIcons[link.platform] || Users;
                    return (
                      <a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-dark-text-muted hover:text-accent transition-colors"
                        aria-label={link.label}
                      >
                        <Icon size={18} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

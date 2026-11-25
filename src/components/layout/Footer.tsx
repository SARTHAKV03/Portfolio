import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, GitBranch, Users, Send } from 'lucide-react';
import { cn } from '../../utils';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'sarthaksatpute2121@gmail.com', href: 'mailto:sarthaksatpute2121@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91-9921493403', href: 'tel:+919921493403' },
  { icon: MapPin, label: 'Location', value: 'Pune, Maharashtra, India', href: '#' },
];

const socialLinks = [
  { icon: GitBranch, label: 'GitHub', href: 'https://github.com/SARTHAKV03' },
  { icon: Users, label: 'LinkedIn', href: 'https://linkedin.com/in/sarthak-satpute-476b95259' },
];

export default function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validate = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:sarthaksatpute2121@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <footer className="relative bg-chocolate-950 text-warm-white overflow-hidden py-20 px-6 lg:px-12">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-chocolate-900 via-chocolate-950 to-black" />
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-camel-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
              animation: `pulse-slow ${3 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-camel-400 via-accent-copper to-accent-gold mb-6">
              Let&apos;s Connect
            </h3>
            <p className="text-chocolate-300 text-lg leading-relaxed mb-8">
              I&apos;m always open to discussing new opportunities, collaborations, or interesting projects.
              Feel free to reach out!
            </p>

            <div className="space-y-4 mb-8">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'flex items-start gap-4 text-chocolate-200 hover:text-accent-gold transition-colors group'
                  )}
                >
                  <div className={cn('p-2 rounded-lg bg-camel-900/20 group-hover:bg-camel-900/40 transition-colors')}>
                    <item.icon size={20} className="text-camel-400" />
                  </div>
                  <div>
                    <p className="font-medium text-warm-white">{item.label}</p>
                    <p className="text-sm text-chocolate-300 mt-0.5">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'p-3 rounded-xl bg-camel-900/20 text-camel-300 hover:text-accent-gold hover:bg-camel-900/40',
                    'transition-all duration-200'
                  )}
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-camel-400 via-accent-copper to-accent-gold mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-chocolate-300 mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={cn(
                        'w-full px-4 py-3 bg-chocolate-900/30 border rounded-xl text-warm-white placeholder-chocolate-400 focus:outline-none',
                        'focus:ring-1 transition-all',
                        errors.name
                          ? 'border-accent-copper focus:border-accent-copper focus:ring-accent-copper/30'
                          : 'border-chocolate-700 focus:border-camel-400 focus:ring-camel-400/30'
                      )}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-accent-copper text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm text-chocolate-300 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={cn(
                        'w-full px-4 py-3 bg-chocolate-900/30 border rounded-xl text-warm-white placeholder-chocolate-400 focus:outline-none',
                        'focus:ring-1 transition-all',
                        errors.email
                          ? 'border-accent-copper focus:border-accent-copper focus:ring-accent-copper/30'
                          : 'border-chocolate-700 focus:border-camel-400 focus:ring-camel-400/30'
                      )}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-accent-copper text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-chocolate-300 mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={cn(
                      'w-full px-4 py-3 bg-chocolate-900/30 border rounded-xl text-warm-white placeholder-chocolate-400 focus:outline-none',
                      'focus:ring-1 transition-all resize-none',
                      errors.message
                        ? 'border-accent-copper focus:border-accent-copper focus:ring-accent-copper/30'
                        : 'border-chocolate-700 focus:border-camel-400 focus:ring-camel-400/30'
                    )}
                    placeholder="Tell me about your project or opportunity..."
                  />
                  {errors.message && <p className="text-accent-copper text-xs mt-1">{errors.message}</p>}
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    'w-full flex items-center justify-center gap-2 px-6 py-4',
                    'bg-gradient-to-r from-camel-500 to-accent-copper text-white rounded-xl font-medium',
                    'transition-all camel-glow'
                  )}
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-chocolate-800 text-center text-sm text-chocolate-400 font-mono"
        >
          <p>Designed & Built by Sarthak Satpute &copy; {new Date().getFullYear()}</p>
        </motion.div>
      </div>
    </footer>
  );
}

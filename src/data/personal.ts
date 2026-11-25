import type { SocialLink } from '../types';

export const personalInfo = {
  name: 'Sarthak Satpute',
  initials: 'SS',
  displayName: 'Sarthak',
  title: 'Computer Science Engineer | Full-Stack Developer',
  headline: 'Building digital products that solve real problems.',
  valueProposition:
    'I build scalable, interactive web applications by combining modern frontend engineering, backend development, databases, APIs, and emerging technologies.',
  location: 'Pune, Maharashtra, India',
  phone: '+91-9921493403',
  email: 'sarthaksatpute2121@gmail.com',
  github: 'https://github.com/SARTHAKV03',
  linkedin: 'https://linkedin.com/in/sarthak-satpute-476b95259',
  availability: 'OPEN TO SOFTWARE DEVELOPMENT OPPORTUNITIES',
  about:
    'Computer Science and Engineering graduate with hands-on experience building full-stack web applications using React.js, TypeScript, JavaScript, Node.js, Express.js, PostgreSQL, and MongoDB. Experienced in developing responsive frontends, RESTful backend services, database-driven applications, and blockchain-integrated solutions.',
};

export const education = {
  degree: 'Bachelor of Technology in Computer Science and Engineering',
  institution: 'Nutan College of Engineering and Research, Talegaon',
  duration: '2022 – 2026',
  cgpa: '7.42 / 10',
};

export const certifications = [
  { name: 'Getting Started with Enterprise-grade AI', issuer: 'IBM' },
  { name: 'MongoDB Certification', issuer: 'MongoDB' },
  { name: 'Cyber Security Stage-1', issuer: 'Inflow Technologies Pvt. Ltd.' },
];

export const socialLinks: SocialLink[] = [
  { platform: 'github', url: 'https://github.com/SARTHAKV03', label: 'GitHub' },
  { platform: 'linkedin', url: 'https://linkedin.com/in/sarthak-satpute-476b95259', label: 'LinkedIn' },
  { platform: 'email', url: 'mailto:sarthaksatpute2121@gmail.com', label: 'Email' },
];

export const navItems = [
  { id: 'hero', label: 'WORK' },
  { id: 'quick-scan', label: 'ABOUT' },
  { id: 'flagship-project', label: 'PROJECTS' },
  { id: 'tech-stack', label: 'STACK' },
  { id: 'contact', label: 'CONTACT' },
];

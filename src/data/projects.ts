import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'agrichain',
    name: 'AgriChain',
    subtitle: 'Blockchain-Based Supply Chain Transparency for Agriculture',
    description:
      'A full-stack agricultural supply chain platform integrating React.js, TypeScript, Node.js, PostgreSQL, Solidity, Polygon, Ethers.js, Hardhat, and IPFS across farmer registration, batch creation, product, order, inspection, quality control, and analytics workflows.',
    longDescription:
      'AgriChain brings transparency to the agricultural supply chain by recording each step of the journey on an immutable blockchain ledger. Consumers can verify the origin and quality of their food through QR codes linked to smart contract-verified records stored on IPFS.',
    technologies: [
      'React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL',
      'Solidity', 'Polygon', 'Ethers.js', 'Hardhat', 'IPFS',
    ],
    category: 'Blockchain + Full Stack',
    featured: true,
    liveUrl: '#',
    githubUrl: 'https://github.com/SARTHAKV03',
    highlights: [
      'End-to-end supply chain traceability on Polygon blockchain',
      'QR code verification for consumers',
      'Immutable smart contract records',
      'IPFS-based document storage',
      'Multi-role access control',
    ],
  },
  {
    id: 'os-lab',
    name: 'OS Virtual Lab',
    subtitle: 'Interactive Operating System Algorithm Simulator',
    description:
      'A web-based platform to simulate CPU Scheduling, Banker\'s Algorithm, Page Replacement, and Disk Scheduling algorithms through interactive visualizations.',
    longDescription:
      'OS Virtual Lab helps students understand fundamental Operating System algorithms through practical, browser-based simulation. Users can configure process parameters and watch real-time visual execution of scheduling and memory management algorithms.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Algorithms', 'Data Structures'],
    category: 'Educational OS',
    featured: true,
    liveUrl: '#',
    githubUrl: 'https://github.com/SARTHAKV03/OS-Virtual-Lab-',
    highlights: [
      'CPU Scheduling visualization (FCFS, SJF, Round Robin)',
      'Banker\'s Algorithm resource allocation',
      'Page Replacement algorithm simulation',
      'Disk Scheduling visualization',
      'Dynamic algorithm output visualization',
    ],
  },
  {
    id: 'travel-katta',
    name: 'Travel Katta',
    subtitle: 'Responsive Travel-Focused Frontend',
    description:
      'A responsive travel-focused frontend with cross-device compatibility, structured navigation, and user-focused interface design.',
    longDescription:
      'A travel booking frontend designed for modern browsers and devices. Features responsive layouts, interactive components, and a clean, user-centered interface.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    category: 'Frontend',
    featured: false,
    liveUrl: '#',
    githubUrl: 'https://github.com/SARTHAKV03',
    highlights: [
      'Cross-device responsive layouts',
      'Structured navigation system',
      'Interactive web components',
      'Mobile-first design',
    ],
  },
];

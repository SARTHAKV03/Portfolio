export interface QAEntry {
  id: string;
  question: string[];
  answer: string;
  tags: string[];
}

export const knowledgeBase: QAEntry[] = [
  {
    id: 'name',
    question: ['who are you', 'what is your name', 'your name', 'tell me about yourself', 'who is sarthak'],
    answer: "I am Sarthak Satpute, a Full-Stack Software Engineer based in Pune, Maharashtra, India. I specialize in building scalable web applications with React, TypeScript, Node.js, and blockchain technologies.",
    tags: ['name', 'identity', 'about'],
  },
  {
    id: 'title',
    question: ['what do you do', 'your role', 'job title', 'what is your profession', 'what do you work as'],
    answer: "I am a Full-Stack Software Engineer. I build scalable web applications, RESTful backend services, database-driven applications, and blockchain-integrated solutions.",
    tags: ['title', 'role'],
  },
  {
    id: 'contact',
    question: ['how to contact', 'your email', 'email address', 'phone number', 'reach you', 'contact info', 'phone'],
    answer: 'You can reach me at sarthaksatpute2121@gmail.com or +91-9921493403. I am based in Pune, Maharashtra, India.',
    tags: ['contact', 'email', 'phone'],
  },
  {
    id: 'location',
    question: ['where are you', 'where do you live', 'your location', 'based in', 'city', 'pune'],
    answer: 'I am based in Pune, Maharashtra, India.',
    tags: ['location', 'pune'],
  },
  {
    id: 'education',
    question: ['where did you study', 'your education', 'college', 'degree', 'bachelor', 'cgpa'],
    answer: 'I hold a Bachelor of Technology in Computer Science and Engineering from Nutan College of Engineering and Research, Talegaon. My CGPA is 7.42/10 and I studied from 2022 to 2026.',
    tags: ['education', 'college', 'degree', 'cgpa'],
  },
  {
    id: 'skills',
    question: ['what skills', 'technical skills', 'tech stack', 'what do you know', 'programming languages', 'languages', 'tools', 'tech'],
    answer:
      'My technical skills include:\n\n' +
      'Frontend: React.js, TypeScript, JavaScript, HTML5, CSS3, Responsive Web Design\n' +
      'Backend: Node.js, Express.js, RESTful APIs, Firebase\n' +
      'Databases: PostgreSQL, MongoDB, MySQL\n' +
      'Blockchain: Solidity, Polygon, Ethers.js, Hardhat, IPFS\n' +
      'Languages: C++, Python, JavaScript, TypeScript, Solidity\n' +
      'Tools: Git, GitHub, VS Code, npm',
    tags: ['skills', 'tech', 'stack'],
  },
  {
    id: 'frontend',
    question: ['frontend skills', 'what frontend', 'react', 'typescript', 'css', 'html', 'responsive'],
    answer:
      'My frontend expertise includes React.js, TypeScript, JavaScript, HTML5, CSS3, and responsive web design. I use Tailwind CSS for styling and build mobile-first, accessible interfaces.',
    tags: ['frontend', 'react'],
  },
  {
    id: 'backend',
    question: ['backend skills', 'what backend', 'node', 'express', 'api', 'backend'],
    answer:
      'My backend expertise includes Node.js, Express.js, RESTful API development, and Firebase. I build scalable server-side applications with proper middleware, routing, and authentication.',
    tags: ['backend', 'node', 'express'],
  },
  {
    id: 'database',
    question: ['database', 'postgresql', 'postgres', 'mongodb', 'mysql'],
    answer:
      'I have experience with PostgreSQL (primary database for relational data integrity), MongoDB (for schema flexibility), and MySQL. I apply best practices in data modeling and CRUD operations.',
    tags: ['database', 'postgres', 'mongodb'],
  },
  {
    id: 'blockchain',
    question: ['blockchain', 'solidity', 'polygon', 'ethers', 'hardhat', 'ipfs', 'smart contract', 'ethereum'],
    answer:
      'I work with Solidity for smart contract development, deploy on the Polygon network, interact with blockchains using Ethers.js, test with Hardhat, and store data on IPFS. I built AgriChain, a blockchain-based supply chain platform.',
    tags: ['blockchain', 'solidity', 'polygon'],
  },
  {
    id: 'projects',
    question: ['what projects', 'your projects', 'portfolio', 'agrichain', 'what have you built', 'projects', 'work'],
    answer:
      'My notable projects:\n\n1. AgriChain - A blockchain-based agricultural supply chain platform using React, TypeScript, Node.js, PostgreSQL, Solidity, Polygon, Ethers.js, Hardhat, and IPFS.\n\n2. OS Virtual Lab - An interactive web-based platform simulating CPU Scheduling, Banker\'s Algorithm, Page Replacement, and Disk Scheduling algorithms.\n\n3. Travel Katta - A responsive travel-focused frontend with cross-device compatibility and user-focused interface design.',
    tags: ['projects', 'agrichain', 'os-lab', 'travel'],
  },
  {
    id: 'agrichain',
    question: ['tell me about agrichain', 'agrichain', 'supply chain', 'blockchain project', 'what is agrichain'],
    answer:
      "AgriChain is a full-stack blockchain-based supply chain transparency platform for agriculture. It integrates React.js, TypeScript, Node.js, Express.js, and PostgreSQL across farmer registration, batch creation, product, order, inspection, quality control, and analytics workflows. It uses Solidity smart contracts on Polygon with Ethers.js and Hardhat, combined with IPFS and QR-based product identification for tamper-resistant, traceable supply chain records. It achieved 100% success in basic operations and 80% in end-to-end test scenarios.",
    tags: ['agrichain', 'blockchain', 'supply-chain'],
  },
  {
    id: 'certifications',
    question: ['certifications', 'certification', 'courses', 'ibm', 'mongodb cert', 'cyber security'],
    answer:
      'My certifications:\n\n1. Getting Started with Enterprise-grade AI - IBM\n2. MongoDB Certification - MongoDB\n3. Cyber Security Stage-1 - Inflow Technologies Pvt. Ltd.',
    tags: ['certifications', 'courses'],
  },
  {
    id: 'github',
    question: ['github', 'github profile', 'github link', 'github.com'],
    answer: 'My GitHub profile is https://github.com/SARTHAKV03. You can find all my projects and code there.',
    tags: ['github'],
  },
  {
    id: 'linkedin',
    question: ['linkedin', 'linkedin profile', 'linkedin link'],
    answer: "My LinkedIn profile is https://linkedin.com/in/sarthak-satpute-476b95259. Feel free to connect!",
    tags: ['linkedin'],
  },
  {
    id: 'experience',
    question: ['experience', 'work experience', 'career', 'years of experience', 'how long'],
    answer:
      'I am a Computer Science and Engineering graduate (2022-2026, CGPA 7.42/10). During my studies, I built multiple full-stack applications from scratch, including blockchain-integrated solutions. I have hands-on experience in application development, testing, debugging, and problem-solving across the full development lifecycle.',
    tags: ['experience', 'career'],
  },
  {
    id: 'dsa',
    question: ['data structures', 'dsa', 'algorithms', 'problem solving', 'coding'],
    answer:
      "I have a strong foundation in Data Structures and Algorithms, demonstrated through my CS coursework and projects. I use C++ for competitive programming and algorithmic problem-solving. My OS Virtual Lab project specifically simulates key algorithms like CPU Scheduling, Banker's Algorithm, Page Replacement, and Disk Scheduling.",
    tags: ['dsa', 'algorithms'],
  },
];

export const defaultAnswer =
  "I'm not sure I understand. You can ask me about my skills, projects, education, certifications, or contact info. Try:\n• What skills do you have?\n• Tell me about AgriChain\n• Where did you study?\n• How can I contact you?";

export const quickSuggestions = [
  'What skills do you have?',
  'Tell me about AgriChain',
  'Where did you study?',
  'How can I contact you?',
  'What certifications do you hold?',
];

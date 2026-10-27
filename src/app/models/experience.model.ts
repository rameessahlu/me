export interface Experience {
  id: string;
  company: string;
  companyUrl?: string;
  links?: readonly { label: string; url: string }[];
  role: string;
  location?: string;
  start: string;
  startLabel: string;
  end?: string;
  endLabel: string;
  summary: string;
  highlights: readonly string[];
  tools: readonly string[];
}

export const professionalExperience: readonly Experience[] = [
  {
    id: 'cloud-raptor',
    company: 'Cloud Raptor',
    role: 'Senior DevOps Engineer',
    location: 'Bangalore',
    start: '2025-06', startLabel: 'Jun 2025', endLabel: 'Present',
    summary: 'Building self-service cloud access and governance for enterprise teams.',
    highlights: [
      'Engineered an IAM platform for Sony Interactive Entertainment, working with teams in the US and Japan to automate AWS access governance for more than 5,000 users.',
      'Independently developed the frontend, backend, and RAG chatbot, with audit-ready compliance tracking.',
    ],
    tools: ['Angular', 'Python', 'AWS Lambda', 'Active Directory', 'Ollama'],
  },
  {
    id: 'intel',
    company: 'Intel Corporation',
    role: 'Software Engineer',
    location: 'Bangalore',
    start: '2021-05', startLabel: 'May 2021', end: '2025-03', endLabel: 'Mar 2025',
    summary: 'Cloud platforms, delivery automation, and full-stack engineering at enterprise scale.',
    highlights: [
      'Directed multi-region CI/CD migrations using Jenkins and GitHub Actions, with shared Groovy libraries, secret management, and automated security scans.',
      'Architected a highly available StackStorm platform on Kubernetes and automated hybrid AWS and Azure infrastructure serving more than 200 workloads.',
      'Managed container hardening, RBAC, Helm charts, observability, and network policies. Optimised Angular and Flask applications, doubling API throughput.',
    ],
    tools: ['Kubernetes', 'Terraform', 'GitHub Actions', 'Jenkins', 'AWS', 'Azure AKS', 'Angular', 'Flask', 'OpenTelemetry'],
  },
  {
    id: 'taxblock',
    company: 'Taxblock India Pvt. Ltd.',
    role: 'Full-Stack Engineer',
    location: 'Pune',
    start: '2020-06', startLabel: 'Jun 2020', end: '2021-05', endLabel: 'May 2021',
    summary: 'Secure applications and microservices for financial workflows.',
    highlights: [
      'Designed FinTech microservices handling more than one million annual GST and TDS transactions.',
      'Implemented API encryption and data compliance controls, and optimised MySQL schemas.',
    ],
    tools: ['ASP.NET Web API', 'MySQL', 'Dapper ORM', 'Angular', 'Angular Material'],
  },
  {
    id: 'health-vectors',
    company: 'Health Vectors Pvt. Ltd.',
    role: 'SRE Intern',
    location: 'Bangalore',
    start: '2020-01', startLabel: 'Jan 2020', end: '2020-04', endLabel: 'Apr 2020',
    summary: 'An internship focused on reliable cloud delivery.',
    highlights: [
      'Automated CI/CD with Jenkins and Ansible for parallel deployments across more than 30 AWS EC2 instances.',
      'Integrated IAM roles and security hardening benchmarks.',
    ],
    tools: ['Python', 'Django', 'Vue.js', 'Ansible', 'Jenkins', 'AWS'],
  },
  {
    id: 'ust',
    company: 'UST Global',
    role: 'Associate Product Development Engineer',
    location: 'Bangalore',
    start: '2016-08', startLabel: 'Aug 2016', end: '2018-06', endLabel: 'Jun 2018',
    summary: 'The foundations: build engineering, release automation, and testing.',
    highlights: [
      'Automated release pipelines for more than 50 Windows driver builds.',
      'Integrated code-signing compliance checks, NUnit and pytest automation, and automated audit reporting.',
    ],
    tools: ['C#', 'TeamCity', 'JFrog Artifactory', 'MSBuild', 'PowerShell', 'Selenium', 'NUnit', 'pytest'],
  },
];

export const volunteerExperience: readonly Experience[] = [
  {
    id: 'dap',
    company: 'Disaster Accountability Project',
    companyUrl: 'https://disasteraccountability.org/',
    links: [{ label: 'Explore SmartResponse', url: 'https://www.smartresponse.org/' }],
    role: 'Software Engineer · Volunteer',
    start: '2026-10', startLabel: 'Oct 2026', endLabel: 'Present',
    summary: 'Currently contributing to the frontend of SmartResponse as a volunteer software engineer with Disaster Accountability Project, supporting disaster and humanitarian relief.',
    highlights: [],
    tools: [],
  },
  {
    id: 'nss',
    company: 'National Service Scheme',
    role: 'Coordinator of Volunteers',
    start: '2013-06', startLabel: 'Jun 2013', end: '2016-06', endLabel: 'Jun 2016',
    summary: 'Coordinated volunteers through the National Service Scheme.',
    highlights: [],
    tools: [],
  },
];

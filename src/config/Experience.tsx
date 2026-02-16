export interface Technology {
  name: string;
  href: string;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    isBlur: false,
    company: 'GDG on Campus Techno India University',
    position: 'Domain Lead and Instructor (Blockchain)',
    location: 'Hybrid',
    image: '/assets/gdgtiu.png',
    description: [
      'Member of the Google Developer Group of the college specifically in the Blockchain domain with personal specialization on Solana',
      'Responsible for collaborating on different educational campaigns and spreading knowledge through bootcamps and sessions',
      'Developed websites for various events for the college while also managing a team and leading them to build products and experiences.',
    ],
    startDate: 'September 2025',
    endDate: 'Present',
    technologies: [
      {
        name: 'Solana',
        href: 'https://solana.com/',
      },
      {
        name: 'TypeScript',
        href: 'https://typescriptlang.org/',
      },
      {
        name: 'React',
        href: 'https://react.dev/',
      },
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
      },
    ],
    website: 'https://gdg.community.dev/gdg-on-campus-techno-india-university-kolkata-india/',
  },
  {
    isCurrent: true,
    isBlur: false,
    company: 'After College',
    position: 'Technical Head',
    location: 'Hybrid',
    image: '/assets/ac.png',
    description: [
      'Spearheading the technical department of the community and responsible for streamlining a smooth and better online experience for the audience.',
      'Streamlined the use of tools and technologies to make the Core Team\'s workflow efficient cutting down delays, overheads and communication.',
      'Automated manual tasks which would have been done manually while on the other hand educating the team about softwares and how that will increase efficiency',
      'Increased community engagement and marketing through setting up a website, connecting the community through discord and much more.',
    ],
    startDate: 'September 2025',
    endDate: 'Present',
    technologies: [
      {
        name: 'Wix',
        href: 'https://www.wix.com/',
      },
      {
        name: 'JavaScript',
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      {
        name: 'Vercel',
        href: 'https://vercel.com/',
      },
    ],
    website: 'https://www.instagram.com/_aftercollege_/?hl=en',
  },
  {
    isCurrent: false,
    isBlur: false,
    company: 'SociolinQ',
    position: 'Front-End Developer Intern',
    location: 'Remote',
    image: '/assets/sociolinq.png',
    description: [
      'Worked as part of a freelance agency team developing front-ends of websites.',
      'Transformed designs into interactive user experiences while collaborating with the team and integrating API endpoints.',
      'Actively collaborated with the team to deliver products and address issues within deadlines, while simultaneously managing two different projects.',
    ],
    startDate: 'August 2024',
    endDate: 'October 2024',
    technologies: [
      {
        name: 'React',
        href: 'https://react.dev/',
      },
      {
        name: 'TypeScript',
        href: 'https://typescriptlang.org/',
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
      },
      {
        name: 'shadcn/ui',
        href: 'https://ui.shadcn.com/',
      },
    ],
    website: 'https://sociolinq.com/',
  },
];

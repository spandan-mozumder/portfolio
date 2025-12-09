import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import X from '@/components/svgs/X';
import Bun from '@/components/technologies/Bun';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';

export const skillComponents = {
  TypeScript: TypeScript,
  ReactIcon: ReactIcon,
  NextJs: NextJs,
  Bun: Bun,
  PostgreSQL: PostgreSQL,
  NodeJs: NodeJs,
  MongoDB: MongoDB,
  Prisma: Prisma,
  JavaScript: JavaScript,
};

export const heroConfig = {
  name: 'Spandan Mozumder',
  title: 'Full Stack Web and App Developer.',

  skills: [
    {
      name: 'TypeScript',
      href: 'https://www.typescriptlang.org/',
      component: 'TypeScript',
    },
    {
      name: 'React',
      href: 'https://react.dev/',
      component: 'ReactIcon',
    },
    {
      name: 'Next.js',
      href: 'https://nextjs.org/',
      component: 'NextJs',
    },
    {
      name: 'Node.js',
      href: 'https://nodejs.org/',
      component: 'NodeJs',
    },
    {
      name: 'PostgreSQL',
      href: 'https://www.postgresql.org/',
      component: 'PostgreSQL',
    },
  ],

  description: {
    template:
      'I build full-stack applications using {skills:0}, {skills:1}, {skills:2}, {skills:3} and {skills:4}. Passionate about <b>Web3</b> development on <b>Solana</b>, with a focus on building <b>scalable</b> and <b>user-friendly</b> products.',
  },

  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: 'https://drive.google.com/file/d/1mvOnM7W-Uro2TSRJd55u4MvgOVu98lAp/view?usp=sharing',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Get in touch',
      href: '/contact',
      icon: 'Chat',
    },
  ],
};

export const socialLinks = [
  {
    name: 'X',
    href: 'https://x.com/spandanmozumder',
    icon: <X />,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/spandan-mozumder/',
    icon: <LinkedIn />,
  },
  {
    name: 'Github',
    href: 'https://github.com/spandan-mozumder',
    icon: <Github />,
  },
  {
    name: 'Email',
    href: 'mailto:mozumder.spandan.professional@gmail.com',
    icon: <Mail />,
  },
];

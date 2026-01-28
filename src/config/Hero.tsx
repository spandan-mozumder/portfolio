import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import X from '@/components/svgs/X';

export const heroConfig = {
  name: 'Spandan Mozumder',
  title: 'Full Stack Web and App Developer.',

  skills: [
    {
      name: 'TypeScript',
      href: 'https://www.typescriptlang.org/',
    },
    {
      name: 'React',
      href: 'https://react.dev/',
    },
    {
      name: 'Next.js',
      href: 'https://nextjs.org/',
    },
    {
      name: 'Node.js',
      href: 'https://nodejs.org/',
    },
    {
      name: 'PostgreSQL',
      href: 'https://www.postgresql.org/',
    },
  ],

  description: {
    template:
      'I build full-stack applications using {skills:0}, {skills:1}, {skills:2}, {skills:3} and {skills:4}. Passionate about <b>Web3</b> development on <b>Solana</b> with a focus on building <b>scalable</b> and <b>user-friendly</b> products.',
  },

  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: 'https://drive.google.com/file/d/1bV7fc3zHl3icafB7acrwC4TeDcv-Q5Tt/view?usp=sharing',
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

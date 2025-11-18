import AssemblyAI from '@/components/technologies/AssemblyAI';
import Bcrypt from '@/components/technologies/Bcrypt';
import Cheerio from '@/components/technologies/Cheerio';
import Clerk from '@/components/technologies/Clerk';
import E2B from '@/components/technologies/E2B';
import FramerMotion from '@/components/technologies/FramerMotion';
import Gemini from '@/components/technologies/Gemini';
import Inngest from '@/components/technologies/Inngest';
import JWT from '@/components/technologies/JWT';
import Langchain from '@/components/technologies/Langchain';
import LucideReact from '@/components/technologies/LucideReact';
import NextJs from '@/components/technologies/NextJs';
import Nodemailer from '@/components/technologies/Nodemailer';
import NodeJs from '@/components/technologies/NodeJs';
import Octokit from '@/components/technologies/Octokit';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import Puppeteer from '@/components/technologies/Puppeteer';
import ReactIcon from '@/components/technologies/ReactIcon';
import ReactFlow from '@/components/technologies/ReactFlow';
import Recharts from '@/components/technologies/Recharts';
import Shadcn from '@/components/technologies/Shadcn';
import Supabase from '@/components/technologies/Supabase';
import TailwindCss from '@/components/technologies/TailwindCss';
import TanStackQuery from '@/components/technologies/TanStackQuery';
import TipTap from '@/components/technologies/TipTap';
import TRPC from '@/components/technologies/tRPC';
import TypeScript from '@/components/technologies/TypeScript';
import WebSocket from '@/components/technologies/WebSocket';
import WhatsAppWebJS from '@/components/technologies/WhatsAppWebJS';
import XLSX from '@/components/technologies/XLSX';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'GitWit',
    description:
      'An AI-based agent that helps young developers understand codebases easily. It fetches the entire codebase, summarizes files, summarizes commits, and provides a chatbot to answer questions about the repository.',
    image: '/assets/gitwitImg.png',
    link: 'https://git-wit-five.vercel.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Prisma', icon: <Prisma key="prisma" /> },
      { name: 'tRPC', icon: <TRPC key="trpc" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
      { name: 'Gemini', icon: <Gemini key="gemini" /> },
      { name: 'AssemblyAI', icon: <AssemblyAI key="assemblyai" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Clerk', icon: <Clerk key="clerk" /> },
      { name: 'Supabase', icon: <Supabase key="supabase" /> },
      { name: 'Octokit', icon: <Octokit key="octokit" /> },
      { name: 'Langchain', icon: <Langchain key="langchain" /> },
    ],
    github: 'https://github.com/spandan-mozumder/git-wit',
    live: 'https://git-wit-five.vercel.app/',
    details: false,
    isWorking: true,
  },
  {
    title: 'Nexus Platform',
    description:
      'A comprehensive productivity platform that integrates project management, task boards, whiteboarding, documentation, and team communication into one seamless application.',
    image: '/assets/nexusImg.png',
    link: 'https://nexus-lyart-chi.vercel.app/',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'WebSocket', icon: <WebSocket key="websocket" /> },
      { name: 'Prisma', icon: <Prisma key="prisma" /> },
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
    ],
    github: 'https://github.com/spandan-mozumder/nexus',
    live: 'https://nexus-lyart-chi.vercel.app/',
    details: false,
    isWorking: true,
  },
  {
    title: 'OctoScrape',
    description:
      'A powerful, visual workflow automation platform for web scraping and data extraction. Build complex scraping workflows through an intuitive drag-and-drop interface without writing any code.',
    image: '/assets/octoscrapeImg.png',
    link: 'https://octo-scrape.vercel.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
      { name: 'ReactFlow', icon: <ReactFlow key="reactflow" /> },
      { name: 'Prisma', icon: <Prisma key="prisma" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Clerk', icon: <Clerk key="clerk" /> },
      { name: 'Puppeteer', icon: <Puppeteer key="puppeteer" /> },
      { name: 'Cheerio', icon: <Cheerio key="cheerio" /> },
      { name: 'TanStack Query', icon: <TanStackQuery key="tanstack" /> },
      { name: 'Recharts', icon: <Recharts key="recharts" /> },
    ],
    github: 'https://github.com/spandan-mozumder/octo-scrape',
    live: 'https://octo-scrape.vercel.app/',
    details: false,
    isWorking: true,
  },
  {
    title: 'Flow.dev',
    description:
      'A design-led AI generation platform that creates production-ready web applications through natural language. Describe your vision once, iterate in natural language, and let AI craft complete shadcn-styled apps with live preview.',
    image: '/assets/flowImg.png',
    link: 'https://flow-dev-phi.vercel.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Prisma', icon: <Prisma key="prisma" /> },
      { name: 'tRPC', icon: <TRPC key="trpc" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
      { name: 'Clerk', icon: <Clerk key="clerk" /> },
      { name: 'Inngest', icon: <Inngest key="inngest" /> },
      { name: 'E2B Sandbox', icon: <E2B key="e2b" /> },
    ],
    github: 'https://github.com/spandan-mozumder/flow-dev',
    live: 'https://flow-dev-phi.vercel.app/',
    details: false,
    isWorking: true,
  },
  {
    title: 'Ampliflow',
    description:
      'A modern, free campaign automation platform for sending bulk WhatsApp messages and emails with intelligent rate limiting, multi-day scheduling, and real-time analytics.',
    image: '/assets/ampliflowImg.png',
    link: 'https://ampliflow.vercel.app/landing',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Prisma', icon: <Prisma key="prisma" /> },
      { name: 'JWT', icon: <JWT key="jwt" /> },
      { name: 'Bcrypt', icon: <Bcrypt key="bcrypt" /> },
      { name: 'Nodemailer', icon: <Nodemailer key="nodemailer" /> },
      { name: 'whatsapp-web.js', icon: <WhatsAppWebJS key="whatsappweb" /> },
      { name: 'TipTap', icon: <TipTap key="tiptap" /> },
      { name: 'Framer Motion', icon: <FramerMotion key="framer" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
      { name: 'Lucide React', icon: <LucideReact key="lucide" /> },
      { name: 'XLSX', icon: <XLSX key="xlsx" /> },
    ],
    github: 'https://github.com/spandan-mozumder/ampliflow',
    live: 'https://ampliflow.vercel.app/landing',
    details: false,
    isWorking: true,
  },
];

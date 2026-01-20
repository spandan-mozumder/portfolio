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
    title: 'DevOmegle',
    description:
      'A socializing platform like Omegle but filtered exclusively for developers. Connect with other devs, share ideas, collaborate on projects, and network with like-minded programmers.',
    image: '/assets/devomegle.png',
    link: 'https://devomegle.spandyz.xyz',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'WebSocket', icon: <WebSocket key="websocket" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Prisma', icon: <Prisma key="prisma" /> },
    ],
    features: [
      'Real-time video and text chat with developers',
      'Developer-focused filtering and matching',
      'GitHub integration for profile verification',
      'Interest-based matching (tech stack, experience level)',
      'Code sharing and collaboration features',
    ],
    github: 'https://github.com/spandan-mozumder/devomegle',
    live: 'https://devomegle.spandyz.xyz',
    details: false,
    isWorking: true,
  },
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
    features: [
      'AI‑powered code reviews with security checks and code quality analysis',
      'Live GitHub analytics with DORA metrics and risk scoring',
      'Team collab chat with syntax highlighting and attachments',
      'Meeting transcription with auto action items',
      'Security scanning for eval(), hardcoded creds, API keys',
      'RAG docs with Langchain + Supabase vectors',
      'Velocity insights, shortcuts, dark/light mode',
    ],
    github: 'https://github.com/spandan-mozumder/git-wit',
    live: 'https://git-wit-five.vercel.app/',
    details: false,
    isWorking: true,
  },
  {
    title: 'Fluxon',
    description:
      'Visual Workflow Automation Platform for building, running, and monitoring integrations and automations with a visual node editor, durable execution, and realtime observability.',
    image: '/assets/fluxonImg.png',
    link: 'https://fluxon-mu.vercel.app',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Prisma', icon: <Prisma key="prisma" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Inngest', icon: <Inngest key="inngest" /> },
      { name: 'tRPC', icon: <TRPC key="trpc" /> },
      { name: 'ReactFlow', icon: <ReactFlow key="reactflow" /> },
      { name: 'WebSocket', icon: <WebSocket key="websocket" /> },
    ],
    features: [
      'Visual node‑based workflow editor with drag‑and‑drop nodes, connections, and reusable node types',
      'Triggers: Manual, Webhook, Google Forms, Stripe; Actions: HTTP Request, Discord, Slack, Gemini AI',
      'Durable background execution powered by Inngest with retries, step tracing, and execution history',
      'Real‑time execution status & node‑level progress via realtime channels and Inngest Realtime',
      'Type‑safe API surface with tRPC and full DB modeling via Prisma',
      'Credential management, per‑user workflows, and audit logs for secure automation',
      'Extensible node executors enabling custom integrations and AI‑powered nodes',
    ],
    github: 'https://github.com/spandan-mozumder/Fluxon',
    live: 'https://fluxon-mu.vercel.app',
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
    features: [
      'Kanban, Calendar, Table views with custom statuses and sprints',
      'Infinite canvas whiteboard with multiplayer cursors',
      'Drawing tools, notes, hierarchical docs with rich editor and covers',
      'Channels, DMs, threads, reactions, real‑time messaging',
      'Labels, priorities, analytics dashboard, public sharing',
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
    features: [
      'ReactFlow builder with validations and conditional logic',
      'Browser automation, export to JSON/CSV, webhooks',
      'AES‑256 credential security, RBAC via Clerk',
      'Execution monitoring, performance analytics, charts',
      'Scheduling with on‑demand and cron',
      'Responsive UI, dark mode, sandboxed execution',
    ],
    github: 'https://github.com/spandan-mozumder/octo-scrape',
    live: 'https://octo-scrape.vercel.app/',
    details: false,
    isWorking: true,
  },
];

export const inDevelopmentProjects: Project[] = [
  {
    title: 'AstraTrade',
    description:
      'A multichain paper trading platform on DEX. Practice trading across multiple blockchain networks with virtual funds, learn DeFi strategies, and track your performance without risking real assets.',
    image: '/assets/astratrade.png',
    link: '#',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Prisma', icon: <Prisma key="prisma" /> },
    ],
    features: [
      'Multichain support across major DEX networks',
      'Virtual portfolio management',
      'Real-time price tracking and charts',
      'Trading strategy backtesting',
      'Performance analytics and leaderboards',
      'Learn DeFi without financial risk',
    ],
    live: '#',
    details: false,
    isWorking: false,
  },
  {
    title: 'Monolog',
    description:
      'A minimalistic periodic accountability app to keep you accountable to your life, work, and progress. Track your goals, reflect on your journey, and maintain consistent momentum through simple, meaningful check-ins.',
    image: '/assets/monolog.svg',
    link: '#',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Prisma', icon: <Prisma key="prisma" /> },
    ],
    features: [
      'Periodic check-ins for life, work, and personal goals',
      'Minimalistic design focused on clarity and simplicity',
      'Progress tracking and reflection prompts',
      'Customizable accountability schedules',
      'Visual timeline of your growth and achievements',
      'Private journaling with optional goal sharing',
    ],
    live: '#',
    details: false,
    isWorking: false,
  },
];

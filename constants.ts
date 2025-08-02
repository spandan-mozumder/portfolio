import type { PortfolioData } from "./types";
import mindmaprImage from "./assets/mindmapr.png";
import gitwitImage from "./assets/gitwit.png";

export const PORTFOLIO_DATA: PortfolioData = {
  name: "Spandan Mozumder",
  title: "Full Stack Developer & Tech Enthusiast",
  about: [
    "I'm a full-stack developer passionate about turning ideas into real, usable products. I specialize in crafting end-to-end web applications—from designing scalable backend systems to building snappy, responsive UIs. I don’t just write code; I build solutions, move fast, and stay curious.",
    "I'm particularly drawn to roles where creativity meets execution, and product thinking is just as important as clean code. My goal is to work with teams solving interesting problems with technology.",
  ],
  socials: {
    github: "https://github.com/spandan-mozumder",
    linkedin: "https://linkedin.com/in/spandan-mozumder/",
    x: "https://x.com/spandanmozumder",
    portfolio: "https://spandan-mozumder-portfolio.vercel.app/",
  },
  contact: {
    email: "mozumder.spandan.professional@gmail.com",
    phone: "+91 9836155495",
  },
  education: {
    institution: "Techno India University",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    location: "Kolkata, India",
    period: "Expected June 2026",
  },
  skills: [
    {
      category: "Programming Languages",
      technologies: [
        "JavaScript",
        "TypeScript",
        "NodeJS",
        "HTML",
        "CSS",
        "Python",
        "Java",
      ],
    },
    {
      category: "Frameworks & Libraries",
      technologies: ["NextJS", "ReactJS", "React Native", "ExpressJS"],
    },
    {
      category: "Databases",
      technologies: ["PostgreSQL", "MongoDB", "Firestore", "Prisma ORM"],
    },
    {
      category: "Tools",
      technologies: ["Docker", "Git", "Kubernetes", "Inngest", "Gemini"],
    },
    {
      category: "Soft Skills",
      technologies: [
        "Leadership",
        "Adaptability",
        "Discipline",
        "Problem-solving",
      ],
    },
  ],
  experiences: [
    {
      title: "Front-End Developer Intern",
      company: "SociolinQ Technologies Private Limited",
      location: "Remote",
      period: "August 2024 – October 2024",
      description: [
        "Worked as part of a freelance agency team developing front-ends of websites.",
        "Transformed designs into interactive user experiences while collaborating with the team and integrating API endpoints.",
        "Actively collaborated with the team to deliver products and address issues within deadlines, while simultaneously managing two different projects.",
      ],
    },
  ],
  projects: [
    {
      title: "MindMapr",
      description:
        "An AI-powered career consultant that helps you with your complete interview preparation. It gives you industry insights, helps you generate resumes, write AI-generated cover letters, generate quizzes, create courses, and conduct live mock interviews with an AI bot.",
      technologies: [
        "NextJS",
        "JavaScript",
        "Prisma",
        "Inngest",
        "Gemini",
        "PostgreSQL",
        "TailwindCSS",
      ],
      features: [
        "Industry Insights updated via a CRON job.",
        "Cold Email Assistant using AI and your job description.",
        "AI-assisted resume preparation.",
        "Knowledge testing with AI-generated quizzes.",
        "Custom course generation with YouTube video references.",
        "Mock interviews with an AI bot (Under Development).",
      ],
      images: [mindmaprImage],
      liveUrl: "https://mindmapr-topaz.vercel.app/",
    },
    {
      title: "GitWit",
      description:
        "An AI-based agent that helps young developers understand codebases easily. It fetches the entire codebase, summarizes files, summarizes commits, and provides a chatbot to answer questions about the repository.",
      technologies: [
        "NextJS",
        "TypeScript",
        "Prisma",
        "tRPC",
        "Gemini",
        "Assembly AI",
        "PostgreSQL",
        "TailwindCSS",
      ],
      features: [
        "Fetches and uses the entire codebase as context.",
        "Summarizes code in each file and generates vector embeddings.",
        "Summarizes new commits to explain changes.",
        "Chatbot answers questions and references relevant files.",
        "Summarizes meeting audio recordings into topics with timestamps.",
      ],
      images: [gitwitImage],
      liveUrl: "https://gitwit-two.vercel.app/",
    },
  ],
};

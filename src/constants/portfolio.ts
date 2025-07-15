import {
  gitwit1,
  gitwit2,
  gitwit3,
  gitwit4,
  gitwit5,
} from "@/assets/gitwit/export";

import {
  mindmapr1,
  mindmapr2,
  mindmapr3,
  mindmapr4,
  mindmapr5,
  mindmapr6,
} from "@/assets/mindmapr/export";

export const PORTFOLIO_DATA = {
  hero: {
    name: "Spandan Mozumder",
    title: "Full Stack Developer & Tech Enthusiast",
    description:
      "I take ideas that live rent-free in my head and code them into existence. From sketching concepts to deploying full-stack apps, I love every step of the process. ",
  },

  sections: {
    about: {
      title: "About Me",
      description:
        "Get to know me and discover what drives my passion for technology",
    },
    experience: {
      title: "Experience",
      description:
        "My professional journey and the roles that shaped my expertise",
    },
    projects: {
      title: "Featured Projects",
      description:
        "A showcase of my most impactful work and technical achievements",
    },
    contact: {
      title: "Get In Touch",
      description: "Let's connect and discuss how we can work together",
    },
  },

  about: {
    paragraphs: [
      "Hi, I'm Spandan Mozumder — a Full Stack Developer who loves turning ambitious ideas into real, usable products. I specialize in crafting end-to-end web apps — from designing scalable backend systems to building snappy, responsive UIs. I don’t just write code — I build solutions, move fast, and stay curious. Whether it’s brainstorming features or optimizing performance, I’m all in.",
      "I'm especially drawn to remote-first teams solving interesting problems with tech — the kind of places where creativity meets execution, and product thinking is just as important as clean code.",
    ],
    keyStrengths: {
      professional: [
        "Full Stack",
        "Modern Frontend",
        "API Design",
        "Scalable Backend",
        "Database Design",
        "DevOps & CI/CD",
        "Cloud Deployment",
        "Clean Code",
      ],
      personal: ["Leadership", "Adaptability", "Collaboration", "Discipline"],
    },
  },

  experiences: [
    {
      title: "Frontend Developer Intern",
      company: "SociolinQ Technologies Private Limited",
      period: "August 2024 - October 2024",
      description:
        "I worked on a school ERP system as a part of a team. I was responsible for debugging the existing codebase and implementing new modules and then integrating then with the backend APIs. I also worked on a standalone project where I made the entire frontend of an online appointment manager for Doctors with Chatbot and integrated with the backend APIs.",
      technologies: ["ReactJS", "TailwindCSS", "Material UI", "Redux"],
    },
  ],

  projects: [
    {
      title: "GitWit",
      description:
        "A collaborative platform for developers to collaborate on GitHub projects by summarizing issues and commits providing insights on the changes to the codebase. Users can also chat and generate with the AI assistant to get answers to their queries related to the repository",
      technologies: [
        "ReactJS",
        "NextJS",
        "TypeScript",
        "tRPC",
        "TailwindCSS",
        "ShadCN",
        "Prisma",
        "PostgreSQL",
        "Stripe",
        "Gemini",
      ],
      image: [gitwit1],
      features: [
        "Real-time collaboration on GitHub projects",
        "AI has context of the entire codebase",
        "Users can ask any question about the codebase",
        "AI responds to user's query along with files that it took reference from",
        "Automatic summarization of issues and commits",
        "AI powered summarization of meetings audios",
      ],
      images: [gitwit1, gitwit2, gitwit3, gitwit4, gitwit5],
      liveUrl: "https://gitwit-two.vercel.app/",
    },
    {
      title: "MindMapr",
      description:
        "An AI powered career consultant that helps you with your complete interview preparation. It gives you industry insights based on your selected industry and field. It helps you generate resume, write AI generated cover letters and emails and also generate quizzes based on the topics you have mentioned. It also lets you create courses based on the skill you want to learn and how much concept you want to learn along with conducting live online voice interviews with AI for the Job description.",
      technologies: [
        "ReactJS",
        "NextJS",
        "JavaScript",
        "TailwindCSS",
        "ShadCN",
        "Prisma",
        "PostgreSQL",
        "Gemini",
        "Inngest",
      ],
      image: [mindmapr1],
      features: [
        "Using Gemini API for industry highlights which gets updated every 7 days",
        "Generate and edit resumes by filling a form with a touch of a button",
        "Make AI generated cover letters by uploading Job Descriptions",
        "Conduct skill tests and get visualising reports",
        "Make AI generate courses for easy learning and comprehension",
        "Conduct live mock interviews with AI for the job",
      ],
      images: [
        mindmapr1,
        mindmapr2,
        mindmapr3,
        mindmapr4,
        mindmapr5,
        mindmapr6,
      ],
      liveUrl: "https://mindmapr-topaz.vercel.app/",
    },
  ],

  contact: {
    info: [
      {
        icon: "📧",
        label: "Email",
        value: "mozumder.spandan.professional@gmail.com",
      },
      {
        icon: "📱",
        label: "Phone",
        value: "+1 (555) 123-4567",
      },
      {
        icon: "📍",
        label: "Location",
        value: "San Francisco, CA",
      },
      {
        icon: "💼",
        label: "LinkedIn",
        value: "linkedin.com/in/johndoe",
      },
    ],
    form: {
      title: "Send a Message",
      fields: {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
      },
      placeholders: {
        firstName: "Spandan",
        lastName: "Mozumder",
        email: "spandan@example.com",
        subject: "Inquiry",
        message: "Tell me about it...",
      },
      button: "Send Message",
    },
  },

  social: {
    twitter: "https://x.com/spandanmozumder",
    linkedin: "https://www.linkedin.com/in/spandan-mozumder-88378233a/",
    instagram: "https://instagram.com/johndoe",
    resumeUrl: "/resume.pdf",
  },

  footer: {
    text: "© 2024 Spandan Mozumder. Crafted with ❤️ and lots of coffee.",
  },
};

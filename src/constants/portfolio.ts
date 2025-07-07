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
        "Full Stack Development",
        "Modern Frontend Frameworks",
        "API Design",
        "Scalable Backend Architecture",
        "Database Design",
        "DevOps & CI/CD",
        "Cloud Deployment",
        "Clean Code & Maintainability",
      ],
      personal: [
        "Leadership",
        "Adaptability",
        "Collaboration",
        "Constant Drive to Learn",
      ],
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
      image: [],
      features: [
        "Real-time collaboration on GitHub projects",
        "Secure payment processing with Stripe",
        "Comprehensive admin dashboard",
        "Gemini has the context of all the code in the repository",
        "Automatic summarization of issues and commits",
        "AI powered summarization of meetings",
      ],
      images: [],
      liveUrl: "#",
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

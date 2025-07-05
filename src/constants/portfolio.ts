export const PORTFOLIO_DATA = {
  hero: {
    name: "John Doe",
    title: "Full Stack Developer & Tech Enthusiast",
    description: "Crafting digital experiences with clean code and innovative solutions. Passionate about building scalable applications that make a difference."
  },
  
  sections: {
    about: {
      title: "About Me",
      description: "Get to know me and discover what drives my passion for technology"
    },
    experience: {
      title: "Experience",
      description: "My professional journey and the roles that shaped my expertise"
    },
    projects: {
      title: "Featured Projects",
      description: "A showcase of my most impactful work and technical achievements"
    },
    contact: {
      title: "Get In Touch",
      description: "Let's connect and discuss how we can work together"
    }
  },

  about: {
    paragraphs: [
      "I'm a passionate full stack developer with over 5 years of experience in creating robust web applications and leading development teams. My journey in technology started with a curiosity about how things work, which evolved into a love for building solutions that impact people's lives.",
      "I believe in writing clean, maintainable code and staying up-to-date with the latest technologies. When I'm not coding, you'll find me contributing to open source projects or mentoring aspiring developers."
    ],
    keyStrengths: [
      "Full Stack Development",
      "System Architecture", 
      "Team Leadership",
      "Performance Optimization",
      "Cloud Technologies",
      "Agile Methodologies"
    ]
  },

  experiences: [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description: "Led development of scalable web applications using React, Node.js, and cloud technologies. Managed a team of 5 developers and improved system performance by 40%.",
      technologies: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description: "Developed responsive web applications and collaborated with design teams to implement pixel-perfect UIs. Reduced load times by 30% through optimization.",
      technologies: ["React", "Vue.js", "SCSS", "Webpack", "Jest"]
    },
    {
      title: "Junior Developer",
      company: "StartupXYZ",
      period: "2019 - 2020",
      description: "Built and maintained web applications using modern JavaScript frameworks. Participated in code reviews and contributed to architectural decisions.",
      technologies: ["JavaScript", "React", "Express", "PostgreSQL"]
    },
    {
      title: "Web Developer Intern",
      company: "Creative Agency",
      period: "2018 - 2019",
      description: "Assisted in developing client websites and learned best practices for web development. Gained experience in both frontend and backend technologies.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
    }
  ],

  projects: [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "Stripe", "MongoDB"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      features: [
        "Real-time inventory tracking",
        "Secure payment processing with Stripe",
        "Comprehensive admin dashboard",
        "Customer account management",
        "Order tracking and notifications"
      ],
      images: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
      ],
      liveUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, file sharing, and team communication features.",
      technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      features: [
        "Real-time collaboration",
        "File sharing and storage",
        "Team communication chat",
        "Project timeline tracking",
        "Task assignment and deadlines"
      ],
      images: [
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop"
      ],
      liveUrl: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "Data visualization platform for business intelligence with interactive charts and real-time data processing.",
      technologies: ["React", "D3.js", "Python", "Redis"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      features: [
        "Interactive data visualizations",
        "Real-time data processing",
        "Custom report generation",
        "Multi-source data integration",
        "Automated alerts and notifications"
      ],
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop"
      ],
      liveUrl: "#"
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication and real-time transaction processing.",
      technologies: ["React Native", "Node.js", "JWT", "MongoDB"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      features: [
        "Biometric authentication",
        "Real-time transaction processing",
        "Account balance tracking",
        "Transfer and payment features",
        "Transaction history and analytics"
      ],
      images: [
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop"
      ],
      liveUrl: "#"
    }
  ],

  contact: {
    info: [
      {
        icon: "📧",
        label: "Email",
        value: "john.doe@example.com"
      },
      {
        icon: "📱",
        label: "Phone", 
        value: "+1 (555) 123-4567"
      },
      {
        icon: "📍",
        label: "Location",
        value: "San Francisco, CA"
      },
      {
        icon: "💼",
        label: "LinkedIn",
        value: "linkedin.com/in/johndoe"
      }
    ],
    form: {
      title: "Send a Message",
      fields: {
        firstName: "First Name",
        lastName: "Last Name", 
        email: "Email",
        subject: "Subject",
        message: "Message"
      },
      placeholders: {
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        subject: "Project Inquiry",
        message: "Tell me about your project..."
      },
      button: "Send Message"
    }
  },

  footer: {
    text: "© 2024 John Doe. Crafted with ❤️ and lots of ☕"
  }
};
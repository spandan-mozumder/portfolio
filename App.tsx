import React, { useState, useEffect } from "react";
import { PORTFOLIO_DATA } from "./constants";
import type { Project, Experience, Skill } from "./types";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import ExperienceCard from "./components/ExperienceCard";
import {
  GithubIcon,
  LinkedinIcon,
  XIcon,
  MailIcon,
  PhoneIcon,
  SunIcon,
  MoonIcon,
} from "./components/icons";

import { 
  Brain, 
  Clock, 
  Puzzle, 
  Settings,
  User,
  Wrench,
  GraduationCap,
  Briefcase,
  Rocket,
  MessageCircle,
  Users,
  Zap,
  Target,
  Lightbulb
} from "lucide-react";

import profile from "./assets/profile.jpeg";
import banner from "./assets/banner.jpg";

// Mapping of skill names to Skill Icons identifiers
const skillIconMap: Record<string, string> = {
  JavaScript: "js",
  TypeScript: "ts",
  NodeJS: "nodejs",
  HTML: "html",
  CSS: "css",
  Python: "py",
  Java: "java",
  NextJS: "nextjs",
  ReactJS: "react",
  "React Native": "react",
  ExpressJS: "express",
  PostgreSQL: "postgres",
  MongoDB: "mongodb",
  Firestore: "firebase",
  "Prisma ORM": "prisma",
  Docker: "docker",
  Git: "git",
  Kubernetes: "kubernetes",
  Inngest: "workers", // Using workers as closest match
  Gemini: "gcp", // Using GCP as it's Google's service
};

const App: React.FC = () => {
  const {
    name,
    title,
    about,
    socials,
    contact,
    education,
    skills,
    experiences,
    projects,
  } = PORTFOLIO_DATA;

  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedPrefs = window.localStorage.getItem("theme");
      if (storedPrefs === "dark" || storedPrefs === "light") {
        return storedPrefs;
      }
      const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
      if (userMedia.matches) {
        return "dark";
      }
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-200 font-sans antialiased transition-all duration-500">
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md text-gray-700 dark:text-gray-200 p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
        aria-label="Toggle dark mode"
      >
        {theme === "light" ? (
          <MoonIcon className="w-5 h-5" />
        ) : (
          <SunIcon className="w-5 h-5" />
        )}
      </button>

      {/* Hero Banner */}
      <div className="relative h-64 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-800 dark:via-purple-800 dark:to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <img src={banner} alt="Cover" className="w-full h-full object-cover mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>
      
      <main className="max-w-4xl mx-auto px-8 md:px-12 lg:px-16 relative -mt-24">
        {/* Profile Header */}
        <div className="mb-12 md:mb-16">
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-white dark:bg-gray-800 border-4 border-white dark:border-gray-800 shadow-2xl overflow-hidden mb-4 md:mb-6 ring-4 ring-white/50 dark:ring-gray-700/50">
            <img
              src={profile}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3 tracking-tight">
            {name}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 md:mb-6 font-medium">
            {title}
          </p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-gray-500 dark:text-gray-400">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 rounded-lg bg-white/80 dark:bg-gray-800/80 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <GithubIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            {socials.x && (
              <a
                href={socials.x}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-2.5 rounded-lg bg-white/80 dark:bg-gray-800/80 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <XIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            )}
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 rounded-lg bg-white/80 dark:bg-gray-800/80 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <LinkedinIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href={`mailto:${contact.email}`}
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 rounded-lg bg-white/80 dark:bg-gray-800/80 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <MailIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://drive.google.com/file/d/18Hb3EB4hjd663t6D8XckxZgzohsRjWlf/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
            >
              Resume
            </a>
          </div>
        </div>

        <Section icon={<User className="w-7 h-7 text-blue-600 dark:text-blue-400" />} title="About Me">
          <div className="space-y-4 md:space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            {about.map((paragraph, index) => (
              <p key={index} className="text-sm sm:text-base md:text-lg leading-relaxed">{paragraph}</p>
            ))}
          </div>
        </Section>

        <Section icon={<Wrench className="w-7 h-7 text-green-600 dark:text-green-400" />} title="Skills Summary">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {skills.map((skill: Skill) => (
              <div
                key={skill.category}
                className="bg-white/80 dark:bg-gray-800/80 p-4 sm:p-6 rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-lg hover:scale-[1.01] transition-all duration-300 backdrop-blur-sm"
              >
                <h3 className="font-bold text-base sm:text-lg text-gray-800 dark:text-gray-100 mb-3 sm:mb-4">
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg flex gap-1.5 sm:gap-2 items-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      {skillIconMap[tech] ? (
                        <img 
                          src={`https://skillicons.dev/icons?i=${skillIconMap[tech]}&theme=${theme}`}
                          alt={tech}
                          className="w-4 h-4 sm:w-5 sm:h-5"
                        />
                      ) : (
                        // Fallback icons for soft skills
                        tech === "Leadership" ? <Users size={16} className="sm:w-5 sm:h-5 text-purple-600 dark:text-purple-400" /> :
                        tech === "Discipline" ? <Target size={16} className="sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400" /> :
                        tech === "Problem-solving" ? <Lightbulb size={16} className="sm:w-5 sm:h-5 text-yellow-600 dark:text-yellow-400" /> :
                        tech === "Adaptability" ? <Zap size={16} className="sm:w-5 sm:h-5 text-orange-600 dark:text-orange-400" /> :
                        <Settings size={16} className="sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400" />
                      )}
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section icon={<GraduationCap className="w-7 h-7 text-purple-600 dark:text-purple-400" />} title="Education">
          <div className="bg-white/80 dark:bg-gray-800/80 p-4 sm:p-6 rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-lg hover:scale-[1.01] transition-all duration-300 backdrop-blur-sm">
            <h3 className="font-bold text-lg sm:text-xl text-gray-800 dark:text-gray-100 mb-2">
              {education.institution}
            </h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-3">
              {education.degree}
            </p>
            <div className="flex flex-col sm:flex-row sm:justify-between text-xs sm:text-sm text-gray-500 dark:text-gray-400 gap-1 sm:gap-2">
              <span>{education.location}</span>
              <span>{education.period}</span>
            </div>
          </div>
        </Section>

        <Section icon={<Briefcase className="w-7 h-7 text-orange-600 dark:text-orange-400" />} title="Experience">
          <div className="space-y-6 md:space-y-8">
            {experiences.map((exp: Experience) => (
              <ExperienceCard key={exp.company} experience={exp} />
            ))}
          </div>
        </Section>

        <Section icon={<Rocket className="w-7 h-7 text-red-600 dark:text-red-400" />} title="Featured Projects">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {projects.map((project: Project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>

        <Section icon={<MessageCircle className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />} title="Get In Touch">
          <div className="bg-white/80 dark:bg-gray-800/80 p-6 sm:p-8 rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-lg hover:scale-[1.01] transition-all duration-300 backdrop-blur-sm">
            <p className="text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of an ambitious vision. Feel free to
              reach out.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <div className="flex items-center">
                <a
                  href={`mailto:${contact.email}`}
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm sm:text-base font-medium break-all sm:break-normal"
                >
                  <MailIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  <span className="break-all">{contact.email}</span>
                </a>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm sm:text-base font-medium">
                <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                {contact.phone}
              </div>
            </div>
          </div>
        </Section>

        <footer className="text-center text-gray-500 dark:text-gray-400 mt-16 md:mt-20 py-6 md:py-8 border-t border-gray-200/50 dark:border-gray-700/50">
          <p className="text-sm sm:text-base">
            &copy; {new Date().getFullYear()} {name}. Crafted with ❤️ and lots
            of ☕️.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default App;

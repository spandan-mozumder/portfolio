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
  DiJavascript1,
  DiNodejsSmall,
  DiHtml5,
  DiCss3,
  DiPython,
  DiJava,
  DiReact,
  DiPostgresql,
  DiMongodb,
  DiDocker,
  DiGit,
} from "react-icons/di";
import {
  SiTypescript,
  SiExpress,
  SiNextdotjs,
  SiPrisma,
  SiKubernetes,
  SiGooglecloud,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { TbBrandReactNative } from "react-icons/tb";
import { FaBrain } from "react-icons/fa";
import { IoTime, IoExtensionPuzzle } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";

import profile from "./assets/profile.jpeg";
import banner from "./assets/banner.jpg";

const iconMap = {
  JavaScript: <DiJavascript1 color="#F7DF1E" size={17} />,
  TypeScript: <SiTypescript color="#3178C6" size={17} />,
  NodeJS: <DiNodejsSmall color="#339933" size={17} />,
  HTML: <DiHtml5 color="#E34F26" size={17} />,
  CSS: <DiCss3 color="#1572B6" size={17} />,
  Python: <DiPython color="#3776AB" size={17} />,
  Java: <DiJava color="#007396" size={17} />,
  NextJS: <SiNextdotjs size={17} />,
  ReactJS: <DiReact color="#61DAFB" size={17} />,
  "React Native": <TbBrandReactNative color="#61DAFB" size={17} />,
  ExpressJS: <SiExpress size={17} />,
  PostgreSQL: <DiPostgresql color="#336791" size={17} />,
  MongoDB: <DiMongodb color="#47A248" size={17} />,
  Firestore: <SiGooglecloud color="#4285F4" size={17} />,
  "Prisma ORM": <SiPrisma color="#2D3748" size={17} />,
  Docker: <DiDocker color="#2496ED" size={17} />,
  Git: <DiGit color="#F05032" size={17} />,
  Kubernetes: <SiKubernetes color="#326CE5" size={17} />,
  Gemini: <SiGooglecloud color="#4A90E2" size={17} />,
  Leadership: <FaBrain size={17} />,
  Discipline: <IoTime size={17} />,
  "Problem-solving": <IoExtensionPuzzle size={17} />,
  Adaptability: <IoIosSettings size={17} />,
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
    <div className="bg-[#f7f7f5] dark:bg-[#1a1a1a] text-gray-800 dark:text-gray-300 font-sans antialiased transition-colors duration-300">
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 bg-gray-200/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-200"
        aria-label="Toggle dark mode"
      >
        {theme === "light" ? (
          <MoonIcon className="w-6 h-6" />
        ) : (
          <SunIcon className="w-6 h-6" />
        )}
      </button>

      <div className="h-48 bg-gray-200 dark:bg-gray-800">
        <img src={banner} alt="Cover" className="w-full h-full object-cover" />
      </div>
      <main className="max-w-4xl mx-auto p-4 md:p-8 relative -mt-20">
        <div className="mb-12">
          <div className="w-32 h-32 rounded-full bg-white dark:bg-gray-800 border-4 border-white dark:border-[#1a1a1a] shadow-lg overflow-hidden mb-4">
            <img
              src={profile}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100">
            {name}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mt-2">
            {title}
          </p>
          <div className="flex items-center space-x-4 mt-4 text-gray-500 dark:text-gray-400">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
            {socials.x && (
              <a
                href={socials.x}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <XIcon className="w-5 h-5" />
              </a>
            )}
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${contact.email}`}
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <MailIcon className="w-6 h-6" />
            </a>
            <a
              href="https://drive.google.com/file/d/1wnN-scL1jHYVJHp6metGt6hhiosMdP2c/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200/80 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-md text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Resume
            </a>
          </div>
        </div>

        <Section icon="👤" title="About Me">
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            {about.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </Section>

        <Section icon="🛠️" title="Skills Summary">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill: Skill) => (
              <div
                key={skill.category}
                className="bg-white/50 dark:bg-gray-800/60 p-4 rounded-lg border border-gray-200/80 dark:border-gray-700/60"
              >
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-200/80 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium px-2.5 py-1 rounded-md flex gap-2 justify-center items-center"
                    >
                      {" "}
                      {iconMap[tech] || <VscCode size={14} />} {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section icon="🎓" title="Education">
          <div className="bg-white/50 dark:bg-gray-800/60 p-4 rounded-lg border border-gray-200/80 dark:border-gray-700/60">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">
              {education.institution}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {education.degree}
            </p>
            <div className="flex justify-between text-sm text-gray-500 dark:text-gray-500 mt-1">
              <span>{education.location}</span>
              <span>{education.period}</span>
            </div>
          </div>
        </Section>

        <Section icon="💼" title="Experience">
          <div className="space-y-6">
            {experiences.map((exp: Experience) => (
              <ExperienceCard key={exp.company} experience={exp} />
            ))}
          </div>
        </Section>

        <Section icon="🚀" title="Featured Projects">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project: Project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>

        <Section icon="✉️" title="Get In Touch">
          <div className="bg-white/50 dark:bg-gray-800/60 p-6 rounded-lg border border-gray-200/80 dark:border-gray-700/60">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of an ambitious vision. Feel free to
              reach out.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-6">
              <a
                href={`mailto:${contact.email}`}
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <MailIcon className="w-5 h-5 mr-2" />
                {contact.email}
              </a>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <PhoneIcon className="w-5 h-5 mr-2" />
                {contact.phone}
              </div>
            </div>
          </div>
        </Section>

        <footer className="text-center text-gray-500 dark:text-gray-400 mt-16 py-6 border-t border-gray-200/80 dark:border-gray-700/60">
          <p>
            &copy; {new Date().getFullYear()} {name}. Crafted with ❤️ and lots
            of ☕️.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default App;

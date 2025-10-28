import React, { useState, useEffect } from "react";
import { PORTFOLIO_DATA } from "./constants";
import type { Project, Experience, Skill } from "./types";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import ExperienceCard from "./components/ExperienceCard";
import PerformanceMonitor from "./components/PerformanceMonitor";
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
  Lightbulb,
} from "lucide-react";

import profile1 from "./assets/profile1.jpg";
import profile2 from "./assets/profile2.jpg";
import profile3 from "./assets/profile3.jpg";
import banner from "./assets/banner.jpg";

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
  Inngest: "workers",
  Gemini: "gcp",
  Rust: "rust",
  Anchor: "anchor",
  Prometheus: "prometheus",
  Grafana: "grafana",
  Kafka: "kafka",
  Cloudflare: "cloudflare",
  AWS: "aws",
  Solana: "solana",
  "solana/web3.js": "solana",
  Helius: "helius",
  Jupiter: "jupiter",
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

  const profileImages = [profile1, profile2, profile3];
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProfileIndex(
        (prevIndex) => (prevIndex + 1) % profileImages.length,
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [profileImages.length]);

  // Preload critical images and mark ready when done
  useEffect(() => {
    const imagesToPreload = [banner, profile1, profile2, profile3];
    let loadedCount = 0;
    
    const checkAllLoaded = () => {
      loadedCount++;
      if (loadedCount === imagesToPreload.length) {
        // Use requestAnimationFrame to ensure smooth rendering
        requestAnimationFrame(() => {
          setIsReady(true);
        });
      }
    };

    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.onload = checkAllLoaded;
      img.onerror = checkAllLoaded; // Handle errors gracefully
      img.src = src;
    });

    // Fallback timeout to prevent infinite loading
    const fallbackTimer = setTimeout(() => {
      setIsReady(true);
    }, 3000);

    return () => clearTimeout(fallbackTimer);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-200 font-sans antialiased transition-all duration-700"
      style={{ opacity: isReady ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}
    >
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md text-gray-700 dark:text-gray-200 p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-400 border border-gray-200/50 dark:border-gray-700/50"
        aria-label="Toggle dark mode"
      >
        {theme === "light" ? (
          <MoonIcon className="w-5 h-5" />
        ) : (
          <SunIcon className="w-5 h-5" />
        )}
      </button>

      <div className="relative h-64 overflow-hidden group">
        <img
          src={banner}
          alt="Cover"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:brightness-95"
        />
      </div>

      <main className="max-w-5xl mx-auto px-8 md:px-12 lg:px-16 relative -mt-24">
        <div className="mb-12 md:mb-16 animate-fade-in-up">
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-white dark:bg-gray-800 border-4 border-white dark:border-gray-800 shadow-2xl overflow-hidden mb-4 md:mb-6 ring-4 ring-white/50 dark:ring-gray-700/50 relative group">
            {profileImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${name} ${index + 1}`}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${
                  index === currentProfileIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3 tracking-tight animate-fade-in-up animation-delay-100">
            {name}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 md:mb-6 font-medium animate-fade-in-up animation-delay-200">
            {title}
          </p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-gray-500 dark:text-gray-400 animate-fade-in-up animation-delay-300">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 rounded-lg bg-white/80 dark:bg-gray-800/80 hover:bg-gray-900 dark:hover:bg-gray-100 hover:text-white dark:hover:text-gray-900 hover:scale-110 hover:rotate-3 transition-all shadow-sm hover:shadow-xl"
            >
              <GithubIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            {socials.x && (
              <a
                href={socials.x}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-2.5 rounded-lg bg-white/80 dark:bg-gray-800/80 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black hover:scale-110 hover:rotate-3 transition-all shadow-sm hover:shadow-xl"
              >
                <XIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            )}
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 rounded-lg bg-white/80 dark:bg-gray-800/80 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white hover:scale-110 hover:rotate-3 transition-all shadow-sm hover:shadow-xl"
            >
              <LinkedinIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href={`mailto:${contact.email}`}
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 rounded-lg bg-white/80 dark:bg-gray-800/80 hover:bg-red-500 dark:hover:bg-red-500 hover:text-white dark:hover:text-white hover:scale-110 hover:rotate-3 transition-all shadow-sm hover:shadow-xl"
            >
              <MailIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://drive.google.com/file/d/1uA_7LAvrhf7Hj_FqqDA_dTTjexlwKEVF/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-sm font-semibold transition-all shadow-md hover:shadow-xl hover:scale-110 animate-pulse-slow"
            >
              Resume
            </a>
            <a
              href="https://stingy-handball-6ea.notion.site/Proof-of-Work-Spandan-Mozumder-28828557f10b8022a906fb8d108e03ca#c5ad1b2ad5a2410b8c0568bdc87a77b3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white/90 dark:bg-gray-800/90 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-sm font-semibold transition-all shadow-sm hover:shadow-md hover:scale-105"
            >
              Proof of Work
            </a>
          </div>
        </div>

        <Section
          icon={<User className="w-7 h-7 text-blue-600 dark:text-blue-400" />}
          title="About Me"
        >
          <div className="space-y-4 md:space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed stagger-children">
            {about.map((paragraph, index) => (
              <p
                key={index}
                className="text-sm sm:text-base md:text-lg leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Section>

        <Section
          icon={
            <Wrench className="w-7 h-7 text-green-600 dark:text-green-400" />
          }
          title="Skills Summary"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 stagger-children">
            {skills.map((skill: Skill) => (
              <div
                key={skill.category}
                className="bg-white/80 dark:bg-gray-800/80 p-4 sm:p-6 rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-xl hover:scale-[1.02] hover:border-blue-300 dark:hover:border-blue-700 transition-all backdrop-blur-sm group"
              >
                <h3 className="font-bold text-base sm:text-lg text-gray-800 dark:text-gray-100 mb-3 sm:mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg flex gap-1.5 sm:gap-2 items-center hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 hover:scale-105 transition-all"
                    >
                      {skillIconMap[tech] ? (
                        <img
                          src={`https://skillicons.dev/icons?i=${skillIconMap[tech]}&theme=${theme}`}
                          alt={tech}
                          loading="lazy"
                          decoding="async"
                          className="w-4 h-4 sm:w-5 sm:h-5"
                        />
                      ) : tech === "Leadership" ? (
                        <Users
                          size={16}
                          className="sm:w-5 sm:h-5 text-purple-600 dark:text-purple-400"
                        />
                      ) : tech === "Discipline" ? (
                        <Target
                          size={16}
                          className="sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400"
                        />
                      ) : tech === "Problem-solving" ? (
                        <Lightbulb
                          size={16}
                          className="sm:w-5 sm:h-5 text-yellow-600 dark:text-yellow-400"
                        />
                      ) : tech === "Adaptability" ? (
                        <Zap
                          size={16}
                          className="sm:w-5 sm:h-5 text-orange-600 dark:text-orange-400"
                        />
                      ) : (
                        <Settings
                          size={16}
                          className="sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400"
                        />
                      )}
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section
          icon={
            <GraduationCap className="w-7 h-7 text-purple-600 dark:text-purple-400" />
          }
          title="Education"
        >
          <div className="bg-white/80 dark:bg-gray-800/80 p-4 sm:p-6 rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-xl hover:scale-[1.02] hover:border-purple-300 dark:hover:border-purple-700 transition-all backdrop-blur-sm group">
            <h3 className="font-bold text-lg sm:text-xl text-gray-800 dark:text-gray-100 mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 flex items-center gap-3">
              {education.logo && (
                <img
                  src={education.logo}
                  alt={`${education.institution} logo`}
                  loading="lazy"
                  decoding="async"
                  className="w-10 h-10 object-contain rounded-md"
                />
              )}
              <span>{education.institution}</span>
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

        <Section
          icon={
            <Briefcase className="w-7 h-7 text-orange-600 dark:text-orange-400" />
          }
          title="Experience"
        >
          <div className="space-y-6 md:space-y-8">
            {experiences.map((exp: Experience) => (
              <ExperienceCard key={exp.company} experience={exp} />
            ))}
          </div>
        </Section>

        <Section
          icon={<Rocket className="w-7 h-7 text-red-600 dark:text-red-400" />}
          title="Featured Projects"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {projects.map((project: Project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>

        <Section
          icon={
            <MessageCircle className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
          }
          title="Get In Touch"
        >
          <div className="bg-white/80 dark:bg-gray-800/80 p-6 sm:p-8 rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-xl hover:scale-[1.02] hover:border-indigo-300 dark:hover:border-indigo-700 transition-all backdrop-blur-sm group">
            <p className="text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of an ambitious vision. Feel free to
              reach out.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 stagger-children">
              <div className="flex items-center">
                <a
                  href={`mailto:${contact.email}`}
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105 transition-all text-sm sm:text-base font-medium break-all sm:break-normal"
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
      
      {/* Performance monitoring in development */}
      <PerformanceMonitor />
    </div>
  );
};

export default App;

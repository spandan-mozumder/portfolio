# Personal Portfolio Website

Welcome to my personal portfolio website! This project showcases my skills, projects, and experiences as a Full Stack Developer & Tech Enthusiast. Built with modern web technologies, it features a responsive design with dark/light theme support and highlights my journey in software development.

## 🚀 Live Demo

Visit the live website: [spandan-mozumder-portfolio.vercel.app](https://spandan-mozumder-portfolio.vercel.app/)

## 📸 Preview

The portfolio includes:
- **Professional Profile** - Personal introduction and contact information
- **Skills Summary** - Technical skills organized by category with icons
- **Education** - Academic background and qualifications
- **Experience** - Professional work experience and internships
# Spandan Mozumder — Portfolio

A fast, clean, Notion-inspired personal portfolio built with React + Vite and TypeScript. It showcases projects, experience, skills and contact information with subtle animations and a dark/light theme.

---

## Quick links
- Live demo: https://spandan-mozumder-portfolio.vercel.app/
- Proof of Work (Notion): https://stingy-handball-6ea.notion.site/Proof-of-Work-Spandan-Mozumder-28828557f10b8022a906fb8d108e03ca#c5ad1b2ad5a2410b8c0568bdc87a77b3

---

## Stack
- React 19 + TypeScript
- Vite for dev and build
- Tailwind-like utility classes (plain CSS used with utility patterns)
- lucide-react for icons

---

## Getting started (local)

Requirements:
- Node.js 16+
- npm or yarn

Clone and install:

```bash
git clone https://github.com/spandan-mozumder/portfolio.git
cd portfolio
npm install
# or
# yarn install
```

Run dev server:

```bash
npm run dev
# or
# yarn dev
```

Open http://localhost:5173 in your browser.

Build for production:

```bash
npm run build
# or
# yarn build
```

Preview the production build locally:

```bash
npm run preview
# or
# yarn preview
```

---

## Project structure (important files)

- `App.tsx` — root app and page layout
- `constants.ts` — your portfolio content (name, bio, projects, socials) — edit this file to update content
- `components/` — UI components (ProjectCard, ExperienceCard, Section, icons)
- `assets/` — images and static assets
- `globals.css` — global styles and custom animations
- `hooks/useScrollAnimation.ts` — IntersectionObserver hook used for scroll-triggered animations
- `types.ts` — TypeScript types used across the app
- `vite.config.ts`, `tsconfig.json`, `package.json` — project config and scripts

---

## How to update your portfolio content

Most content lives in `constants.ts`. Edit the arrays/objects there to change:
- Name, title, about text
- Social links and contact
- Education and experience entries
- Projects (title, description, features, technologies, liveUrl)

When adding a new project with images:
1. Add images to `assets/`
2. Update `constants.ts` to reference the image paths

---

## Animations & behavior
- The site uses a small set of CSS animations defined in `globals.css`.
- Scroll-triggered animations use `hooks/useScrollAnimation.ts`.
- There is a minimal loader shown on page load.

---

## Accessibility & SEO
- Semantic HTML in components
- Buttons and interactive elements include aria labels where appropriate
- Images include `alt` text in most places — add descriptive text for added images

---

## Deployment
This project is configured for static deployment (Vercel recommended):
1. Push your repo to GitHub
2. Import the repo into Vercel and deploy (Vite builds a static output)

---

## Notes & suggestions
- Comments were intentionally removed from the codebase to keep files concise; if you prefer inline docs, add JSDoc comments in specific files.
- If you'd like the project images to re-appear in the Projects grid, edit `components/ProjectCard.tsx` to re-enable the image block.

---

## Contact
Spandan Mozumder — mozumder.spandan.professional@gmail.com

---

Licensed under MIT.

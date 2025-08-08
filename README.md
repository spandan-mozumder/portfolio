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
- **Featured Projects** - Showcase of key projects with live demos
- **Contact Section** - Multiple ways to get in touch

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1 with TypeScript
- **Build Tool**: Vite 6.2.0
- **Styling**: CSS3 with Tailwind CSS classes
- **Icons**: React Icons library
- **Deployment**: Vercel

## ✨ Features

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Dark/Light Theme** - Toggle between themes with system preference detection
- **Interactive Components** - Smooth animations and hover effects
- **Modern UI** - Clean, professional design with card-based layouts
- **Accessible** - Semantic HTML and proper ARIA labels
- **Fast Loading** - Optimized images and efficient bundling
- **SEO Friendly** - Proper meta tags and structured content

## 🏗️ Project Structure

```
portfolio/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ExperienceCard.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Section.tsx
│   │   └── icons.tsx
│   ├── assets/             # Images and static files
│   │   ├── banner.jpg
│   │   ├── profile.jpeg
│   │   ├── gitwit.png
│   │   └── mindmapr.png
│   ├── App.tsx             # Main application component
│   ├── constants.ts        # Portfolio data and configuration
│   ├── types.ts           # TypeScript type definitions
│   └── globals.css        # Global styles
├── public/
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/spandan-mozumder/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🎨 Customization

### Updating Portfolio Content

Edit the `constants.ts` file to update:
- Personal information
- Skills and technologies
- Work experience
- Project details
- Contact information

### Adding New Projects

1. Add project images to the `assets/` folder
2. Import the images in `constants.ts`
3. Add project data to the `projects` array

### Styling

- Global styles are in `globals.css`
- Component-specific styles use Tailwind CSS classes
- Theme colors are controlled via CSS custom properties

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌙 Theme System

The portfolio includes a sophisticated theme system that:
- Detects user's system preference
- Remembers user's manual selection
- Provides smooth transitions between themes
- Uses semantic color tokens for consistency

## 📦 Dependencies

### Main Dependencies
- `react` - UI library
- `react-dom` - React DOM rendering
- `react-icons` - Icon library

### Development Dependencies
- `typescript` - Type safety
- `vite` - Build tool and dev server
- `@types/node` - Node.js type definitions

## 🚀 Deployment

The project is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push to main branch

### Build Configuration

The `vite.config.ts` includes:
- Path aliases for cleaner imports
- Environment variable handling
- Optimized build settings

## 📧 Contact

**Spandan Mozumder**
- Email: mozumder.spandan.professional@gmail.com
- LinkedIn: [linkedin.com/in/spandan-mozumder](https://linkedin.com/in/spandan-mozumder/)
- GitHub: [github.com/spandan-mozumder](https://github.com/spandan-mozumder)
- Twitter: [@spandanmozumder](https://x.com/spandanmozumder)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ If you found this portfolio helpful, please consider giving it a star!

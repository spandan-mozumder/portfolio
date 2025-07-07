# Portfolio Website - Spandan Mozumder

A modern, responsive portfolio website showcasing my journey as a Full Stack Developer. Built with React, TypeScript, and modern web technologies with a focus on beautiful animations and user experience.

## 🚀 Live Demo

Visit the live portfolio: [Your Portfolio URL]

## 👨‍💻 About

Hi, I'm **Spandan Mozumder** — a Full Stack Developer who loves turning ambitious ideas into real, usable products. I specialize in crafting end-to-end web apps — from designing scalable backend systems to building snappy, responsive UIs.

## ✨ Features

- **Animated Loading Screen** - Minimalistic loading experience with progress tracking
- **Smooth Animations** - Staggered fade-in, slide-up, and float effects throughout
- **Dark Theme Design** - Professional dark color scheme with teal accents
- **Responsive Layout** - Optimized for all device sizes
- **Interactive Components** - Hover effects, glow animations, and smooth transitions
- **Project Showcase** - Detailed project cards with technology badges
- **Contact Form** - Integrated contact form with Formspree
- **Floating Navigation** - Quick access menu for easy navigation
- **Scroll to Top** - Smooth scroll functionality

## 🛠️ Tech Stack

### Frontend
- **React 18** - Component-based UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/UI** - Beautiful, accessible UI components

### UI & Animations
- **Radix UI** - Unstyled, accessible components
- **Class Variance Authority** - Component variant management
- **Lucide React** - Beautiful icon library
- **Custom CSS Animations** - Smooth transitions and effects

### Form Handling
- **Formspree** - Contact form backend service

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # Shadcn UI components
│   ├── FloatingMenu.tsx    # Navigation menu
│   ├── LoadingScreen.tsx   # Animated loading screen
│   ├── Portfolio.tsx       # Main portfolio component
│   ├── ProjectDetailOverlay.tsx
│   └── ScrollToTop.tsx     # Scroll to top button
├── constants/
│   └── portfolio.ts        # Portfolio data and content
├── hooks/
│   ├── use-mobile.tsx      # Mobile detection hook
│   └── use-toast.ts        # Toast notifications
├── lib/
│   └── utils.ts           # Utility functions
├── pages/
│   ├── Index.tsx          # Home page
│   └── NotFound.tsx       # 404 page
├── index.css              # Global styles and design system
└── main.tsx               # App entry point
```

## 🎨 Design System

### Color Palette
- **Primary**: `hsl(168 85% 65%)` - Teal accent
- **Background**: `hsl(220 13% 6%)` - Dark base
- **Card**: `hsl(220 13% 8%)` - Elevated surfaces
- **Secondary**: `hsl(220 13% 12%)` - Muted backgrounds
- **Border**: `hsl(220 13% 15%)` - Subtle borders

### Typography
- **Font Family**: Mono (system font stack)
- **Responsive Text**: Fluid typography scaling
- **Gradient Text**: Primary-to-blue gradient for headings

### Animations
- **Float**: Subtle floating motion for hero elements
- **Fade In**: Staggered content appearance
- **Slide Up**: Content animation with delays
- **Glow Effects**: Interactive hover states
- **Shimmer**: Loading state animations

## 📝 Sections

### Hero Section
- Name and title with gradient text effect
- Animated description with typewriter feel
- Floating animation on main heading

### About Section
- Personal introduction and philosophy
- Key strengths categorized by professional and personal skills
- Interactive skill badges with hover effects

### Experience Section
- Professional work history
- Technology stack for each role
- Expandable content for detailed descriptions

### Projects Section
- Featured project showcase
- Technology badges and descriptions
- Clickable project cards for detailed views
- Project overlay with additional information

### Contact Section
- Interactive contact form
- Form validation and submission handling
- Professional contact information
- Social media links

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone [your-repo-url]
cd portfolio-website
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser

### Building for Production

```bash
npm run build
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance Features

- **Lazy Loading**: Optimized asset loading
- **Smooth Scrolling**: CSS scroll-behavior implementation
- **Optimized Animations**: Hardware-accelerated transforms
- **Minimal Bundle**: Tree-shaking and code splitting

## 📧 Contact

- **Email**: mozumder.spandan.professional@gmail.com
- **LinkedIn**: [Spandan Mozumder](https://www.linkedin.com/in/spandan-mozumder-88378233a/)
- **Twitter**: [@spandanmozumder](https://x.com/spandanmozumder)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome! Feel free to open an issue or submit a pull request.

---

**Built with ❤️ and lots of coffee by Spandan Mozumder**
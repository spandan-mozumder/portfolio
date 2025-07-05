import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

const Portfolio = () => {
  const [showAllExperience, setShowAllExperience] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);

  const experiences = [
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
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "Stripe", "MongoDB"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, file sharing, and team communication features.",
      technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop"
    },
    {
      title: "Analytics Dashboard",
      description: "Data visualization platform for business intelligence with interactive charts and real-time data processing.",
      technologies: ["React", "D3.js", "Python", "Redis"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop"
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication and real-time transaction processing.",
      technologies: ["React Native", "Node.js", "JWT", "MongoDB"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop"
    }
  ];

  const keyStrengths = [
    "Full Stack Development",
    "System Architecture",
    "Team Leadership",
    "Performance Optimization",
    "Cloud Technologies",
    "Agile Methodologies"
  ];

  const visibleExperiences = showAllExperience ? experiences : experiences.slice(0, 2);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="relative text-center animate-fade-in">
          <div className="animate-float">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
              John Doe
            </h1>
            <div className="h-1 w-24 bg-gradient-primary mx-auto mb-8 rounded-full" />
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up">
            Full Stack Developer & Tech Enthusiast
          </p>
          <p className="text-lg text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Crafting digital experiences with clean code and innovative solutions. 
            Passionate about building scalable applications that make a difference.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate full stack developer with over 5 years of experience in creating 
                robust web applications and leading development teams. My journey in technology 
                started with a curiosity about how things work, which evolved into a love for 
                building solutions that impact people's lives.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe in writing clean, maintainable code and staying up-to-date with the 
                latest technologies. When I'm not coding, you'll find me contributing to open 
                source projects or mentoring aspiring developers.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Key Strengths</h3>
              <div className="grid grid-cols-2 gap-3">
                {keyStrengths.map((strength, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="p-3 text-center justify-center glow-effect gradient-border"
                  >
                    {strength}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6 bg-gradient-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Experience</h2>
          <div className="space-y-8">
            {visibleExperiences.map((exp, index) => (
              <Card key={index} className="p-6 gradient-border glow-effect">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-1">{exp.title}</h3>
                    <p className="text-lg text-foreground font-medium">{exp.company}</p>
                  </div>
                  <span className="text-muted-foreground font-mono mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
          {experiences.length > 2 && (
            <div className="text-center mt-8">
              <Button 
                variant="outline" 
                onClick={() => setShowAllExperience(!showAllExperience)}
                className="glow-effect"
              >
                {showAllExperience ? 'Show Less' : 'Show More Experience'}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Featured Projects</h2>
          <div className="relative">
            <div className="overflow-x-auto pb-4">
              <div className="flex space-x-6 w-max">
                {projects.map((project, index) => (
                  <Card key={index} className="w-80 gradient-border glow-effect flex-shrink-0">
                    <div className="aspect-video relative overflow-hidden rounded-t-lg">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-8 space-x-2">
              {projects.map((_, index) => (
                <div 
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentProject ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-primary">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="text-primary">📧</span>
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground font-mono">john.doe@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="text-primary">📱</span>
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground font-mono">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="text-primary">📍</span>
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">San Francisco, CA</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="text-primary">💼</span>
                    </div>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-muted-foreground font-mono">linkedin.com/in/johndoe</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Send a Message</h3>
              <Card className="p-6 gradient-border">
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <Input placeholder="John" className="bg-secondary/50" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <Input placeholder="Doe" className="bg-secondary/50" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="john@example.com" className="bg-secondary/50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input placeholder="Project Inquiry" className="bg-secondary/50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      placeholder="Tell me about your project..." 
                      rows={5}
                      className="bg-secondary/50 resize-none"
                    />
                  </div>
                  <Button className="w-full glow-effect" size="lg">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground font-mono">
            © 2024 John Doe. Crafted with ❤️ and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
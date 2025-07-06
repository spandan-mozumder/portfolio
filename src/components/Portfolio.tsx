import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { PORTFOLIO_DATA } from '@/constants/portfolio';
import ProjectDetailOverlay from './ProjectDetailOverlay';
import FloatingMenu from './FloatingMenu';
import ScrollToTop from './ScrollToTop';
import heroImage from '@/assets/hero-image.jpg';

const Portfolio = () => {
  const [showAllExperience, setShowAllExperience] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const visibleExperiences = showAllExperience ? PORTFOLIO_DATA.experiences : PORTFOLIO_DATA.experiences.slice(0, 2);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % PORTFOLIO_DATA.projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + PORTFOLIO_DATA.projects.length) % PORTFOLIO_DATA.projects.length);
  };

  const openProjectOverlay = (project) => {
    setSelectedProject(project);
    setIsOverlayOpen(true);
  };

  const closeProjectOverlay = () => {
    setIsOverlayOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        
        {/* Hero Image */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src={heroImage} 
            alt="Professional workspace" 
            className="w-full h-full object-cover animate-shimmer"
          />
        </div>
        
        <div className="relative text-center animate-fade-in z-10">
          <div className="animate-float">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text animate-shimmer">
              {PORTFOLIO_DATA.hero.name}
            </h1>
            <div className="h-1 w-24 bg-gradient-primary mx-auto mb-8 rounded-full glow-effect" />
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up hover:text-foreground transition-colors duration-300">
            {PORTFOLIO_DATA.hero.title}
          </p>
          <p className="text-lg text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed animate-slide-up hover:text-muted-foreground transition-colors duration-300">
            {PORTFOLIO_DATA.hero.description}
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-accent opacity-30" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-4 text-center gradient-text hover:scale-105 transition-transform duration-300">{PORTFOLIO_DATA.sections.about.title}</h2>
          <p className="text-center text-muted-foreground/80 mb-12 max-w-2xl mx-auto hover:text-muted-foreground transition-colors duration-300">
            {PORTFOLIO_DATA.sections.about.description}
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {PORTFOLIO_DATA.about.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300 cursor-default">
                  {paragraph}
                </p>
              ))}
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary gradient-text">Key Strengths</h3>
              <div className="grid grid-cols-2 gap-3">
                {PORTFOLIO_DATA.about.keyStrengths.map((strength, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="p-3 text-center justify-center glow-effect gradient-border hover:scale-105 hover:shadow-glow-primary transition-all duration-300 cursor-default animate-shimmer"
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
      <section className="py-20 px-6 bg-gradient-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-4 text-center gradient-text hover:scale-105 transition-transform duration-300">{PORTFOLIO_DATA.sections.experience.title}</h2>
          <p className="text-center text-muted-foreground/80 mb-12 max-w-2xl mx-auto hover:text-muted-foreground transition-colors duration-300">
            {PORTFOLIO_DATA.sections.experience.description}
          </p>
          <div className="space-y-8">
            {visibleExperiences.map((exp, index) => (
              <Card key={index} className="p-6 gradient-border glow-effect hover:scale-[1.02] hover:shadow-glow-primary transition-all duration-300 group">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-1 group-hover:gradient-text transition-all duration-300">{exp.title}</h3>
                    <p className="text-lg text-foreground font-medium group-hover:text-primary transition-colors duration-300">{exp.company}</p>
                  </div>
                  <span className="text-muted-foreground font-mono mt-2 md:mt-0 group-hover:text-foreground transition-colors duration-300">{exp.period}</span>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed group-hover:text-foreground transition-colors duration-300">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs hover:bg-primary/10 hover:border-primary transition-all duration-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
          {PORTFOLIO_DATA.experiences.length > 2 && (
            <div className="text-center mt-8">
              <Button 
                variant="outline" 
                onClick={() => setShowAllExperience(!showAllExperience)}
                className="glow-effect hover:scale-105 hover:shadow-glow-primary transition-all duration-300"
              >
                {showAllExperience ? 'Show Less' : 'Show More Experience'}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-primary/5 via-transparent to-accent/5" />
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-4 text-center gradient-text hover:scale-105 transition-transform duration-300">{PORTFOLIO_DATA.sections.projects.title}</h2>
          <p className="text-center text-muted-foreground/80 mb-12 max-w-2xl mx-auto hover:text-muted-foreground transition-colors duration-300">
            {PORTFOLIO_DATA.sections.projects.description}
          </p>
          <div className="relative">
            <div className="overflow-x-auto pb-4">
              <div className="flex space-x-6 w-max">
                {PORTFOLIO_DATA.projects.map((project, index) => (
                  <Card key={index} className="w-80 gradient-border glow-effect flex-shrink-0 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-glow-primary group" onClick={() => openProjectOverlay(project)}>
                    <div className="aspect-video relative overflow-hidden rounded-t-lg">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-all duration-300" />
                      <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-primary text-xs">✦</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-primary group-hover:gradient-text transition-all duration-300">{project.title}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed group-hover:text-foreground transition-colors duration-300">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs hover:bg-primary/10 hover:border-primary transition-all duration-300 animate-shimmer">
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
              {PORTFOLIO_DATA.projects.map((_, index) => (
                <div 
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-150 ${
                    index === currentProject ? 'bg-primary shadow-glow-primary' : 'bg-muted hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-4 text-center gradient-text hover:scale-105 transition-transform duration-300">{PORTFOLIO_DATA.sections.contact.title}</h2>
          <p className="text-center text-muted-foreground/80 mb-12 max-w-2xl mx-auto hover:text-muted-foreground transition-colors duration-300">
            {PORTFOLIO_DATA.sections.contact.description}
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-primary gradient-text">Contact Information</h3>
                 <div className="space-y-4">
                   {PORTFOLIO_DATA.contact.info.map((contact, index) => (
                     <div key={index} className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300 group cursor-default">
                       <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 glow-effect">
                         <span className="text-primary group-hover:scale-110 transition-transform duration-300">{contact.icon}</span>
                       </div>
                       <div>
                         <p className="font-medium group-hover:text-primary transition-colors duration-300">{contact.label}</p>
                         <p className="text-muted-foreground font-mono group-hover:text-foreground transition-colors duration-300">{contact.value}</p>
                       </div>
                     </div>
                   ))}
                 </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary gradient-text">Send a Message</h3>
              <Card className="p-6 gradient-border glow-effect hover:shadow-glow-primary transition-all duration-300">
                 <form className="space-y-6">
                   <div className="grid grid-cols-2 gap-4">
                     <div>
                       <label className="block text-sm font-medium mb-2 hover:text-primary transition-colors duration-300">{PORTFOLIO_DATA.contact.form.fields.firstName}</label>
                       <Input placeholder={PORTFOLIO_DATA.contact.form.placeholders.firstName} className="bg-secondary/50 hover:bg-secondary/70 focus:bg-secondary transition-colors duration-300" />
                     </div>
                     <div>
                       <label className="block text-sm font-medium mb-2 hover:text-primary transition-colors duration-300">{PORTFOLIO_DATA.contact.form.fields.lastName}</label>
                       <Input placeholder={PORTFOLIO_DATA.contact.form.placeholders.lastName} className="bg-secondary/50 hover:bg-secondary/70 focus:bg-secondary transition-colors duration-300" />
                     </div>
                   </div>
                   <div>
                     <label className="block text-sm font-medium mb-2 hover:text-primary transition-colors duration-300">{PORTFOLIO_DATA.contact.form.fields.email}</label>
                     <Input type="email" placeholder={PORTFOLIO_DATA.contact.form.placeholders.email} className="bg-secondary/50 hover:bg-secondary/70 focus:bg-secondary transition-colors duration-300" />
                   </div>
                   <div>
                     <label className="block text-sm font-medium mb-2 hover:text-primary transition-colors duration-300">{PORTFOLIO_DATA.contact.form.fields.subject}</label>
                     <Input placeholder={PORTFOLIO_DATA.contact.form.placeholders.subject} className="bg-secondary/50 hover:bg-secondary/70 focus:bg-secondary transition-colors duration-300" />
                   </div>
                   <div>
                     <label className="block text-sm font-medium mb-2 hover:text-primary transition-colors duration-300">{PORTFOLIO_DATA.contact.form.fields.message}</label>
                     <Textarea 
                       placeholder={PORTFOLIO_DATA.contact.form.placeholders.message}
                       rows={5}
                       className="bg-secondary/50 resize-none hover:bg-secondary/70 focus:bg-secondary transition-colors duration-300"
                     />
                   </div>
                   <Button className="w-full glow-effect hover:scale-105 hover:shadow-glow-primary transition-all duration-300" size="lg">
                     {PORTFOLIO_DATA.contact.form.button}
                   </Button>
                 </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-muted-foreground font-mono hover:text-foreground transition-colors duration-300 cursor-default">
            {PORTFOLIO_DATA.footer.text}
          </p>
        </div>
      </footer>

      {/* Project Detail Overlay */}
      <ProjectDetailOverlay 
        project={selectedProject}
        isOpen={isOverlayOpen}
        onClose={closeProjectOverlay}
      />

      {/* Floating Menu */}
      <FloatingMenu />

      {/* Scroll to Top */}
      <ScrollToTop />
    </div>
  );
};

export default Portfolio;
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { PORTFOLIO_DATA } from '@/constants/portfolio';
import ProjectDetailOverlay from './ProjectDetailOverlay';

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
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="relative text-center animate-fade-in">
          <div className="animate-float">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
              {PORTFOLIO_DATA.hero.name}
            </h1>
            <div className="h-1 w-24 bg-gradient-primary mx-auto mb-8 rounded-full" />
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up">
            {PORTFOLIO_DATA.hero.title}
          </p>
          <p className="text-lg text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            {PORTFOLIO_DATA.hero.description}
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center gradient-text">{PORTFOLIO_DATA.sections.about.title}</h2>
          <p className="text-center text-muted-foreground/80 mb-12 max-w-2xl mx-auto">
            {PORTFOLIO_DATA.sections.about.description}
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {PORTFOLIO_DATA.about.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Key Strengths</h3>
              <div className="grid grid-cols-2 gap-3">
                {PORTFOLIO_DATA.about.keyStrengths.map((strength, index) => (
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
          <h2 className="text-4xl font-bold mb-4 text-center gradient-text">{PORTFOLIO_DATA.sections.experience.title}</h2>
          <p className="text-center text-muted-foreground/80 mb-12 max-w-2xl mx-auto">
            {PORTFOLIO_DATA.sections.experience.description}
          </p>
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
          {PORTFOLIO_DATA.experiences.length > 2 && (
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
          <h2 className="text-4xl font-bold mb-4 text-center gradient-text">{PORTFOLIO_DATA.sections.projects.title}</h2>
          <p className="text-center text-muted-foreground/80 mb-12 max-w-2xl mx-auto">
            {PORTFOLIO_DATA.sections.projects.description}
          </p>
          <div className="relative">
            <div className="overflow-x-auto pb-4">
              <div className="flex space-x-6 w-max">
                {PORTFOLIO_DATA.projects.map((project, index) => (
                  <Card key={index} className="w-80 gradient-border glow-effect flex-shrink-0 cursor-pointer transition-transform hover:scale-105" onClick={() => openProjectOverlay(project)}>
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
              {PORTFOLIO_DATA.projects.map((_, index) => (
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
          <h2 className="text-4xl font-bold mb-4 text-center gradient-text">{PORTFOLIO_DATA.sections.contact.title}</h2>
          <p className="text-center text-muted-foreground/80 mb-12 max-w-2xl mx-auto">
            {PORTFOLIO_DATA.sections.contact.description}
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-primary">Contact Information</h3>
                 <div className="space-y-4">
                   {PORTFOLIO_DATA.contact.info.map((contact, index) => (
                     <div key={index} className="flex items-center space-x-4">
                       <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                         <span className="text-primary">{contact.icon}</span>
                       </div>
                       <div>
                         <p className="font-medium">{contact.label}</p>
                         <p className="text-muted-foreground font-mono">{contact.value}</p>
                       </div>
                     </div>
                   ))}
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
                       <label className="block text-sm font-medium mb-2">{PORTFOLIO_DATA.contact.form.fields.firstName}</label>
                       <Input placeholder={PORTFOLIO_DATA.contact.form.placeholders.firstName} className="bg-secondary/50" />
                     </div>
                     <div>
                       <label className="block text-sm font-medium mb-2">{PORTFOLIO_DATA.contact.form.fields.lastName}</label>
                       <Input placeholder={PORTFOLIO_DATA.contact.form.placeholders.lastName} className="bg-secondary/50" />
                     </div>
                   </div>
                   <div>
                     <label className="block text-sm font-medium mb-2">{PORTFOLIO_DATA.contact.form.fields.email}</label>
                     <Input type="email" placeholder={PORTFOLIO_DATA.contact.form.placeholders.email} className="bg-secondary/50" />
                   </div>
                   <div>
                     <label className="block text-sm font-medium mb-2">{PORTFOLIO_DATA.contact.form.fields.subject}</label>
                     <Input placeholder={PORTFOLIO_DATA.contact.form.placeholders.subject} className="bg-secondary/50" />
                   </div>
                   <div>
                     <label className="block text-sm font-medium mb-2">{PORTFOLIO_DATA.contact.form.fields.message}</label>
                     <Textarea 
                       placeholder={PORTFOLIO_DATA.contact.form.placeholders.message}
                       rows={5}
                       className="bg-secondary/50 resize-none"
                     />
                   </div>
                   <Button className="w-full glow-effect" size="lg">
                     {PORTFOLIO_DATA.contact.form.button}
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
    </div>
  );
};

export default Portfolio;
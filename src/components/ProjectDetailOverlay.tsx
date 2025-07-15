import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  images: string[];
  liveUrl: string;
}

interface ProjectDetailOverlayProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailOverlay = ({
  project,
  isOpen,
  onClose,
}: ProjectDetailOverlayProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (project) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = () => {
    if (project) {
      setCurrentImageIndex(
        (prev) => (prev - 1 + project.images.length) % project.images.length
      );
    }
  };

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto glow-effect">
        <div className="relative">

          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-background/80 hover:bg-background hover:text-primary"
          >
            <X className="h-4 w-4" />
          </Button>


          {Array.isArray(project.images) && project.images.length > 0 && (
            <div className="relative aspect-video">
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              {project.images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background hover:text-primary"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background hover:text-primary"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {project.images.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex
                            ? "bg-primary"
                            : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          <div className="p-8 space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4 gradient-text">
                {project.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Key Features
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Button
                className="glow-effect"
                size="lg"
                onClick={() => window.open(project.liveUrl, "_blank")}
              >
                View Live
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProjectDetailOverlay;

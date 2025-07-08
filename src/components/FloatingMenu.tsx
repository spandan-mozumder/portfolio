import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Menu, X, Twitter, Linkedin, Instagram, Download } from "lucide-react";
import { PORTFOLIO_DATA } from "@/constants/portfolio";

const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = PORTFOLIO_DATA.social.resumeUrl;
    link.download = "resume.pdf";
    link.click();
  };

  return (
    <TooltipProvider>
      <div className="fixed top-6 right-6 z-50">
        <div className="relative">
          {/* Main Menu Button */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                className="w-12 h-12 rounded-full glow-effect bg-primary/90 hover:bg-primary backdrop-blur-sm border-gradient hover:shadow-glow-primary"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Menu</p>
            </TooltipContent>
          </Tooltip>

          {/* Floating Menu Items */}
          <div
            className={`absolute top-0 right-0 transition-all duration-300 mt-16 ${
              isOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <div className="flex flex-col space-y-3">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    variant="outline"
                    className="w-10 h-10 rounded-full backdrop-blur-sm bg-background/80 border-primary/20 hover:bg-primary/10 hover:text-primary"
                    onClick={() =>
                      window.open(PORTFOLIO_DATA.social.twitter, "_blank")
                    }
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left">
                  <p>Twitter</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    variant="outline"
                    className="w-10 h-10 rounded-full backdrop-blur-sm bg-background/80 border-primary/20 hover:bg-primary/10 hover:text-primary"
                    onClick={() =>
                      window.open(PORTFOLIO_DATA.social.linkedin, "_blank")
                    }
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left">
                  <p>LinkedIn</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    variant="outline"
                    className="w-10 h-10 rounded-full backdrop-blur-sm bg-background/80 border-primary/20 hover:bg-primary/10 hover:text-primary"
                    onClick={() =>
                      window.open(PORTFOLIO_DATA.social.instagram, "_blank")
                    }
                  >
                    <Instagram className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left">
                  <p>Instagram</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    variant="outline"
                    className="w-10 h-10 rounded-full backdrop-blur-sm bg-background/80 border-primary/20 hover:bg-primary/10 hover:text-primary"
                    onClick={handleDownloadResume}
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left">
                  <p>Download Resume</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default FloatingMenu;

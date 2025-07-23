import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Instagram, Download } from "lucide-react";
import { PORTFOLIO_DATA } from "@/constants/portfolio";

const FixedSocialMenu = () => {
  // Function to handle the resume download
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = PORTFOLIO_DATA.social.resumeUrl;
    link.download = "resume.pdf"; // You can customize the default filename here
    link.click();
  };

  return (
    <TooltipProvider>
      {/* This main container remains fixed to the viewport */}
      <div className="fixed top-6 right-6 z-50">
        {/* 
          The list of buttons is now directly inside the fixed container,
          making them permanently visible.
        */}
        <div className="flex flex-col space-y-3">
          {/* Twitter Button */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                variant="outline"
                className="w-10 h-10 rounded-full backdrop-blur-sm bg-background/80 border-primary/20 hover:bg-primary/10 hover:text-primary glow-effect"
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

          {/* LinkedIn Button */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                variant="outline"
                className="w-10 h-10 rounded-full backdrop-blur-sm bg-background/80 border-primary/20 hover:bg-primary/10 hover:text-primary glow-effect"
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

          {/* Instagram Button */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                variant="outline"
                className="w-10 h-10 rounded-full backdrop-blur-sm bg-background/80 border-primary/20 hover:bg-primary/10 hover:text-primary glow-effect"
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

          {/* Download Resume Button */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                variant="outline"
                className="w-10 h-10 rounded-full backdrop-blur-sm bg-background/80 border-primary/20 hover:bg-primary/10 hover:text-primary glow-effect"
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
    </TooltipProvider>
  );
};

export default FixedSocialMenu;

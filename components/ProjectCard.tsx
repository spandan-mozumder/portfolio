import React, { useState } from "react";
import type { Project } from "../types";
import {
  LinkIcon,
  CheckCircleIcon,
} from "./icons";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="bg-white/90 dark:bg-gray-800/90 rounded-xl border border-gray-200/50 dark:border-gray-700/50 flex flex-col group transition-all duration-300 hover:shadow-xl hover:scale-[1.01] dark:hover:shadow-gray-900/40 h-auto md:h-[34rem] overflow-hidden backdrop-blur-sm">
      <div className="relative">
        <img
          src={project.images[currentImageIndex]}
          alt={`${project.title} screenshot ${currentImageIndex + 1}`}
          className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-4 sm:p-6 md:p-7 flex flex-col flex-grow overflow-y-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-3 sm:gap-0">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">
            {project.title}
          </h3>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 w-full sm:w-auto"
          >
            <LinkIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            Live Demo
          </a>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed flex-grow">
          {project.description}
        </p>

        <div className="mb-4 sm:mb-6">
          <h4 className="font-bold text-gray-800 dark:text-gray-100 text-sm sm:text-base mb-2 sm:mb-3 flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Key Features
          </h4>
          <ul className="space-y-1 sm:space-y-2">
            {project.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start text-xs sm:text-sm text-gray-600 dark:text-gray-300"
              >
                <CheckCircleIcon className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 dark:text-green-400 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-800 dark:text-gray-100 text-sm sm:text-base mb-2 sm:mb-3 flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

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
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200/80 dark:border-gray-700 flex flex-col group transition-shadow hover:shadow-lg dark:hover:shadow-gray-900/40  h-[30rem] overflow-y-auto">
      <div className="relative">
        <img
          src={project.images[currentImageIndex]}
          alt={`${project.title} screenshot ${currentImageIndex + 1}`}
          className="w-full h-48 object-cover transition-transform duration-300"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex gap-5 items-center">
          {project.title}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
          >
            Live
            <LinkIcon className="w-4 h-4 ml-1.5" />
          </a>
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm flex-grow">
          {project.description}
        </p>

        <div className="mt-4">
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-sm mb-2">
            Key Features
          </h4>
          <ul className="space-y-1.5">
            {project.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start text-sm text-gray-600 dark:text-gray-400"
              >
                <CheckCircleIcon className="w-4 h-4 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-sm mb-2">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-gray-200/80 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium px-2 py-1 rounded-md"
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

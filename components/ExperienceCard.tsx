
import React from 'react';
import type { Experience } from '../types';
import { BriefcaseIcon, CalendarIcon, LocationIcon } from './icons';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="bg-white/50 dark:bg-gray-800/60 p-6 rounded-lg border border-gray-200/80 dark:border-gray-700/60 transition-shadow hover:shadow-md dark:hover:shadow-gray-900/40">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{experience.title}</h3>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
            <CalendarIcon className="w-4 h-4 mr-1.5"/>
            <span>{experience.period}</span>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center text-md text-gray-700 dark:text-gray-300 space-y-1 sm:space-y-0 sm:space-x-4 mb-4">
        <div className="flex items-center">
            <BriefcaseIcon className="w-4 h-4 mr-1.5 text-gray-500 dark:text-gray-500"/>
            <span>{experience.company}</span>
        </div>
        <div className="flex items-center">
             <LocationIcon className="w-4 h-4 mr-1.5 text-gray-500 dark:text-gray-500"/>
            <span>{experience.location}</span>
        </div>
      </div>
      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
        {experience.description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;


import React from 'react';
import type { Experience } from '../types';
import { BriefcaseIcon, CalendarIcon, LocationIcon } from './icons';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 p-4 sm:p-6 md:p-8 rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-lg hover:scale-[1.01] transition-all duration-300 backdrop-blur-sm">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">{experience.title}</h3>
        <div className="flex items-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0 bg-gray-100 dark:bg-gray-700 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full whitespace-nowrap">
            <CalendarIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2"/>
            <span>{experience.period}</span>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center text-sm sm:text-base text-gray-700 dark:text-gray-300 gap-2 sm:gap-4 mb-4 sm:mb-6">
        <div className="flex items-center">
            <BriefcaseIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600 dark:text-blue-400"/>
            <span className="font-semibold">{experience.company}</span>
        </div>
        <div className="flex items-center">
             <LocationIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-600 dark:text-green-400"/>
            <span>{experience.location}</span>
        </div>
      </div>
      <ul className="space-y-2 sm:space-y-3 text-gray-600 dark:text-gray-300">
        {experience.description.map((point, index) => (
          <li key={index} className="flex items-start">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
            <span className="text-sm sm:text-base leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;

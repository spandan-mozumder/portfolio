
import React from 'react';

interface SectionProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ icon, title, children }) => {
  return (
    <section className="mb-16 md:mb-20 lg:mb-24">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3 md:mb-4 flex items-center gap-3 md:gap-4">
        <span className="flex items-center justify-center">{icon}</span>
        {title}
      </h2>
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full mb-6 md:mb-8 lg:mb-10 w-16 sm:w-20 md:w-24"></div>
      <div>{children}</div>
    </section>
  );
};

export default Section;

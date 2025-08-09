
import React from 'react';

interface SectionProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ icon, title, children }) => {
  return (
    <section className="mb-24">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-4">
        <span className="flex items-center justify-center">{icon}</span>
        {title}
      </h2>
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full mb-10 w-24"></div>
      <div>{children}</div>
    </section>
  );
};

export default Section;

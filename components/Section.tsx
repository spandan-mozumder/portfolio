
import React from 'react';

interface SectionProps {
  icon: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ icon, title, children }) => {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2 flex items-center">
        <span className="text-2xl mr-3">{icon}</span>
        {title}
      </h2>
      <hr className="border-gray-200/80 dark:border-gray-700/60 mb-6" />
      <div>{children}</div>
    </section>
  );
};

export default Section;

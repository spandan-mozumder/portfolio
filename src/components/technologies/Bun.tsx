import React from 'react';

export default function Bun({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M53.6 21.2c-.6-2.3-1.6-4.5-3.1-6.3-1.5-1.9-3.6-3.5-5.9-4.5-2.3-1-4.9-1.4-7.4-1.1-2.5.3-4.9 1.2-7 2.5-2.1 1.4-3.8 3.3-4.9 5.6-1.1 2.2-1.6 4.7-1.4 7.1.2 2.5 1 4.8 2.4 6.8 1.3 2 3.2 3.6 5.3 4.7 2.1 1.1 4.5 1.6 6.9 1.6 2.4 0 4.8-.6 6.9-1.7 2.1-1.1 3.9-2.7 5.2-4.7 1.4-2 2.2-4.3 2.4-6.8.2-2.4-.2-4.9-1.4-7.1z"
        fill="currentColor"
      />
      <ellipse cx="30" cy="20" rx="3" ry="4" fill="currentColor" opacity="0.8" />
      <ellipse cx="50" cy="20" rx="3" ry="4" fill="currentColor" opacity="0.8" />
      <path
        d="M40 45c15.5 0 28-8.5 28-19S55.5 7 40 7 12 15.5 12 26s12.5 19 28 19z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M40 50c-13.8 0-25-7.6-25-17s11.2-17 25-17 25 7.6 25 17-11.2 17-25 17z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
};

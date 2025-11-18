import React from 'react';

const ReactFlow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className="h-6 w-6"
      role="img"
      aria-label="ReactFlow"
    >
      <defs>
        <linearGradient id="rf-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF0072" />
          <stop offset="100%" stopColor="#0041D0" />
        </linearGradient>
      </defs>
      <rect width="256" height="256" fill="url(#rf-gradient)" rx="60" />
      <circle cx="70" cy="128" r="20" fill="#FFF" />
      <circle cx="186" cy="128" r="20" fill="#FFF" />
      <circle cx="128" cy="70" r="20" fill="#FFF" />
      <circle cx="128" cy="186" r="20" fill="#FFF" />
      <path
        d="M70 128h116M128 70v116"
        stroke="#FFF"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ReactFlow;

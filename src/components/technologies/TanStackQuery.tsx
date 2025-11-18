import React from 'react';

const TanStackQuery = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className="h-6 w-6"
      role="img"
      aria-label="TanStack Query"
    >
      <defs>
        <linearGradient id="tanstack-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF4154" />
          <stop offset="100%" stopColor="#FFC116" />
        </linearGradient>
      </defs>
      <rect width="256" height="256" fill="url(#tanstack-gradient)" rx="60" />
      <path
        fill="#FFF"
        d="M128 50L80 100h96L128 50zm0 156l48-50H80l48 50zm-50-106v52l50 26 50-26v-52l-50-26-50 26z"
      />
    </svg>
  );
};

export default TanStackQuery;

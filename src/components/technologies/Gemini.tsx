import React from 'react';

const Gemini = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className="h-6 w-6"
      role="img"
      aria-label="Google Gemini"
    >
      <defs>
        <linearGradient id="gemini-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4285F4" />
          <stop offset="50%" stopColor="#9B72CB" />
          <stop offset="100%" stopColor="#D96570" />
        </linearGradient>
      </defs>
      <rect width="256" height="256" fill="url(#gemini-gradient)" rx="60" />
      <path
        fill="#FFF"
        d="M128 50L80 128l48 78 48-78-48-78zm0 156L68 128l60-103 60 103-60 78z"
      />
    </svg>
  );
};

export default Gemini;

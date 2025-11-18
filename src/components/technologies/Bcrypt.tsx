import React from 'react';

const Bcrypt = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className="h-6 w-6"
      role="img"
      aria-label="Bcrypt"
    >
      <rect width="256" height="256" fill="#4A5568" rx="60" />
      <path
        fill="#FFF"
        d="M128 60c-37.5 0-68 30.5-68 68s30.5 68 68 68 68-30.5 68-68-30.5-68-68-68zm0 116c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"
      />
      <path
        fill="#FFF"
        d="M128 100c-15.5 0-28 12.5-28 28s12.5 28 28 28 28-12.5 28-28-12.5-28-28-28z"
      />
      <rect x="124" y="50" width="8" height="20" fill="#FFF" />
      <rect x="124" y="186" width="8" height="20" fill="#FFF" />
    </svg>
  );
};

export default Bcrypt;

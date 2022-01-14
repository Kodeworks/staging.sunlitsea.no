import React from 'react';

interface Props {
  className: string;
}

const DownArrow: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={`${className}`}
      width="47"
      height="44"
      viewBox="0 0 47 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.0962 43.7393L32.7612 43.7393L46.8644 21.686L40.2272 21.686L26.5767 43.0361L26.5767 0.000245169L20.2877 0.000244668L20.2877 43.0361L6.63025 21.686L1.18983e-05 21.686L14.0962 43.7393Z"
        fill="#FFE775"
      />
    </svg>
  );
};

export default DownArrow;

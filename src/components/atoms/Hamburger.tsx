import React from 'react';

interface Props {
  className: string;
}

const Hamburger: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={`${className}`}
      width="24"
      height="14"
      viewBox="0 0 24 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="1" x2="24" y2="1" stroke="black" strokeWidth="2" />
      <line y1="7" x2="24" y2="7" stroke="black" strokeWidth="2" />
      <line y1="13" x2="24" y2="13" stroke="black" strokeWidth="2" />
    </svg>
  );
};

export default Hamburger;

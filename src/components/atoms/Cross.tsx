import React from 'react';

interface Props {
  className: string;
}

const Cross: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={`${className}`}
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="0.707107" y1="1.29289" x2="17.6777" y2="18.2635" stroke="black" strokeWidth="2" />
      <line x1="0.707108" y1="18.2636" x2="17.6777" y2="1.29303" stroke="black" strokeWidth="2" />
    </svg>
  );
};

export default Cross;

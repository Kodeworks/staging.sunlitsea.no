import React from 'react';

interface Props {
  className: string;
}

const RightArrowThin: React.FC<Props> = ({ className }) => {
  return (
    <svg className={`${className}`} viewBox="0 0 52 28" xmlns="http://www.w3.org/2000/svg">
      <path d="M51.51 11.814v3.595H0v-3.595h51.51zm0 3.595v3.736l-20 7.875v-3.736l20-7.875zM31.51 3.736V0l20 8.078v3.736l-20-8.078z" />
    </svg>
  );
};

export default RightArrowThin;

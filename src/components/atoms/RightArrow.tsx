import React from 'react';

interface Props {
  className: string;
}

const RightArrow: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={`${className}`}
      width="32"
      height="29"
      viewBox="0 0 32 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 19.9061L32 8.56746L15.8655 -1.03665e-06L15.8655 4.03199L31.4856 12.3245L1.54084e-06 12.3245L1.42723e-06 16.1449L31.4856 16.1449L15.8655 24.4416L15.8655 28.4694L32 19.9061Z"
        fill="#101010"
      />
    </svg>
  );
};

export default RightArrow;

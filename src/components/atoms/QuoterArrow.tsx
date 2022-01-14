import React from 'react';

interface Props {
  className: string;
}

const QuoterArrow: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={`${className}`}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="24" fill="#FF6242" />
      <path
        d="M40 29.9061L40 18.5675L23.8655 10L23.8655 14.032L39.4856 22.3245L8 22.3245L8 26.1449L39.4856 26.1449L23.8655 34.4416L23.8655 38.4694L40 29.9061Z"
        fill="#101010"
      />
    </svg>
  );
};

export default QuoterArrow;

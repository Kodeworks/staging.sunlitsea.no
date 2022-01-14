import React from 'react';

export const ContentContainer: React.FC<{ className?: string }> = ({ children, className }) => {
  return (
    <div
      className={`2xl:mx-auto xl:mx-36 lg:mx-24 md:mx-16 sm:mx-4 mx-4 max-w-[1400px] ${
        className ?? ''
      }`}
    >
      {children}
    </div>
  );
};

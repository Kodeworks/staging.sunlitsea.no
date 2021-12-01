import React from 'react';
import LogoWithName from './../components/atoms/LogoWithName';

const Main: React.FC = () => {
  return (
    <>
      <div className="flex flex-row justify-center w-full h-24 bg-primary-100">
        <LogoWithName
          containerClassName="my-auto"
          svgClassName="w-8"
          textClassName="text-4xl font-body font-bold"
        />
      </div>
    </>
  );
};

export default Main;

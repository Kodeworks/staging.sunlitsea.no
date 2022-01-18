import React from 'react';

interface Props {
  name: string;
  number: string;
}

const WhyInvestTile: React.FC<Props> = ({ name, number }) => {
  return (
    <div className="px-2 xl:px-4 2xl:px-8 py-4  bg-primary-100 lg:h-[270px] max-w-[200px]  sm:max-w-[280px] md:max-w-full min-w-[150px] lg:min-w-[190px] xl:min-w-[220px] 2xl:min-w-[300px]">
      <div className="">
        <div className="text-2xl font-bold 2xl:text-4xl font-headline">{number}.</div>
        <div className="text-base sm:text-lg xl:text-xl 2xl:text-2xl">{name}</div>
      </div>
    </div>
  );
};

export default WhyInvestTile;

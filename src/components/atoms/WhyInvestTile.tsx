import React from 'react';

interface Props {
  name: string;
  number: string;
}

const WhyInvestTile: React.FC<Props> = ({ name, number }) => {
  return (
    <div className="px-8 pt-4 bg-primary-100 h-[270px] min-w-[274px]">
      <div className="">
        <div className="text-4xl font-bold font-headline">{number}.</div>
        <div className="text-2xl">{name}</div>
      </div>
    </div>
  );
};

export default WhyInvestTile;

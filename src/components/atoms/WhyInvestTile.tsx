import React from 'react';

interface Props {
  name: string;
  number: string;
}

const WhyInvestTile: React.FC<Props> = ({ name, number }) => {
  return (
    <div className="px-12 pt-4 pb-12 mx-4 bg-secondary-200">
      <div className="">
        <div className="text-4xl ">{number}.</div>
        <div className="text-2xl ">{name}</div>
      </div>
    </div>
  );
};

export default WhyInvestTile;

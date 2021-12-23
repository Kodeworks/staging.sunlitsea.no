import React from 'react';

interface Props {
  position: string;
  number: number;
  description: string;
}

const PositionTile: React.FC<Props> = ({ position, number, description }) => {
  return (
    <div className="w-1/4 px-12 py-8 mx-4 text-center bg-primary-200">
      <div className="">
        <div className="text-3xl ">
          {number.toString() + (number < 2 ? ' position' : ' positions')} available in {position}{' '}
        </div>
        <div className="mt-4 text-2xl">{description}</div>
        <button className="p-4 mt-8 text-2xl bg-primary-400 rounded-3xl hover:bg-primary-500">
          {' '}
          Learn more
        </button>
      </div>
    </div>
  );
};

export default PositionTile;

import React from 'react';

interface Props {
  position: string;
  number: number;
}

const PositionTile: React.FC<Props> = ({ position, number }) => {
  return (
    <div className="w-1/4 px-12 py-8 mx-4 text-center bg-primary-200">
      <div className="flex flex-col justify-between h-full">
        <div className="text-3xl ">
          {number.toString() +
            ' ' +
            position +
            ' job ' +
            (number < 2 ? 'opening' : 'openings') +
            ' available'}
        </div>
        <div>
          <button className="p-4 mt-8 text-2xl bg-primary-400 rounded-3xl hover:bg-primary-500">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default PositionTile;

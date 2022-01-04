import React from 'react';

const Technology6: React.FC = () => {
  return (
    <>
      <div className="flex flex-row pb-8">
        <div className="flex flex-col w-7/12 px-12">
          <div className="text-3xl font-body">6. Floating structures exposed to wind</div>
          <div className="mt-4 text-xl">
            Several recent accidents connected to wind demonstrate the need for excellent
            aerodynamic properties for floating solar power plants.
          </div>
          <div className="mt-8 text-2xl font-body">Our solution</div>
          <div className="mt-4 text-xl">
            Sunlit Sea{"'"}s solution has very low wind deflection, small draft and gaps between
            floats that significantly reduce overpressure under the matrix. The effect is a power
            plant that can operate in much stronger winds than current solutions.
          </div>
        </div>
        <div className="flex flex-col w-5/12">
          <img
            className="object-contain"
            src={'/img/technology/technology_6_1.jpg'}
            alt="technology_6_1"
          />
          <div className="text-xl text-right">
            Kyocera TCL Solar accident in Yamakura Dam in 2019
          </div>
          <img
            className="object-contain mt-4"
            src={'/img/technology/technology_6_2.jpg'}
            alt="technology_6_2"
          />
          <div className="text-xl text-right">Sunlit Sea’s Prototype 2</div>
        </div>
      </div>
    </>
  );
};

export default Technology6;

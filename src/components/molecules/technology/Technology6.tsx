import React from 'react';
import TechnologyContent from './TechnologyContent';

const Technology6: React.FC = () => {
  return (
    <>
      <TechnologyContent
        description="Several recent accidents connected to wind demonstrate the need for excellent
    aerodynamic properties for floating solar power plants."
        solution="Sunlit Sea's solution has very low wind deflection, small draft and gaps between
    floats that significantly reduce overpressure under the matrix. The effect is a power
    plant that can operate in much stronger winds than current solutions."
        images={
          <>
            <img
              className="object-contain mx-auto"
              src={'/img/technology/technology_6_1.jpg'}
              alt="technology_6_1"
            />
            <div className="mx-auto">Kyocera TCL Solar accident in Yamakura Dam in 2019</div>
            <img
              className="object-contain mx-auto mt-4"
              src={'/img/technology/technology_6_2.jpg'}
              alt="technology_6_2"
            />
            <div className="mx-auto">Sunlit Sea’s Prototype 2</div>
          </>
        }
      />
    </>
  );
};

export default Technology6;

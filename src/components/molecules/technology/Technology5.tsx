import React from 'react';
import TechnologyContent from './TechnologyContent';

const Technology5: React.FC = () => {
  return (
    <>
      <TechnologyContent
        description="In very cold conditions a floating solar power plant must handle frost blasting,
          cracking fragile materials, variable loads on anchorages and extra load on connection
          points between floats."
        solution="Sunlit Sea's solar cell floats are made of robust materials, where the effect of
          frostbite is minimized. The connection points between the floats and towards the
          anchorage can withstand the forces of ice and sub-zero-temperatures."
        images={
          <>
            <img
              className="object-contain w-full max-w-xl mx-auto"
              src={'/img/technology/technology_5.jpg'}
              alt="technology_5"
            />
          </>
        }
      />
    </>
  );
};

export default Technology5;

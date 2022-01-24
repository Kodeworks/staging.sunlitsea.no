import React from 'react';
import TechnologyContent from './TechnologyContent';

const Technology15: React.FC = () => {
  return (
    <>
      <TechnologyContent
        description="Uncontrolled electrical leakage from installations at sea may accelerate the oxidation
    of metal. Sharp edges, cavities, rough or porous surface, absence of sacrificial anodes,
    salinity, absence of finishing such as anodizing, and more, affect the degree of
    corrosion. Metal occurs in electrical and mechanical connection points and load-bearing
    structures in most floating solar power plants. The consequence of corrosion can be
    reduced service life and increased probability of accidents."
        solution="Sunlit Sea produces aluminum alloy floats developed for maritime use, which are further
    protected by rounded edges and a smooth anodised surface. In addition to the standard
    earth-fault detector found in the inverter, each float module level also has power
    electronics that can locate any current leaks immediately. The absence of electrical
    connections further reduces the chance of power leaks."
        images={
          <>
            <img
              className="object-contain w-full max-w-lg mx-auto"
              src={'/img/technology/technology_15.jpg'}
              alt="technology_15"
            />
          </>
        }
      />
    </>
  );
};

export default Technology15;

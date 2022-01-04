import React from 'react';

const Technology15: React.FC = () => {
  return (
    <>
      <div className="flex flex-row pb-8">
        <div className="flex flex-col w-7/12 px-12">
          <div className="text-3xl font-body">
            15. Electricity in salt water can cause corrosion
          </div>
          <div className="mt-4 text-xl">
            Uncontrolled electrical leakage from installations at sea may accelerate the oxidation
            of metal. Sharp edges, cavities, rough or porous surface, absence of sacrificial anodes,
            salinity, absence of finishing such as anodizing, and more, affect the degree of
            corrosion. Metal occurs in electrical and mechanical connection points and load-bearing
            structures in most floating solar power plants. The consequence of corrosion can be
            reduced service life and increased probability of accidents.
          </div>
          <div className="mt-8 text-2xl font-body">Our solution</div>
          <div className="mt-4 text-xl">
            Sunlit Sea produces aluminum alloy floats developed for maritime use, which are further
            protected by rounded edges and a smooth anodised surface. In addition to the standard
            earth-fault detector found in the inverter, each float module level also has power
            electronics that can locate any current leaks immediately. The absence of electrical
            connections further reduces the chance of power leaks.
          </div>
        </div>
        <div className="flex flex-col w-5/12">
          <img
            className="object-contain"
            src={'/img/technology/technology_15.jpg'}
            alt="technology_15"
          />
        </div>
      </div>
    </>
  );
};

export default Technology15;

import React from 'react';
import TechnologyContent from './TechnologyContent';

const Technology14: React.FC = () => {
  return (
    <>
      <TechnologyContent
        description="Electric power at sea entails a risk of power leaks. This poses a danger to personnel
    moving in the area. The internationally accepted standard IEC 62548 describes safety
    mechanisms linked to each string of solar panels. Requirements are rarely set for safety
    mechanisms associated with each individual solar panel, which stems from the safety
    requirements for solar power plants on land. Thus, there is a danger of power leaks even
    if the string is disconnected at the inverter level."
        solution="Sunlit Sea addresses this issue by developing panel-level auto-shutdown safety
    mechanisms. This means that electrical faults automatically disconnect each float so
    that it does not produce electricity. In addition, the same mechanism can be used in
    connection with maintenance, so that there is no electricity in panels that are, for
    example, washed by personnel, at the same time as the rest of the solar power plant is
    operated as usual."
        images={
          <>
            <img
              className="object-contain w-full max-w-xl mx-auto"
              src={'/img/technology/technology_14.jpg'}
              alt="technology_14"
            />
          </>
        }
      />
    </>
  );
};

export default Technology14;

import React from 'react';
import TechnologyContent from './TechnologyContent';

const Technology2: React.FC = () => {
  return (
    <>
      <TechnologyContent
        description="The efficiency of solar panels decreases with increasing temperature, and therefore land
          based solar systems will have a limited ability to cool."
        solution="Our panels operate at a temperature close to the water temperature. The reason is the
          thermal conductivity of aluminum combined with optimal contact surface from the panel -
          via aluminum - into water. This effect will be further quantified through a study under
          the auspices of the Institute for Energy Technology."
        images={
          <>
            <img
              className="object-contain p-2 mx-auto bg-white"
              src={'/img/technology/technology_2_1.png'}
              alt="technology_2_1"
            />
            <img
              className="object-contain mx-auto mt-4"
              src={'/img/technology/technology_2_2.jpg'}
              alt="technology_2_2"
            />
          </>
        }
      />
    </>
  );
};

export default Technology2;

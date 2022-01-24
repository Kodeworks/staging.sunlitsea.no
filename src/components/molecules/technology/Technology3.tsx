import React from 'react';
import TechnologyContent from './TechnologyContent';

const Technology3: React.FC = () => {
  return (
    <>
      <TechnologyContent
        description="Interconnected floats with solar panels that move individually on wavy water will create
    so-called mismatch losses. This means that the worst angle to the sun at any given time
    will be dominant for how much electricity is produced. For land-based solar power, this
    is partly avoided by mounting all interconnected solar panels at the same angle, and in
    some cases by installing a so-called module level maximum power-point tracking."
        solution="Sunlit Sea is developing a solution that handles mismatch losses at the module level in
    a very cost-effective way. This is possible because all power electronics and sensors
    for our panels are developed in-house."
        images={
          <>
            <img
              className="object-contain mx-auto"
              src={'/img/technology/technology_3.jpg'}
              alt="technology_3"
            />
            <div className="text-center ">
              Real time analysis of the sea state and float model results in quite good precision.
            </div>
          </>
        }
      />
    </>
  );
};

export default Technology3;

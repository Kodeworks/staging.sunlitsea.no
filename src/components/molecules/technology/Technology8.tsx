import React from 'react';
import TechnologyContent from './TechnologyContent';

const Technology8: React.FC = () => {
  return (
    <>
      <TechnologyContent
        description="Solar cells are very sensitive to point loads, which can result in microcracks.
    Micro-cracks often occur during operation and maintenance and as a result of other
    environmental stresses, which will reduce the production of electricity."
        solution="The structural integrity of Sunlit Sea's components means that the handling during
    installation, operation and maintenance, or as a result of environmental factors, does
    not cause damage. In addition, it is possible to move on foot on top of the panels. A
    comparative full-scale study, under the auspices of the Institute for Energy Technology,
    is now being carried out to verify that traffic on foot does not result in reduced
    electricity production."
        images={
          <>
            <img
              className="object-contain mx-auto"
              src={'/img/technology/technology_8.jpg'}
              alt="technology_8"
            />
            <div className="mx-auto ">
              Sunlit Sea floats can withstand a lot of load and can be washed manually or
              robotically. The picture is an example of a washing robot, not part of Sunlit Sea{"'"}
              s product portfolio.
            </div>
          </>
        }
      />
    </>
  );
};

export default Technology8;

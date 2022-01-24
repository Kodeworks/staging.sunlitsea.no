import React from 'react';
import TechnologyContent from './TechnologyContent';

const Technology7: React.FC = () => {
  return (
    <>
      <TechnologyContent
        description="Components for floating solar power are delivered on site by all of today's
    suppliers. This requires a large number of installers, long installation time, large
    area along the water's edge and temporary production facilities. This leads to
    greater exposure to weather windows, strains on local communities, thefts and more
    expensive financing and insurance. As a consequence, installation becomes more costly
    and it becomes more difficult to maintain quality control."
        solution="Sunlit Sea prefabricate strings of floats that are packed in a standard 40-foot
    container. Total quality assurance of the entire production process up to complete
    strings will significantly reduce the number of errors, far into the project. The
    strings are deployed efficiently on the water with a lightning-fast and innovative
    installation method. Tests show that the method is up to 25 times faster than today's fastest competitor."
        images={
          <>
            <img
              className="object-contain mx-auto "
              src={'/img/technology/technology_7_1.jpg'}
              alt="technology_7_1"
            />
            <div className="mx-auto">Quite simple and quick deployment, two people per string</div>
            <img
              className="object-contain mx-auto mt-4"
              src={'/img/technology/technology_7_2.jpg'}
              alt="technology_7_2"
            />
            <div className="mx-auto">High energy density does not affect deployment</div>
          </>
        }
      />
    </>
  );
};

export default Technology7;

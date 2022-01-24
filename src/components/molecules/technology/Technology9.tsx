import React from 'react';
import TechnologyContent from './TechnologyContent';

const Technology9: React.FC = () => {
  return (
    <>
      <TechnologyContent
        description="Performance ratio is the ratio between produced electricity and theoretically possible
    production, normalized in relation to, among other things, solar radiation in software
    such as PVsyst. This is used as a contract basis. For floating solar power, production
    estimation is not standardized. Ordinary models do not take into account waves,
    degradation in the maritime environment, the effect of cooling from water, etc."
        solution=" Sunlit Sea uses its expertise in metocean, electric power, electronics, solar power and
    programming to develop a concept for marine grade performance ratio that can precisely
    predict production under given conditions. This provides a basis for guarantees to
    stakeholders that the plant will deliver as expected, which significantly reduces
    financial risk"
        images={
          <>
            <img
              className="object-contain w-full max-w-xl mx-auto"
              src={'/img/technology/technology_9.jpg'}
              alt="technology_9"
            />
          </>
        }
      />
    </>
  );
};

export default Technology9;

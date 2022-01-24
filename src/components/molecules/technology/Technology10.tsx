import React from 'react';
import TechnologyContent from './TechnologyContent';

const Technology10: React.FC = () => {
  return (
    <>
      <TechnologyContent
        description="Solar panels adapted for maritime use are more expensive than solar panels for use on
    land, because they must be specially made and thoroughly tested. This means that changes
    in the product, such as switching to other types of solar cells, take a long time to
    commercialize to a level where the price is acceptable in the mainstream market."
        solution="Sunlit Sea uses standard production lines for solar panels, but produces to
    specification. This means that we can achieve close to the same prices for established
    technology, while at the same time incorporate new technology such as shingled wafers or
    perovskite in a cost-effective way earlier than our competitors."
        images={
          <>
            <img
              className="object-contain mx-auto"
              src={'/img/technology/technology_10_1.jpg'}
              alt="technology_10_1"
            />
            <div className="mx-auto ">Shingled</div>
            <img
              className="object-contain mx-auto mt-4 "
              src={'/img/technology/technology_10_2.jpg'}
              alt="technology_10_2"
            />
            <div className="mx-auto">Perovskite</div>
            <img
              className="object-contain mx-auto mt-4"
              src={'/img/technology/technology_10_3.jpg'}
              alt="technology_10_3"
            />
            <div className="mx-auto">Double glass</div>
          </>
        }
      />
    </>
  );
};

export default Technology10;

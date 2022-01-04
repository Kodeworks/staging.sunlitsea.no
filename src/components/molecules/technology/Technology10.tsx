import React from 'react';

const Technology10: React.FC = () => {
  return (
    <>
      <div className="flex flex-row pb-8">
        <div className="flex flex-col w-7/12 px-12">
          <div className="text-3xl font-body">10. Expensive marine technology</div>
          <div className="mt-4 text-xl">
            Solar panels adapted for maritime use are more expensive than solar panels for use on
            land, because they must be specially made and thoroughly tested. This means that changes
            in the product, such as switching to other types of solar cells, take a long time to
            commercialize to a level where the price is acceptable in the mainstream market.
          </div>
          <div className="mt-8 text-2xl font-body">Our solution</div>
          <div className="mt-4 text-xl">
            Sunlit Sea uses standard production lines for solar panels, but produces to
            specification. This means that we can achieve close to the same prices for established
            technology, while at the same time incorporate new technology such as shingled wafers or
            perovskite in a cost-effective way earlier than our competitors.
          </div>
        </div>
        <div className="flex flex-col w-5/12">
          <img
            className="object-contain w-2/3"
            src={'/img/technology/technology_10_1.jpg'}
            alt="technology_10_1"
          />
          <div className="-mt-8 text-xl text-center">Shingled</div>
          <img
            className="self-end object-contain w-2/3 mt-8"
            src={'/img/technology/technology_10_2.jpg'}
            alt="technology_10_2"
          />
          <div className="text-xl text-right">Perovskite</div>
          <img
            className="object-contain w-3/4 mt-4"
            src={'/img/technology/technology_10_3.jpg'}
            alt="technology_10_3"
          />
          <div className="text-xl">Double glass</div>
        </div>
      </div>
    </>
  );
};

export default Technology10;

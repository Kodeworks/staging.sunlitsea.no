import React from 'react';

const Technology9: React.FC = () => {
  return (
    <>
      <div className="flex flex-row pb-8">
        <div className="flex flex-col w-1/2 px-12">
          <div className="text-3xl font-body">9. Difficulties guaranteeing performance ratio</div>
          <div className="mt-4 text-xl">
            Performance ratio is the ratio between produced electricity and theoretically possible
            production, normalized in relation to, among other things, solar radiation in software
            such as PVsyst. This is used as a contract basis. For floating solar power, production
            estimation is not standardized. Ordinary models do not take into account waves,
            degradation in the maritime environment, the effect of cooling from water, etc.
          </div>
          <div className="mt-8 text-2xl font-body">Our solution</div>
          <div className="mt-4 text-xl">
            Sunlit Sea uses its expertise in metocean, electric power, electronics, solar power and
            programming to develop a concept for marine grade performance ratio that can precisely
            predict production under given conditions. This provides a basis for guarantees to
            stakeholders that the plant will deliver as expected, which significantly reduces
            financial risk
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <img
            className="object-contain"
            src={'/img/technology/technology_9.jpg'}
            alt="technology_9"
          />
        </div>
      </div>
    </>
  );
};

export default Technology9;

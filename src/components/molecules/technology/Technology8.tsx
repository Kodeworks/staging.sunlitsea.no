import React from 'react';

const Technology8: React.FC = () => {
  return (
    <>
      <div className="flex flex-row pb-8">
        <div className="flex flex-col w-1/2 px-12">
          <div className="text-3xl font-body">8. Downtime during maintenance and handling</div>
          <div className="mt-4 text-xl">
            Solar cells are very sensitive to point loads, which can result in microcracks.
            Micro-cracks often occur during operation and maintenance and as a result of other
            environmental stresses, which will reduce the production of electricity.
          </div>
          <div className="mt-8 text-2xl font-body">Our solution</div>
          <div className="mt-4 text-xl">
            The structural integrity of Sunlit Sea{"'"}s components means that the handling during
            installation, operation and maintenance, or as a result of environmental factors, does
            not cause damage. In addition, it is possible to move on foot on top of the panels. A
            comparative full-scale study, under the auspices of the Institute for Energy Technology,
            is now being carried out to verify that traffic on foot does not result in reduced
            electricity production.
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <img
            className="object-contain"
            src={'/img/technology/technology_8.jpg'}
            alt="technology_8"
          />
          <div className="text-xl text-right ">
            Sunlit Sea floats can withstand a lot of load and can be washed manually or robotically.
            The picture is an example of a washing robot, not part of Sunlit Sea{"'"}s product
            portfolio.
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology8;

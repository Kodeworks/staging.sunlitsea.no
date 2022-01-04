import React from 'react';

const Technology5: React.FC = () => {
  return (
    <>
      <div className="flex flex-row pb-8">
        <div className="flex flex-col w-1/2 px-12">
          <div className="text-3xl font-body">5. Ice offers risk to installations</div>
          <div className="mt-4 text-xl">
            In very cold conditions a floating solar power plant must handle frost blasting,
            cracking fragile materials, variable loads on anchorages and extra load on connection
            points between floats.
          </div>
          <div className="mt-8 text-2xl font-body">Our solution</div>
          <div className="mt-4 text-xl">
            Sunlit Sea{"'"}s solar cell floats are made of robust materials, where the effect of
            frostbite is minimized. The connection points between the floats and towards the
            anchorage can withstand the forces of ice and sub-zero-temperatures.
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <img
            className="object-contain"
            src={'/img/technology/technology_5.jpg'}
            alt="technology_5"
          />
        </div>
      </div>
    </>
  );
};

export default Technology5;

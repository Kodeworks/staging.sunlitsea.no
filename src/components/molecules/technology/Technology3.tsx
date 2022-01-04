import React from 'react';

const Technology3: React.FC = () => {
  return (
    <>
      <div className="flex flex-row pb-8">
        <div className="flex flex-col w-7/12 px-12">
          <div className="text-3xl font-body">3. Waves reduce power output</div>
          <div className="mt-4 text-xl">
            Interconnected floats with solar panels that move individually on wavy water will create
            so-called mismatch losses. This means that the worst angle to the sun at any given time
            will be dominant for how much electricity is produced. For land-based solar power, this
            is partly avoided by mounting all interconnected solar panels at the same angle, and in
            some cases by installing a so-called module level maximum power-point tracking.
          </div>
          <div className="mt-8 text-2xl font-body">Our solution</div>
          <div className="mt-4 text-xl">
            Sunlit Sea is developing a solution that handles mismatch losses at the module level in
            a very cost-effective way. This is possible because all power electronics and sensors
            for our panels are developed in-house.
          </div>
        </div>
        <div className="flex flex-col w-5/12">
          <img
            className="object-contain"
            src={'/img/technology/technology_3.jpg'}
            alt="technology_3"
          />
          <div className="px-24 text-xl text-center">
            Real time analysis of the sea state and float model results in quite good precision.
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology3;

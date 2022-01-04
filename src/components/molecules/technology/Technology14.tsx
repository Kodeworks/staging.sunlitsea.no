import React from 'react';

const Technology14: React.FC = () => {
  return (
    <>
      <div className="flex flex-row pb-8">
        <div className="flex flex-col w-7/12 px-12">
          <div className="text-3xl font-body">14. Power leaks pose a threat to life and health</div>
          <div className="mt-4 text-xl">
            Electric power at sea entails a risk of power leaks. This poses a danger to personnel
            moving in the area. The internationally accepted standard IEC 62548 describes safety
            mechanisms linked to each string of solar panels. Requirements are rarely set for safety
            mechanisms associated with each individual solar panel, which stems from the safety
            requirements for solar power plants on land. Thus, there is a danger of power leaks even
            if the string is disconnected at the inverter level.
          </div>
          <div className="mt-8 text-2xl font-body">Our solution</div>
          <div className="mt-4 text-xl">
            Sunlit Sea addresses this issue by developing panel-level auto-shutdown safety
            mechanisms. This means that electrical faults automatically disconnect each float so
            that it does not produce electricity. In addition, the same mechanism can be used in
            connection with maintenance, so that there is no electricity in panels that are, for
            example, washed by personnel, at the same time as the rest of the solar power plant is
            operated as usual.
          </div>
        </div>
        <div className="flex flex-col w-5/12">
          <img
            className="object-contain"
            src={'/img/technology/technology_14.jpg'}
            alt="technology_14"
          />
        </div>
      </div>
    </>
  );
};

export default Technology14;

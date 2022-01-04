import React from 'react';

const Technology2: React.FC = () => {
  return (
    <>
      <div className="flex flex-row pb-8">
        <div className="flex flex-col w-7/12 px-12">
          <div className="text-3xl font-body">2. Heat reduces power production</div>
          <div className="mt-4 text-xl">
            The efficiency of solar panels decreases with increasing temperature, and therefore land
            based solar systems will have a limited ability to cool.
          </div>
          <div className="mt-8 text-2xl font-body">Our solution</div>
          <div className="mt-4 text-xl">
            Our panels operate at a temperature close to the water temperature. The reason is the
            thermal conductivity of aluminum combined with optimal contact surface from the panel -
            via aluminum - into water. This effect will be further quantified through a study under
            the auspices of the Institute for Energy Technology.
          </div>
        </div>
        <div className="flex flex-col w-5/12">
          <img
            className="object-contain"
            src={'/img/technology/technology_2.jpg'}
            alt="technology_2"
          />
        </div>
      </div>
    </>
  );
};

export default Technology2;

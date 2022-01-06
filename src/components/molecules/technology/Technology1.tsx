import React from 'react';

const Technology1: React.FC = () => {
  return (
    <>
      <div className="flex flex-row pb-8">
        <div className="flex flex-col w-7/12 px-12">
          <div className="text-3xl font-body">1. Heat degrades solar panels over time</div>
          <div className="mt-4 text-xl">
            High temperatures affect diffusion, which promotes hotspots, ingress of contaminating
            elements and water ingress. Hotspots are typically artifacts from production or material
            defects that create small areas in the panel that reduce power production. Temperature
            fluctuations over time also contribute to wear on electrical connections inside the
            solar panel. Due to the way cells in solar panels are connected in series, the effect is
            further enhanced.
          </div>
          <div className="mt-8 text-2xl font-body">Our solution</div>
          <div className="mt-4 text-xl">
            Our panels operate at a temperature close to the water temperature. The reason is the
            thermal conductivity of aluminum combined with optimal contact surface from panel via
            aluminum into water. Simulations in PVsyst (analytics tool) show that the effect can be
            up to 20% difference in power production over 25 years, most significantly in the last
            years of an installation{"'"}s lifetime.
          </div>
        </div>
        <div className="flex flex-col w-5/12">
          <div className="ml-20 text-xl">Reduction in solar panel efficiency over time</div>
          <img
            className="object-contain"
            src={'/img/technology/technology_1.jpg'}
            alt="technology_1"
          />
          <div className="px-32 text-xl text-right">Hotspots on a solar panel</div>
        </div>
      </div>
    </>
  );
};

export default Technology1;

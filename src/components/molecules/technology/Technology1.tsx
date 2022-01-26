import React from 'react';
import TechnologyContent from './TechnologyContent';

const Technology1: React.FC = () => {
  return (
    <>
      <TechnologyContent
        description="High temperatures affect diffusion, which promotes hotspots, ingress of contaminating
            elements and water ingress. Hotspots are typically artifacts from production or material
            defects that create small areas in the panel that reduce power production. Temperature
            fluctuations over time also contribute to wear on electrical connections inside the
            solar panel. Due to the way cells in solar panels are connected in series, the effect is
            further enhanced."
        solution="Our panels operate at a temperature close to the water temperature. The reason is the
            thermal conductivity of aluminum combined with optimal contact surface from panel via
            aluminum into water. Simulations in PVsyst (analytics tool) show that the effect can be
            up to 20% difference in power production over 25 years, most significantly in the last
            years of an installation's lifetime."
        images={
          <>
            <div className="mx-auto">Reduction in solar panel efficiency over time</div>
            <img
              className="object-contain p-2 mx-auto bg-white"
              src={'/img/technology/technology_1_1.png'}
              alt="technology_1_1"
            />
            <img
              className="object-contain mx-auto mt-4"
              src={'/img/technology/technology_1_2.jpg'}
              alt="technology_1_2"
            />
            <div className="mx-auto">Hotspots on a solar panel</div>
          </>
        }
      />
    </>
  );
};

export default Technology1;

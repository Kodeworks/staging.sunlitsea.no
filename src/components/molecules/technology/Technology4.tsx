import React from 'react';
import TechnologyContent from './TechnologyContent';

const Technology4: React.FC = () => {
  return (
    <>
      <TechnologyContent
        description="Compared to solar power on land, floating solar installations are exposed to more and
    stronger mechanical stresses, higher humidity, overflowing waves, and more, which
    combined contribute to faster degradation of the panels and other electrical components."
        solution="Sunlit Sea uses cold stretch molding of aluminum flakes in a specially designed press
    tool, to produce halves of floats. The halves are welded together with friction welding,
    and internal cup-like shapes create a very strong structure not unlike a honeycomb
    sandwich construction. The structure supports the entire back of the panel, which means
    that even under demanding sea conditions, the sensitive components of the solar panel
    are protected. The design also effectively protects wires and electrical connections."
        images={
          <>
            <img
              className="object-contain mx-auto"
              src={'/img/technology/technology_4.jpg'}
              alt="technology_4"
            />
            <div className="mx-auto ">Aluminium cup shapes work like a honeycomb</div>
          </>
        }
      />
    </>
  );
};

export default Technology4;

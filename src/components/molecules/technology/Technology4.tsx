import React from 'react';

const Technology4: React.FC = () => {
  return (
    <>
      <div className="flex flex-row pb-8">
        <div className="flex flex-col w-7/12 px-12">
          <div className="text-3xl font-body">4. Movements degrade performance of solar panels</div>
          <div className="mt-4 text-xl">
            Compared to solar power on land, floating solar installations are exposed to more and
            stronger mechanical stresses, higher humidity, overflowing waves, and more, which
            combined contribute to faster degradation of the panels and other electrical components.
          </div>
          <div className="mt-8 text-2xl font-body">Our solution</div>
          <div className="mt-4 text-xl">
            Sunlit Sea uses cold stretch molding of aluminum flakes in a specially designed press
            tool, to produce halves of floats. The halves are welded together with friction welding,
            and internal cup-like shapes create a very strong structure not unlike a honeycomb
            sandwich construction. The structure supports the entire back of the panel, which means
            that even under demanding sea conditions, the sensitive components of the solar panel
            are protected. The design also effectively protects wires and electrical connections.
          </div>
        </div>
        <div className="flex flex-col w-5/12">
          <img
            className="object-contain"
            src={'/img/technology/technology_4.jpg'}
            alt="technology_4"
          />
          <div className="text-xl text-right ">Aluminium cup shapes work like a honeycomb</div>
        </div>
      </div>
    </>
  );
};

export default Technology4;

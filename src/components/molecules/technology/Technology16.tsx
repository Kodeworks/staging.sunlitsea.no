import React from 'react';
import TechnologyContent from './TechnologyContent';

const Technology16: React.FC = () => {
  return (
    <>
      <TechnologyContent
        description="Floating solar power is often based on plastic in the main structure. Plastic is
        problematic because some types of plastic can leak chemicals into the ocean and / or
        generate microplastics. Several types of plastic have an unsustainable production
        process."
        solution="Sunlit Sea mainly uses aluminum for the production of floats. Aluminum costs more energy
        to produce than plastic, and can thus bind more CO2. However, we use reputable
        suppliers, such as Speira gmbh, formerly Hydro Rolled Products, which get most of the
        aluminum from Norwegian aluminum plants powered by hydropower. In the upscaling phase,
        the deposit in the aluminum must be tied to the manufacturer, so that recycling is
        guaranteed."
        images={
          <>
            <img
              className="object-contain mx-auto"
              src={'/img/technology/technology_16_1.jpg'}
              alt="technology_16_1"
            />
            <div className="mx-auto ">Competing product - plastic floats</div>
            <div className="flex flex-row gap-2 px-4 mx-auto mt-6">
              <img
                className="object-contain w-1/2"
                src={'/img/technology/technology_16_2.jpg'}
                alt="technology_16_2"
              />
              <img
                className="object-contain w-1/2"
                src={'/img/technology/technology_16_3.jpg'}
                alt="technology_16_3"
              />
            </div>

            <div className="mx-auto ">Sunlit Sea{"'"}s form-pressed aluminium float</div>
          </>
        }
      />
    </>
  );
};

export default Technology16;

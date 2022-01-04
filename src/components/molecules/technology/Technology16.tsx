import React from 'react';

const Technology16: React.FC = () => {
  return (
    <>
      <div className="flex flex-row pb-8">
        <div className="flex flex-col w-7/12 px-12">
          <div className="text-3xl font-body">16. Floating solar apply unsustainable materials</div>
          <div className="mt-4 text-xl">
            Floating solar power is often based on plastic in the main structure. Plastic is
            problematic because some types of plastic can leak chemicals into the ocean and / or
            generate microplastics. Several types of plastic have an unsustainable production
            process.
          </div>
          <div className="mt-8 text-2xl font-body">Our solution</div>
          <div className="mt-4 text-xl">
            Sunlit Sea mainly uses aluminum for the production of floats. Aluminum costs more energy
            to produce than plastic, and can thus bind more CO2. However, we use reputable
            suppliers, such as Speira gmbh, formerly Hydro Rolled Products, which get most of the
            aluminum from Norwegian aluminum plants powered by hydropower. In the upscaling phase,
            the deposit in the aluminum must be tied to the manufacturer, so that recycling is
            guaranteed.
          </div>
        </div>
        <div className="flex flex-col w-5/12">
          <img
            className="object-contain"
            src={'/img/technology/technology_16_1.jpg'}
            alt="technology_16_1"
          />
          <div className="text-xl text-right">Competing product - plastic floats</div>
          <div className="flex flex-row justify-between px-4 mt-6">
            <img
              className="object-contain"
              src={'/img/technology/technology_16_2.jpg'}
              alt="technology_16_2"
            />
            <img
              className="object-contain"
              src={'/img/technology/technology_16_3.jpg'}
              alt="technology_16_3"
            />
          </div>

          <div className="pr-4 text-xl text-right">
            Sunlit Sea{"'"}s form-pressed aluminium float
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology16;

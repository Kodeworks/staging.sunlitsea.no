import React from 'react';

const Technology11: React.FC = () => {
  return (
    <>
      <div className="flex flex-row pb-8">
        <div className="flex flex-col w-7/12 px-12">
          <div className="text-3xl font-body">11. Challenges linked to short project lifespan</div>
          <div className="mt-4 text-xl">
            Today{"'"}s solutions for floating solar power are demanding to install and typically
            have just as cumbersome disassembly. Usually only projects that require a very long
            depreciation period are developed (usually 25 years). Removal of the plant has
            approximately the same costs as during installation.
          </div>
          <div className="mt-8 text-2xl font-body">Our solution</div>
          <div className="mt-4 text-xl">
            Sunlit Sea develops a flexible and efficient method of disassembly based on the same
            principles as installation. This means that you can operate with much shorter
            perspectives for an installation, in special cases all the way down to a few weeks of
            operating time. Examples of such short projects can be: dredging,
            construction,downstream or military defense activities.
          </div>
        </div>
        <div className="flex flex-col w-5/12">
          <img
            className="object-contain"
            src={'/img/technology/technology_11.jpg'}
            alt="technology_11"
          />
          <div className="text-xl text-right">
            Dredging is an example of an industry that requires a lot of energy for a limited period
            of time.
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology11;

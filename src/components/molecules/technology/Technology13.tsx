import React from 'react';

const Technology13: React.FC = () => {
  return (
    <>
      <div className="flex flex-col pb-8">
        <div className="flex flex-row px-12">
          <div className="flex flex-col">
            <div className="text-3xl font-body">13. Marine overgrowth impose large costs</div>
            <div className="mt-4 text-xl">
              Waterborne microorganisms and bacteria attach to floats and create a biofilm that over
              days or months, depending on salt content, sunlight, temperature and other factors,
              grows and affects the installation. Marine fouling is estimated to impose large
              operational costs on the operation of floating solar power.
            </div>
          </div>
          <img
            className="object-contain"
            src={'/img/technology/technology_13_1.jpg'}
            alt="technology_13_1"
          />
        </div>

        <div className="flex flex-row mt-12">
          <div className="flex flex-col pr-4">
            <div className="mt-8 text-2xl font-body">Our solution</div>
            <div className="mt-4 text-xl">
              Sunlit Sea is developing a solution for the prevention of marine fouling based on
              proven technology. Our unique aluminum float facilitates the use of technology that is
              unavailable to our competitors. The technology has been tested in the maritime sector
              and is well documented, but requires a float and inline production technology that
              only Sunlit Sea has.
            </div>
          </div>
          <img
            className="object-contain w-1/2"
            src={'/img/technology/technology_13_2.jpg'}
            alt="technology_13_2"
          />
        </div>
      </div>
    </>
  );
};

export default Technology13;

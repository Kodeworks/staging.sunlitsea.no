import React from 'react';

const Technology13: React.FC = () => {
  return (
    <>
      <div className="pb-4">
        <div className="flex flex-row flex-wrap gap-4 text-lg sm:text-xl">
          <div className="flex flex-col">
            <div className="mt-4 ">
              Waterborne microorganisms and bacteria attach to floats and create a biofilm that over
              days or months, depending on salt content, sunlight, temperature and other factors,
              grows and affects the installation. Marine fouling is estimated to impose large
              operational costs on the operation of floating solar power.
            </div>
          </div>
          <div className="flex flex-col lg:w-1/2">
            <div className="mt-4 text-xl lg:mt-8 sm:text-2xl font-body">Our solution</div>
            <div className="">
              Sunlit Sea is developing a solution for the prevention of marine fouling based on
              proven technology. Our unique aluminum float facilitates the use of technology that is
              unavailable to our competitors. The technology has been tested in the maritime sector
              and is well documented, but requires a float and inline production technology that
              only Sunlit Sea has.
            </div>
          </div>
          <img
            className="object-contain mx-auto"
            src={'/img/technology/technology_13_1.jpg'}
            alt="technology_13_1"
          />
        </div>
        <img
          className="object-contain w-full max-w-2xl mx-auto mt-4"
          src={'/img/technology/technology_13_2.png'}
          alt="technology_13_2"
        />
      </div>
    </>
  );
};

export default Technology13;

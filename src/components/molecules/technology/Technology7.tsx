import React from 'react';

const Technology7: React.FC = () => {
  return (
    <>
      <div className="flex flex-row pb-8">
        <div className="flex flex-col w-7/12 px-12">
          <div className="text-3xl font-body">7. Time consuming installation processes</div>
          <div className="mt-4 text-xl">
            Components for floating solar power are delivered on site by all of today{"'"}s
            suppliers. This requires a large number of installers, long installation time, large
            area along the water{"'"}s edge and temporary production facilities. This leads to
            greater exposure to weather windows, strains on local communities, thefts and more
            expensive financing and insurance. As a consequence, installation becomes more costly
            and it becomes more difficult to maintain quality control.
          </div>
          <div className="mt-8 text-2xl font-body">Our solution</div>
          <div className="mt-4 text-xl">
            Sunlit Sea prefabricate strings of floats that are packed in a standard 40-foot
            container. Total quality assurance of the entire production process up to complete
            strings will significantly reduce the number of errors, far into the project. The
            strings are deployed efficiently on the water with a lightning-fast and innovative
            installation method. Tests show that the method is up to 25 times faster than today{"'"}
            s fastest competitor.
          </div>
        </div>
        <div className="flex flex-col w-5/12">
          <img
            className="object-contain"
            src={'/img/technology/technology_7_1.jpg'}
            alt="technology_7_1"
          />
          <div className="text-xl text-right">
            Quite simple and quick deployment, two people per string
          </div>
          <img
            className="object-contain mt-4"
            src={'/img/technology/technology_7_2.jpg'}
            alt="technology_7_2"
          />
          <div className="text-xl text-right">High energy density does not affect deployment</div>
        </div>
      </div>
    </>
  );
};

export default Technology7;

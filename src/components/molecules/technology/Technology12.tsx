import React from 'react';

const Technology12: React.FC = () => {
  return (
    <>
      <div className="flex flex-col pb-8 text-lg xl:flex-row sm:text-xl">
        <div className="flex flex-col xl:w-7/12">
          <div className="mt-2 text-lg sm:text-xl lg:mt-4">
            Near the consumer center, there are mainly two markets for floating solar power:
          </div>
          <ul className="mt-4 ">
            Still water:
            <li className="ml-6 list-disc">Water with variable water level</li>
            <li className="ml-6 list-disc">Water that partially is dried out</li>
            <li className="ml-6 list-disc">Water with constant water level</li>
          </ul>
          <ul className="mt-4 ">
            Wavy water
            <li className="ml-6 list-disc">Salt</li>
            <li className="ml-6 list-disc">Fresh</li>
            <li className="ml-6 list-disc">
              In addition, there is a market for offshore, but it is outside our scope
            </li>
          </ul>
          <div className="mt-4 text-xl sm:text-2xl lg:mt-8 font-body">Our solution</div>
          <div className="">
            Sunlit Sea{"'"}s solution is robust with good hydrodynamic and aerodynamic properties,
            which means that it works well on both still and undulating water with low wave height.
            The performance per square foot is very high and the profile is low. The anodizing gives
            a dark color which makes the float less visible in the water. Overall, the solution is
            suitable for good architectural integration with the urban environment.
          </div>
        </div>
        <div className="flex flex-col mt-4 xl:w-5/12 xl:mt-0">
          <img
            className="object-contain mx-auto"
            src={'/img/technology/technology_12.jpg'}
            alt="technology_12"
          />
          <div className="mx-auto">Setouchi Kirei Mega Solar Power Plant</div>
        </div>
      </div>
    </>
  );
};

export default Technology12;

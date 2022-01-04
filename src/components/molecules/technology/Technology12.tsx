import React from 'react';

const Technology12: React.FC = () => {
  return (
    <>
      <div className="flex flex-row pb-8">
        <div className="flex flex-col w-7/12 px-12">
          <div className="text-3xl font-body">12. Centralized land-based solar is expensive</div>
          <div className="mt-4 text-xl">
            Near the consumer center, there are mainly two markets for floating solar power:
          </div>
          <ul className="mt-4 text-xl">
            Still water:
            <li className="ml-6 list-disc">Water with variable water level</li>
            <li className="ml-6 list-disc">Water that partially is dried out</li>
            <li className="ml-6 list-disc">Water with constant water level</li>
          </ul>
          <ul className="mt-4 text-xl">
            Wavy water
            <li className="ml-6 list-disc">Salt</li>
            <li className="ml-6 list-disc">Fresh</li>
            <li className="ml-6 list-disc">
              In addition, there is a market for offshore, but it is outside our scope
            </li>
          </ul>
          <div className="mt-8 text-2xl font-body">Our solution</div>
          <div className="mt-4 text-xl">
            Sunlit Sea{"'"}s solution is robust with good hydrodynamic and aerodynamic properties,
            which means that it works well on both still and undulating water with low wave height.
            The performance per square foot is very high and the profile is low. The anodizing gives
            a dark color which makes the float less visible in the water. Overall, the solution is
            suitable for good architectural integration with the urban environment.
          </div>
        </div>
        <div className="flex flex-col w-5/12">
          <img
            className="object-contain"
            src={'/img/technology/technology_12.jpg'}
            alt="technology_12"
          />
          <div className="text-xl text-right">Setouchi Kirei Mega Solar Power Plant</div>
        </div>
      </div>
    </>
  );
};

export default Technology12;

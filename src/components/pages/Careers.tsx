import React from 'react';
import PositionTile from './../atoms/PositionTile';
import careersData from '../../data/careers.json';

const Careers: React.FC = () => {
  const positionsAvailable = careersData
    .map((item) => item.positionsOpened)
    .reduce((prev, next) => prev + next);
  return (
    <>
      <div className="flex flex-col justify-center px-32 pb-16 whiteSecondaryGradient">
        <div className="mt-8 text-6xl text-center font-body">Careers in Sunlit Sea</div>
        <div className="w-1/2 mx-auto mt-8 text-2xl text-center">
          Sunlit Sea is in rapid growth and the need for experienced industry professionals is ever
          present. Come join our journey to supply the world with clean, water based solar energy.
        </div>
        <section className="flex flex-row mt-16">
          <img
            className="w-1/2 px-12 mx-4 mt-4"
            src={'/img/deployment_video_placeholder.jpg'}
            alt="Deployment video"
          />
          <div className="flex flex-col w-1/2 mt-2">
            <div className="text-5xl font-body">Who we are</div>
            <div className="mt-4 ml-4 text-2xl">
              Sunlit Sea AS is developing a new type of technology for floating solar cell
              installations. The solution is based on prefabrication of solar panel strings on
              robust floats, adapted for and integrated with a new and efficient solution for
              logistics. The floats are arranged in a tightly packed matrix of passively
              water-cooled panels that enable a much more efficient production than today{"'"}s
              solutions can deliver. The solution inherently has very good hydrodynamic and
              aerodynamic properties and withstands rough sea well. The combination of solid float
              and cooling results in lower degradation of the solar cells and lower O{'&'}M costs as
              well as better HSE conditions. The technology opens a completely new market for solar
              cells at sea, a market where, as of today, nothing but a pilot plant has been
              installed worldwide.
            </div>
          </div>
        </section>
        <section className="flex flex-row mt-16">
          <div className="flex flex-col w-1/2 mt-8 ml-4">
            <div className="text-5xl font-body">Why Sunlit Sea?</div>
            <ul className="pb-8 mt-8 ml-8 text-2xl">
              <li className="ml-6 list-disc">Builds new, ground breaking industry</li>
              <li className="ml-6 list-disc">Sets the new standard for the industry</li>
              <li className="ml-6 list-disc">
                Develops an extremely potent tool for installing significant amounts of new
                renewable energy
              </li>

              <li className="ml-6 list-disc">
                The only player that creates a fully integrated product for the FPV industry
              </li>
              <li className="ml-6 list-disc">Extremely close to the research community</li>
              <li className="ml-6 list-disc">
                Frequent implementation of research in every-day work
              </li>
              <li className="ml-6 list-disc">
                Take part in a process ‘from idea to final product’
              </li>
              <li className="ml-6 list-disc">Opportunity to join a fantastic journey</li>
            </ul>
          </div>
          <img
            className="w-1/2 px-8 mx-4"
            src={'/img/factory_video_placeholder.jpg'}
            alt="Factory video"
          />
        </section>
        <div className="mt-16 text-5xl text-center font-body">
          {positionsAvailable} job openings available
        </div>
        <div className="w-1/2 mx-auto mt-8 text-2xl text-center">
          We are currently looking for people with the following profiles. You may also send us an
          open application at{' '}
          <a
            className="underline text-support-dark"
            href={'mailto:post@sunlitsea.no?subject=' + encodeURIComponent('Open application')}
          >
            post@sunlitsea.no
          </a>
          .
        </div>
        <div className="flex flex-row flex-wrap justify-around">
          {careersData.map(({ positionsOpened, position, image, description }) => (
            <PositionTile
              positionsOpened={positionsOpened}
              position={position}
              description={description}
              image={image}
              key={position}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Careers;

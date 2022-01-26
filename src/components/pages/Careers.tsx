import React from 'react';
import PositionTile from './../atoms/PositionTile';
import careersData from '../../data/careers.json';
import { TopPagePoster } from '../molecules/TopPagePoster';
import { ContentContainer } from '../atoms/ContentContainer';

const Careers: React.FC = () => {
  const positionsAvailable = careersData
    .map((item) => item.positionsOpened)
    .reduce((prev, next) => prev + next);

  return (
    <div className="bg-white">
      <TopPagePoster
        image={'/img/careers/person-soldering.jpg'}
        imageAlt={'person soldering'}
        headingText="Careers in Sunlit Sea"
        subHeadingText={[
          'Sunlit Sea is in rapid growth and the need for experienced industry professionals is ever present.',
          ' Come join our journey to supply the world with clean, water based solar energy.',
        ]}
      />

      <ContentContainer className="flex flex-col gap-16 pb-16 mt-16">
        <div className="flex flex-col-reverse gap-8 lg:gap-16 lg:flex-row">
          <section className="flex flex-col-reverse items-start gap-8 lg:flex-col lg:w-1/2">
            <img
              className="object-contain "
              src={'/img/careers/team-working-in-lab.jpg'}
              alt="Team working in lab"
            />
            <div className="flex flex-col 2xl:mt-20">
              <h2 className="mt-8 text-4xl md:text-5xl xl:text-6xl font-body">Why Sunlit Sea?</h2>
              <ul className="mt-8 text-xl lg:pb-8 xl:text-2xl">
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
          </section>

          <section className="flex flex-col items-start gap-8 lg:gap-16 lg:w-1/2">
            <div className="flex flex-col ">
              <h2 className="mt-4 text-4xl md:text-5xl xl:text-6xl font-body md:mt-0">
                Who we are
              </h2>
              <div className="mt-4 text-xl xl:text-2xl">
                Sunlit Sea AS is developing a new type of technology for floating solar cell
                installations. The solution is based on prefabrication of solar panel strings on
                robust floats, adapted for and integrated with a new and efficient solution for
                logistics. The floats are arranged in a tightly packed matrix of passively
                water-cooled panels that enable a much more efficient production than today{"'"}s
                solutions can deliver. The solution inherently has very good hydrodynamic and
                aerodynamic properties and withstands rough sea well. The combination of solid float
                and cooling results in lower degradation of the solar cells and lower O{'&'}M costs
                as well as better HSE conditions. The technology opens a completely new market for
                solar cells at sea, a market where, as of today, nothing but a pilot plant has been
                installed worldwide.
              </div>
            </div>
            <img
              className="object-contain"
              src={'/img/careers/team-working-at-sea.jpg'}
              alt="Team working at sea"
            />
          </section>
        </div>
        <section>
          <h2 className="text-5xl md:text-6xl md:text-center font-headline">
            {positionsAvailable} job openings available
          </h2>
          <div className="mt-8 text-xl md:text-3xl md:text-center">
            <p>We are currently looking for people with the following profiles.</p>
            <p>
              You may also send us an open application at{' '}
              <a
                className="font-bold text-gray-900"
                href={'mailto:post@sunlitsea.no?subject=' + encodeURIComponent('Open application')}
              >
                post@sunlitsea.no
              </a>
              .
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 mt-16 mb-16 md:mt-24 lg:grid-cols-3 sm:grid-cols-2">
            {careersData.map(
              ({ positionsOpened, position, description, sector, location, trade, keywords }) => (
                <PositionTile
                  positionsOpened={positionsOpened}
                  position={position}
                  description={description}
                  sector={sector}
                  location={location}
                  trade={trade}
                  keywords={keywords}
                  key={position}
                />
              )
            )}
          </div>
        </section>
      </ContentContainer>
    </div>
  );
};

export default Careers;

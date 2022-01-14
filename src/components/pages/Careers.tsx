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

      <ContentContainer>
        <section className="flex md:flex-row flex-col mt-16 md:mt-24 lg:mt-40 items-start">
          <img
            className="md:w-1/2 w-full pr-8 object-contain"
            src={'/img/careers/team-working-in-lab.jpg'}
            alt="Team working in lab"
          />
          <div className="flex flex-col md:w-1/2 w-full md:pl-8">
            <h2 className="md:text-6xl text-4xl font-body md:mt-0 mt-4">Who we are</h2>
            <div className="mt-4 md:text-2xl text-xl">
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
      </ContentContainer>

      <ContentContainer>
        <section className="flex  md:flex-row flex-col-reverse mt-16 md:mt-24 lg:mt-40 items-start">
          <div className="flex flex-col md:w-1/2 w-full md:pr-8 pr-0">
            <h2 className="md:text-6xl text-4xl font-body mt-8">Why Sunlit Sea?</h2>
            <ul className="pb-8 mt-8 md:ml-8 md:text-2xl text-xl">
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
            className="md:w-1/2 w-full pl-8 object-contain"
            src={'/img/careers/team-working-at-sea.jpg'}
            alt="Team working at sea"
          />
        </section>
      </ContentContainer>

      <ContentContainer>
        <h2 className="lg:mt-52 mt-16 md:text-6xl text-5xl md:text-center font-headline">
          {positionsAvailable} job openings available
        </h2>
        <div className="mt-8 md:text-3xl text-xl md:text-center">
          <p>We are currently looking for people with the following profiles.</p>
          <p>
            You may also send us an open application at{' '}
            <a
              className="text-gray-900 font-bold"
              href={'mailto:post@sunlitsea.no?subject=' + encodeURIComponent('Open application')}
            >
              post@sunlitsea.no
            </a>
            .
          </p>
        </div>
      </ContentContainer>

      <ContentContainer className="grid mt-16 md:mt-24 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mb-16">
        {careersData.map(({ positionsOpened, position, image, description }) => (
          <PositionTile
            positionsOpened={positionsOpened}
            position={position}
            description={description}
            image={image}
            key={position}
          />
        ))}
      </ContentContainer>
    </div>
  );
};

export default Careers;

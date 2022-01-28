import React from 'react';
import Employee from './../atoms/Employee';
import Consultant from './../atoms/Consultant';
import teamData from '../../data/team.json';
import consultantsData from '../../data/consultants.json';
import { ContentContainer } from '../atoms/ContentContainer';
import { TopPagePoster } from '../molecules/TopPagePoster';

const AboutUs: React.FC = () => {
  return (
    <>
      <div className="bg-white">
        <TopPagePoster
          image={'/img/about/about_poster.jpg'}
          imageAlt={'Sunlit Sea Team'}
          headingText="The Team"
          subHeadingText={[
            'Our core team consists of full-time employees with great experience with business ' +
              'development, photovoltaics, industrial fabrication, software and hardware processes, ' +
              'hydrodynamics, material physics, engineering among others. Combined our team possesses ' +
              'the full spectrum needed to succeed with floating solar industrialization and ' +
              'implementation.',
          ]}
        />
        <ContentContainer className="flex flex-col justify-center py-16 bg-white lg:py-32 gap-y-16 lg:gap-y-32">
          <div className="grid justify-center grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            {teamData.map(({ name, image, role, description }) => (
              <Employee
                name={name}
                image={image}
                role={role}
                description={description}
                key={name}
              />
            ))}
          </div>

          <section>
            <div className="default-heading">Consultants</div>
            <div className="mt-4 default-body">
              Sunlit Sea also hires consultants to work on specialized tasks in multiple fields.
            </div>

            <div className="grid max-w-6xl grid-cols-3 mx-auto mt-8 gap-x-2 gap-y-2 sm:gap-x-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 3xl:max-w-full 3xl:gap-y-8 lg:gap-x-8">
              {consultantsData.map(({ name, image, role }) => (
                <Consultant name={name} image={image} role={role} key={name} />
              ))}
            </div>
          </section>

          <section className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2 lg:gap-16">
            <div className="flex min-h-[200px] md:min-h-full flex-col p-4   lg:p-6 xl:p-8 2xl:p-12 bg-primary-100">
              <h2 className="default-heading">Vision</h2>
              <div className="mt-4 default-body">
                Steering the world{'’'}s transition to floating solar as the primary renewable
                energy source.
              </div>
            </div>
            <div className="flex min-h-[200px] md:min-h-full flex-col p-4   lg:p-6 xl:p-8 2xl:p-12 bg-primary-100">
              <h2 className="default-heading">Mission</h2>
              <div className="mt-4 default-body">
                We strive to develop the most bankable, compelling and robust floating solar
                solution for inland and near-shore applications. We aim to accomplish this with
                clever engineering, smart sensors and data processing, and an inspiring, including
                and goal-driven culture.
              </div>
            </div>
          </section>
          <section>
            <div className="flex flex-col-reverse justify-between lg:flex-row xl:mt-8">
              <img
                className="object-contain mt-4 lg:mt-0 lg:w-1/2 lg:max-w-full max-w-full sm:max-w-[500px] mx-auto"
                src={'/img/about/culture.jpg'}
                alt="culture"
              />
              <div className="flex flex-col default-body lg:pl-8 ">
                <div className="default-heading">Culture</div>
                <div className="mt-4">
                  In Sunlit Sea we truly believe that a solid company culture forms the basis of any
                  robust brand. This not merely covers what happens inside our own office walls, but
                  more importantly how we interact with the outside world. Therefore, we strive for
                  transparency and open data processes. Our company encourages the public to
                  challenge our design basis through open source practice, which helps push
                  development.
                </div>
                <div className="mt-4">
                  In Sunlit Sea we share as we learn - a key factor if you strive to reach a common
                  vision. We are convinced that to break new ground, you must dare think
                  differently. Consequently we cherish the ability to explore and be ambitious in
                  our work.
                </div>
                <div className="mt-4">
                  In Sunlit Sea we understand that in any learning process - you must be prepared to
                  fail. For this reason our company is fault tolerant. Henceforth, we firmly think
                  that our ability to be respectful reflects in our work, our relationships and
                  thus, our culture.
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex flex-col justify-between lg:flex-row ">
              <div className="flex flex-col default-body lg:pr-8 ">
                <div className="default-heading">Network</div>
                <div className="mt-4 xl:mt-8 ">
                  Being a startup is a true challenge. For many it would not be possible to exist
                  without support and endorsement. Sunlit Sea has been able to further develop due
                  to financial programs and incentive schemes provided by Innovation Norway and The
                  Research Council of Norway. This has helped form the foundation of what could
                  become a new industrial fairy tale.
                </div>
                <div className="mt-4">
                  All our partners have contributed either as part of the core team, or in critical
                  phases of product development with cutting-edge expertise, support and marketing
                  of our technology. Sunlit Sea will continue to build alliances and partner
                  networks in the future. Norway has enormous experience and expertise to draw on
                  both from offshore and solar power. Together with our partners we will show that
                  Norway is the world{"'"}s leading energy nation!
                </div>
              </div>
              <img
                className="object-contain mt-4 lg:mt-0 lg:w-1/2 3xl:max-w-full max-w-full sm:max-w-[500px] mx-auto"
                src={'/img/about/partners.jpg'}
                alt="partners"
              />
            </div>
          </section>
        </ContentContainer>
      </div>
    </>
  );
};

export default AboutUs;

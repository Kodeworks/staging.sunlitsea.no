import React from 'react';
import Employee from './../atoms/Employee';
import Consultant from './../atoms/Consultant';
import teamData from '../../data/team.json';
import consultantsData from '../../data/consultants.json';

const AboutUs: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center bg-white">
        <div className="mt-16 ml-16 text-6xl font-body">The Team</div>
        <div className="mx-24 mt-4 text-3xl">
          Our core team consists of full-time employees with great experience with business
          development, photovoltaics, industrial fabrication, software and hardware processes,
          hydrodynamics, material physics, engineering among others. Combined our team possesses the
          full spectrum needed to succeed with floating solar industrialization and implementation.
        </div>
        <div className="flex flex-row flex-wrap justify-center px-32 mt-8">
          {teamData.map(({ name, image, role, description }) => (
            <Employee name={name} image={image} role={role} description={description} key={name} />
          ))}
        </div>

        <div className="mt-16 ml-16 text-5xl font-body">Consultants</div>
        <div className="mx-24 mt-4 text-3xl">
          Sunlit Sea also hires consultants to work on specialized tasks in multiple fields.
        </div>

        <div className="flex flex-row flex-wrap justify-center px-16">
          {consultantsData.map(({ name, image, role }) => (
            <Consultant name={name} image={image} role={role} key={name} />
          ))}
        </div>
        <div className="mt-16 ml-16 text-5xl font-body">Network</div>
        <div className="flex flex-row justify-between px-16 mt-4 mb-16">
          <div className="flex flex-col mx-24 text-3xl">
            <div className="mt-4">
              Being a startup is a true challenge. For many it would not be possible to exist
              without support and endorsement. Sunlit Sea has been able to further develop due to
              financial programs and incentive schemes provided by Innovation Norway and The
              Research Council of Norway. This has helped form the foundation of what could become a
              new industrial fairy tale.
            </div>
            <div className="mt-4">
              All our partners have contributed either as part of the core team, or in critical
              phases of product development with cutting-edge expertise, support and marketing of
              our technology. Sunlit Sea will continue to build alliances and partner networks in
              the future. Norway has enormous experience and expertise to draw on both from offshore
              and solar power. Together with our partners we will show that Norway is the world{"'"}
              s leading energy nation!
            </div>
          </div>
          <img className="object-contain w-1/2 px-16" src={'/img/partners.jpg'} alt="partners" />
        </div>
      </div>
    </>
  );
};

export default AboutUs;

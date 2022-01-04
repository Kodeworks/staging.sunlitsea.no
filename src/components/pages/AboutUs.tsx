import React from 'react';
import Employee from './../atoms/Employee';
import Consultant from './../atoms/Consultant';

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
        <div className="flex flex-row justify-between px-32 mt-8 ">
          <Employee
            name="PER LINDBERG"
            image="per"
            role="FOUNDER / CEO"
            description="With more than 10 years of experience within the solar industry, Per has acquired a deep understanding and a holistic perspective of the entire solar electricity value chain. 
            He is a former Phd research fellow at the University of Oslo / Semiconductor Physics Group, holds a masters degree in materials physics and many years experience within business development and consultancy."
          />
          <Employee
            name="EIRIK LARSEN"
            image="eirik"
            role="FOUNDER / CDO / CFO"
            description="Eirik Larsen is the founder, CEO and major shareholder of industrial IT consultancy Kodeworks of Norway. He leads IT software and hardware projects at Sunlit Sea;  monitoring and analysis of sensor data - in addition to sales, investor relations and business development. Eirik has a leadership background from the Norwegian Armed Forces and a proven track record with business management and product development for a variety of national and international brands/institutions."
          />
        </div>
        <div className="flex flex-row justify-between px-32 mt-16 ">
          <Employee
            name="BJØRN HERVOLD RIISE"
            image="bjorn"
            role="CTO"
            description="Bjørn is a Hydrodynamics and metocean specialist with a background from DNV, with extensive experience as a project manager and product developer. He obtained his PhD at University of Oslo in Marine Hydrodynamics and has solid experience as a diver in the Norwegian Armed Forces."
          />
          <Employee
            name="Guillaume Kegelart"
            image="guillaume"
            role="CHIEF OF INDUSTRIALIZATION"
            description="Guillaume is an accomplished mechanical/industrial engineer with a Masters degree from ParisTech. He is co-founder of SportTech and possesses broad knowledge about product establishment, hardware design and supply management. Guillaume is managing the development of Sunlit Sea's production lines."
          />
        </div>

        <div className="mt-16 ml-16 text-5xl font-body">Consultants</div>
        <div className="mx-24 mt-4 text-3xl">
          Sunlit Sea also hires consultants to work on specialized tasks in multiple fields.
        </div>

        <div className="flex flex-row justify-between px-16 mt-16">
          <Consultant name="GRAHAM MUTER" image="graham" role="INDUSTRIAL PROCESSES" />
          <Consultant name="JAN BURAK" image="jan" role="IT DEVELOPER" />
          <Consultant name="KIM JOHNSEN" image="kim" role="BOARD MEMBER / FINANCE" />
          <Consultant name="SIMEN STORVIK" image="simen" role="DATA PROCESSING" />
        </div>
        <div className="flex flex-row justify-between px-16 mt-16">
          <Consultant name="FERDY WESSING" image="ferdy" role="IT DEVELOPER" />
          <Consultant name="OLE MARIUS FORBORD" image="ole" role="ELECTRICAL ENGINEER" />
          <Consultant name="RUNE HOLMGREN" image="rune" role="ELECTRONICS AND COMMUNICATION" />
          <Consultant name="WILCO HEKKERT" image="wilco" role="B2B SALES" />
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

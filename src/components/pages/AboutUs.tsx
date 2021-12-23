import React from 'react';
import Employee from './../atoms/Employee';
import Consultant from './../atoms/Consultant';

const AboutUs: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center bg-white">
        <div className="mt-16 ml-16 text-6xl font-body">The Team</div>
        <div className="mx-24 mt-4 text-3xl">
          The core team consist of full-time employees with great experience in various fields. Some
          pitch/description of team dynamics, competencies etc. Maybe some info about the company in
          general around here.
        </div>
        <div className="flex flex-row justify-between px-32 mt-8 ">
          <Employee
            name="PER LINDBERG"
            image="per"
            role="FOUNDER / CEO"
            description="With more than 10 years of experience with solar energy, Per has acquired both a deep understanding and a holistic perspective in this field."
          />
          <Employee
            name="EIRIK LARSEN"
            image="eirik"
            role="FOUNDER / CDO / CFO"
            description="Eirik leads IT software and hardware projects in Sunlit Sea. He has 16 years of experience as a software developer and he is the CEO of the Kodeworks company."
          />
        </div>
        <div className="flex flex-row justify-between px-32 mt-16 ">
          <Employee
            name="BJØRN HERVOLD RIISE"
            image="bjorn"
            role="CTO"
            list={[
              'PhD University of Oslo',
              'Hydrodynamics expert with experience from DNV',
              'Project manager',
              'Product development',
            ]}
          />
          <Employee
            name="Guillaume Kegelart"
            image="guillaume"
            role="CHIEF OF INDUSTRIALIZATION"
            list={[
              'MSc mechanical engineering Arts & Metiers ParisTech',
              'Founder of SportTech, product development',
              'Experience with planning and implementation of production lines',
              "Responsible for development of Sunlit Sea's production lines",
            ]}
          />
        </div>

        <div className="mt-16 ml-16 text-5xl font-body">Consultants</div>
        <div className="mx-24 mt-4 text-3xl">
          Sunlit Sea hires multiple consultants to work on specialized tasks. Some more description
          here. Include Karim, Thomas, production line workers? (Maybe unnecessary to split into
          team and consultants sections / some better section division?)
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
            <div className="underline">
              Decide whether to just translate this or put something else here
            </div>
            <div className="mt-4">
              Uten støtte fra Innovasjon Norge og Forskningsrådet hadde ikke Sunlit Sea eksistert i
              dag. Både finansiell støtte og insentivordninger som har ført oss i kontakt med
              partnere, legger til rette for å skape det som skal bli et nytt norsk industrieventyr.
            </div>
            <div className="mt-4">
              Alle våre partnere har bidratt enten som del av kjerneteamet, eller i kritiske faser
              av produktutviklingen med spisskompetanse, eller med støtte og markedsføring av vår
              teknologi.
            </div>
            <div className="mt-4">
              Sunlit Sea vil fortsette å bygge allianser og partnernettverk i tiden framover. Norge
              har en enorm erfaring og kompetanse å dra på både innen offshore og nå i nyere tid
              solkraft. Sammen med våre partnere skal vi vise at Norge er verdens energinasjon!
            </div>
          </div>
          <img className="object-contain w-1/2 px-16" src={'/img/partners.jpg'} alt="partners" />
        </div>
      </div>
    </>
  );
};

export default AboutUs;

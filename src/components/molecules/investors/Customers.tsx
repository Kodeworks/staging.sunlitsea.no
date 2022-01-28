import React from 'react';

const Customers: React.FC = () => {
  return (
    <>
      <div className="flex flex-row px-16 pt-16 pb-16 bg-white">
        <div className="flex flex-col w-7/12 pr-8">
          <div className="text-5xl font-headline">Kunder</div>
          <ul className="mt-8 text-3xl">
            <li className="mt-4 ml-8 list-disc">
              3 prototyper er testet med økende grad av technology readiness level hos fremtidige
              kunder. 2 prototyper testes i 2021.
            </li>
            <li className="mt-4 ml-8 list-disc">
              Leads på prosjekter hos kunder via partnernettverk og vår Smart Quoter webløsning,
              totalt 13 MWp
            </li>
            <li className="mt-4 ml-8 list-disc">3 planlagte pilotprosjekter, 500 kWp totalt</li>
            <li className="mt-4 ml-8 list-disc">1 planlagt kommersielt prosjekt, 1 MWp.</li>
            <li className="mt-4 ml-8 list-disc">
              Salgs- og markedsdirektør ansettes 2021 for økt fokus på salg etter hvert som vi
              nærmer oss kommersialisering.
            </li>
          </ul>
        </div>

        <div className="flex flex-col w-5/12 pl-48">
          <img className="object-contain" src="/img/investors/customers_1.jpg" alt="customers_1" />
          <div className="text-xl text-right ">
            Lierstranda, intensjonsavtale med Eidos på 1 MWp
          </div>
          <img
            className="object-contain mt-8"
            src="/img/investors/customers_2.jpg"
            alt="customers_2"
          />
          <div className="text-xl text-right ">Pilot-site hos Orica på Engene</div>
        </div>
      </div>
    </>
  );
};

export default Customers;

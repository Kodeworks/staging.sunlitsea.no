import React from 'react';
import WhyInvest from '../molecules/investors/WhyInvest';
import Governance from '../molecules/investors/Governance';
import Market from './../molecules/investors/Market';
import Costs from './../molecules/investors/Costs';
import Customers from './../molecules/investors/Customers';
import Marketing from './../molecules/investors/Marketing';
import Financing from './../molecules/investors/Financing';
import Patent from './../molecules/investors/Patent';

const Investors: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center bg-primary-50">
        <div className="mt-24 text-4xl text-center mx-36 font-body">
          <b>Sunlit Sea</b> utvikler ny teknologi for flytende solcelleinstallasjoner som åpner et
          helt nytt marked for solceller installert nearshore, et marked hvor det per dags dato ikke
          er installert annet en pilotanlegg på verdensbasis. Teknologien er bevist og vi gjør en
          emisjon for å skalere opp produksjonskapasiteten.
        </div>
        <WhyInvest />
        <Governance />
        <Market />
        <Costs />
        <Customers />
        <Marketing />
        <Financing />
        <Patent />
      </div>
    </>
  );
};

export default Investors;

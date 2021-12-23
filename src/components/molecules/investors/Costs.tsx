import React from 'react';

const Costs: React.FC = () => {
  return (
    <>
      <div className="flex flex-row px-16 pt-16 pb-16 bg-secondary-50">
        <div className="flex flex-col w-1/2 pr-8">
          <div className="text-5xl font-body">Kostnader med flytende solkraft</div>
          <div className="mt-8 text-2xl">
            CAPEX, OPEX og LCOE* for prosjekter innen flytende solkraft på sjø vurderes gjerne av
            analytikere til å domineres av: langvarige installasjonsprosesser med lav kvalitet,
            marin begroing og tilsmussing, usikkerhet rundt effekten av langvarig drift, og dyr
            finansiering som følge av risiko, samt en rekke andre faktorer.
          </div>
          <div className="mt-8 text-2xl">
            Sunlit Sea har en svært effektiv produksjonsprosess, kvalitetssikring,
            installasjonsprosedyre samt forutsigbare maxbelastninger på forankringssystemet, som
            gjør at CAPEX blir en del lavere enn konkurransen. OPEX påvirkes positivt ved at vi
            utvikler teknologi som har potensiale til å kraftig begrense marin begroing, samt
            arbeidet vi sammen med partnere legger ned for å håndtere marin tilsmussing. LCOE er for
            Sunlit Sea positivt influert av kvaliteten i produktet: stivheten til flottøren,
            monitorering i sanntid, liming, sveising; som gjør at Sunlit Seas løsning degraderer
            mindre over tid. Videre legger vårt unike arbeid innen marine grade performance ratio
            opp til vesentlig lavere finansiell risiko Sunlit Sea-prosjekter.
          </div>
          <div className="mt-4 text-xl">
            * CAPEX = kapitalkostnader, OPEX = driftsutgifter, LCOE = energikostnad over
            teknologiens levetid
          </div>
        </div>

        <div className="flex flex-col w-1/2 pl-16">
          <img className="object-contain pl-8 mt-4" src="/img/investors/costs.jpg" alt="costs" />
          <div className="text-xl text-right ">
            LCOE, årlige estimat for ground mount, floating og Sunlit Sea. Sungrow og Ciel {'&'}{' '}
            Terre dominerer statistikken, men antall tilbydere vokser raskt. Generelt er LCOE
            synkende, men har stor usikkerhet i estimater. Sunlit Sea estimeres å levere vesentlig
            bedre LCOE enn konkurrentene så fort produktet er kommersialisert.
          </div>
          <div className="mt-4 text-xl text-right">
            Våre estimater for ground mount og floating solar er basert på Sunlit Seas tolkning av
            data fra ulike kilder. Estimater for Sunlit Seas LCOE er basert på forutsetninger som
            vår progresjon, produktforbedringer, bedre solcelleteknologi, pris på råmaterialer,
            markedets utvikling etc.
          </div>
        </div>
      </div>
    </>
  );
};

export default Costs;

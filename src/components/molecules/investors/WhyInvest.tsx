import React from 'react';
import WhyInvestTile from '../../atoms/WhyInvestTile';

const WhyInvest: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-around px-32 mt-24">
        <div className="text-5xl font-body">Hvorfor investere i Sunlit Sea</div>
        <div className="flex flex-row mt-8">
          <WhyInvestTile name="Svært god historikk på verdistigning fra 2019 til nå" number="1" />
          <WhyInvestTile
            name="Deep-tech; men den største teknologirisikoen er allerede overkommet"
            number="2"
          />
          <WhyInvestTile
            name="Enormt marked estimert til ytterligere 10 GWp installert kapasitet innen 2025"
            number="3"
          />
          <WhyInvestTile
            name="Pilotkunder etablert i Norge. Sterk interesse fra utland"
            number="4"
          />
        </div>
        <div className="flex flex-row mt-8">
          <WhyInvestTile name="Faglig kompetent og stabilt partnernettverk" number="5" />
          <WhyInvestTile
            name="Strategiske investorer på aksjonærlisten og i styret. Sterkt tverrfaglig team med spisskompetanse innen sine teknologier"
            number="6"
          />
          <WhyInvestTile
            name="Teknologien gir markedets laveste pris på near-shore flytende solkraft, både på kapitalkostnad (CAPEX), operasjonskostnad (OPEX) og levelized-cost-of-electricity (LCOE)"
            number="7"
          />
        </div>
      </div>
    </>
  );
};

export default WhyInvest;

import React from 'react';
import WhyInvestTile from '../../atoms/WhyInvestTile';

const WhyInvest: React.FC = () => {
  return (
    <>
      <div className="flex flex-col">
        <h2 className="default-heading">Why invest in Sunlit Sea?</h2>
        <div className="flex flex-row flex-wrap justify-center gap-4 mt-8 md:flex-nowrap">
          <WhyInvestTile name="Very good history of gained value from 2019 to now" number="1" />
          <WhyInvestTile
            name="Deep-tech; where the biggest technology risk has already been overcome"
            number="2"
          />
          <WhyInvestTile
            name="Huge market estimated at an additional 10 GWp of installed capacity by 2025"
            number="3"
          />
          <WhyInvestTile
            name="Pilot customers established in Norway. Strong interest internationally"
            number="4"
          />
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-4 mt-4 md:flex-nowrap">
          <WhyInvestTile name="Professionally competent and stable partner network" number="5" />
          <WhyInvestTile
            name="Strategic investors on the shareholder list and on the board. Strong interdisciplinary team with cutting-edge expertise in their technologies"
            number="6"
          />
          <WhyInvestTile
            name="The technology offers the market's lowest price for near-shore solar power, both in terms of capital cost (CAPEX), operating cost (OPEX) and levelized-cost-of-electricity (LCOE)"
            number="7"
          />
        </div>
      </div>
    </>
  );
};

export default WhyInvest;

import React from 'react';
import WhyInvest from '../molecules/investors/WhyInvest';
import Governance from '../molecules/investors/Governance';
import Costs from './../molecules/investors/Costs';
import Marketing from './../molecules/investors/Marketing';
import Patent from './../molecules/investors/Patent';

const Investors: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center bg-primary-50">
        <div className="mt-24 text-4xl text-center mx-36 font-body">
          <b>Sunlit Sea</b> is developing new technology for floating solar installations that opens
          a completely new market for systems nearshore, a market where as of today no other than a
          pilot plant has been installed (worldwide). The technology has been proven and we are
          shortly making our second public offering to scale up production capacity.
        </div>
        <WhyInvest />
        <Governance />
        <Costs />
        <Marketing />
        <Patent />
      </div>
    </>
  );
};

export default Investors;

import React from 'react';
import WhyInvest from '../molecules/investors/WhyInvest';
import Governance from '../molecules/investors/Governance';
import Costs from './../molecules/investors/Costs';
import Marketing from './../molecules/investors/Marketing';
import Patent from './../molecules/investors/Patent';
import { TopPagePoster } from '../molecules/TopPagePoster';
import { ContentContainer } from '../atoms/ContentContainer';

const Investors: React.FC = () => {
  return (
    <>
      <div className="bg-white ">
        <TopPagePoster
          image={'/img/investors/investors_poster.jpg'}
          imageAlt={'floating solar panels'}
          headingText="Investor"
          subHeadingText={[
            'Sunlit Sea is developing new technology for floating solar installations that opens a completely new market for systems nearshore, ' +
              'a market where as of today no other than a pilot plant has been installed (worldwide). ' +
              'The technology has been proven and we are shortly making our second public offering to scale up production capacity.',
          ]}
        />
        <ContentContainer>
          <div className="flex flex-col gap-32 py-32">
            <WhyInvest />
            <Governance />
            <Marketing />
            <div className="flex flex-row gap-16">
              <Costs />
              <Patent />
            </div>
          </div>
        </ContentContainer>
      </div>
    </>
  );
};

export default Investors;

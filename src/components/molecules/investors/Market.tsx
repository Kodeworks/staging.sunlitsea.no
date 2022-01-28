import React from 'react';

const Market: React.FC = () => {
  return (
    <>
      <div className="flex flex-col px-16 pt-16 pb-16 mt-16 text-3xl bg-white">
        <div className="flex flex-row">
          <div className="flex flex-col w-1/2 ">
            <div className="text-5xl font-headline">Marked</div>
            <div className="mt-16">
              The market for floating solar power is forecast to have a compound annual growth rate
              (CAGR) of 25% - 40% * by 2027.
            </div>
            <div className="mt-8">From SERIS 2021 report about floating solar power projects:</div>
            <ul>
              <li className="ml-8 list-disc">698 projects are established</li>
              <li className="ml-8 list-disc">Over 300 projects are planned</li>
              <li className="ml-8 list-disc">Large delays (because of COVID)</li>
              <li className="ml-8 list-disc">1.5 GW in development and finished in 2021</li>
            </ul>
          </div>

          <div className="flex flex-col w-1/2">
            <div className="text-2xl text-center">
              Cumulative yearly installations (MWp) worldwide
            </div>
            <img className="object-contain mt-4" src="/img/investors/market_1.jpg" alt="market_1" />
          </div>
        </div>
        <div className="ml-8 text-2xl">
          * CAGR is read from various sources and has high uncertainty. SERIS does not forecast CAGR
          in the latest report.
        </div>
        <div className="flex flex-row mt-24">
          <div className="flex flex-col w-1/2">
            <div className="mt-16">SERIS:</div>
            <ul>
              <li className="ml-8 list-disc">
                Floating solar is largest in Asia, with Europe in second
              </li>
              <li className="ml-8 list-disc">
                206 MW is installed near coast (Sunlit Sea{"'"}s primary market)
              </li>
              <li className="ml-8 list-disc">
                1 790 MW is installed on dams (Sunlit Sea{"'"}s secondary market)
              </li>
            </ul>
            <div className="mt-8">Project sizes are on the way up to an average size of 8 MWp.</div>
          </div>

          <div className="flex flex-col w-1/2">
            <div className="text-2xl text-center">Average projects sizes (kWp) worldwide</div>
            <img className="object-contain" src="/img/investors/market_2.jpg" alt="market_2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Market;

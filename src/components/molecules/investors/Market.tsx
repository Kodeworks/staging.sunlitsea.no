import React from 'react';

const Market: React.FC = () => {
  return (
    <>
      <div className="flex flex-col px-16 pt-16 pb-16 mt-16 text-3xl bg-white">
        <div className="flex flex-row">
          <div className="flex flex-col w-1/2 ">
            <div className="text-5xl font-body">Marked</div>
            <div className="mt-16">
              Markedet for flytende solkraft spås en compound annual growth rate (CAGR) på 25% -
              40%* fram mot 2027.
            </div>
            <div className="mt-8">
              Fra SERIS 2021-rapport over kjente flytende solkraft-prosjekter:
            </div>
            <ul>
              <li className="ml-8 list-disc">698 prosjekt er etablert</li>
              <li className="ml-8 list-disc">Mer enn 300 prosjekt planlagt</li>
              <li className="ml-8 list-disc">Store forsinkelser (pga COVID)</li>
              <li className="ml-8 list-disc">1.5 GW under konstruksjon og ferdig 2021</li>
            </ul>
          </div>

          <div className="flex flex-col w-1/2">
            <div className="text-2xl text-center">
              Kumulative årlige installasjoner (MWp) på verdensbasis
            </div>
            <img className="object-contain mt-4" src="/img/investors/market_1.jpg" alt="market_1" />
          </div>
        </div>
        <div className="ml-8 text-2xl">
          * CAGR er lest fra flere ulike kilder og har høy usikkerhet. SERIS prognostiserer ikke
          CAGR i siste rapport.
        </div>
        <div className="flex flex-row mt-24">
          <div className="flex flex-col w-1/2">
            <div className="mt-16">SERIS:</div>
            <ul>
              <li className="ml-8 list-disc">
                Flytende solkraft er størst i Asia, Europa følger etter
              </li>
              <li className="ml-8 list-disc">
                206 MW er installert kystnært (Sunlit Seas primærmarked)
              </li>
              <li className="ml-8 list-disc">
                1 790 MW er installert på dammer (Sunlit Seas sekundærmarked)
              </li>
            </ul>
            <div className="mt-8">
              Prosjektstørrelser er på vei oppover mot en snitt-størrelse på 8 MWp.
            </div>
          </div>

          <div className="flex flex-col w-1/2">
            <div className="text-2xl text-center">
              Gjennomsnittlige prosjektstørrelser (kWp) på verdensbasis
            </div>
            <img className="object-contain" src="/img/investors/market_2.jpg" alt="market_2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Market;

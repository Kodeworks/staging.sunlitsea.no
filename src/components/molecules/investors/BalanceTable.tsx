import React from 'react';

const BalanceTable: React.FC = () => {
  return (
    <>
      <div className="flex flex-row mt-12 text-2xl leading-normal">
        <div className="flex flex-col w-4/12 ">
          <div className="font-semibold bg-secondary-200">NOK{"'"}000</div>
          <div className="mt-8 font-semibold">Eiendeler</div>
          <div className="font-semibold ">Anleggsmidler</div>
          <div>Fordringer</div>
          <div className="border-b-2 border-black">Bankinnskud kontanter ol.</div>
          <div className="font-semibold border-b-2 border-black">Omløpsmidler</div>
          <div className="font-semibold border-b-2 border-black">Eiendeler</div>
          <div className="mt-8 font-semibold">Egenkapital og gjeld</div>
          <div className="font-semibold ">Egenkapital</div>
          <div className="font-semibold ">Langsiktig gjeld</div>
          <div className="">Leverandørgjeld</div>
          <div className="">Skyldige offentlige avgifter</div>
          <div className="border-b-2 border-black">Annen kortsiktig gjeld</div>
          <div className="font-semibold border-b-2 border-black">Total kortsiktig gjeld</div>
          <div className="font-semibold border-b-2 border-black">Gjeld</div>
          <div className="font-semibold border-b-2 border-black">Egenkapital og gjeld</div>
        </div>
        <div className="flex flex-col w-5/12 text-right">
          <div className="font-semibold bg-secondary-200">01.01.2021 {'-'} 30.09.2021</div>
          <div className="invisible mt-8 font-semibold">0</div>
          <div className="font-semibold ">10 508</div>
          <div>1 809</div>
          <div className="border-b-2 border-black">9 526</div>
          <div className="font-semibold border-b-2 border-black">11 335</div>
          <div className="font-semibold border-b-2 border-black">21 843</div>
          <div className="invisible mt-8 font-semibold">0</div>
          <div className="font-semibold ">18 430</div>
          <div className="font-semibold ">2 950</div>
          <div className="">817</div>
          <div className="">-479</div>
          <div className="border-b-2 border-black">125</div>
          <div className="font-semibold border-b-2 border-black">463</div>
          <div className="font-semibold border-b-2 border-black">3 413</div>
          <div className="font-semibold border-b-2 border-black">21 843</div>
        </div>
        <div className="flex flex-col w-3/12 text-right">
          <div className="font-semibold bg-secondary-200">2020</div>
          <div className="invisible mt-8 font-semibold">0</div>
          <div className="font-semibold ">-</div>
          <div>2 185</div>
          <div className="border-b-2 border-black">351</div>
          <div className="font-semibold border-b-2 border-black">2 536</div>
          <div className="font-semibold border-b-2 border-black">2 536</div>
          <div className="invisible mt-8 font-semibold">0</div>
          <div className="font-semibold ">-374</div>
          <div className="font-semibold ">2 950</div>
          <div className="">1 250</div>
          <div className="">-1 478</div>
          <div className="border-b-2 border-black">187</div>
          <div className="font-semibold border-b-2 border-black">-40</div>
          <div className="font-semibold border-b-2 border-black">2 910</div>
          <div className="font-semibold border-b-2 border-black">2 536</div>
        </div>
      </div>
    </>
  );
};

export default BalanceTable;

import React from 'react';

const ResultTable: React.FC = () => {
  return (
    <>
      <div className="flex flex-row mt-12 text-2xl leading-normal">
        <div className="flex flex-col w-4/12 ">
          <div className="font-semibold bg-secondary-200">NOK{"'"}000</div>
          <div className="mt-8">Salgsinntekter</div>
          <div className="border-b-2 border-black border-dashed">Tilskudd</div>
          <div className="font-semibold ">Driftsinntekter</div>
          <div>Varekostnad</div>
          <div>Lønnskostnad</div>
          <div className="border-b-2 border-black border-dashed">Annen driftskostnad</div>
          <div className="font-semibold border-b-2 border-black">Driftskostnad</div>
          <div className="font-semibold border-b-2 border-black">Driftsresultat</div>
          <div className="font-semibold border-b-2 border-black">Netto finansresultat</div>
          <div className="font-semibold border-b-2 border-black">Periodens result</div>
        </div>
        <div className="flex flex-col w-5/12 text-right">
          <div className="font-semibold bg-secondary-200">01.01.2021 {'-'} 30.09.2021</div>
          <div className="mt-8">195</div>
          <div className="border-b-2 border-black border-dashed">9 502</div>
          <div className="font-semibold ">9 697</div>
          <div>8</div>
          <div>1 266</div>
          <div className="border-b-2 border-black border-dashed">1 806</div>
          <div className="font-semibold border-b-2 border-black">3 080</div>
          <div className="font-semibold border-b-2 border-black">6 617</div>
          <div className="font-semibold border-b-2 border-black">-38</div>
          <div className="font-semibold border-b-2 border-black">6 579</div>
        </div>
        <div className="flex flex-col w-3/12 text-right">
          <div className="font-semibold bg-secondary-200">2020</div>
          <div className="mt-8">{'-'}</div>
          <div className="border-b-2 border-black border-dashed">4 805</div>
          <div className="font-semibold ">4 805</div>
          <div>8 179</div>
          <div>976</div>
          <div className="border-b-2 border-black border-dashed">596</div>
          <div className="font-semibold border-b-2 border-black">9 751</div>
          <div className="font-semibold border-b-2 border-black">-4 946</div>
          <div className="font-semibold border-b-2 border-black">12</div>
          <div className="font-semibold border-b-2 border-black">-4 934</div>
        </div>
      </div>
    </>
  );
};

export default ResultTable;

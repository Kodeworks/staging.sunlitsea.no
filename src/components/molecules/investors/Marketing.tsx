import React from 'react';

const Marketing: React.FC = () => {
  return (
    <>
      <div className="flex flex-col px-16 pt-16 pb-16 bg-white">
        <div className="flex flex-row">
          <div className="flex flex-col w-7/12 pr-8">
            <div className="text-5xl font-body">Markedsføring</div>
            <div className="mt-8 text-3xl">
              Smart Quoter legger til rette for web-basert kundeinteraksjon. Kunder kan selv
              pre-prosjektere sitt flytende solkraftverk og få indikative data om CAPEX, OPEX,
              produksjon, vind og bølgeforhold, krav til forankringssystem, leveransetid, etc.
            </div>
            <div className="mt-4 text-3xl">
              Systemet har allerede generert leads på prosjekter og fungerer godt til å lette på
              salgsarbeidet.
            </div>
          </div>

          <div className="flex flex-col w-5/12 pl-48">
            <img
              className="object-contain"
              src="/img/investors/marketing_1.jpg"
              alt="marketing_1"
            />
            <div className="text-xl text-right ">Smart Quoter, 100 MWp i Abu Dhabi</div>
          </div>
        </div>
        <div className="flex flex-row mt-8">
          <div className="w-1/6" />
          <div className="flex flex-col w-5/12 pl-48">
            <img
              className="object-contain"
              src="/img/investors/marketing_2.jpg"
              alt="marketing_2"
            />
            <div className="text-xl text-right ">
              Til beregning av marine grade performance ratio brukes blant annet bølge- og vinddata
              for en lokasjon.
            </div>
          </div>

          <div className="flex flex-col w-5/12 pl-48">
            <img
              className="object-contain"
              src="/img/investors/marketing_3.jpg"
              alt="marketing_3"
            />
            <div className="text-xl text-right ">
              Solinnstråling for en lokasjon, hentet fra offentlige kilder
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marketing;

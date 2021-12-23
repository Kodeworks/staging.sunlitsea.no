import React from 'react';

const Technology7: React.FC = () => {
  return (
    <>
      <div className="flex flex-row pb-8">
        <div className="flex flex-col w-7/12 px-12">
          <div className="text-3xl font-body">
            7. Installasjon av flytende solkraft er tidkrevende, kostnadsdrivene og
            kvalitetsreduserende
          </div>
          <div className="mt-4 text-xl">
            Komponenter til flytende solkraft leveres on site av samtlige av dagens leverandører.
            Dette krever et stort antall installatører, lang installasjonstid, stort areal langs
            vannkanten og midlertidige produksjonsfasiliteter. Dette medfører større eksponering mot
            værvinduer, belastning på lokalsamfunn, tyverier og dyrere finansiering og forsikring.
            Som en konsekvens blir installasjonen dyrere og det blir vanskeligere å opprettholde
            kvalitetskontroll.
          </div>
          <div className="mt-8 text-2xl font-body">Vår løsning</div>
          <div className="mt-4 text-xl">
            Sunlit Sea prefabrikerer strenger av flottører som pakkes inn i standard 40-fots
            container. Total kvalitetssikring av hele produksjonsprosessen frem til komplette
            strenger vil betraktelig redusere antallet feil, langt ut i prosjektet. Strengene
            deployeres effektivt ut på vannet med en lynrask og innovativ installasjonsmetode.
            Tester viser at metoden er inntil 25 ganger raskere enn dagens raskeste aktør.
          </div>
        </div>
        <div className="flex flex-col w-5/12">
          <img
            className="object-contain"
            src={'/img/technology/technology_7_1.jpg'}
            alt="technology_7_1"
          />
          <div className="text-xl text-right">
            Svært enkel og hurtig deployment, 2 personer per streng
          </div>
          <img
            className="object-contain mt-4"
            src={'/img/technology/technology_7_2.jpg'}
            alt="technology_7_2"
          />
          <div className="text-xl text-right">Høy energidensitet går ikke ut over deployment</div>
        </div>
      </div>
    </>
  );
};

export default Technology7;

import React from 'react';

const Technology9: React.FC = () => {
  return (
    <>
      <div className="flex flex-row pb-8">
        <div className="flex flex-col w-1/2 px-12">
          <div className="text-3xl font-body">9. Performance ratio kan ikke garanteres.</div>
          <div className="mt-4 text-xl">
            Performance ratio er forholdet mellom produsert elektrisitet og teoretisk mulig
            produksjon, normalisert i forhold til blant annet solinnstråling i programvare som
            PVsyst. Dette brukes som kontraktsunderlag. For flytende solkraft er ikke
            produksjonsestimeringen standardisert. Vanlige modeller tar ikke høyde for bølger,
            degrading i maritimt miljø, effekt av kjøling fra vann, etc.
          </div>
          <div className="mt-8 text-2xl font-body">Vår løsning</div>
          <div className="mt-4 text-xl">
            Sunlit Sea bruker sin kompetanse innen metocean, elkraft, elektronikk, solkraft og
            programmering til å utvikle et konsept for marine grade performance ratio som presist
            kan predikere produksjon under gitte forutsetninger. Dette gir grunnlag for garantier
            ovenfor interessenter på at anlegget vil levere i henhold til forventning, noe som
            reduserer økonomisk risiko betraktelig.
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <img
            className="object-contain"
            src={'/img/technology/technology_9.jpg'}
            alt="technology_9"
          />
        </div>
      </div>
    </>
  );
};

export default Technology9;

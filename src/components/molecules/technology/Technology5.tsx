import React from 'react';

const Technology5: React.FC = () => {
  return (
    <>
      <div className="flex flex-row pb-8">
        <div className="flex flex-col w-1/2 px-12">
          <div className="text-3xl font-body">5. Is ødelegger flytende solkraft-installasjoner</div>
          <div className="mt-4 text-xl">
            Under veldig kalde forhold må et flytende solkraftverk håndtere frostspreng, krakelering
            av skjøre materialer, variable laster på forankring og ekstra belastning på
            koblingspunkter mellom flottører.
          </div>
          <div className="mt-8 text-2xl font-body">Vår løsning</div>
          <div className="mt-4 text-xl">
            Sunlit Seas solcelleflottører er laget av robuste materialer, hvor effekten av
            frostspreng er minimert. Koblingspunktene mellom flottørene og mot forankringen tåler
            kreftene fra is.
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <img
            className="object-contain"
            src={'/img/technology/technology_5.jpg'}
            alt="technology_5"
          />
        </div>
      </div>
    </>
  );
};

export default Technology5;

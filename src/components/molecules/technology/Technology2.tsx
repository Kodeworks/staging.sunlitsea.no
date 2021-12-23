import React from 'react';

const Technology2: React.FC = () => {
  return (
    <>
      <div className="flex flex-row pb-8">
        <div className="flex flex-col w-7/12 px-12">
          <div className="text-3xl font-body">2. Varme reduserer strømproduksjon</div>
          <div className="mt-4 text-xl">
            Effektiviteten til solcellepaneler synker med økende temperatur, og på land har
            solcelleanlegg en begrenset evne til kjøling.
          </div>
          <div className="mt-8 text-2xl font-body">Vår løsning</div>
          <div className="mt-4 text-xl">
            Våre paneler opererer på en temperatur nært vanntemperaturen. Årsaken er den termiske
            konduktiviteten til aluminium kombinert med optimal kontaktflate fra panel via aluminium
            ned i vann. Denne effekten vil tallfestes gjennom en studie i regi av Institutt for
            Energiteknikk.
          </div>
        </div>
        <div className="flex flex-col w-5/12">
          <img
            className="object-contain"
            src={'/img/technology/technology_2.jpg'}
            alt="technology_2"
          />
        </div>
      </div>
    </>
  );
};

export default Technology2;

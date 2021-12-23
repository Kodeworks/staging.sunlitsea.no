import React from 'react';

const Technology1: React.FC = () => {
  return (
    <>
      <div className="flex flex-row pb-8">
        <div className="flex flex-col w-7/12 px-12">
          <div className="text-3xl font-body">1. Varme degraderer solcellepaneler over tid</div>
          <div className="mt-4 text-xl">
            Høye temperaturer innvirker på diffusjon, som promoterer hotspots, ingress av
            kontaminerende elementer og vanninngress. Hotspots er typisk artefakter fra produksjonen
            eller materialfeil som skaper små områder i panelet som reduserer strømproduksjonen.
            Temperatursvigninger over tid bidrar også til slitasje på elektriske koblinger inne i
            solcellepanelet. På grunn av måten celler i solcellepaneler er koblet sammen i serie
            blir effekten ytterligere forsterket.
          </div>
          <div className="mt-8 text-2xl font-body">Vår løsning</div>
          <div className="mt-4 text-xl">
            Våre paneler opererer på en temperatur nært vanntemperaturen. Årsaken er den termiske
            konduktiviteten til aluminium kombinert med optimal kontaktflate fra panel via aluminium
            ned i vann. Simuleringer i PVsyst viser at effekten kan utgjøre opp til 20% differanse i
            strømproduksjon over 25 år, mest signifikant de siste årene av en installasjons levetid.
          </div>
        </div>
        <div className="flex flex-col w-5/12">
          <img
            className="object-contain"
            src={'/img/technology/technology_1.jpg'}
            alt="technology_1"
          />
          <div className="px-32 text-xl text-right">Hotspots på solcellepanel</div>
        </div>
      </div>
    </>
  );
};

export default Technology1;

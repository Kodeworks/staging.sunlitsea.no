import React from 'react';

const Technology3: React.FC = () => {
  return (
    <>
      <div className="flex flex-row pb-8">
        <div className="flex flex-col w-7/12 px-12">
          <div className="text-3xl font-body">
            3. Bølger reduserer strømproduksjon på grunn av mismatch losses
          </div>
          <div className="mt-4 text-xl">
            Seriekoblede flottører med solcellepaneler som beveger seg individuelt på bølgete vann
            vil skape såkalte mismatch losses. Det vil si at den til enhver tid dårligste vinkelen
            mot sola vil være dominerende for hvor mye elektrisitet som produseres. For landbasert
            solkraft unngås dette delvis ved å montere alle seriekoblede solcellepaneler i samme
            vinkel, og i noen tilfeller ved å installere en såkalt modulnivå maximum power-point
            tracking.
          </div>
          <div className="mt-8 text-2xl font-body">Vår løsning</div>
          <div className="mt-4 text-xl">
            Sunlit Sea utvikler en løsning som håndterer mismatch losses på modulnivå på en svært
            kostnadseffektiv måte. Dette er mulig å få til fordi all kraftelektronikk og sensorikk
            for våre paneler utvikles in-house.
          </div>
        </div>
        <div className="flex flex-col w-5/12">
          <img
            className="object-contain"
            src={'/img/technology/technology_3.jpg'}
            alt="technology_3"
          />
          <div className="px-32 text-xl text-center">
            Sanntids tolkning av sjøtilstand og flottørmodell gir svært god presisjon.
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology3;

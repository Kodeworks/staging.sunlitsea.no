import React from 'react';

const Technology4: React.FC = () => {
  return (
    <>
      <div className="flex flex-row pb-8">
        <div className="flex flex-col w-7/12 px-12">
          <div className="text-3xl font-body">
            4. Bevegelser degraderer ytelsen til solcellepaneler og andre elektriske komponenter
          </div>
          <div className="mt-4 text-xl">
            Sammenliknet med solkraft på land, er flytende solcelleinstallasjoner utsatt for flere
            og sterkere mekaniske påkjenninger, høyere luftfuktighet, overskylldende bølger, med
            mer, som til sammen bidrar til raskere degradering av solcellepanelene og andre
            elektriske komponenter.
          </div>
          <div className="mt-8 text-2xl font-body">Vår løsning</div>
          <div className="mt-4 text-xl">
            Sunlit Sea bruker kald strekkforming av aluminiumsflak i et spesialdesignet
            pressverktøy, for å produsere halvdeler av flottører. Halvdelene sveises sammen med
            friksjonssveising, og interne koppliknende former skaper en svært sterk struktur ikke
            ulik en honeycomb sandwich-konstruksjon.
          </div>
          <div className="mt-4 text-xl">
            Strukturen støtter hele panelets bakside som gjør at selv under krevende sjøtilstander
            så beskyttes de sensitive komponentene i solcellepanelet. Designet beskytter også
            ledninger og elektriske koblinger på en effektiv måte.
          </div>
        </div>
        <div className="flex flex-col w-5/12">
          <img
            className="object-contain"
            src={'/img/technology/technology_4.jpg'}
            alt="technology_4"
          />
          <div className="text-xl text-right ">Aluminium koppformer fungerer som en honeycomb</div>
        </div>
      </div>
    </>
  );
};

export default Technology4;

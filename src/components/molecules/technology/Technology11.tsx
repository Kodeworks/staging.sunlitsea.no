import React from 'react';

const Technology11: React.FC = () => {
  return (
    <>
      <div className="flex flex-row pb-8">
        <div className="flex flex-col w-7/12 px-12">
          <div className="text-3xl font-body">
            11. Flytende solkraft er uegnet for midlertidige behov for elkraft
          </div>
          <div className="mt-4 text-xl">
            Dagens løsninger for flytende solkraft er krevende å installere og har typisk like
            tungvint demontering. Vanligvis utvikles bare prosjekter som krever svært lang
            avskrivningstid, gjerne 25 år. Fjerning av anlegget har anslagsvis tilsvarende kostnader
            som ved installasjon.
          </div>
          <div className="mt-8 text-2xl font-body">Vår løsning</div>
          <div className="mt-4 text-xl">
            Sunlit Sea utvikler en smidig og effektiv metode for demontering basert på de samme
            prinsipper som ved installasjon. Dette betyr at man kan operere med langt kortere
            perspektiver for en installasjon, helt ned til noen ukers driftstid, i spesielle
            tilfeller. Eksempler på svært korte prosjekter kan være: slamsuging, byggestrøm,
            nødstrøm, forsvarsaktiviteter etc.
          </div>
        </div>
        <div className="flex flex-col w-5/12">
          <img
            className="object-contain"
            src={'/img/technology/technology_11.jpg'}
            alt="technology_11"
          />
          <div className="text-xl text-right">
            Slamsuging er et eksempel på en industri som krever mye energi i en begrenset
            tidsperiode
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology11;

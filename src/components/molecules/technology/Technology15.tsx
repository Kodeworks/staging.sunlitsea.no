import React from 'react';

const Technology15: React.FC = () => {
  return (
    <>
      <div className="flex flex-row pb-8">
        <div className="flex flex-col w-7/12 px-12">
          <div className="text-3xl font-body">15. Strøm i saltvann kan forårsake korrosjon</div>
          <div className="mt-4 text-xl">
            Ukontrollerte lekkasjestrømmer fra elektriske anlegg på sjø akselererer oksidering av
            metall. Skarpe kanter, kaviteter, ru eller porøs overflate, fravær av offeranoder,
            saltinnhold, fravær av etterbehandling som eloksering, med mer, påvirker graden av
            korrosjon. Metall forekommer i elektriske og mekaniske koblingspunkter og bærende
            strukturer i de fleste flytende solkraftverk. Konsekvensen av korrosjon kan være
            redusert levetid og økt sannsynlighet for ulykker.
          </div>
          <div className="mt-8 text-2xl font-body">Vår løsning</div>
          <div className="mt-4 text-xl">
            Sunlit Sea produserer flottører i aluminiumslegering utviklet for maritimt bruk, som er
            ytterligere beskyttet at avrundede kanter og en glatt eloksert overflate. I tillegg til
            den vanlige jordfeildetektoren som finnes i inverteren, har også hver flottør modulnivå
            kraftelektronikk som kan lokalisere eventuelle strømlekkasjer umiddelbart. Fravær av
            elektriske koblinger reduserer sjansen for strømlekkasjer ytterligere.
          </div>
        </div>
        <div className="flex flex-col w-5/12">
          <img
            className="object-contain"
            src={'/img/technology/technology_15.jpg'}
            alt="technology_15"
          />
        </div>
      </div>
    </>
  );
};

export default Technology15;

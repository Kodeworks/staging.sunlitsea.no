import React from 'react';

const Technology14: React.FC = () => {
  return (
    <>
      <div className="flex flex-row pb-8">
        <div className="flex flex-col w-7/12 px-12">
          <div className="text-3xl font-body">
            14. Strømlekkasjer, spesielt i saltvann, utgjør fare for liv og helse
          </div>
          <div className="mt-4 text-xl">
            Elkraft på sjø medfører risiko for strømlekkasjer. Dette utgjør en fare for personell
            som beveger seg i området. Den internasjonalt aksepterte normen IEC 62548 beskriver
            sikkerhetsmekanismer knyttet opp mot hver streng av solcellepaneler. Det stilles
            sjeldent krav til sikkerhetsmekanismer knyttet til hvert enkelt solcellepanel, noe som
            stammer fra sikkerhetskravene til solkraftverk på land. Dermed er det en fare for at
            strømlekkasjer selv om strengen er koblet ut på inverter-nivå.
          </div>
          <div className="mt-8 text-2xl font-body">Vår løsning</div>
          <div className="mt-4 text-xl">
            Sunlit Sea adresserer dette problemet ved å utvikle auto-shutdown sikkerhetsmekanismer
            på panel-nivå. Dette gjør at elektriske feil automatisk kobler ut hver flottør slik at
            den ikke produserer strøm. I tillegg kan den samme mekanismen brukes i forbindelse med
            vedlikehold, slik at det ikke går strøm i paneler som feks vaskes av personell, samtidig
            som resten av solkraftverket driftes som normalt.
          </div>
        </div>
        <div className="flex flex-col w-5/12">
          <img
            className="object-contain"
            src={'/img/technology/technology_14.jpg'}
            alt="technology_14"
          />
        </div>
      </div>
    </>
  );
};

export default Technology14;

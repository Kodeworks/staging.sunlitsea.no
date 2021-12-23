import React from 'react';

const Technology13: React.FC = () => {
  return (
    <>
      <div className="flex flex-col pb-8">
        <div className="flex flex-row px-12">
          <div className="flex flex-col">
            <div className="text-3xl font-body">
              13. Marin begroing skaper store vedlikeholdskostnader
            </div>
            <div className="mt-4 text-xl">
              Vannbårne mikroorganismer og bakterier fester seg på flottører og skaper en biofilm
              som i løpet av dager eller måneder, avhengig av saltinnhold, sollys, temperatur og
              andre faktorer, vokser og påvirker installasjonen. Marin begroing er estimert til å
              påføre store operasjonelle kostnader ved drift av flytende solkraft.
            </div>
          </div>
          <img
            className="object-contain"
            src={'/img/technology/technology_13_1.jpg'}
            alt="technology_13_1"
          />
        </div>

        <div className="flex flex-row mt-12">
          <div className="flex flex-col pr-4">
            <div className="mt-8 text-2xl font-body">Vår løsning</div>
            <div className="mt-4 text-xl">
              Sunlit Sea utvikler en løsning for forhindring av marin begroing basert på velutprøvd
              teknologi. Vår unike aluminiumsflottør fasiliterer bruk av teknologi som er
              utilgjengelig for våre konkurrenter. Teknologien er utprøvd i maritim sektor og godt
              dokumentert, men krever en flottør og inline produksjonsteknikk som bare Sunlit Sea
              har.
            </div>
          </div>
          <img
            className="object-contain w-1/2"
            src={'/img/technology/technology_13_2.jpg'}
            alt="technology_13_2"
          />
        </div>
      </div>
    </>
  );
};

export default Technology13;

import React from 'react';

const Technology10: React.FC = () => {
  return (
    <>
      <div className="flex flex-row pb-8">
        <div className="flex flex-col w-7/12 px-12">
          <div className="text-3xl font-body">
            10. Solcellepaneler spesiallaget for vann, spesielt saltvann, er dyre
          </div>
          <div className="mt-4 text-xl">
            Solcellepaneler adaptert til maritimt bruk er dyrere enn solcellepaneler til bruk på
            land, fordi de må spesiallages og testes grundig. Dette gjør at endringer i produktet,
            som for eksempel å gå over til andre typer solceller, tar lang tid å kommersialisere til
            et nivå hvor prisen er akseptabel i mainstream-markedet.
          </div>
          <div className="mt-8 text-2xl font-body">Vår løsning</div>
          <div className="mt-4 text-xl">
            Sunlit Sea bruker standard produksjonslinjer for solcellepaneler, men produserer på
            spesifikasjon. Det betyr at vi kan oppnå nært opp mot de samme prisene for etablert
            teknologi, samtidig som vi kan inkorporere ny teknologi som shingle-wafers eller
            perovskite på en priseffektiv måte tidligere enn våre konkurrenter.
          </div>
        </div>
        <div className="flex flex-col w-5/12">
          <img
            className="object-contain w-2/3"
            src={'/img/technology/technology_10_1.jpg'}
            alt="technology_10_1"
          />
          <div className="-mt-8 text-xl text-center">Shingled</div>
          <img
            className="self-end object-contain w-2/3 mt-8"
            src={'/img/technology/technology_10_2.jpg'}
            alt="technology_10_2"
          />
          <div className="text-xl text-right">Perovskite</div>
          <img
            className="object-contain w-3/4 mt-4"
            src={'/img/technology/technology_10_3.jpg'}
            alt="technology_10_3"
          />
          <div className="text-xl">Dobbelglass</div>
        </div>
      </div>
    </>
  );
};

export default Technology10;

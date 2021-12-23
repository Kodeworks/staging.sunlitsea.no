import React from 'react';

const Technology16: React.FC = () => {
  return (
    <>
      <div className="flex flex-row pb-8">
        <div className="flex flex-col w-7/12 px-12">
          <div className="text-3xl font-body">
            16. Flytende solkraft bruker ikke-bærekraftige materialer
          </div>
          <div className="mt-4 text-xl">
            Flytende solkraft er ofte basert på plast i flytekonstruksjonen. Plast er problematisk
            fordi noen typer plast kan lekke kjemikalier ut i havet og/eller generere mikroplast.
            Flere typer plast har en ikke-bærekraftig produksjonsprosess.
          </div>
          <div className="mt-8 text-2xl font-body">Vår løsning</div>
          <div className="mt-4 text-xl">
            Sunlit Sea bruker i hovedsak aluminium til produksjon av flottører. Aluminium koster mer
            energi å produsere enn plast, og kan dermed binde mer CO2. Vi bruker dog velrennomerte
            leverandører, som Speira gmbh, tidligere Hydro Rolled Products, som får det meste av
            aluminium fra norske aluminiumsverk drevet av vannkraft. I oppskaleringsfasen skal
            panten i aluminiumet bindes til produsenten, slik at resirkulering garanteres.
          </div>
        </div>
        <div className="flex flex-col w-5/12">
          <img
            className="object-contain"
            src={'/img/technology/technology_16_1.jpg'}
            alt="technology_16_1"
          />
          <div className="text-xl text-right">Plastflottører til konkurrent</div>
          <div className="flex flex-row justify-between px-4 mt-6">
            <img
              className="object-contain"
              src={'/img/technology/technology_16_2.jpg'}
              alt="technology_16_2"
            />
            <img
              className="object-contain"
              src={'/img/technology/technology_16_3.jpg'}
              alt="technology_16_3"
            />
          </div>

          <div className="pr-4 text-xl text-right">
            Sunlit Seas formpressede flottør i aluminium
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology16;

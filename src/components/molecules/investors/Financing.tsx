import React from 'react';
import ResultTable from './ResultTable';
import BalanceTable from './BalanceTable';

const Financing: React.FC = () => {
  return (
    <>
      <div className="flex flex-col px-16 pt-16 pb-16 text-3xl bg-gray-200">
        <div className="text-5xl font-headline">Finansiering</div>
        <div className="flex flex-row mt-8">
          <div className="flex flex-col w-1/2 pr-8">
            <div className="text-4xl font-headline">Tilskudd</div>
            <ul>
              <li className="mt-4 ml-8 list-disc">
                Sunlit Sea har hentet 29,55 MNOK i tilskudd gjennom Innovasjon Norge-ordningene
                kommersialiseringstilskudd, miljøteknologi og innovasjonstilskudd, og
                Forskningsrådet-ordningen innovasjonsprosjekt i næringslivet. 2,95 MNOK er hentet i
                form av ansvarlig lån fra Kodeworks og Innovasjon Norge. 19,1 MNOK av disse midlene
                er utbetalt, og 10,45 MNOK er utestående.
              </li>
              <li className="mt-4 ml-8 list-disc">
                Vi leverer en søknad på Eurostars i konsortium med IFE, NIVA og en aktør i
                Storbritannia, med budsjett 13,28 MNOK.
              </li>
              <li className="mt-4 ml-8 list-disc">
                Vi leverer en søknad på en EU-utlysning i konsortium med VTT og to utenlandske
                aktører, med budsjett på 20 MNOK.
              </li>
            </ul>
          </div>

          <div className="flex flex-col w-1/2 pl-8">
            <div className="text-4xl font-headline">Investeringer/ansvarlig lån</div>
            <ul>
              <li className="mt-4 ml-8 list-disc">
                Ved oppstart av Sunlit Sea ble 20 000 av de totalt 100 000 aksjer i selskapet solgt
                til selskapet selv til pålydende (0,31 øre pr aksje) fra gründerene Per Lindberg og
                Kodeworks. Dette ble gjort for å fasilitere enklere aksjesalg uten behov for å
                trykke nye aksjer.
              </li>
              <li className="mt-4 ml-8 list-disc">
                Sunlit Sea har solgt 13 201 av disse samt trykket og solgt 234 nye aksjer, for til
                sammen 16,64 MNOK. I 2019 var verdivurderingen 500 kr pr aksje. Siste runde med
                aksjesalg var på 3 000 kr pr aksje. Verdsettingen i denne emisjonen er 4 000 kr pr
                aksje.
              </li>
              <li className="mt-4 ml-8 list-disc">
                Innovasjon Norge har gitt 2,4 MNOK i ansvarlig lån (innovasjonslån). Kodeworks har
                lånt ut 0,55 MNOK i ansvarlig lån.
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 font-semibold text-center">Total finansiering: 50 MNOK.</div>
        <div className="mt-2 font-semibold text-center">Kostnader så langt: 20 MNOK.</div>

        <div className="flex flex-row mt-8">
          <div className="flex flex-col w-1/2">
            <div className="text-4xl font-headline">Resultat</div>
            <ResultTable />
          </div>
          <div className="flex flex-col w-1/2">
            <div className="p-12 mt-16 ml-48 bg-secondary-100">
              <div className="text-3xl font-semibold">Kommentarer til resultatrapport</div>
              <div className="text-2xl">
                <div className="mt-4">Tilskudd mottatt i 2020</div>
                <ul>
                  <li className="ml-8 list-disc">Innovasjon Norge: 3.4m</li>
                  <li className="ml-8 list-disc">Norsk Forskningsråd: 1.4m</li>
                </ul>
                <div className="mt-4">Tilskudd mottatt i 2021</div>
                <ul>
                  <li className="ml-8 list-disc">Innovasjon Norge: 3.4m</li>
                  <li className="ml-8 list-disc">Norsk Forskningsråd: 1.4m</li>
                </ul>
                <div className="mt-4">
                  Den største kostnaden for 2020 er utviklingskostnader FoU. Pga økning fra 1 til 3
                  fulltidsansatte og aktivering av utviklingskostnader er lønnskostnad for 2021 den
                  største kostnaden.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row mt-8">
          <div className="flex flex-col w-1/2">
            <div className="text-4xl font-headline">Balanse</div>
            <BalanceTable />
          </div>
          <div className="flex flex-col w-1/2">
            <div className="p-16 mt-32 ml-48 bg-secondary-100">
              <div className="text-3xl font-semibold">Kommentarer til balanserapport</div>
              <div className="mt-4 text-2xl">
                Anleggsmidler består i hovedsak av aktiverte utviklingskostnader FoU.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Financing;

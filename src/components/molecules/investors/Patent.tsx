import React from 'react';

const Patent: React.FC = () => {
  return (
    <>
      <div className="flex flex-col pt-16 pb-16 text-3xl bg-gray-200">
        <div className="w-7/12 mx-auto ">
          <div className="text-5xl font-body">Patent</div>
          <div className="flex flex-col pr-8">
            <ul>
              <li className="mt-8 ml-8 list-disc">
                Sunlit Sea innehar to patentsøknader i UK datert 23.12.2019.
              </li>
              <li className="mt-4 ml-8 list-disc">
                Patentsøknadene ble utvidet til internasjonale PCT søknader 22.12.2020.
              </li>
              <li className="mt-4 ml-8 list-disc">Begge søknadene er nå på IPE-stadiet.</li>
              <li className="mt-4 ml-8 list-disc">
                Patentene angår karakteristikker vedrørende selve flottøren, og måten flottører
                sammenkobles.
              </li>
              <li className="mt-4 ml-8 list-disc">
                Sunlit Sea har gjort grundige prior art undersøkelser, og verifisert at ingen kjente
                eksisterende patenter eller patentsøknader krenkes.
              </li>
              <li className="mt-4 ml-8 list-disc">
                I alt arbeid hvor underleverandører er involvert sikres Sunlit Seas IP rettigheter,
                slik at vi unngår situasjoner hvor en tredjepart er medoppfinner i eventuelle
                kommende patenter.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Patent;

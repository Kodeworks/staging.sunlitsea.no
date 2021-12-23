import React from 'react';

const Technology12: React.FC = () => {
  return (
    <>
      <div className="flex flex-row pb-8">
        <div className="flex flex-col w-7/12 px-12">
          <div className="text-3xl font-body">
            12. Landbasert solkraft nær forbrukersentrum har høy arealkostnad
          </div>
          <div className="mt-4 text-xl">
            Nær forbrukersentrum er det i hovedsak to markeder for flytende solkraft:
          </div>
          <ul className="mt-4 text-xl">
            Stille vann
            <li className="ml-6 list-disc">Vann med variabel vannstand</li>
            <li className="ml-6 list-disc">Vann som delvis tørker ut</li>
            <li className="ml-6 list-disc">Vann med konstant vannstand</li>
          </ul>
          <ul className="mt-4 text-xl">
            Bølgete vann
            <li className="ml-6 list-disc">Salt</li>
            <li className="ml-6 list-disc">Ferskt</li>
            <li className="ml-6 list-disc">
              I tillegg finnes det et marked for offshore, men det er utenfor vårt scope
            </li>
          </ul>
          <div className="mt-8 text-2xl font-body">Vår løsning</div>
          <div className="mt-4 text-xl">
            Sunlit Seas løsning er robust med gode hydrodynamiske og aerodynamiske egenskaper, som
            gjør at den fungerer fint på både stille og bølgete vann med lav bølgehøyde. Ytelsen per
            areal er svært høy og profilen er lav. Anodiseringen gir en mørk farge som gjør at
            flottøren blir lite synlig i vannet. Samlet sett er løsningen egnet til god
            arkitektonisk integrasjon med bymiljøet.
          </div>
        </div>
        <div className="flex flex-col w-5/12">
          <img
            className="object-contain"
            src={'/img/technology/technology_12.jpg'}
            alt="technology_12"
          />
          <div className="text-xl text-right">Setouchi Kirei Mega Solar Power Plant</div>
        </div>
      </div>
    </>
  );
};

export default Technology12;

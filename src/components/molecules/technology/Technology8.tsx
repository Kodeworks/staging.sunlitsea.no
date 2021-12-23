import React from 'react';

const Technology8: React.FC = () => {
  return (
    <>
      <div className="flex flex-row pb-8">
        <div className="flex flex-col w-1/2 px-12">
          <div className="text-3xl font-body">
            8. Vedlikehold og håndtering av solceller reduserer strømproduksjon
          </div>
          <div className="mt-4 text-xl">
            Solceller er svært følsomme for punktbelastninger, noe som kan resultere i
            mikrosprekker. Mikrosprekker oppstår ofte under drift og vedlikehold og som et resultat
            av andre miljørelaterte påkjenninger, hvilket vil redusere produksjonen av elektrisitet.
          </div>
          <div className="mt-8 text-2xl font-body">Vår løsning</div>
          <div className="mt-4 text-xl">
            Den strukturelle integriteten i Sunlit Sea sine komponenter gjør at håndteringen under
            installasjon, drift og vedlikehold eller som følge av miljøpåkjenninger, ikke forårsaker
            skade. I tillegg er det mulig å bevege seg til fots oppe på panelene. En komparativ
            fullskala studie, i regi av Institutt for Energiteknikk, gjennomføres nå for å
            verifisere at ferdsel til fots ikke resulterer i redusert strømproduksjon.
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <img
            className="object-contain"
            src={'/img/technology/technology_8.jpg'}
            alt="technology_8"
          />
          <div className="text-xl text-right ">
            Sunlit Sea flottører tåler mye belastning og kan vaskes manuelt eller robotisert. Bildet
            er et eksempel på en vaskerobot, ikke en del av Sunlit Sea sin produktportefølje.
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology8;

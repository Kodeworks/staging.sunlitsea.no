import React from 'react';
import BoardMember from './../atoms/BoardMember';

const Investors: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center px-16 pb-8 bg-primary-50">
        <div className="mt-24 text-4xl text-center mx-36 font-body">
          <b>Sunlit Sea</b> utvikler ny teknologi for flytende solcelleinstallasjoner som åpner et
          helt nytt marked for solceller installert nearshore, et marked hvor det per dags dato ikke
          er installert annet en pilotanlegg på verdensbasis. Teknologien er bevist og vi gjør en
          emisjon for å skalere opp produksjonskapasiteten.
        </div>
        <div className="flex justify-around mt-24 fjustify-aroundlex-row">
          <div className="flex flex-col w-5/12">
            <div className="text-5xl font-body">Corporate Governance</div>
            <ul className="mt-4 ml-8 text-3xl leading-normal list-disc ">
              <li>Faglig dyktig og arbeidende styre</li>
              <ul className="ml-8 list-disc">
                <li>Per Lindberg - styreleder</li>
                <li>Eirik Larsen - styremedlem</li>
                <li>Kim André Johnsen - styremedlem</li>
              </ul>
              <li>Kjernekompetanse forpliktet og insentivert til å forbli i selskapet</li>
              <li>
                Sterke rettigheter for <i>alle</i> aksjonærer
              </li>
              <li>Åpenhet og delingskultur også ovenfor investorer</li>
              <li>Marginal utvanning av eksisterende aksjonærer planlagt (20% i 2022)</li>
              <li>
                Corporate governance regulert av en solid aksjonæravtale og den norske aksjeloven.
              </li>
            </ul>
          </div>
          <div className="flex flex-col w-5/12 mt-16">
            <img className="object-contain" src="/img/governance.jpg" alt="Governance" />
            <div className="flex flex-row justify-between pl-10 pr-24 mt-2 text-center">
              <BoardMember name="Kim André Johnsen" company="Nunchi" />
              <BoardMember name="Per Lindberg" company="Sunlit Sea" />
              <BoardMember name="Eirik Larsen" company="Kodeworks" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Investors;

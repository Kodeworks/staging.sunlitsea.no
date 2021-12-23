import React from 'react';

const Technology6: React.FC = () => {
  return (
    <>
      <div className="flex flex-row pb-8">
        <div className="flex flex-col w-7/12 px-12">
          <div className="text-3xl font-body">6. Flytende solkraftanlegg er utsatt for vind</div>
          <div className="mt-4 text-xl">
            Flere nylige ulykker koblet til vind demonstrerer nødvendigheten av gode aerodynamiske
            egenskaper til flytende solkraftverk.
          </div>
          <div className="mt-8 text-2xl font-body">Vår løsning</div>
          <div className="mt-4 text-xl">
            Sunlit Sea sin løsning har svært lavt vindfang, liten dypgang og spalter mellom
            flottører som betraktelig reduserer overtrykk under matrisen. Effekten er et kraftverk
            som kan operere i mye sterkere vind enn dagens løsninger.
          </div>
        </div>
        <div className="flex flex-col w-5/12">
          <img
            className="object-contain"
            src={'/img/technology/technology_6_1.jpg'}
            alt="technology_6_1"
          />
          <div className="text-xl text-right">Kyocera TCL Solar-ulykken i Yamakura Dam i 2019</div>
          <img
            className="object-contain mt-4"
            src={'/img/technology/technology_6_2.jpg'}
            alt="technology_6_2"
          />
          <div className="text-xl text-right">Sunlit Sea’s Prototype 2</div>
        </div>
      </div>
    </>
  );
};

export default Technology6;

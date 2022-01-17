import React from 'react';

const Patent: React.FC = () => {
  return (
    <>
      <div className="flex flex-col w-1/2 px-8 pt-10 bg-secondary-100">
        <div className="text-6xl font-body">Patent</div>
        <div className="flex flex-col pr-8 mt-12 ml-8 text-2xl">
          <ul>
            <li className="list-disc ">
              Sunlit Sea holds two patent applications in the UK dated 23.12.2019.
            </li>
            <li className="list-disc ">
              The patent applications were extended to international PCT applications on 22.12.2020.
            </li>
            <li className="list-disc">Both applications are now at the IPE stage.</li>
            <li className="list-disc">
              The patents concern characteristics concerning the float itself, and the way floats
              are connected.
            </li>
            <li className="list-disc ">
              Sunlit Sea has conducted thorough prior art investigations, and verified that no known
              existing patents or patent applications are infringed.
            </li>
            <li className="list-disc ">
              In all work where subcontractors are involved, Sunlit Seas{"'"} IP rights are secured,
              so that we avoid situations where a third party is a co-inventor in any future
              patents.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Patent;

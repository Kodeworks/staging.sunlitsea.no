import React from 'react';

const Patent: React.FC = () => {
  return (
    <>
      <div className="flex flex-col px-2 pt-10 pb-8 sm:px-4 md:px-8 lg:pb-0 lg:w-1/2 bg-secondary-100">
        <h2 className="text-4xl xl:text-6xl md:text-5xl font-body">Patent</h2>
        <div className="flex flex-col mt-4 ml-8 text-lg lg:mt-12 xl:text-2xl">
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

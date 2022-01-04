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
                Sunlit Sea holds two patent applications in the UK dated 23.12.2019.
              </li>
              <li className="mt-4 ml-8 list-disc">
                The patent applications were extended to international PCT applications on
                22.12.2020.
              </li>
              <li className="mt-4 ml-8 list-disc">Both applications are now at the IPE stage.</li>
              <li className="mt-4 ml-8 list-disc">
                The patents concern characteristics concerning the float itself, and the way floats
                are connected.
              </li>
              <li className="mt-4 ml-8 list-disc">
                Sunlit Sea has conducted thorough prior art investigations, and verified that no
                known existing patents or patent applications are infringed.
              </li>
              <li className="mt-4 ml-8 list-disc">
                In all work where subcontractors are involved, Sunlit Seas{"'"} IP rights are
                secured, so that we avoid situations where a third party is a co-inventor in any
                future patents.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Patent;

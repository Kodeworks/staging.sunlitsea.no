import React from 'react';

const Marketing: React.FC = () => {
  return (
    <>
      <section className="flex flex-col ">
        <div className="flex flex-row">
          <div className="flex flex-col text-lg xl:text-2xl">
            <h2 className="text-4xl xl:text-6xl md:text-5xl font-body">Marketing</h2>
            <div className="mt-4 xl:mt-8">
              Smart Quoter facilitates web-based customer interaction. Customers can pre-design
              their floating solar power plant and receive indicative data on CAPEX, OPEX,
              production, wind and wave conditions, requirements for anchoring system, delivery time
              and so on.
            </div>
            <div className="mt-2 xl:mt-4">
              The system has already generated leads on projects and works well to facilitate sales
              work.
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4 mt-8 text-sm lg:text-base xl:text-xl">
          <div className="flex flex-col w-1/3">
            <img
              className="object-contain "
              src="/img/investors/marketing_1.jpg"
              alt="marketing_1"
            />
            <div>Smart Quoter, 100 MWp in Abu Dhabi</div>
          </div>
          <div className="flex flex-col w-1/3">
            <img
              className="object-contain"
              src="/img/investors/marketing_2.jpg"
              alt="marketing_2"
            />
            <div>
              Wave and wind data for a location are used to calculate the marine grade performance
              ratio
            </div>
          </div>

          <div className="flex flex-col w-1/3">
            <img
              className="object-contain"
              src="/img/investors/marketing_3.jpg"
              alt="marketing_3"
            />
            <div>Solar radiation for a location, taken from public sources</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Marketing;

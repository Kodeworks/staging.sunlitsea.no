import React from 'react';

const Marketing: React.FC = () => {
  return (
    <>
      <section className="flex flex-col ">
        <div className="flex flex-row">
          <div className="flex flex-col ">
            <div className="text-6xl font-body">Marketing</div>
            <div className="mt-8 text-2xl">
              Smart Quoter facilitates web-based customer interaction. Customers can pre-design
              their floating solar power plant and receive indicative data on CAPEX, OPEX,
              production, wind and wave conditions, requirements for anchoring system, delivery time
              and so on.
            </div>
            <div className="mt-4 text-2xl">
              The system has already generated leads on projects and works well to facilitate sales
              work.
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4 mt-8">
          <div className="flex flex-col w-1/3">
            <img
              className="object-contain "
              src="/img/investors/marketing_1.jpg"
              alt="marketing_1"
            />
            <div className="text-xl ">Smart Quoter, 100 MWp in Abu Dhabi</div>
          </div>
          <div className="flex flex-col w-1/3">
            <img
              className="object-contain"
              src="/img/investors/marketing_2.jpg"
              alt="marketing_2"
            />
            <div className="text-xl ">
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
            <div className="text-xl ">
              Solar radiation for a location, taken from public sources
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Marketing;

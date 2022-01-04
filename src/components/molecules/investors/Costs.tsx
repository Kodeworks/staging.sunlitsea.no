import React from 'react';

const Costs: React.FC = () => {
  return (
    <>
      <div className="flex flex-row px-16 pt-16 pb-16 bg-secondary-50">
        <div className="flex flex-col w-1/2 pr-8">
          <div className="text-5xl font-body">Costs with floating solar power</div>
          <div className="mt-8 text-2xl">
            CAPEX, OPEX and LCOE * for projects in floating solar power at sea are often considered
            by analysts to be dominated by: long-term installation processes with low quality,
            marine fouling and pollution, uncertainty about the effect of long-term operation, and
            expensive financing due to risk, and a number of other factors.
          </div>
          <div className="mt-8 text-2xl">
            Sunlit Sea has a very efficient production process, quality assurance, installation
            procedure and predictable maximum loads on the anchoring system, which means that CAPEX
            is somewhat lower than the competition. OPEX is positively affected by the fact that we
            develop technology that has the potential to severely limit marine fouling, as well as
            the work we put in with partners to deal with marine pollution. For Sunlit Sea, LCOE is
            positively influenced by the quality of the product: the rigidity of the float,
            real-time monitoring, gluing, welding; which means that Sunlit Sea{"'"}s solution
            degrades less over time. Furthermore, our unique work within the marine grade
            performance ratio adds up to significantly lower financial risk Sunlit Sea projects.
          </div>
          <div className="mt-4 text-xl">
            * CAPEX = cost of capital, OPEX = operating expenses, LCOE = cost of energy over the
            lifetime of technology
          </div>
        </div>

        <div className="flex flex-col w-1/2 pl-16">
          <img className="object-contain pl-8 mt-4" src="/img/investors/costs.jpg" alt="costs" />
          <div className="text-xl text-right ">
            LCOE, annual estimate for ground mount, floating and Sunlit Sea. Sungrow and Ciel {'& '}
            Terre dominate the statistics, but the number of providers is growing rapidly. In
            general, the LCOE is declining, but has great uncertainty in estimates. Sunlit Sea is
            estimated to deliver significantly better LCOE than its competitors as soon as the
            product is commercialized.
          </div>
          <div className="mt-4 text-xl text-right">
            Our estimates for ground mount and floating solar are based on Sunlit Sea{"'"}s
            interpretation of data from various sources. Estimates for Sunlit Seas LCOE are based on
            assumptions such as our progression, product improvements, better solar cell technology,
            price of raw materials, market development amongst others.
          </div>
        </div>
      </div>
    </>
  );
};

export default Costs;

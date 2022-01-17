import React from 'react';

const Costs: React.FC = () => {
  return (
    <>
      <div className="flex flex-col w-1/2">
        <div className="pr-8 text-6xl font-body">Costs with floating solar power</div>
        <div className="mt-8 text-2xl">
          CAPEX, OPEX and LCOE * for projects in floating solar power at sea are often considered by
          analysts to be dominated by: long-term installation processes with low quality, marine
          fouling and pollution, uncertainty about the effect of long-term operation, and expensive
          financing due to risk, and a number of other factors.
        </div>
        <div className="mt-8 text-2xl">
          Sunlit Sea has a very efficient production process, quality assurance, installation
          procedure and predictable maximum loads on the anchoring system, which means that CAPEX is
          somewhat lower than the competition. OPEX is positively affected by the fact that we
          develop technology that has the potential to severely limit marine fouling, as well as the
          work we put in with partners to deal with marine pollution. For Sunlit Sea, LCOE is
          positively influenced by the quality of the product: the rigidity of the float, real-time
          monitoring, gluing, welding; which means that Sunlit Sea{"'"}s solution degrades less over
          time. Furthermore, our unique work within the marine grade performance ratio adds up to
          significantly lower financial risk Sunlit Sea projects.
        </div>
        <div className="mt-4 text-xl">
          * CAPEX = cost of capital, OPEX = operating expenses, LCOE = cost of energy over the
          lifetime of technology
        </div>
      </div>
    </>
  );
};

export default Costs;

import React from 'react';
import BoardMember from '../../atoms/BoardMember';

const Governance: React.FC = () => {
  return (
    <>
      <section className="flex flex-col-reverse justify-center gap-8 xl:gap-16 lg:flex-row">
        <div className="flex flex-col max-w-xl mx-auto lg:max-w-full lg:w-1/2">
          <img className="object-contain" src="/img/governance.jpg" alt="Governance" />
          <div className="flex flex-row justify-between gap-4 pr-12 mt-1 text-center">
            <BoardMember name="Kim André Johnsen" company="Nunchi" />
            <BoardMember name="Per Lindberg" company="Sunlit Sea" />
            <BoardMember name="Eirik Larsen" company="Kodeworks" />
          </div>
        </div>
        <div className="flex flex-col lg:w-1/2">
          <h2 className="default-heading">Corporate Governance</h2>
          <ul className="mt-4 ml-8 text-lg leading-snug list-disc xl:text-2xl ">
            <li>Professionally skilled and working board</li>
            <ul className="ml-8 list-disc">
              <li>Per Lindberg - Chairman of the Board</li>
              <li>Eirik Larsen - board member</li>
              <li>Kim André Johnsen - board member</li>
            </ul>
            <li>Core competence committed and incentivized to remain in the company</li>
            <li>
              Strong rights for <i>all</i> shareholders
            </li>
            <li>Openness and a culture of sharing also towards investors</li>
            <li>Marginal dilution of existing shareholders planned (20% in 2022)</li>
            <li>
              Corporate governance regulated by a solid shareholder agreement and the Norwegian
              Companies Act.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Governance;

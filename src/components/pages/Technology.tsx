import React from 'react';
import ChallengeTitle from './../atoms/ChallengeTitle';
import Challenge from './../atoms/Challenge';
import Technology1 from '../molecules/technology/Technology1';
import Technology2 from './../molecules/technology/Technology2';
import Technology3 from './../molecules/technology/Technology3';
import Technology4 from './../molecules/technology/Technology4';
import Technology5 from './../molecules/technology/Technology5';
import Technology6 from './../molecules/technology/Technology6';
import Technology7 from './../molecules/technology/Technology7';
import Technology8 from './../molecules/technology/Technology8';
import Technology9 from './../molecules/technology/Technology9';
import Technology10 from './../molecules/technology/Technology10';
import Technology11 from './../molecules/technology/Technology11';
import Technology12 from './../molecules/technology/Technology12';
import Technology13 from './../molecules/technology/Technology13';
import Technology14 from './../molecules/technology/Technology14';
import Technology15 from './../molecules/technology/Technology15';
import Technology16 from './../molecules/technology/Technology16';

const Technology: React.FC = () => {
  return (
    <>
      <div className="flex flex-col px-16 pb-8 bg-primary-50">
        <div className="mt-8 text-5xl ">Technology</div>
        <div className="mt-6 ml-8 text-3xl">
          Below you will find an overview for the various challenges with floating photovoltaics.
          Click on them to see how we solve them.
        </div>
        <div className="flex flex-row mt-8">
          <ChallengeTitle name="Vær" />
          <Challenge
            name="1. Varme degraderer solcellepaneler over tid"
            style="bg-secondary-100"
            child={<Technology1 />}
          />
          <Challenge
            name="2. Varme reduserer strømproduksjon"
            style="bg-secondary-100"
            child={<Technology2 />}
          />
          <Challenge
            name="3. Bølger reduserer strømproduksjon på grunn av mismatch losses"
            style="bg-secondary-100"
            child={<Technology3 />}
          />
          <Challenge
            name="4. Bevegelser degraderer ytelsen til paneler og elektriske komponenter"
            style="bg-secondary-100"
            child={<Technology4 />}
          />
          <Challenge
            name="5. Is ødelegger flytende solkraft-installasjoner"
            style="bg-secondary-100"
            child={<Technology5 />}
          />
          <Challenge
            name="6. Vind påvirker flytende solkraft-installasjoner"
            style="bg-secondary-100"
            child={<Technology6 />}
          />
        </div>
        <div className="flex flex-row mt-8">
          <ChallengeTitle name="Installasjon og vedlikehold" />
          <Challenge
            name="7. Installasjon av flytende solkraft er tidkrevende, kostnadsdrivende og kvalitetsreduserende"
            style="bg-secondary-300"
            child={<Technology7 />}
          />
          <Challenge
            name="8. Vedlikehold og håndtering av solceller reduserer strømproduksjon"
            style="bg-secondary-300"
            child={<Technology8 />}
          />
          <Challenge
            name="9. Performance ratio kan ikke garanteres"
            style="bg-secondary-300"
            child={<Technology9 />}
          />
          <Challenge
            name="10. Solcellepaneler spesiallaget for vann, og spesielt saltvann, er dyre"
            style="bg-secondary-300"
            child={<Technology10 />}
          />
          <Challenge
            name="11. Flytende solkraft er uegnet for kortere prosjekter"
            style="bg-secondary-300"
            child={<Technology11 />}
          />
          <div className="flex-1 mx-4" />
        </div>
        <div className="flex flex-row mt-8">
          <ChallengeTitle name="Landskap og miljø" />
          <Challenge
            name="12. Landbasert solkraft nær forbrukersentrum har høy arealkostnad"
            style="bg-secondary-200"
            child={<Technology12 />}
          />
          <Challenge
            name="13. Marin begroing skaper store vedlikeholdskostnader"
            style="bg-secondary-200"
            child={<Technology13 />}
          />
          <Challenge
            name="14. Strøm i saltvann kan utgjøre en fare for liv og helse"
            style="bg-secondary-200"
            child={<Technology14 />}
          />
          <Challenge
            name="15. Strøm i saltvann kan forårsake korrosjon"
            style="bg-secondary-200"
            child={<Technology15 />}
          />
          <Challenge
            name="16. Flytende solkraft bruker ikke-bærekraftige materialer"
            style="bg-secondary-200"
            child={<Technology16 />}
          />
          <div className="flex-1 mx-4" />
        </div>
      </div>
    </>
  );
};

export default Technology;

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
          <ChallengeTitle name="Weather" />
          <Challenge
            name="1. Heat degrades solar panels over time"
            style="bg-secondary-100"
            child={<Technology1 />}
          />
          <Challenge
            name="2. Heat reduces power production"
            style="bg-secondary-100"
            child={<Technology2 />}
          />
          <Challenge
            name="3. Waves reduce power output"
            style="bg-secondary-100"
            child={<Technology3 />}
          />
          <Challenge
            name="4. Movements degrade performance of solar panels"
            style="bg-secondary-100"
            child={<Technology4 />}
          />
          <Challenge
            name="5. Ice offers risk to installations"
            style="bg-secondary-100"
            child={<Technology5 />}
          />
          <Challenge
            name="6. Floating structures exposed to wind"
            style="bg-secondary-100"
            child={<Technology6 />}
          />
        </div>
        <div className="flex flex-row mt-8">
          <ChallengeTitle name="Installation and maintenance" />
          <Challenge
            name="7. Time consuming installation processes"
            style="bg-secondary-300"
            child={<Technology7 />}
          />
          <Challenge
            name="8. Downtime during maintenance and handling"
            style="bg-secondary-300"
            child={<Technology8 />}
          />
          <Challenge
            name="9. Difficulties guaranteeing performance ratio"
            style="bg-secondary-300"
            child={<Technology9 />}
          />
          <Challenge
            name="10. Expensive marine technology"
            style="bg-secondary-300"
            child={<Technology10 />}
          />
          <Challenge
            name="11. Challenges linked to short project lifespan"
            style="bg-secondary-300"
            child={<Technology11 />}
          />
          <div className="flex-1 mx-4" />
        </div>
        <div className="flex flex-row mt-8">
          <ChallengeTitle name="Landscape and environment" />
          <Challenge
            name="12. Centralized land-based solar is expensive"
            style="bg-secondary-200"
            child={<Technology12 />}
          />
          <Challenge
            name="13. Marine overgrowth impose large costs"
            style="bg-secondary-200"
            child={<Technology13 />}
          />
          <Challenge
            name="14. Power leaks pose a threat to life and health"
            style="bg-secondary-200"
            child={<Technology14 />}
          />
          <Challenge
            name="15. Electricity in salt water can cause corrosion"
            style="bg-secondary-200"
            child={<Technology15 />}
          />
          <Challenge
            name="16. Floating solar apply unsustainable materials"
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

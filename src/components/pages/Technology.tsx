import React from 'react';
import ChallengeTitle from './../atoms/ChallengeTitle';
import Challenge from './../atoms/Challenge';
import WarmthDegradation from './../molecules/technology/WarmthDegradation';

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
            name="Varme degraderer solcellepaneler over tid"
            style="bg-secondary-100"
            child={<WarmthDegradation />}
          />
          <Challenge
            name="Varme degraderer solcellepaneler over tid"
            style="bg-secondary-100"
            child={<WarmthDegradation />}
          />
          <Challenge
            name="Varme degraderer solcellepaneler over tid"
            style="bg-secondary-100"
            child={<WarmthDegradation />}
          />
          <Challenge
            name="Varme degraderer solcellepaneler over tid"
            style="bg-secondary-100"
            child={<WarmthDegradation />}
          />
          <Challenge
            name="Varme degraderer solcellepaneler over tid"
            style="bg-secondary-100"
            child={<WarmthDegradation />}
          />
          <Challenge
            name="Varme degraderer solcellepaneler over tid"
            style="bg-secondary-100"
            child={<WarmthDegradation />}
          />
        </div>
        <div className="flex flex-row mt-8">
          <ChallengeTitle name="Vær" />
          <Challenge
            name="Varme degraderer solcellepaneler over tid"
            style="bg-secondary-300"
            child={<WarmthDegradation />}
          />
          <Challenge
            name="Varme degraderer solcellepaneler over tid"
            style="bg-secondary-300"
            child={<WarmthDegradation />}
          />
          <Challenge
            name="Varme degraderer solcellepaneler over tid"
            style="bg-secondary-300"
            child={<WarmthDegradation />}
          />
          <Challenge
            name="Varme degraderer solcellepaneler over tid"
            style="bg-secondary-300"
            child={<WarmthDegradation />}
          />
          <Challenge
            name="Varme degraderer solcellepaneler over tid"
            style="bg-secondary-300"
            child={<WarmthDegradation />}
          />
          <div className="flex-1 mx-4" />
        </div>
        <div className="flex flex-row mt-8">
          <ChallengeTitle name="Vær" />
          <Challenge
            name="Varme degraderer solcellepaneler over tid"
            style="bg-secondary-200"
            child={<WarmthDegradation />}
          />
          <Challenge
            name="Varme degraderer solcellepaneler over tid"
            style="bg-secondary-200"
            child={<WarmthDegradation />}
          />
          <Challenge
            name="Varme degraderer solcellepaneler over tid"
            style="bg-secondary-200"
            child={<WarmthDegradation />}
          />
          <Challenge
            name="Varme degraderer solcellepaneler over tid"
            style="bg-secondary-200"
            child={<WarmthDegradation />}
          />
          <div className="flex-1 mx-4" />
          <div className="flex-1 mx-4" />
        </div>
        <div className="flex flex-row mt-8">
          <ChallengeTitle name="Vær" />
          <Challenge
            name="Varme degraderer solcellepaneler over tid"
            style="bg-secondary-400"
            child={<WarmthDegradation />}
          />
          <Challenge
            name="Varme degraderer solcellepaneler over tid"
            style="bg-secondary-400"
            child={<WarmthDegradation />}
          />
          <div className="flex-1 mx-4" />
          <div className="flex-1 mx-4" />
          <div className="flex-1 mx-4" />
          <div className="flex-1 mx-4" />
        </div>
      </div>
    </>
  );
};

export default Technology;

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
import { ContentContainer } from '../atoms/ContentContainer';
import { TopPagePoster } from '../molecules/TopPagePoster';

const Technology: React.FC = () => {
  return (
    <>
      <div className="pb-8 bg-white">
        <TopPagePoster
          image={'/img/technology/technology_poster.jpg'}
          imageAlt={'Construction of a floating solar panel'}
          headingText="Technology"
          subHeadingText={[
            'Below you will find an overview for the various challenges with floating photovoltaics. Click on them to see how we solve them.',
          ]}
        ></TopPagePoster>
        <ContentContainer>
          <div className="flex flex-col mt-4">
            <ChallengeTitle name="Weather" />
            <div className="flex flex-col gap-4 mt-4">
              <Challenge
                name="Heat degrades solar panels over time"
                number="1."
                background="bg-primary-200"
                child={<Technology1 />}
              />
              <Challenge
                name="Heat reduces power production"
                number="2."
                background="bg-primary-100"
                child={<Technology2 />}
              />
              <Challenge
                name="Waves reduce power output"
                number="3."
                background="bg-primary-200"
                child={<Technology3 />}
              />
              <Challenge
                name="Movements degrade performance of solar panels"
                number="4."
                background="bg-primary-100"
                child={<Technology4 />}
              />
              <Challenge
                name="Ice offers risk to installations"
                number="5."
                background="bg-primary-200"
                child={<Technology5 />}
              />
              <Challenge
                name="Floating structures exposed to wind"
                number="6."
                background="bg-primary-100"
                child={<Technology6 />}
              />
              <div className="mt-4">
                <ChallengeTitle name="Installation and maintenance" />
              </div>
              <Challenge
                name="Time consuming installation processes"
                number="7."
                background="bg-primary-200"
                child={<Technology7 />}
              />
              <Challenge
                name="Downtime during maintenance and handling"
                number="8."
                background="bg-primary-100"
                child={<Technology8 />}
              />
              <Challenge
                name="Difficulties guaranteeing performance ratio"
                number="9."
                background="bg-primary-200"
                child={<Technology9 />}
              />
              <Challenge
                name="Expensive marine technology"
                number="10."
                background="bg-primary-100"
                child={<Technology10 />}
              />
              <Challenge
                name="Challenges linked to short project lifespan"
                number="11."
                background="bg-primary-200"
                child={<Technology11 />}
              />
              <div className="mt-4">
                <ChallengeTitle name="Landscape and environment" />
              </div>
              <Challenge
                name="Centralized land-based solar is expensive"
                number="12."
                background="bg-primary-200"
                child={<Technology12 />}
              />
              <Challenge
                name="Marine overgrowth impose large costs"
                number="13."
                background="bg-primary-100"
                child={<Technology13 />}
              />
              <Challenge
                name="Power leaks pose a threat to life and health"
                number="14."
                background="bg-primary-200"
                child={<Technology14 />}
              />
              <Challenge
                name="Electricity in salt water can cause corrosion"
                number="15."
                background="bg-primary-100"
                child={<Technology15 />}
              />
              <Challenge
                name="Floating solar apply unsustainable materials"
                number="16."
                background="bg-primary-200"
                child={<Technology16 />}
              />
            </div>
          </div>
        </ContentContainer>
      </div>
    </>
  );
};

export default Technology;

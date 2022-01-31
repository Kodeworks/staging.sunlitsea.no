import React, { useState } from 'react';
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

const weather = [
  { name: 'Heat degrades solar panels over time', child: Technology1 },
  { name: 'Heat reduces power production', child: Technology2 },
  { name: 'Waves reduce power output', child: Technology3 },
  { name: 'Movements degrade performance of solar panels', child: Technology4 },
  { name: 'Ice offers risk to installations', child: Technology5 },
  { name: 'Floating structures exposed to wind', child: Technology6 },
];

const installation = [
  { name: 'Time consuming installation processes', child: Technology7 },
  { name: 'Downtime during maintenance and handling', child: Technology8 },
  { name: 'Difficulties guaranteeing performance ratio', child: Technology9 },
  { name: 'Expensive marine technology', child: Technology10 },
  { name: 'Challenges linked to short project lifespan', child: Technology11 },
];

const landscape = [
  { name: 'Centralized land-based solar is expensive', child: Technology12 },
  { name: 'Marine overgrowth impose large costs', child: Technology13 },
  { name: 'Power leaks pose a threat to life and health', child: Technology14 },
  { name: 'Electricity in salt water can cause corrosion', child: Technology15 },
  { name: 'Floating solar apply unsustainable materials', child: Technology16 },
];

const Technology: React.FC = () => {
  const [openedChallenge, setOpenedChallenge] = useState(0);
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
              {weather.map((object, i) => (
                <Challenge
                  name={object.name}
                  number={i + 1}
                  background={i % 2 === 0 ? 'bg-primary-200' : 'bg-primary-100'}
                  child={<object.child />}
                  key={i}
                  openedChallenge={openedChallenge}
                  setOpenedChallenge={setOpenedChallenge}
                />
              ))}
              <div className="mt-4">
                <ChallengeTitle name="Installation and maintenance" />
              </div>
              {installation.map((object, i) => (
                <Challenge
                  name={object.name}
                  number={i + weather.length + 1}
                  background={i % 2 === 0 ? 'bg-primary-200' : 'bg-primary-100'}
                  child={<object.child />}
                  key={i}
                  openedChallenge={openedChallenge}
                  setOpenedChallenge={setOpenedChallenge}
                />
              ))}
              <div className="mt-4">
                <ChallengeTitle name="Landscape and environment" />
              </div>
              {landscape.map((object, i) => (
                <Challenge
                  name={object.name}
                  number={i + weather.length + installation.length + 1}
                  background={i % 2 === 0 ? 'bg-primary-200' : 'bg-primary-100'}
                  child={<object.child />}
                  key={i}
                  openedChallenge={openedChallenge}
                  setOpenedChallenge={setOpenedChallenge}
                />
              ))}
            </div>
          </div>
        </ContentContainer>
      </div>
    </>
  );
};

export default Technology;

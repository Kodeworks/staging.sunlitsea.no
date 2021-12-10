import React from 'react';
import MainMenuItem from '../atoms/MainMenuItem';
import Quoter from '../molecules/Quoter';

const Main: React.FC = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute bottom-0 w-7/12 p-8 mb-16 ml-16 rounded-3xl whiteSecondaryGradient opacity-95">
          <Quoter />
        </div>
        <img className="w-full" src="img/splash.png" />
      </div>
      <div className="w-full pb-8 whiteSecondaryGradient">
        <div className="w-1/2 mx-auto mt-8 text-2xl text-center font-arial">
          SunlitSea was founded in March 2019 by Per Lindberg and Kodeworks AS as a technology
          provider to the floating solar industry. With a new and rapidly growing market, Sunlit Sea
          aims to address the potential of optimizing cost, longevity, power production, operation
          and maintenance, degradation, safety and decommissioning. With an exceptional great team
          and support from our partners we are fit for this job and ready to revolutionize ocean
          based floating solar.
        </div>
        <div className="flex flex-row mx-16 mt-16 justify-evenly">
          <MainMenuItem
            title="About Us"
            image="about_us"
            description="Learn more about the company, the team, and our mission."
          />
          <MainMenuItem
            title="Product"
            image="product"
            description="Take a look at our products and effortlessly calculate a quote."
          />
          <MainMenuItem
            title="Technology"
            image="technology"
            description="Explore our innovations in the floating solar industry."
          />
          <MainMenuItem
            title="Roadmap"
            image="roadmap"
            description="See our list of upcoming milestones."
          />
        </div>
        <div className="flex flex-row mx-16 mt-16 justify-evenly">
          <MainMenuItem
            title="Careers"
            image="careers"
            description="Find out what employment opportunities we can offer you."
          />
          <MainMenuItem
            title="Investors"
            image="investors"
            description="Find out how Sunlit Sea compares against the market."
          />
          <MainMenuItem
            title="Contact"
            image="contact"
            description="Get in touch with us if you are still wondering about anything."
          />
        </div>
      </div>
    </>
  );
};

export default Main;

import React from 'react';
import MainMenuItem from '../atoms/MainMenuItem';
import Quoter from '../molecules/Quoter';

const Main: React.FC = () => {
  return (
    <>
      <div className="relative">
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          className="top-0 left-0 object-cover w-screen h-230 filter brightness-75"
          poster="img/jumbotron_video_poster.jpg"
        >
          <source src="jumbotronBackgroundVideo-smaller.mp4" type="video/mp4" />
        </video>
        <div className="absolute bottom-0 w-7/12 p-8 mb-16 ml-16 rounded-3xl whiteSecondaryGradient opacity-95">
          <Quoter />
        </div>
      </div>
      <div className="w-full pb-8 whiteSecondaryGradient">
        <div className="w-1/2 pt-8 mx-auto text-2xl text-center font-arial">
          Sunlit Sea is a technology provider to the floating solar industry and was founded by Per
          Lindberg and Kodeworks AS in 2019. With a new and rapidly growing market Sunlit Sea aims
          to address the potential of optimizing cost, longevity, power production, operation and
          maintenance, degradation, safety and decommissioning. With an exceptionally great team and
          support from our partners we are fit for this job and ready to revolutionize ocean based
          floating solar.
        </div>
        <div className="flex flex-row mx-16 mt-16 justify-evenly">
          <MainMenuItem
            title="About"
            image="about_us"
            description="Learn about our company, the team and our mission"
          />
          <MainMenuItem title="Product" image="product" description="Our system explained" />
          <MainMenuItem
            title="Technology"
            image="technology"
            description="Explore our innovations in the industry of floating solar"
          />
          <MainMenuItem
            title="Roadmap"
            image="roadmap"
            description="Upcoming company milestones and accomplishments"
          />
        </div>
        <div className="flex flex-row mx-16 mt-16 justify-evenly">
          <MainMenuItem
            title="Careers"
            image="careers"
            description="Sunlit Sea employment opportunities; join our journey"
          />
          <MainMenuItem
            title="Investors"
            image="investors"
            description="Find out how Sunlit Sea compares against the market"
          />
          <MainMenuItem title="Contact" image="contact" description="Get in touch" />
        </div>
      </div>
    </>
  );
};

export default Main;

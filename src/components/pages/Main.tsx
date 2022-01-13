import React from 'react';
import MainMenuItem from '../atoms/MainMenuItem';
import MainPageQuoter from '../molecules/MainPageQuoter';

const Main: React.FC = () => {
  return (
    <>
      <div className="bg-white">
        <div className="relative">
          <video
            autoPlay={true}
            loop={true}
            muted={true}
            className="top-0 left-0 object-cover w-screen h-[56rem] brightness-90"
            poster="img/jumbotron_video_poster.jpg"
            src="https://user-images.githubusercontent.com/66632214/148779626-72c2596b-4f4e-43c1-bc58-ea5a96a6f201.mp4"
          />
          <div className="absolute bottom-0 w-full h-full transparentBlackGradient">
            <MainPageQuoter />
          </div>
        </div>
        <div className="w-full pt-16 pb-32 ">
          <div className="flex flex-row px-32">
            <div className="w-1/2 pr-6">
              <img
                className="object-contain"
                src="/img/main/main_page_placeholder.jpg"
                alt="placeholder"
              />
            </div>
            <div className="w-1/2 pl-6 text-4xl leading-normal font-arial">
              Sunlit Sea is a technology provider to the floating solar industry and was founded by
              Per Lindberg and Kodeworks AS in 2019. With a new and rapidly growing market Sunlit
              Sea aims to address the potential of optimizing cost, longevity, power production,
              operation and maintenance, degradation, safety and decommissioning. With an
              exceptionally great team and support from our partners we are fit for this job and
              ready to revolutionize ocean based floating solar.
            </div>
          </div>

          <div className="flex flex-row mt-16 px-28">
            <MainMenuItem title="Product" image="product" description="Our system explained" />
            <MainMenuItem
              title="Technology"
              image="technology"
              description="Explore our innovations in the industry of floating solar"
            />
            <MainMenuItem
              title="About"
              image="about"
              description="Learn about our company, the team and our mission"
            />
          </div>
          <div className="flex flex-row mt-8 px-28 justify-evenly">
            <MainMenuItem
              title="Investors"
              image="investors"
              description="Find out how Sunlit Sea compares against the market"
            />
            <MainMenuItem
              title="Careers"
              image="careers"
              description="Sunlit Sea employment opportunities; join our journey"
            />
            <MainMenuItem title="Contact" image="contact" description="Get in touch" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

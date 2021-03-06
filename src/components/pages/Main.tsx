import React from 'react';
import { ContentContainer } from '../atoms/ContentContainer';
import MainMenuItem from '../atoms/MainMenuItem';
import Quoter from '../molecules/Quoter';

const Main: React.FC = () => {
  return (
    <>
      <div className="bg-white">
        <div className="relative">
          <video
            autoPlay={true}
            loop={true}
            muted={true}
            className="top-0 left-0 object-cover w-screen h-screen max-h-[900px] brightness-75"
            poster="img/jumbotron_video_poster.jpg"
            src="https://user-images.githubusercontent.com/66632214/148779626-72c2596b-4f4e-43c1-bc58-ea5a96a6f201.mp4"
          />
          <div className="absolute bottom-0 w-full h-full transparentBlackGradient">
            <Quoter />
          </div>
        </div>

        <ContentContainer>
          <div className="w-full pt-16 pb-32 ">
            <section className="flex flex-row gap-6 lg:gap-12">
              <div className="hidden md:w-1/2 md:block ">
                <img
                  className="object-contain 2xl:max-h-80 2xl:mx-auto 3xl:max-h-full"
                  src="/img/main/main_page_placeholder.jpg"
                  alt="placeholder"
                />
              </div>
              <div className="md:w-1/2 2xl:leading-normal default-body">
                Sunlit Sea is a technology provider to the floating solar industry and was founded
                by Per Lindberg and Kodeworks AS in 2019. With a new and rapidly growing market
                Sunlit Sea aims to address the potential of optimizing cost, longevity, power
                production, operation and maintenance, degradation, safety and decommissioning. With
                an exceptionally great team and support from our partners we are fit for this job
                and ready to revolutionize ocean based floating solar.
              </div>
            </section>

            <div className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3">
              <MainMenuItem title="Product" image="product" description="Our system explained" />
              <MainMenuItem
                title="Technology"
                image="technology"
                description="Explore our innovations in the industry of floating solar"
              />
              <MainMenuItem
                title="About"
                image="about_us"
                description="Learn about our company, the team and our mission"
              />
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
        </ContentContainer>
      </div>
    </>
  );
};

export default Main;

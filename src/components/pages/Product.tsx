import React from 'react';
import ApplicationAreaItem from './../atoms/ApplicationAreaItem';
import Quoter from './../molecules/Quoter';

const Product: React.FC = () => {
  return (
    <>
      <div className="flex flex-col px-32 pb-24 whiteSecondaryGradient">
        <section className="flex flex-row mt-16 ml-8">
          <div className="flex flex-col">
            <div className="text-6xl font-body">Floating Solar Panels</div>
            <div className="mt-8 ml-8 text-2xl">
              Sunlit Sea delivers floating solar panel installations. Leverer beskrivelse av laster.
              Kommer med en garanti at vi overskrider ikke lastene. MGPR garanti. Foreslår
              mooringssystem.
            </div>
          </div>
          <img src={'/img/product/panels.png'} className="w-1/2 px-8" alt="Floating solar panels" />
        </section>
        <section className="flex flex-row mt-16">
          <img
            className="w-1/2 mx-4"
            src={'/img/product/video_placeholder.png'}
            alt="Deployment video"
          />
          <div className="flex flex-col mt-4 ml-4">
            <div className="text-5xl font-body">From manufacturing to deployment</div>
            <div className="mt-8 ml-8 text-2xl">
              Our quick manufacturing and deployment process is what makes Sunlit Sea stand out. By
              preassembling the floats they can easily be transported and deployed on water. This
              leads to easy logistics and low capital binding.
            </div>
          </div>
        </section>
        <section className="flex flex-col mt-24">
          <div className="mb-8 text-5xl font-body">Specification</div>
          <div className="flex flex-col w-9/12 ml-16 text-2xl">
            <div className="flex flex-row py-4 bg-primary-100 rounded-t-3xl">
              <div className="w-7/12 ml-4">Panel weight</div>
              <div>60kg</div>
            </div>
            <div className="flex flex-row py-4 bg-secondary-400">
              <div className="w-7/12 ml-4">Watt peak per panel</div>
              <div>525W</div>
            </div>
            <div className="flex flex-row py-4 bg-primary-100">
              <div className="w-7/12 ml-4">Panel dimensions</div>
              <div>2m x 2m</div>
            </div>
            <div className="flex flex-row py-4 bg-secondary-400">
              <div className="w-7/12 ml-4">Distance between panels</div>
              <div>15cm</div>
            </div>
            <div className="flex flex-row py-4 bg-primary-100 rounded-b-3xl">
              <div className="w-7/12 ml-4">Maximum force on anchor points</div>
              <div>2000N</div>
            </div>
          </div>
        </section>

        <section className="flex flex-col pb-24 mt-24">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row w-1/2 justify-evenly">
              <ApplicationAreaItem title="Deep sea mining" image="deep_sea_mining" />
              <ApplicationAreaItem title="Desalination" image="desalination" />
            </div>
            <div className="flex flex-col w-1/2 mt-8">
              <div className="ml-4 text-5xl font-body">Application areas</div>
              <div className="mt-4 ml-16 text-2xl">
                Thanks to extended longevity and rapid decomissioning, our installations are
                applicable for a wide variety of use cases.
              </div>
            </div>
          </div>
          <div className="flex flex-row mt-8">
            <div className="flex flex-row w-1/2 justify-evenly">
              <ApplicationAreaItem title="Marinas" image="marinas" />
              <ApplicationAreaItem title="Deep sea mining" image="deep_sea_mining" />
            </div>
            <div className="flex flex-row w-1/2 justify-evenly">
              <ApplicationAreaItem title="Desalination" image="desalination" />
              <ApplicationAreaItem title="Marinas" image="marinas" />
            </div>
          </div>
        </section>
        <section className="w-7/12">
          <Quoter />
        </section>
      </div>
    </>
  );
};

export default Product;

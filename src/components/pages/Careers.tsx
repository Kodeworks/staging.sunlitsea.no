import React from 'react';
import PositionTile from './../atoms/PositionTile';

const Careers: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center px-32 pb-16 whiteSecondaryGradient">
        <div className="mt-8 text-6xl text-center font-body">Careers in Sunlit Sea</div>
        <div className="w-1/2 mx-auto mt-8 text-2xl text-center">Text about Sunlit Sea</div>
        <section className="flex flex-row mt-16">
          <img
            className="w-1/2 px-16 mx-4"
            src={'/img/deployment_video_placeholder.jpg'}
            alt="Deployment video"
          />
          <div className="flex flex-col w-1/2 mt-8 ml-4">
            <div className="text-5xl font-body">Tekst</div>
            <div className="mt-8 ml-8 text-2xl">Wkat kind of people Sunlit Sea wants</div>
          </div>
        </section>
        <section className="flex flex-row mt-16">
          <div className="flex flex-col w-1/2 mt-8 ml-4">
            <div className="text-5xl font-body">Tekst</div>
            <div className="mt-8 ml-8 text-2xl">Why you should work for Sunlit Sea</div>
          </div>
          <img
            className="w-1/2 px-16 mx-4"
            src={'/img/factory_video_placeholder.jpg'}
            alt="Factory video"
          />
        </section>
        <div className="mt-16 text-5xl text-center font-body">16 positions available</div>
        <div className="flex flex-row justify-around mt-8">
          <PositionTile number={3} position="Position" description="Description" />
          <PositionTile number={2} position="Position" description="Description" />
          <PositionTile number={5} position="Position" description="Description" />
        </div>
        <div className="flex flex-row justify-around mt-8">
          <PositionTile number={2} position="Position" description="Description" />
          <PositionTile number={1} position="Position" description="Description" />
          <PositionTile number={3} position="Position" description="Description" />
        </div>
      </div>
    </>
  );
};

export default Careers;

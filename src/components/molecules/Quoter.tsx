import React, { useState } from 'react';
import RightArrow from './../atoms/RightArrow';

const Quoter: React.FC = () => {
  //TODO won't work on going back to the page, as the field is filled out from before but the state is not
  const [location, setLocation] = useState('');
  return (
    <>
      <div className="flex flex-col">
        <div className="text-5xl font-body">Get a quote for your floating solar installation</div>
        <div className="mt-4 text-2xl">
          If you are curious to find out if our floating solar installations can be of value to you:
          check out the beta version of our{' '}
          <a href="https://quote.sunlitsea.no" className="underline text-support-dark">
            Smart Quoter
          </a>
          . Fill out the desired location below to start.
        </div>
        <div className="mt-8 ml-8 text-2xl">Location</div>
        <div className="flex flex-row">
          <input
            className="w-9/12 py-5 pl-8 mt-4 ml-8 text-2xl leading-3 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-secondary-700"
            onInput={(e) => {
              setLocation(e.currentTarget.value);
            }}
            value={location}
          />
          <a
            className="z-10 flex flex-col justify-center px-3 mt-6 mb-2 -ml-20 rounded-full bg-primary-200 hover:bg-primary-500"
            href={'https://quote.sunlitsea.no/?location=' + encodeURIComponent(location)}
          >
            <RightArrow className="w-10 pointer-events-none" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Quoter;

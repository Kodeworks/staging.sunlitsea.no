import React, { useState } from 'react';
import QuoterArrow from '../atoms/QuoterArrow';
import DownArrow from '../atoms/DownArrow';

const link = 'https://quote.sunlitsea.no/?location=';

const Quoter: React.FC = () => {
  const [location, setLocation] = useState('');
  return (
    <>
      <div className="flex flex-col justify-end w-full h-full px-4 pb-4 mx-auto text-lg text-white sm:pb-8 md:px-0 md:w-3/4 lg:w-2/3 lg:text-2xl">
        <div className="text-3xl lg:text-5xl font-headline">
          Get an estimate for your floating solar installation
        </div>
        <div className="mt-1 sm:mt-4 ">
          How can our system be of value to you: Check out our{' '}
          <a href="https://quote.sunlitsea.no" className="underline text-support-light">
            Smart Quoter
          </a>{' '}
          (beta version). Select your location to get started.
        </div>
        <div className="flex flex-row">
          <input
            className="w-full py-2 pl-8 mt-4 leading-3 text-black sm:mt-8 lg:py-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-200"
            onInput={(e) => {
              setLocation(e.currentTarget.value);
            }}
            onKeyPress={(e) => {
              if (e.key == 'Enter') {
                window.location.assign(link + encodeURIComponent(location));
              }
            }}
            value={location}
            placeholder="Location"
          />
          <a
            className="z-10 flex flex-col justify-center px-3 mt-4 sm:mt-8 -ml-14 lg:-ml-20"
            href={link + encodeURIComponent(location)}
          >
            <QuoterArrow className="w-8 lg:w-16" />
          </a>
        </div>
        <DownArrow className="mx-auto mt-6 sm:mt-12 md:mt-24" />
      </div>
    </>
  );
};

export default Quoter;

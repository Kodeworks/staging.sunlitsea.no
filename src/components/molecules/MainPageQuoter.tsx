import React, { useState } from 'react';
import QuoterArrow from '../atoms/QuoterArrow';
import DownArrow from '../atoms/DownArrow';

const MainPageQuoter: React.FC = () => {
  const [location, setLocation] = useState('');
  return (
    <>
      <div className="flex flex-col w-7/12 pb-8 mx-auto text-white pt-156">
        <div className="text-5xl font-body">
          Get an estimate for your floating solar installation
        </div>
        <div className="mt-4 text-2xl">
          How can our system be of value to you: Check out our{' '}
          <a href="https://quote.sunlitsea.no" className="underline text-support-light">
            Smart Quoter
          </a>{' '}
          (beta version). Select your location to get started.
        </div>
        <div className="flex flex-row">
          <input
            className="w-full py-5 pl-8 mt-8 text-2xl leading-3 text-black rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-200"
            onInput={(e) => {
              setLocation(e.currentTarget.value);
            }}
            value={location}
            placeholder="Location"
          />
          <a
            className="z-10 flex flex-col justify-center px-3 mt-8 -ml-20"
            href={'https://quote.sunlitsea.no/?location=' + encodeURIComponent(location)}
          >
            <QuoterArrow className="w-16" />
          </a>
        </div>
        <DownArrow className="mx-auto mt-24" />
      </div>
    </>
  );
};

export default MainPageQuoter;

import React from 'react';

import LogoWithName from '../atoms/LogoWithName';

const Footer: React.FC = () => {
  return (
    <div className="flex w-full max-w-full pointer-events-none">
      <footer className="flex flex-col items-center w-full pt-1 text-white bg-black pointer-events-auto h-14 wh1:py-8 wh1:h-44 text-xs3 wh-1:text-xs2 wh1:text-xs wh2:text-sm wh2:px-4 wh4:text-base">
        <div className="flex flex-row justify-between w-full h-10 px-1 wh0:h-auto wh0:px-2">
          <LogoWithName
            containerClassName="invisible absolute wh0:visible wh0:static inline-block ml-2 sm:ml-4 h-7 wh1:mt-2 min-w-max"
            svgClassName="h-4 lg:h-7 my-auto fill-current"
            textClassName="mt-0.5 text-lg lg:text-4xl font-medium tracking-widest text-white"
          />
          <div className="flex flex-col wh0:mx-2 wh1:mt-2">
            <span>Established in 2019</span>
            <a
              className="underline cursor-pointer hover:text-gray-300"
              href="https://sunlitsea.no/"
            >
              sunlitsea.no
            </a>
          </div>

          <div className="flex flex-col wh0:mx-2 wh1:mt-2">
            <span className="flex flex-row justify-between">
              <a
                className="mr-1 underline cursor-pointer hover:text-gray-300"
                href="mailto:per@sunlitsea.no"
              >
                per@sunlitsea.no
              </a>
              <span>+4797079523</span>
            </span>
            <span className="flex flex-row justify-between">
              <a
                className="mr-1 underline cursor-pointer hover:text-gray-300"
                href="mailto:eirik@sunlitsea.no"
              >
                eirik@sunlitsea.no
              </a>
              <span>+4741670269</span>
            </span>
          </div>

          <div className="flex flex-col pb-4 wh0:mx-2 wh1:mt-2 lg:pb-0">
            <span>Registration number 922 633 924</span>
            <span>Fjordgata 30, 7010 Trondheim,</span>
            <span>Norway</span>
          </div>
        </div>
        <div className="mb-1 wh1:mb-4">
          <span>Copyright SunlitSea AS 2021</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

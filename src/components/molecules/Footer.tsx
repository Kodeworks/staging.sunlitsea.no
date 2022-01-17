import React from 'react';
import { SocialIcon } from 'react-social-icons';

import LogoWithName from '../atoms/LogoWithName';

const Footer: React.FC = () => {
  return (
    <div className="flex w-full max-w-full pointer-events-none">
      <footer className="flex flex-col items-center w-full px-4 py-8 text-base text-white bg-gray-900 pointer-events-auto h-44">
        <div className="flex flex-row justify-between w-full h-auto px-2">
          <div className="flex flex-row ">
            <LogoWithName
              containerClassName=" inline-block ml-4 min-w-max"
              svgClassName="w-8 pt-1 my-auto fill-current"
              textClassName="mt-0.5 text-4xl font-medium tracking-widest text-white"
            />
            <SocialIcon
              url="https://www.linkedin.com/company/sunlitsea/"
              fgColor="white"
              className="ml-4 scale-90"
            />
            <SocialIcon
              url="https://www.youtube.com/channel/UCuDWVcMb3metkdBTk1CSxig"
              fgColor="white"
              className="ml-1 scale-90"
            />
          </div>
          <div className="flex flex-col mx-4 ">
            <span>Established in 2019</span>
            <a
              className="underline cursor-pointer hover:text-gray-300"
              href="https://sunlitsea.no/"
            >
              sunlitsea.no
            </a>
          </div>

          <div className="flex flex-col mx-4">
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

          <div className="flex flex-col mx-4 ">
            <span>Registration number 922 633 924</span>
            <span>Fjordgata 30, 7010 Trondheim,</span>
            <span>Norway</span>
          </div>
        </div>
        <div className="mb-4">
          <span>Copyright SunlitSea AS 2022</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

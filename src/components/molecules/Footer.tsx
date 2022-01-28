import React from 'react';

import LogoSvg from '../atoms/LogoSvg';

const Footer: React.FC = () => {
  return (
    <div className="flex w-full max-w-full pointer-events-none">
      <footer className="flex flex-col items-center w-full px-4 py-8 text-base text-white bg-gray-900 pointer-events-auto">
        <div className="flex flex-row flex-wrap justify-center w-full h-auto px-2 gap-x-8 gap-y-4">
          <div className="flex flex-col sm:flex-row w-[350px] sm:w-[425px] ">
            <a className="mx-auto mt-2.5 w-72" href="/">
              <LogoSvg className="" fill="#FFFFFF" />
            </a>
            <div className="flex flex-row mx-auto mt-2.5">
              <a className="ml-4" href="https://www.linkedin.com/company/sunlitsea/">
                <img
                  src={'/img/linkedin.png'}
                  className="object-contain w-[30px] h-[30px] bg-gray-100 invert"
                  alt="LinkedIn"
                />
              </a>
              <a className="ml-2" href="https://www.youtube.com/channel/UCuDWVcMb3metkdBTk1CSxig">
                <img
                  src={'/img/youtube.png'}
                  className="object-contain w-[36px] h-[36px] bg-gray-100 invert"
                  alt="youtube"
                />
              </a>
            </div>
          </div>
          <div className="flex flex-col  w-[136px]">
            <span>Established in 2019</span>
            <a
              className="underline cursor-pointer hover:text-gray-300"
              href="https://sunlitsea.no/"
            >
              sunlitsea.no
            </a>
          </div>

          <div className="flex flex-col w-[245px]">
            <span className="flex flex-row justify-between">
              <a
                className="mr-1 underline cursor-pointer hover:text-gray-300"
                href="mailto:per@sunlitsea.no"
              >
                per@sunlitsea.no
              </a>
              <span>+47 970 79 523</span>
            </span>
            <span className="flex flex-row justify-between">
              <a
                className="mr-1 underline cursor-pointer hover:text-gray-300"
                href="mailto:eirik@sunlitsea.no"
              >
                eirik@sunlitsea.no
              </a>
              <span>+47 416 70 269</span>
            </span>
          </div>

          <div className="flex flex-col  w-[235px]">
            <span>Registration number 922 633 924</span>
            <span>Fjordgata 30, 7010 Trondheim,</span>
            <span>Norway</span>
          </div>
        </div>
        <div className="pb-4 mt-4">
          <span>Copyright Sunlit Sea AS 2022</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

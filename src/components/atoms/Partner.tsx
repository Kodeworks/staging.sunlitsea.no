import React from 'react';
import Popup from 'reactjs-popup';

interface Props {
  image: string;
  name: string;
  link?: string;
  description: string[];
}

const Partner: React.FC<Props> = ({ image, name, link, description }) => {
  return (
    <Popup
      trigger={
        <div className="relative max-w-[6rem] min-w-[6rem]  sm:max-w-[8rem] sm:min-w-[8rem] lg:max-w-[10rem] lg:min-w-[10rem] 3xl:max-w-[12rem] 3xl:min-w-[12rem]  flex justify-center cursor-pointer ">
          <div className="absolute z-10 w-full h-full hover:bg-opacity-[.15] hover:bg-primary-300" />
          <img src={'/img/about/partners/' + image} className="z-0 object-contain" />
        </div>
      }
      modal
      nested
    >
      {(close) => (
        <div className="flex flex-col max-w-screen-lg max-h-screen px-1 overflow-y-auto bg-white partner-scroll sm:px-2 sm:mx-8 md:px-4">
          <button
            className="self-end text-4xl focus:outline-none active:border-transparent"
            onClick={close}
          >
            &times;
          </button>
          <div className="flex flex-col px-1 pb-8 text-sm leading-tight sm:px-4 md:px-8 md:flex-row sm:text-xl lg:text-2xl gap-y-2 sm:gap-y-4">
            <div className="flex flex-col">
              <div className="text-lg leading-none sm:text-3xl lg:text-4xl font-headline">
                {name}
              </div>
              <div className="flex flex-col gap-2 mt-2">
                {description.map((paragraph, i) => (
                  <div key={i}>{paragraph}</div>
                ))}
              </div>
              <div className="flex flex-row justify-center gap-8 mt-8 lg:gap-16">
                {link && (
                  <a href={link} className="my-auto text-support-dark hover:text-support-light">
                    {link?.replaceAll('http://', '').replaceAll('https://', '').split('/')[0]}
                  </a>
                )}
                <div className="max-w-[10rem] max-h-[8rem] sm:max-w-[15rem] sm:max-h-[8rem] lg:max-w-[20rem] lg:max-h-[10rem] flex justify-center">
                  <img src={'/img/about/partners/' + image} className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default Partner;

import React from 'react';
import RightArrow from './RightArrow';

interface Props {
  title: string;
  image: string;
  description: string;
}

const MainMenuItem: React.FC<Props> = ({ title, image, description }) => {
  return (
    <a className="relative flex flex-col group" href={'#/' + image}>
      <img className="" src={'/img/main/' + image + '.jpg'} alt={image} />
      <div className="absolute bottom-0 w-full h-full pl-4 transition-all duration-500 ease-in-out bg-primary-200 opacity-90 group-hover:max-h-full max-h-12 lg:max-h-20">
        <div className="mt-2 text-2xl font-bold opacity-100 lg:mt-3 lg:text-4xl lg:leading-snug">
          {title}
        </div>
        <div className="pr-2 text-base transition-all duration-500 opacity-0 pointer-events-none md:text-lg lg:text-xl group-hover:opacity-100">
          {description}
        </div>
        <RightArrow className="absolute transition-all duration-500 opacity-0 pointer-events-none bottom-4 right-4 xl:bottom-6 xl:right-6 group-hover:opacity-100" />
      </div>
    </a>
  );
};

export default MainMenuItem;

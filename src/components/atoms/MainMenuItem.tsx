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
      <div className="absolute bottom-0 w-full h-full pl-4 transition-all duration-500 ease-in-out bg-primary-200 opacity-90 group-hover:max-h-full max-h-20">
        <div className="my-4 text-4xl font-bold opacity-100">{title}</div>
        <div className="text-xl transition-all duration-500 opacity-0 pointer-events-none group-hover:opacity-100">
          {description}
        </div>
        <RightArrow className="absolute bottom-0 right-0 mb-6 mr-6 transition-all duration-500 opacity-0 pointer-events-none group-hover:opacity-100" />
      </div>
    </a>
  );
};

export default MainMenuItem;

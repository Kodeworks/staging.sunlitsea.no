import React from 'react';

interface Props {
  title: string;
  image: string;
  description: string;
}

const MainMenuItem: React.FC<Props> = ({ title, image, description }) => {
  return (
    <a className="flex flex-col w-1/4 px-4" href={image}>
      <div className="mx-auto text-4xl">{title}</div>
      <img className="w-1/2 py-2 mx-auto" src={'/img/' + image + '.png'} alt={image} />
      <div className="mx-auto text-2xl text-center">{description}</div>
    </a>
  );
};

export default MainMenuItem;

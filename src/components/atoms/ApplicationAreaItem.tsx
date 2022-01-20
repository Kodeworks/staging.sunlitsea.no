import React from 'react';

interface Props {
  title: string;
  image: string;
}

const ApplicationAreaItem: React.FC<Props> = ({ title, image }) => {
  return (
    <div className="flex flex-col">
      <div className="text-lg font-bold lg:text-2xl md:text-xl xl:text-3xl ">{title}</div>
      <img className="w-full mt-2" src={'/img/product/' + image + '.jpg'} alt={image} />
    </div>
  );
};

export default ApplicationAreaItem;

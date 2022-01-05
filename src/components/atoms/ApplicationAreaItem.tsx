import React from 'react';

interface Props {
  title: string;
  image: string;
}

const ApplicationAreaItem: React.FC<Props> = ({ title, image }) => {
  return (
    <div className="flex flex-col w-1/3 pb-4 rounded-bl-lg rounded-tr-3xl bg-primary-200">
      <div className="py-2 ml-2 text-3xl">{title}</div>
      <img className="w-full" src={'/img/product/' + image + '.jpg'} alt={image} />
    </div>
  );
};

export default ApplicationAreaItem;

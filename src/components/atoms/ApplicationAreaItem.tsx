import React from 'react';

interface Props {
  title: string;
  image: string;
}

const ApplicationAreaItem: React.FC<Props> = ({ title, image }) => {
  return (
    <div className="flex flex-col w-5/12 pb-16 rounded-3xl bg-primary-100">
      <div className="py-4 ml-8 text-4xl">{title}</div>
      <img className="w-full" src={'/img/product/' + image + '.png'} alt={image} />
    </div>
  );
};

export default ApplicationAreaItem;

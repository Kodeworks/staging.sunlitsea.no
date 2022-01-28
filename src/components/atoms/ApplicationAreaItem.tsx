import React from 'react';

interface Props {
  title: string;
  image: string;
}

const ApplicationAreaItem: React.FC<Props> = ({ title, image }) => {
  return (
    <div className="flex flex-col">
      <div className="text-lg font-bold lg:text-2xl md:text-xl xl:text-3xl ">{title}</div>
      <img
        className="object-cover w-full mt-2 max-h-64 3xl:max-h-full"
        src={'/img/product/' + image + '.jpg'}
        alt={image}
      />
    </div>
  );
};

export default ApplicationAreaItem;

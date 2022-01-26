import React from 'react';

interface Props {
  name: string;
  image: string;
  role: string;
}

const Consultant: React.FC<Props> = ({ name, image, role }) => {
  return (
    <div className="flex flex-col">
      <img className="object-contain" src={'/img/about/' + image} alt={image} />
      <div className="mt-1 text-lg sm:mt-2 sm:text-xl lg:text-3xl font-body">
        {name.toUpperCase()}
      </div>
      <div className="text-sm text-gray-700 sm:text-lg lg:text-2xl font-body">
        {role.toUpperCase()}
      </div>
    </div>
  );
};

export default Consultant;

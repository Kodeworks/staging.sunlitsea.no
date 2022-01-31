import React from 'react';

interface Props {
  name: string;
  image?: string;
  role: string;
}

const Consultant: React.FC<Props> = ({ name, image, role }) => {
  return (
    <div className="flex flex-col">
      <img
        className="object-contain 3xl:max-h-full"
        src={'/img/about/' + (image ?? 'person_placeholder.jpg')}
        alt={image}
      />
      <div className="mt-1 text-lg sm:mt-2 sm:text-xl 3xl:text-3xl font-headline">
        {name.toUpperCase()}
      </div>
      <div className="text-sm text-gray-700 sm:text-lg 3xl:text-2xl font-headline">
        {role.toUpperCase()}
      </div>
    </div>
  );
};

export default Consultant;

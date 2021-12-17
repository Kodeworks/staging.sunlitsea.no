import React from 'react';

interface Props {
  name: string;
  image: string;
  role: string;
}

const Consultant: React.FC<Props> = ({ name, image, role }) => {
  return (
    <div className="flex flex-col flex-1 max-w-sm mx-16">
      <img className="object-contain" src={'/img/people/' + image + '.jpg'} alt={image} />
      <div className="mt-2 text-3xl font-body">{name.toUpperCase()}</div>
      <div className="text-2xl text-gray-700 font-body">{role.toUpperCase()}</div>
    </div>
  );
};

export default Consultant;

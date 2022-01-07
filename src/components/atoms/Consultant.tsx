import React from 'react';

interface Props {
  name: string;
  image: string;
  role: string;
}

const Consultant: React.FC<Props> = ({ name, image, role }) => {
  return (
    <div className="flex flex-col w-1/4 px-8 mt-16">
      <img className="object-contain" src={'/img/people/' + image} alt={image} />
      <div className="mt-2 text-3xl font-body">{name.toUpperCase()}</div>
      <div className="text-2xl text-gray-700 font-body">{role.toUpperCase()}</div>
    </div>
  );
};

export default Consultant;

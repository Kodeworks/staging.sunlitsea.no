import React from 'react';

interface Props {
  name: string;
  image: string;
  role: string;
  description: string;
}

const Employee: React.FC<Props> = ({ name, image, role, description }) => {
  return (
    <div className="flex flex-row w-full gap-x-4 2xl:gap-x-8">
      <div className="">
        <img className="object-contain" src={'/img/about/' + image} alt={image} />
      </div>
      <div className="flex flex-col min-w-[250px] xl:min-w-[300px] 2xl:min-w-[350px] w-1/2">
        <div className="text-3xl xl:text-4xl font-body">{name.toUpperCase()}</div>
        <div className="text-xl text-gray-700 xl:text-2xl font-body">{role.toUpperCase()}</div>
        <div className="text-base leading-tight xl:leading-tight 2xl:leading-tight xl:text-lg 2xl:text-xl">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Employee;

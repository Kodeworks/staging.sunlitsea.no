import React from 'react';

interface Props {
  name: string;
  image: string;
  role: string;
  description?: string;
  list?: string[];
}

const Employee: React.FC<Props> = ({ name, image, role, description, list }) => {
  return (
    <div className="flex flex-row w-1/2 mt-8">
      <img className="object-contain" src={'/img/people/' + image} alt={image} />
      <div className="flex flex-col pr-8 mt-8 ml-4">
        <div className="text-4xl font-body">{name.toUpperCase()}</div>
        <div className="text-3xl text-gray-700 font-body">{role.toUpperCase()}</div>
        {description && <div className="ml-8 text-xl">{description}</div>}
        {list && (
          <ul className="ml-10 list-disc">
            {list.map(function (object, i) {
              return (
                <li className="text-xl" key={i}>
                  {object}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Employee;

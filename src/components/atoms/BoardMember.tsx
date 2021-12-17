import React from 'react';

interface Props {
  name: string;
  company: string;
}

const BoardMember: React.FC<Props> = ({ name, company }) => {
  return (
    <div className="flex flex-col justify-center ">
      <div className="text-xl font-semibold">{name.toUpperCase()}</div>
      <div className="text-lg font-semibold text-gray-700">{company}</div>
    </div>
  );
};

export default BoardMember;

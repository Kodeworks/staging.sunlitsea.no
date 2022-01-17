import React from 'react';

interface Props {
  name: string;
  company: string;
}

const BoardMember: React.FC<Props> = ({ name, company }) => {
  return (
    <div className="flex flex-col text-left">
      <div className="text-lg font-bold leading-tight">{name.toUpperCase()}</div>
      <div className="w-full text-gray-700 text-md">{company}</div>
    </div>
  );
};

export default BoardMember;

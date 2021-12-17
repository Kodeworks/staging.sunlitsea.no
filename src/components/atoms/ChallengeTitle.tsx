import React from 'react';

interface Props {
  name: string;
}

const ChallengeTitle: React.FC<Props> = ({ name }) => {
  return (
    <div className="flex flex-1 h-36">
      <div className="mx-auto my-auto text-3xl">{name}</div>
    </div>
  );
};

export default ChallengeTitle;

import React from 'react';

interface Props {
  name: string;
}

const ChallengeTitle: React.FC<Props> = ({ name }) => {
  return (
    <div className="">
      <div className="mx-auto my-auto text-4xl sm:text-5xl lg:text-6xl">{name}</div>
    </div>
  );
};

export default ChallengeTitle;

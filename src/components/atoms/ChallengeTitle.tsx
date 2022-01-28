import React from 'react';

interface Props {
  name: string;
}

const ChallengeTitle: React.FC<Props> = ({ name }) => {
  return (
    <div className="">
      <div className="mx-auto my-auto default-heading">{name}</div>
    </div>
  );
};

export default ChallengeTitle;

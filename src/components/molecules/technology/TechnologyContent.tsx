import React from 'react';

interface Props {
  description: string;
  solution: string;
  images: React.ReactNode;
}

const TechnologyContent: React.FC<Props> = ({ description, solution, images }) => {
  return (
    <>
      <div className="flex flex-col justify-center pb-8 xl:flex-row">
        <div className="flex flex-col px-4 2xl:px-12 xl:w-7/12">
          <div className="mt-2 text-lg sm:text-xl lg:mt-4">{description}</div>
          <div className="mt-4 text-xl sm:text-2xl lg:mt-8 font-body">Our solution</div>
          <div className="text-lg sm:text-xl">{solution}</div>
        </div>
        <div className="flex flex-col mt-4 text-lg xl:w-5/12 xl:mt-0 sm:text-xl">{images}</div>
      </div>
    </>
  );
};

export default TechnologyContent;

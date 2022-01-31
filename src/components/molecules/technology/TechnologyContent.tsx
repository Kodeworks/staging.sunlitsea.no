import React from 'react';

interface Props {
  description: string;
  solution: string;
  images: React.ReactNode;
}

const TechnologyContent: React.FC<Props> = ({ description, solution, images }) => {
  return (
    <>
      <div className="flex flex-col justify-center gap-4 pt-2 pb-8 lg:pt-4 xl:flex-row">
        <div className="flex flex-col 2xl:px-12 xl:w-2/3 3xl:w-7/12">
          <div className="text-lg sm:text-xl">{description}</div>
          <div className="mt-4 text-xl sm:text-2xl lg:mt-8 font-headline">Our solution</div>
          <div className="text-lg sm:text-xl">{solution}</div>
        </div>
        <div className="flex flex-col mt-4 text-base italic xl:w-1/3 3xl:w-5/12 xl:mt-0">
          {images}
        </div>
      </div>
    </>
  );
};

export default TechnologyContent;

import React from 'react';

interface Props {
  property: string;
  value: string;
}

const ProductSpecification: React.FC<Props> = ({ property, value }) => {
  return (
    <div className="flex flex-row text-sm font-headline md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
      <div className="w-2/3 pr-1">{property}</div>
      <div className="font-bold">{value}</div>
    </div>
  );
};

export default ProductSpecification;

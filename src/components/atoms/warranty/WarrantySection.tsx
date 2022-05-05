import React, { ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
}

const WarrantySection: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <section>
        <span className="pb-2 text-2xl font-semibold text-secondary-700">{title}</span>
        <div className="grid gap-x-16 gap-y-4 lg:grid-cols-2">{children}</div>
      </section>
    </>
  );
};

export default WarrantySection;

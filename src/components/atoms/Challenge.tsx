import React, { useState } from 'react';

interface Props {
  name: string;
  number: string;
  background: string;
  child: React.ReactNode;
}

const Challenge: React.FC<Props> = ({ name, number, background, child }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button
        className={
          'flex flex-row p-6 focus:outline-none text-3xl sm:text-4xl lg:text-5xl text-left focus:ring-inset focus:ring-2 w-full focus:ring-primary-400 ' +
          ' ' +
          background
        }
        onClick={() => setToggle(!toggle)}
      >
        <div className="mt-1 sm:mt-[5px] font-body">{number}</div>
        <div className="pl-2 sm:pl-4 lg:pl-8 ">{name}</div>
      </button>

      {toggle && (
        <div className={'flex flex-col px-8 max-w-screen-2xl' + ' ' + background}>{child}</div>
      )}
    </div>
  );
};

export default Challenge;

import React from 'react';
import Popup from 'reactjs-popup';

interface Props {
  name: string;
  style: string;
  child: React.ReactNode;
}

const Challenge: React.FC<Props> = ({ name, style, child }) => {
  return (
    <Popup
      trigger={
        <button
          className={
            'mx-4 h-36 flex-1 flex focus:outline-none focus:ring-2 focus:ring-primary-400 hover:bg-secondary-500 rounded-lg' +
            ' ' +
            style
          }
        >
          <div className="mx-8 my-auto text-xl">{name}</div>
        </button>
      }
      modal
      nested
    >
      {(close) => (
        <div className="flex flex-col px-8 max-w-screen-2xl rounded-3xl bg-secondary-50">
          <button
            className="self-end mr-4 text-4xl focus:outline-none active:border-transparent"
            onClick={close}
          >
            &times;
          </button>
          {child}
        </div>
      )}
    </Popup>
  );
};

export default Challenge;

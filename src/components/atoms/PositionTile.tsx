import React from 'react';
import Popup from 'reactjs-popup';
import RightArrow from './RightArrow';

interface Props {
  position: string;
  positionsOpened: number;
  description: string;
  image?: string;
}

function capitalizeString(str: string) {
  if (str.length < 2) {
    return str.toUpperCase();
  } else {
    return `${str[0].toUpperCase()}${str.slice(1)}`;
  }
}

const PositionTile: React.FC<Props> = ({ position, positionsOpened, description, image }) => {
  return (

    <Popup
      trigger={
        <div
          className="bg-primary-200 w-full min-h-[128px] md:min-h-[196px] xl:min-h-[256px]   relative cursor-pointer"
          title={position + ' job opening'}
        >
          <h2 className="font-headline font-bold text-3xl md:text-4xl mt-4 md:mt-8 mx-3 md:ml-5">
            {capitalizeString(position)}
          </h2>
          <p className="text-lg mt-2 ml-3 md:ml-5 mb-2">
            {positionsOpened > 1
              ? positionsOpened.toString() + ' openings available'
              : 'One opening available'}
          </p>

          <RightArrow className="w-10 pointer-events-none absolute cursor-pointer bottom-8 right-8" />
        </div>
      }
      modal
      nested
    >
      {(close) => (
        <div className="flex flex-col px-8 max-w-screen-2xl rounded-3xl bg-primary-400">
          <button
            className="self-end text-4xl focus:outline-none active:border-transparent"
            onClick={close}
          >
            &times;
          </button>
          <div className="flex flex-row pb-8">
            <div className={'flex flex-col px-12' + ' ' + (image ? 'w-7/12' : '')}>
              <div className="text-4xl font-body">{position.toUpperCase()}</div>
              <div className="mt-4 text-xl">{description}</div>
              <div className="mt-4 text-xl">
                Interested? Send an email to{' '}
                <a
                  className="underline text-support-dark"
                  href={
                    'mailto:post@sunlitsea.no?subject=' +
                    encodeURIComponent('Application ' + position)
                  }
                >
                  post@sunlitsea.no
                </a>
                !
              </div>
            </div>
            {image && (
              <div className="flex flex-col w-5/12">
                <img
                  className="object-contain rounded-lg"
                  src={'/img/careers/' + image}
                  alt={image}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </Popup>
  );
};

export default PositionTile;

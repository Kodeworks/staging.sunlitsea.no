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
          <h2 className="mx-3 mt-4 text-2xl font-bold font-headline md:text-3xl xl:text-4xl md:mt-8 md:ml-5">
            {capitalizeString(position)}
          </h2>
          <p className="mt-2 mb-2 ml-3 text-lg md:ml-5">
            {positionsOpened > 1
              ? positionsOpened.toString() + ' openings available'
              : 'One opening available'}
          </p>

          <RightArrow className="absolute w-10 cursor-pointer pointer-events-none md:bottom-4 md:right-4 bottom-2 right-2 " />
        </div>
      }
      modal
      nested
    >
      {(close) => (
        <div className="flex flex-col px-2 mx-8 sm:px-4 md:px-8 max-w-screen-2xl bg-primary-200">
          <button
            className="self-end text-4xl focus:outline-none active:border-transparent"
            onClick={close}
          >
            &times;
          </button>
          <div className="flex flex-col pb-8 md:flex-row">
            <div className={'flex flex-col ' + ' ' + (image ? 'md:w-7/12' : '')}>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-body">
                {position.toUpperCase()}
              </div>
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
              <div className="flex flex-col mx-auto mt-4 w-80 md:w-5/12 md:mt-0">
                <img className="object-contain" src={'/img/careers/' + image} alt={image} />
              </div>
            )}
          </div>
        </div>
      )}
    </Popup>
  );
};

export default PositionTile;

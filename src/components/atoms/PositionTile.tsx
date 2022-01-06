import React from 'react';
import Popup from 'reactjs-popup';

interface Props {
  position: string;
  positionsOpened: number;
  description: string;
  image?: string;
}

const PositionTile: React.FC<Props> = ({ position, positionsOpened, description, image }) => {
  return (
    <div className="w-1/4 px-12 py-8 mx-4 mt-8 text-center rounded-lg bg-primary-200">
      <div className="flex flex-col justify-between h-full">
        <div className="text-3xl ">
          {(positionsOpened > 1
            ? positionsOpened.toString() + ' ' + position
            : position[0].toUpperCase() + position.slice(1)) +
            ' job ' +
            (positionsOpened < 2 ? 'opening' : 'openings') +
            ' available'}
        </div>
        <div>
          <Popup
            trigger={
              <button className="p-4 mt-8 text-2xl bg-primary-400 rounded-3xl hover:bg-primary-500">
                Learn more
              </button>
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
        </div>
      </div>
    </div>
  );
};

export default PositionTile;

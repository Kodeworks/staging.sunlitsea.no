import React, { useRef, useState } from 'react';

interface Props {
  name: string;
  number: number;
  background: string;
  child: React.ReactNode;
  openedChallenge: number;
  setOpenedChallenge: React.Dispatch<React.SetStateAction<number>>;
}

const Challenge: React.FC<Props> = ({
  name,
  number,
  background,
  child,
  openedChallenge,
  setOpenedChallenge,
}) => {
  const myRef = useRef<HTMLDivElement>(null);
  const [isOpened, setIsOpened] = useState(false);
  if (isOpened && openedChallenge != number) {
    setIsOpened(false);
  }
  return (
    <div ref={myRef}>
      <button
        className={
          'flex flex-row p-4 text-3xl:p-6 focus:outline-none text-2xl sm:text-3xl 3xl:text-4xl text-left focus:ring-inset focus:ring-2 w-full focus:ring-primary-400 ' +
          ' ' +
          background
        }
        onClick={() => {
          if (!isOpened) {
            setOpenedChallenge(number);
            if (number > openedChallenge) {
              setTimeout(() => {
                if (myRef.current?.offsetTop) window.scrollTo(0, myRef.current.offsetTop - 60);
                console.log(myRef.current?.offsetTop);
              }, 1);
            }
          }
          setIsOpened(!isOpened);
        }}
      >
        <div className="mt-[3px] 3xl:mt-[5px] font-headline">{number}.</div>
        <div className="pl-2 sm:pl-4 lg:pl-8 ">{name}</div>
      </button>

      {isOpened && (
        <div className={'flex flex-col px-4 sm:px-8 md:px-12 max-w-screen-2xl' + ' ' + background}>
          {child}
        </div>
      )}
    </div>
  );
};

export default Challenge;

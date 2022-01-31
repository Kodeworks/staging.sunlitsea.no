import React, { useState } from 'react';
import LogoSvg from '../atoms/LogoSvg';
import Hamburger from '../atoms/Hamburger';
import Cross from '../atoms/Cross';
import { useLocation } from 'react-router-dom';

const items = [
  { name: 'Product', link: 'product' },
  { name: 'Technology', link: 'technology' },
  { name: 'About', link: 'about_us' },
  { name: 'Investors', link: 'investors' },
  { name: 'Careers', link: 'careers' },
  { name: 'Contact', link: 'contact' },
];

const NavBar: React.FC = () => {
  const [menuButtonPressed, setMenuButtonPressed] = useState(false);

  useLocation(); //forces the component to rerender on url change

  return (
    <>
      <div className="fixed z-40 flex flex-row justify-between w-full bg-primary-100">
        <a
          className="ml-3 w-36 sm:w-40 md:w-52 lg:w-64 3xl:w-72 md:ml-6 xl:ml-8 my-1.5 3xl:my-4"
          href="/"
        >
          <LogoSvg fill="#010101" />
        </a>
        <div className="hidden pr-2 sm:flex sm:flex-row sm:pr-4">
          {items.map(function (object, i) {
            const current = window.location.href.includes(object.link);
            return (
              <a
                className={
                  'flex px-1 text-sm sm:px-1.5 sm:text-base lg:px-3.5 lg:text-xl xl:text-2xl font-headline hover:bg-primary-300' +
                  ' ' +
                  (current ? 'bg-primary-200' : '')
                }
                key={i}
                href={'#/' + object.link}
              >
                <div className="self-center">{object.name}</div>
              </a>
            );
          })}
        </div>
        <button
          className="block mr-4 sm:hidden"
          onClick={() => setMenuButtonPressed(!menuButtonPressed)}
        >
          {!menuButtonPressed && <Hamburger className="" />}
          {menuButtonPressed && <Cross className="w-3.5 h-3.5 mr-1" />}
        </button>
      </div>
      {menuButtonPressed && (
        <div className="fixed z-40 flex flex-col w-full sm:hidden top-6 bg-primary-100 ">
          {items.map(function (object, i) {
            const current = window.location.href.includes(object.link);
            return (
              <a
                className={
                  'py-4 pl-4 text-lg hover:bg-primary-300' + ' ' + (current ? 'bg-primary-200' : '')
                }
                key={i}
                href={'#/' + object.link}
                onClick={() => setMenuButtonPressed(false)}
              >
                {object.name}
              </a>
            );
          })}
        </div>
      )}
    </>
  );
};

export default NavBar;

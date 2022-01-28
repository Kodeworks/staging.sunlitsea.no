import React, { useState } from 'react';
import LogoSvg from '../atoms/LogoSvg';
import Hamburger from '../atoms/Hamburger';
import Cross from '../atoms/Cross';

const NavBar: React.FC = () => {
  const items = [
    { name: 'Product', link: 'product' },
    { name: 'Technology', link: 'technology' },
    { name: 'About', link: 'about_us' },
    { name: 'Investors', link: 'investors' },
    { name: 'Careers', link: 'careers' },
    { name: 'Contact', link: 'contact' },
  ];

  const [menuButtonPressed, setMenuButtonPressed] = useState(false);

  return (
    <>
      <div className="fixed z-40 flex flex-row justify-between w-full py-1.5 3xl:py-4 bg-primary-100">
        <a className="my-auto ml-3 w-36 sm:w-40 md:w-52 lg:w-64 3xl:w-72 md:ml-6 xl:ml-8 " href="/">
          <LogoSvg className="" fill="#010101" />
        </a>
        <div className="hidden pr-2 my-auto sm:block sm:pr-4">
          {items.map(function (object, i) {
            return (
              <a
                className="mx-1 my-auto text-sm sm:mx-1.5 sm:text-base lg:mx-3.5 lg:text-xl xl:text-2xl font-headline"
                key={i}
                href={'#/' + object.link}
              >
                {object.name}
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
        <div className="fixed z-40 flex flex-col w-full sm:hidden top-6 bg-primary-100">
          {items.map(function (object, i) {
            return (
              <a
                className="py-4 ml-4 text-lg"
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

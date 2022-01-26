import React, { useState } from 'react';
import LogoWithName from '../atoms/LogoWithName';
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
      <div className="fixed z-40 flex flex-row justify-between w-full py-3 lg:py-4 bg-primary-100">
        <LogoWithName
          containerClassName="my-auto ml-3 md:ml-6 xl:ml-8 inline-block "
          svgClassName="w-6 xl:w-8"
          textClassName="hidden md:block text-2xl lg:text-3xl xl:text-4xl ml-1.5 xl:ml-3.5 font-body mt-0.5 tracking-[.11em]"
        />
        <div className="hidden pr-2 my-auto sm:block sm:pr-4">
          {items.map(function (object, i) {
            return (
              <a
                className="mx-1 my-auto text-sm sm:mx-1.5 sm:text-base lg:mx-3.5 lg:text-xl xl:text-2xl font-body"
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
          {menuButtonPressed && <Cross className="w-4 h-4 mr-1" />}
        </button>
      </div>
      {menuButtonPressed && (
        <div className="fixed z-40 flex flex-col w-full sm:hidden top-8 bg-primary-100">
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

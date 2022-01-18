import React from 'react';
import LogoWithName from '../atoms/LogoWithName';

const NavBar: React.FC = () => {
  const items = [
    { name: 'About', link: 'about_us' },
    { name: 'Product', link: 'product' },
    { name: 'Technology', link: 'technology' },
    { name: 'Roadmap', link: 'roadmap' },
    { name: 'Careers', link: 'careers' },
    { name: 'Investors', link: 'investors' },
    { name: 'Contact', link: 'contact' },
  ];
  return (
    <>
      <div className="fixed z-40 flex flex-row justify-between w-full py-2 lg:py-4 bg-primary-100">
        <LogoWithName
          containerClassName="my-auto ml-3 md:ml-6 xl:ml-8"
          svgClassName="w-5 lg:w-6 xl:w-8"
          textClassName="hidden md:block text-2xl lg:text-3xl xl:text-4xl ml-1.5 xl:ml-3 font-body font-bold mt-1"
        />
        <div className="pr-2 my-auto sm:pr-4">
          {items.map(function (object, i) {
            return (
              <a
                className="mx-1 my-auto text-sm sm:mx-2 sm:text-base lg:mx-4 lg:text-xl xl:text-2xl font-body"
                key={i}
                href={'#/' + object.link}
              >
                {object.name}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NavBar;

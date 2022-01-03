import React from 'react';
import LogoWithName from '../atoms/LogoWithName';

const NavBar: React.FC = () => {
  const items = [
    { name: 'About Us', link: 'about_us' },
    { name: 'Product', link: 'product' },
    { name: 'Technology', link: 'technology' },
    { name: 'Roadmap', link: 'roadmap' },
    { name: 'Careers', link: 'careers' },
    { name: 'Investors', link: 'investors' },
    { name: 'Contact', link: 'contact' },
  ];
  return (
    <>
      <div className="fixed z-40 flex flex-row w-full py-4 border-b-4 border-primary-300 justify-evenly bg-primary-100">
        <LogoWithName
          containerClassName="my-auto"
          svgClassName="w-8"
          textClassName="text-4xl font-body font-bold"
        />
        {items.map(function (object, i) {
          return (
            <a className="mx-1 my-auto text-2xl font-body" key={i} href={'#/' + object.link}>
              {object.name}
            </a>
          );
        })}
      </div>
    </>
  );
};

export default NavBar;
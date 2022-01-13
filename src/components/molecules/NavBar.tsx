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
      <div className="fixed z-40 flex flex-row justify-between w-full py-4 bg-primary-100">
        <LogoWithName
          containerClassName="my-auto ml-8"
          svgClassName="w-8"
          textClassName="text-4xl font-body font-bold mt-1"
        />
        <div className="pr-4 my-auto">
          {items.map(function (object, i) {
            return (
              <a className="mx-4 my-auto text-2xl font-body" key={i} href={'#/' + object.link}>
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

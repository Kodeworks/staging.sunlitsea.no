import React from 'react';
import NavBar from '../molecules/NavBar';
import Footer from '../molecules/Footer';

const SiteLayout: React.FC = ({ children }) => {
  return (
    <>
      <div className="w-full">
        <NavBar />
        <main className="w-full mt-16">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default SiteLayout;

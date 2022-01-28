import React from 'react';
import NavBar from '../molecules/NavBar';
import Footer from '../molecules/Footer';

const SiteLayout: React.FC = ({ children }) => {
  return (
    <>
      <div className="w-full min-h-screen bg-gray-900">
        <NavBar />
        <main className="w-full">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default SiteLayout;

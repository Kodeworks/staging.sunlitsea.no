import React from 'react';

import { HashRouter } from 'react-router-dom';

import { AppRoutes } from './AppRoutes';
import SiteLayout from './pages/SiteLayout';
import ScrollToTop from './ScrollToTop';
import { SizeContext } from './util/SizeContext';

const App: React.FC = () => {
  return (
    <HashRouter>
      <SizeContext>
        <ScrollToTop />
        <SiteLayout>
          <AppRoutes />
        </SiteLayout>
      </SizeContext>
    </HashRouter>
  );
};

export default App;

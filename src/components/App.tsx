import React from 'react';

import { HashRouter } from 'react-router-dom';

import { AppRoutes } from './AppRoutes';
import SiteLayout from './pages/SiteLayout';
import ScrollToTop from './ScrollToTop';

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <SiteLayout>
        <AppRoutes />
      </SiteLayout>
    </HashRouter>
  );
};

export default App;

import React from 'react';

import { HashRouter } from 'react-router-dom';

import { AppRoutes } from './AppRoutes';
import SiteLayout from './pages/SiteLayout';

const App: React.FC = () => {
  return (
    <HashRouter>
      <SiteLayout>
        <AppRoutes />
      </SiteLayout>
    </HashRouter>
  );
};

export default App;

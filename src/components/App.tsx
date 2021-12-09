import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './AppRoutes';
import SiteLayout from './pages/SiteLayout';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <SiteLayout>
        <AppRoutes />
      </SiteLayout>
    </BrowserRouter>
  );
};

export default App;

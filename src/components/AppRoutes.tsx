import React from 'react';

import { Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import Product from './pages/Product';
import AboutUs from './pages/AboutUs';
import Technology from './pages/Technology';
import Roadmap from './pages/Roadmap';
import Careers from './pages/Careers';
import Investors from './pages/Investors';
import Contact from './pages/Contact';

export const routes = {
  '/': Main,
  '/product': Product,
  '/about_us': AboutUs,
  '/technology': Technology,
  '/roadmap': Roadmap,
  '/careers': Careers,
  '/investors': Investors,
  '/contact': Contact,
} as const;

export const AppRoutes: React.FC = () => {
  return (
    <Switch>
      {Object.entries(routes).map(([path, component]) => {
        return <Route key={path} exact={true} path={path} component={component} />;
      })}
    </Switch>
  );
};

import React from 'react';

import { Route, Switch } from 'react-router-dom';
import Main from '../pages/Main';

export interface SmartQuoterRoute {
  route: string;
  component: React.FC;
}

export const routes = {
  '/': Main,
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

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AboutPage from './containers/AboutPage';
import HomePage from './containers/HomePage';
import NotFound from './containers/NotFoundPage';
import Layout from './containers/Layout';
import ProtectedPage from './containers/AccountPage';

export default function Routes(store) {
  return (
    <Route path='/' component={Layout}>
      <IndexRoute component={HomePage}/>
      <Route path='layout' component={Layout}/>
      <Route path='about' component={AboutPage}/>
      <Route path='protected' component={ProtectedPage}/>
      <Route path='*' component={NotFound}/>
    </Route>
  );
}

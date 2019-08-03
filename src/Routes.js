// @flow

import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './pages/Home';
import StoryDetail from './pages/StoryDetail';
import Profile from './pages/Profile';
import StoryCreate from './pages/StoryCreate';
import Dashboard from './pages/Dashboard';

import PrivateRoute from './components/PrivateRoute';

export default function Routes() {
  return (
    <Router>
      <Route exact path={'/'} component={() => <Home />} />

      <Route
        exact
        path={'/category/:categoryName'}
        component={() => <Home />}
      />
      <PrivateRoute
        exact
        path={'/story/write'}
        component={() => <StoryCreate />}
      />
      <Route exact path={'/story/:storyId'} component={() => <StoryDetail />} />
      <Route exact path={'/profile/:username'} component={() => <Profile />} />
      <PrivateRoute path={'/dashboard'} component={() => <Dashboard />} />

      {/* <PrivateRoute exact path={'/private'} component={() => <DummyPage />} /> */}
    </Router>
  );
}

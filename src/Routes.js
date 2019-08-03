// @flow

import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './pages/Home';
import StoryDetail from './pages/StoryDetail';
import Profile from './pages/Profile';
import DummyPage from './pages/DummyPage';
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
        component={() => <DummyPage />}
      />
      <Route exact path={'/story/:storyId'} component={() => <StoryDetail />} />
      <Route exact path={'/profile/:username'} component={() => <Profile />} />
      <PrivateRoute exact path={'/private'} component={() => <DummyPage />} />
    </Router>
  );
}

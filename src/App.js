// @flow

import * as React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import 'antd/dist/antd.css';

import PrivateRoute from './components/PrivateRoute';

import Home from './pages/Home';
import DummyPage from './pages/DummyPage';

function App() {
  return (
    <Router>
      <Route exact path={'/'} component={() => <Home />} />
      <PrivateRoute exact path={'/profile'} component={() => <DummyPage />} />
    </Router>
  );
}

export default App;

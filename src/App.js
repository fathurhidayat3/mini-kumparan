// @flow

import * as React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import 'antd/dist/antd.css';

import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Route path={'/'} component={() => <Home />} />
    </Router>
  );
}

export default App;

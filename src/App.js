// @flow

import * as React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import 'antd/dist/antd.css';

import Home from './pages/Home';
import DummyPage from './pages/DummyPage';

import PrivateRoute from './components/PrivateRoute';

import AuthContext from './contexts/AuthContext';

function App() {
  const [userData, setUserdata] = React.useState({});

  React.useEffect(() => {
    const savedUserData = localStorage.getItem('user-data');

    setUserdata(savedUserData);
  });

  // function handleLogout() {
  //   localStorage.removeItem('user-data');
  // console.log('ok');
  // }

  return (
    <AuthContext.Provider
      value={{
        userdata: userData,
        setUserdata,
      }}>
      <Router>
        <Route exact path={'/'} component={() => <Home />} />
        <PrivateRoute exact path={'/profile'} component={() => <DummyPage />} />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;

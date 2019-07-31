// @flow

import * as React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import 'antd/dist/antd.css';

import ApolloClient from 'apollo-boost';

import Home from './pages/Home';
import DummyPage from './pages/DummyPage';

import PrivateRoute from './components/PrivateRoute';

import AuthContext from './contexts/AuthContext';
import {ApolloProvider} from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://c7558f2b.ngrok.io/graphql',
});

function App() {
  const [userData, setUserdata] = React.useState({});

  React.useEffect(() => {
    const savedUserData = localStorage.getItem('user-data');

    setUserdata(savedUserData);
  });

  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider
        value={{
          userdata: userData,
          setUserdata,
        }}>
        <Router>
          <Route exact path={'/'} component={() => <Home />} />
          <PrivateRoute
            exact
            path={'/story/:storyId'}
            component={() => <DummyPage />}
          />
        </Router>
      </AuthContext.Provider>
    </ApolloProvider>
  );
}

export default App;

// @flow

import * as React from 'react';

import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import 'antd/dist/antd.css';

import ApolloClient from 'apollo-boost';

import Home from './pages/Home';
import StoryDetail from './pages/StoryDetail';
import DummyPage from './pages/DummyPage';

import PrivateRoute from './components/PrivateRoute';

import AuthContext from './contexts/AuthContext';
import {ApolloProvider} from 'react-apollo';

const client = new ApolloClient({
  // $FlowFixMe
  uri: `${process.env.REACT_APP_GQL_URL}/graphql`,
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

          <Route
            exact
            path={'/story/:storyId'}
            component={() => <StoryDetail />}
          />

          <PrivateRoute
            exact
            path={'/private'}
            component={() => <DummyPage />}
          />
        </Router>
      </AuthContext.Provider>
    </ApolloProvider>
  );
}

export default App;

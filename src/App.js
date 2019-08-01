// @flow

import * as React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

import 'antd/dist/antd.css';

import AuthContext from './contexts/AuthContext';
import FilterContext from './contexts/FilterContext';

import Home from './pages/Home';
import StoryDetail from './pages/StoryDetail';
import Profile from './pages/Profile';
import DummyPage from './pages/DummyPage';

import PrivateRoute from './components/PrivateRoute';

const client = new ApolloClient({
  // $FlowFixMe
  uri: `${process.env.REACT_APP_GQL_URL}/graphql`,
  request: async operation => {
    const userData = JSON.parse(localStorage.getItem('user-data'));

    operation.setContext({
      headers: {
        Authorization: userData ? `Bearer ${userData.token}` : '',
      },
    });
  },
});

function App() {
  const [userData, setUserdata] = React.useState({});
  const [filterData, setFilterData] = React.useState({
    category: '',
    keyword: '',
  });

  React.useEffect(() => {
    const savedUserData = JSON.parse(localStorage.getItem('user-data'));

    setUserdata(savedUserData);
  }, []);

  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider
        value={{
          userdata: userData,
          setUserdata,
        }}>
        <FilterContext.Provider value={{filterData, setFilterData}}>
          <Router>
            <Route exact path={'/'} component={() => <Home />} />

            <Route
              exact
              path={'/category/:categoryName'}
              component={() => <Home />}
            />

            <Route
              exact
              path={'/story/:storyId'}
              component={() => <StoryDetail />}
            />

            <PrivateRoute
              exact
              path={'/profile/:username'}
              component={() => <Profile />}
            />

            <PrivateRoute
              exact
              path={'/private'}
              component={() => <DummyPage />}
            />

            <Route exact path={'/dummy'} component={() => <DummyPage />} />
          </Router>
        </FilterContext.Provider>
      </AuthContext.Provider>
    </ApolloProvider>
  );
}

export default App;

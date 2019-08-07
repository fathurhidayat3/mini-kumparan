// @flow

import * as React from 'react';

import {ApolloProvider} from 'react-apollo';

import 'antd/dist/antd.css';

import apolloClient from './graphql/apolloClient';
import Routes from './Routes';

import AuthContext from './contexts/AuthContext';
import FilterContext from './contexts/FilterContext';

function App() {
  const [userData, setUserdata] = React.useState({});
  const [filterData, setFilterData] = React.useState({
    category: '',
    keyword: '',
  });

  React.useEffect(() => {
    // $FlowFixMe
    const savedUserData = JSON.parse(localStorage.getItem('user-data'));

    setUserdata(savedUserData);
  }, []);

  return (
    <ApolloProvider client={apolloClient}>
      <AuthContext.Provider
        value={{
          userdata: userData,
          setUserdata,
        }}>
        <FilterContext.Provider value={{filterData, setFilterData}}>
          <Routes />
        </FilterContext.Provider>
      </AuthContext.Provider>
    </ApolloProvider>
  );
}

export default App;

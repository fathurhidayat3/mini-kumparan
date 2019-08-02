// @flow

import * as React from 'react';

import {ApolloProvider} from 'react-apollo';

import 'antd/dist/antd.css';

import apolloConfig from './graphql/apolloConfig';
import Routes from './Routes';

import AuthContext from './contexts/AuthContext';
import FilterContext from './contexts/FilterContext';

const client = apolloConfig;

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
    <ApolloProvider client={client}>
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

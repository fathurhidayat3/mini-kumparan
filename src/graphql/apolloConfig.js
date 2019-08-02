// @flow

import ApolloClient from 'apollo-boost';

export default new ApolloClient({
  // $FlowFixMe
  uri: `${process.env.REACT_APP_GQL_URL}/graphql`,
  request: async operation => {
    // $FlowFixMe
    const userData = JSON.parse(localStorage.getItem('user-data'));

    operation.setContext({
      headers: {
        Authorization: userData ? `Bearer ${userData.token}` : '',
      },
    });
  },
});

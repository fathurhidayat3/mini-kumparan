// @flow

import {HttpLink} from 'apollo-link-http';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {setContext} from 'apollo-link-context';
import {ApolloLink} from 'apollo-link';

const cache = new InMemoryCache();

// $FlowFixMe
const url: string = (`${process.env.REACT_APP_GQL_URL}/graphql`: any);

// eslint-disable-next-line consistent-return
const authLink = setContext((_, {headers}) => {
  // $FlowFixMe
  const userData = JSON.parse(localStorage.getItem('user-data'));

  const token = userData.token;
  const otherHeaders = {};
  if (token) {
    otherHeaders.Authorization = userData ? `Bearer ${userData.token}` : '';
  }
  return {
    headers: {
      ...headers,
      ...otherHeaders,
    },
  };
});

const httpLink = new HttpLink({
  uri: url,
});

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([authLink, httpLink]),
  resolvers: {},
});

export default client;

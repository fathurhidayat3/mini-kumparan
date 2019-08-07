// @flow

import {HttpLink} from 'apollo-link-http';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {setContext} from 'apollo-link-context';
import {ApolloLink} from 'apollo-link';
import {onError} from 'apollo-link-error';

// eslint-disable-next-line consistent-return
const authLink = setContext((_, {headers}) => {
  // $FlowFixMe
  const userData = JSON.parse(localStorage.getItem('user-data'));
  const token = userData && userData.token;

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const errorLink = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors)
    graphQLErrors.map(({message, locations, path}) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const cache = new InMemoryCache();
const httpLink = new HttpLink({
  // $FlowFixMe
  uri: `${process.env.REACT_APP_GQL_URL}/graphql`,
});

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([errorLink, authLink, httpLink]),
});

export default client;

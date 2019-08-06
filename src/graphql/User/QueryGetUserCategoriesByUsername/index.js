// @flow

import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import type {
  QueryGetUserCategoriesByUsername,
  QueryGetUserCategoriesByUsernameVariables,
} from '../../types';

const query = gql`
  query QueryGetUserCategoriesByUsername($username: String!) {
    GetUserCategoriesByUsername(username: $username) {
      username
      categoryname
      categoryslug
    }
  }
`;

class QueryGetUserCategoriesByUsernameComp extends Query<
  QueryGetUserCategoriesByUsername,
  QueryGetUserCategoriesByUsernameVariables
> {
  static query = query;
}

export default QueryGetUserCategoriesByUsernameComp;

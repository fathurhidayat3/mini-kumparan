// @flow

import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import type {
  QueryGetUserCategoriesByUsername,
  QueryGetUserCategoriesByUsernameVariables,
} from '../../types';

const query = gql`
  query QueryGetUserCategoriesByUsername(
    $userId: String!
    $limit: Int!
    $offset: Int!
  ) {
    GetUserCategoriesByUsername(
      userId: $userId
      limit: $limit
      offset: $offset
    ) {
      categoryId
      categoryname
      categoryslug
    }
  }
`;

class QueryDashboardCategoriesComp extends Query<
  QueryGetUserCategoriesByUsername,
  QueryGetUserCategoriesByUsernameVariables
> {
  static query = query;
}

export default QueryDashboardCategoriesComp;

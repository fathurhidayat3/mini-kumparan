// @flow

import {Query} from 'react-apollo';
import gql from 'graphql-tag';

const query = gql`
  query QueryGetUserCategoriesByUsername($username: String!) {
    GetUserCategoriesByUsername(username: $username) {
      username
      categoryname
      categoryslug
    }
  }
`;

class QueryDashboardCategories extends Query<> {
  static query = query;
}

export default QueryDashboardCategories;

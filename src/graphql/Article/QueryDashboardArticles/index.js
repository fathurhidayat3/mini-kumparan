// @flow

import {Query} from 'react-apollo';
import gql from 'graphql-tag';

const query = gql`
  query QueryDashboardArticles(
    $keyword: String!
    $category: String!
    $status: String!
  ) {
    DashboardArticles(keyword: $keyword, category: $category, status: $status) {
      id
      title
      body
      categories
      status
      slug
      thumbnail
    }
  }
`;

class QueryDashboardArticles extends Query<> {
  static query = query;
}

export default QueryDashboardArticles;

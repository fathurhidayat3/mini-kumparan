// @flow

import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import type {
  QueryDashboardArticles,
  QueryDashboardArticlesVariables,
} from '../../types';

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
      createdAt
      updatedAt
    }
  }
`;

class QueryDashboardArticlesComp extends Query<
  QueryDashboardArticles,
  QueryDashboardArticlesVariables
> {
  static query = query;
}

export default QueryDashboardArticlesComp;

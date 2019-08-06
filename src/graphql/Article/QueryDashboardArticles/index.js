// @flow

import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import {ArticleParts} from '../../fragments/FragmentArticle';
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
      ...ArticleParts
      body
      status
      updatedAt
      categories
    }
  }
  ${ArticleParts}
`;

class QueryDashboardArticlesComp extends Query<
  QueryDashboardArticles,
  QueryDashboardArticlesVariables
> {
  static query = query;
}

export default QueryDashboardArticlesComp;

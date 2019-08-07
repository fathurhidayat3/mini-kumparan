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
    $limit: Int!
    $offset: Int!
  ) {
    DashboardArticles(
      keyword: $keyword
      category: $category
      status: $status
      limit: $limit
      offset: $offset
    ) {
      ...ArticleParts
      body
      status
      updatedAt
      categories {
        userId
        categoryId
        categoryname
        categoryslug
      }
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

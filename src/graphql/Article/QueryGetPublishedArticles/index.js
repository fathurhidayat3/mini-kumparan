// @flow

import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import {ArticleParts} from '../../fragments/FragmentArticle';
import type {
  QueryGetPublishedArticlesByCategory,
  QueryGetPublishedArticlesByCategoryVariables,
} from '../../types';

const query = gql`
  query QueryGetPublishedArticlesByCategory(
    $category: String!
    $offset: Int!
    $limit: Int!
  ) {
    GetPublishedArticlesByCategory(
      category: $category
      offset: $offset
      limit: $limit
    ) {
      ...ArticleParts
    }
  }
  ${ArticleParts}
`;

class QueryGetPublishedArticles extends Query<
  QueryGetPublishedArticlesByCategory,
  QueryGetPublishedArticlesByCategoryVariables
> {
  static query = query;
}

export default QueryGetPublishedArticles;

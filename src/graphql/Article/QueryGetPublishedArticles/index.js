// @flow

import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import type {
  QueryGetPublishedArticlesByCategory,
  QueryGetPublishedArticlesByCategoryVariables,
} from '../../types';

const query = gql`
  query QueryGetPublishedArticlesByCategory($category: String!) {
    GetPublishedArticlesByCategory(category: $category) {
      id
      title
      slug
      thumbnail
      createdAt
      totalComments
      user {
        fullname
      }
    }
  }
`;

class QueryGetPublishedArticles extends Query<
  QueryGetPublishedArticlesByCategory,
  QueryGetPublishedArticlesByCategoryVariables
> {
  static query = query;
}

export default QueryGetPublishedArticles;

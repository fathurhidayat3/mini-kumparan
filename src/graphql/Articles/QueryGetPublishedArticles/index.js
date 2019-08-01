// @flow

import {Query} from 'react-apollo';
import gql from 'graphql-tag';

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

class QueryGetPublishedArticles extends Query<> {
  static query = query;
}

export default QueryGetPublishedArticles;

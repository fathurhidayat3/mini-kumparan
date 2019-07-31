// @flow

import {Query} from 'react-apollo';
import gql from 'graphql-tag';

const query = gql`
  query QueryGetPublishedArticleBySlug($slug: String!) {
    GetPublishedArticleBySlug(slug: $slug) {
      id
      title
      slug
      body
      thumbnail
      status
      createdAt
      updatedAt
      categories
      user {
        fullName
      }
    }
  }
`;

class QueryGetPublishedArticleBySlug extends Query<> {
  static query = query;
}

export default QueryGetPublishedArticleBySlug;

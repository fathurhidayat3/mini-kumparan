// @flow

import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import type {
  QueryGetPublishedArticleBySlug,
  QueryGetPublishedArticleBySlugVariables,
} from '../../types';

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
        username
        fullname
      }
      totalComments
      comments {
        fullname
        message
      }
    }
  }
`;

class QueryGetPublishedArticleBySlugComp extends Query<
  QueryGetPublishedArticleBySlug,
  QueryGetPublishedArticleBySlugVariables
> {
  static query = query;
}

export default QueryGetPublishedArticleBySlugComp;

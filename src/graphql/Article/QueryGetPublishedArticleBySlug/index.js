// @flow

import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import {ArticleParts} from '../../fragments/FragmentArticle';
import type {
  QueryGetPublishedArticleBySlug,
  QueryGetPublishedArticleBySlugVariables,
} from '../../types';

const query = gql`
  query QueryGetPublishedArticleBySlug($slug: String!) {
    GetPublishedArticleBySlug(slug: $slug) {
      ...ArticleParts
      body
      status
      updatedAt
      categories
      user {
        username
        fullname
      }
      comments {
        fullname
        message
      }
    }
  }
  ${ArticleParts}
`;

class QueryGetPublishedArticleBySlugComp extends Query<
  QueryGetPublishedArticleBySlug,
  QueryGetPublishedArticleBySlugVariables
> {
  static query = query;
}

export default QueryGetPublishedArticleBySlugComp;

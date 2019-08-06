// @flow

import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import type {
  QueryFindPublishedArticles,
  QueryFindPublishedArticlesVariables,
} from '../../types';

const query = gql`
  query QueryFindPublishedArticles($keyword: String!) {
    FindPublishedArticles(keyword: $keyword) {
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

class QueryFindPublishedArticlesComp extends Query<
  QueryFindPublishedArticles,
  QueryFindPublishedArticlesVariables
> {
  static query = query;
}

export default QueryFindPublishedArticlesComp;

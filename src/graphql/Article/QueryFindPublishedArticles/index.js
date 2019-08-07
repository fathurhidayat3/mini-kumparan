// @flow

import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import {ArticleParts} from '../../fragments/FragmentArticle';
import type {
  QueryFindPublishedArticles,
  QueryFindPublishedArticlesVariables,
} from '../../types';

const query = gql`
  query QueryFindPublishedArticles(
    $keyword: String!
    $limit: Int!
    $offset: Int!
  ) {
    FindPublishedArticles(keyword: $keyword, limit: $limit, offset: $offset) {
      ...ArticleParts
    }
  }
  ${ArticleParts}
`;

class QueryFindPublishedArticlesComp extends Query<
  QueryFindPublishedArticles,
  QueryFindPublishedArticlesVariables
> {
  static query = query;
}

export default QueryFindPublishedArticlesComp;

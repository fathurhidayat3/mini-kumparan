// @flow

import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import {ArticleParts} from '../../fragments/FragmentArticle';
import type {
  QueryProfileArticles,
  QueryProfileArticlesVariables,
} from '../../types';

const query = gql`
  query QueryProfileArticles($username: String!, $category: String!) {
    ProfileArticles(username: $username, category: $category) {
      articles {
        ...ArticleParts
        body
        status
        user {
          userId
          username
          fullname
        }
      }
      user {
        username
        fullname
      }
    }
  }
  ${ArticleParts}
`;

class QueryGetProfileArticlesComp extends Query<
  QueryProfileArticles,
  QueryProfileArticlesVariables
> {
  static query = query;
}

export default QueryGetProfileArticlesComp;

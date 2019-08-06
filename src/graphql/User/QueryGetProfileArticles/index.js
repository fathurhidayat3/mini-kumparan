// @flow

import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import type {
  QueryProfileArticles_ProfileArticles,
  QueryProfileArticlesVariables,
} from '../../types';

const query = gql`
  query QueryProfileArticles($username: String!, $category: String!) {
    ProfileArticles(username: $username, category: $category) {
      articles {
        id
        title
        body
        status
        slug
        createdAt
        thumbnail
        totalComments
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
`;

class QueryGetProfileArticlesComp extends Query<
  QueryProfileArticles_ProfileArticles,
  QueryProfileArticlesVariables
> {
  static query = query;
}

export default QueryGetProfileArticlesComp;

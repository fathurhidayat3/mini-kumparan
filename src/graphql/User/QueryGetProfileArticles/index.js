// @flow

import {Query} from 'react-apollo';
import gql from 'graphql-tag';

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

class QueryGetProfileArticles extends Query<> {
  static query = query;
}

export default QueryGetProfileArticles;

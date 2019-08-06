// @flow

import gql from 'graphql-tag';

export const ArticleParts = gql`
  fragment ArticleParts on Article {
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
`;

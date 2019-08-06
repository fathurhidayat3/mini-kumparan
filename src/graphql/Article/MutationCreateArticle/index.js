// @flow

import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import type {
  QCreateArticle_CreateArticle,
  QCreateArticleVariables,
} from '../../types';

const mutation = gql`
  mutation QCreateArticle(
    $username: String!
    $title: String!
    $body: String!
    $slug: String!
    $status: String!
    $thumbnail: String!
    $categories: [String]!
  ) {
    CreateArticle(
      article: {
        username: $username
        title: $title
        body: $body
        slug: $slug
        status: $status
        thumbnail: $thumbnail
        categories: $categories
      }
    ) {
      id
      title
      body
      slug
      thumbnail
    }
  }
`;

class MutationCreateArticle extends Mutation<
  QCreateArticle_CreateArticle,
  QCreateArticleVariables
> {
  static mutation = mutation;
}

export default MutationCreateArticle;

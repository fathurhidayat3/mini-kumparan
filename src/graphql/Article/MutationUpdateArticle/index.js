// @flow

import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import type {
  MutationUpdateArticle_UpdateArticle,
  MutationUpdateArticleVariables,
} from '../../types';

const mutation = gql`
  mutation MutationUpdateArticle(
    $title: String!
    $slug: String!
    $body: String!
    $status: String!
    $username: String!
    $categories: [String]!
    $thumbnail: String!
    $id: String!
  ) {
    UpdateArticle(
      article: {
        title: $title
        slug: $slug
        body: $body
        status: $status
        username: $username
        categories: $categories
        thumbnail: $thumbnail
        id: $id
      }
    ) {
      title
      slug
      body
      status
      categories
      userId
      id
      createdAt
      updatedAt
    }
  }
`;

class MutationUpdateArticle extends Mutation<
  MutationUpdateArticle_UpdateArticle,
  MutationUpdateArticleVariables
> {
  static mutation = mutation;
}

export default MutationUpdateArticle;

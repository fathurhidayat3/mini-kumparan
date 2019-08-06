// @flow

import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import {ArticleParts} from '../../fragments/FragmentArticle';
import type {
  MutationUpdateArticle,
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
      ...ArticleParts
      body
      status
      userId
      updatedAt
    }
  }
  ${ArticleParts}
`;

class MutationUpdateArticleComp extends Mutation<
  MutationUpdateArticle,
  MutationUpdateArticleVariables
> {
  static mutation = mutation;
}

export default MutationUpdateArticleComp;

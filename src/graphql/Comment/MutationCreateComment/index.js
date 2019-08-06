// @flow

import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import type {
  MutationCreateComment,
  MutationCreateCommentVariables,
} from '../../types';

const mutation = gql`
  mutation MutationCreateComment(
    $articleID: String!
    $fullname: String!
    $username: String!
    $message: String!
  ) {
    CreateComment(
      comment: {
        articleID: $articleID
        fullname: $fullname
        message: $message
        username: $username
      }
    ) {
      message
      articleID
    }
  }
`;

class MutationCreateCommentComp extends Mutation<
  MutationCreateComment,
  MutationCreateCommentVariables
> {
  static mutation = mutation;
}

export default MutationCreateCommentComp;

// @flow

import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import type {
  MutationCreateUserCategory_CreateUserCategory,
  MutationCreateUserCategoryVariables,
} from '../../types';

const mutation = gql`
  mutation MutationCreateUserCategory(
    $username: String!
    $categoryname: String!
    $categoryslug: String!
  ) {
    CreateUserCategory(
      category: {
        username: $username
        categoryname: $categoryname
        categoryslug: $categoryslug
      }
    ) {
      username
      categoryname
    }
  }
`;

class MutationCreateUserCategory extends Mutation<
  MutationCreateUserCategory_CreateUserCategory,
  MutationCreateUserCategoryVariables
> {
  static mutation = mutation;
}

export default MutationCreateUserCategory;

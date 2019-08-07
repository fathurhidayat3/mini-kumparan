// @flow

import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import type {
  MutationCreateUserCategory_CreateUserCategory,
  MutationCreateUserCategoryVariables,
} from '../../types';

const mutation = gql`
  mutation MutationCreateUserCategory(
    $userId: String!
    $categoryname: String!
    $categoryslug: String!
  ) {
    CreateUserCategory(
      category: {
        userId: $userId
        categoryname: $categoryname
        categoryslug: $categoryslug
      }
    ) {
      categoryId
      categoryname
      categoryslug
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

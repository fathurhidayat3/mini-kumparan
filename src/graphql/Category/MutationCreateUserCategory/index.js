// @flow

import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';

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

class MutationCreateUserCategory extends Mutation {
  static mutation = mutation;
}

export default MutationCreateUserCategory;

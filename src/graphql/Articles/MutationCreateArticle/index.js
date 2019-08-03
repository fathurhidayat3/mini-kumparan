// @flow

import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';

const mutation = gql`
  mutation QCreateArticle(
    $username: String!
    $title: String!
    $body: String!
    $slug: String!
    $status: String!
  ) {
    CreateArticle(
      article: {
        username: $username
        title: $title
        body: $body
        slug: $slug
        status: $status
        thumbnail: "https://pbs.twimg.com/media/EAKLX0bUYAAOMMT.jpg"
        categories: ["POLITIK", "OTOMOTIF"]
      }
    ) {
      id
      title
      thumbnail
    }
  }
`;

class MutationCreateArticle extends Mutation {
  static mutation = mutation;
}

export default MutationCreateArticle;

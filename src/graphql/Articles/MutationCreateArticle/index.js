// @flow

import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';

const mutation = gql`
  mutation QCreateArticle($title: String!, $body: String!, $slug: String!) {
    CreateArticle(
      article: {
        title: $title
        body: $body
        status: "DRAFT"
        userId: "94237f27-aed7-4390-b3bd-80aadcb974ba"
        slug: $slug
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

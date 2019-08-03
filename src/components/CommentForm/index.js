// @flow

import React from 'react';
import {Form, Input, Button} from 'antd';
import gql from 'graphql-tag';
import {Mutation} from 'react-apollo';

import QueryGetPublishedArticleBySlug from '../../graphql/Article/QueryGetPublishedArticleBySlug';

const {TextArea} = Input;

const CREATE_COMMENT = gql`
  mutation QCreateComment(
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

function CommentForm(props: any) {
  const {
    onChange,
    onSubmit,
    submitting,
    value,
    userData,
    setEditorState,
    dataDetail,
    slug,
  } = props;

  return (
    <Mutation
      mutation={CREATE_COMMENT}
      variables={{
        articleID: dataDetail.id,
        fullname: userData.fullname,
        username: userData.username,
        message: value,
      }}
      // onCompleted={() => setEditorState('')}
      refetchQueries={[
        {
          query: QueryGetPublishedArticleBySlug.query,
          variables: {slug},
        },
      ]}>
      {CreateComment => (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            marginTop: 16,
          }}>
          {/* {console.log(CreateComment)} */}
          <Form.Item style={{width: '100%'}}>
            <TextArea
              rows={4}
              onChange={onChange}
              value={value}
              style={{padding: 16, width: '100%'}}
            />
          </Form.Item>

          <Form.Item>
            <Button
              htmlType="submit"
              // loading={submitting}
              onClick={CreateComment}
              type="primary">
              Add Comment
            </Button>
          </Form.Item>
        </div>
      )}
    </Mutation>
  );
}

export default CommentForm;
